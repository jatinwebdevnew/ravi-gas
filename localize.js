const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');
const { URL } = require('url');

const downloadFile = (url, filepath) => {
    return new Promise((resolve, reject) => {
        if (fs.existsSync(filepath)) {
            return resolve(filepath); // Skip if already downloaded
        }
        
        fs.mkdirSync(path.dirname(filepath), { recursive: true });
        
        const file = fs.createWriteStream(filepath);
        const client = url.startsWith('https') ? https : http;
        
        client.get(url, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                // handle redirect
                let redirectUrl = res.headers.location;
                if (!redirectUrl.startsWith('http')) {
                    redirectUrl = new URL(redirectUrl, url).href;
                }
                return downloadFile(redirectUrl, filepath).then(resolve).catch(reject);
            }
            if (res.statusCode !== 200) {
                return reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
            }
            res.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', (err) => {
            fs.unlink(filepath, () => reject(err));
        });
    });
};

const getExtension = (url) => {
    try {
        let pathname = new URL(url).pathname;
        let ext = path.extname(pathname);
        if (!ext && url.includes('fonts.googleapis.com')) return '.css';
        return ext.split('?')[0].split('#')[0];
    } catch (e) {
        return '';
    }
};

const processCss = async (cssContent, baseUrl) => {
    const urlRegex = /url\(['"]?(https?:\/\/[^'"\)]+)['"]?\)/g;
    let match;
    let newCss = cssContent;
    const downloads = [];

    while ((match = urlRegex.exec(cssContent)) !== null) {
        const fullUrl = match[1];
        let ext = getExtension(fullUrl);
        let folder = 'images';
        if (ext.match(/\.(woff2?|eot|ttf|otf)$/i)) folder = 'fonts';
        
        const filename = path.basename(new URL(fullUrl).pathname).split('?')[0] || `asset_${Date.now()}${ext}`;
        const relativePath = `../${folder}/${filename}`;
        const localPath = path.join(__dirname, folder, filename);
        
        downloads.push(downloadFile(fullUrl, localPath));
        newCss = newCss.replace(fullUrl, relativePath);
    }
    
    await Promise.all(downloads);
    return newCss;
};

const main = async () => {
    const htmlPath = path.join(__dirname, 'index.html');
    let html = fs.readFileSync(htmlPath, 'utf8');

    // Regexes for HTML
    const linkRegex = /<link[^>]+href=['"](https?:\/\/[^'"]+)['"][^>]*>/gi;
    const scriptRegex = /<script[^>]+src=['"](https?:\/\/[^'"]+)['"][^>]*>/gi;
    const imgRegex = /<img[^>]+src=['"](https?:\/\/[^'"]+)['"][^>]*>/gi;
    const styleUrlRegex = /url\(['"]?(https?:\/\/[^'"\)]+)['"]?\)/gi;

    const replaceAndDownload = async (regex, typeFolder) => {
        const matches = [...html.matchAll(regex)];
        for (const match of matches) {
            const fullTag = match[0];
            const url = match[1];
            
            // Skip canonical links or preconnects if needed, but let's just download everything for now
            if (fullTag.includes('rel="canonical"') || fullTag.includes('rel="preconnect"')) continue;
            
            let ext = getExtension(url);
            let folder = typeFolder;
            if (ext === '.css') folder = 'css';
            else if (ext === '.js') folder = 'js';
            else if (folder === 'assets') { // fallback
                if (ext.match(/\.(png|jpe?g|gif|svg|webp)$/i)) folder = 'images';
                else if (ext.match(/\.(woff2?|eot|ttf|otf)$/i)) folder = 'fonts';
            }
            
            // Special handling for google fonts
            if (url.includes('fonts.googleapis.com')) folder = 'css';
            
            const filename = path.basename(new URL(url).pathname).split('?')[0] || `asset_${Date.now()}${ext || '.bin'}`;
            const localPath = path.join(__dirname, folder, filename);
            const relativePath = `${folder}/${filename}`;
            
            console.log(`Downloading ${url} -> ${relativePath}`);
            try {
                await downloadFile(url, localPath);
                
                // If it's a CSS file, we need to process internal urls
                if (folder === 'css') {
                    let cssContent = fs.readFileSync(localPath, 'utf8');
                    cssContent = await processCss(cssContent, url);
                    fs.writeFileSync(localPath, cssContent);
                }
                
                html = html.replace(url, relativePath);
            } catch (err) {
                console.error(`Error downloading ${url}`, err);
            }
        }
    };

    console.log("Processing links...");
    await replaceAndDownload(linkRegex, 'css');
    console.log("Processing scripts...");
    await replaceAndDownload(scriptRegex, 'js');
    console.log("Processing images...");
    await replaceAndDownload(imgRegex, 'images');
    console.log("Processing inline styles...");
    await replaceAndDownload(styleUrlRegex, 'assets');

    fs.writeFileSync(htmlPath, html);
    console.log("Done! index.html updated.");
};

main().catch(console.error);
