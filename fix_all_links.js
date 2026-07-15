const fs = require('fs');
const path = require('path');

const directoryPath = __dirname;

const simpleMappings = {
    'https://ravigas.in/': 'index.html',
    'https://ravigas.in': 'index.html',
    '/': 'index.html',
    '/about-us/': 'about.html',
    'https://ravigas.in/about-us/': 'about.html',
    'https://promo-theme.comabout.html': 'about.html',
    'https://ravigas.in/domestic/': 'domestic.html',
    'https://ravigas.in/why-lpg/': 'why-lpg.html',
    'https://ravigas.in/our-products/': 'our-products.html',
    'https://ravigas.in/industrial/': 'industrial.html',
    'https://ravigas.in/bmcg/': 'bmcg.html',
    'https://ravigas.in/lpg-uses/': 'lpg-uses.html',
    'https://ravigas.in/our-fleet/': 'our-fleet.html',
    'https://ravigas.in/safety/': 'safety.html',
    'https://ravigas.in/contact/': 'contact.html',
    '/fuelgize/contact/': 'contact.html',
    'https://promo-theme.comcontact.html': 'contact.html',
    'https://ravigas.in/blog-sidebar/': 'index.html',
    'https://ravigas.in/services/': '#'
};

fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    
    files.forEach(function (file) {
        // Only process root html files
        if (file.endsWith('.html')) {
            let content = fs.readFileSync(file, 'utf8');
            let originalContent = content;
            
            // First pass: replace simple mappings in href
            for (let [from, to] of Object.entries(simpleMappings)) {
                let escapeFrom = from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                // Ensure we exactly match the href value
                let regex = new RegExp(`href=["']${escapeFrom}["']`, 'g');
                content = content.replace(regex, `href="${to}"`);
            }

            // Second pass: handle #contact-us based on inner text
            const aTagRegex = /<a([^>]*)href=["']#contact-us["']([^>]*)>([\s\S]*?)<\/a>/gi;
            content = content.replace(aTagRegex, (match, beforeHref, afterHref, innerHtml) => {
                let lowerText = innerHtml.toLowerCase();
                let toUrl = 'contact.html';
                
                if (lowerText.includes('book cylinder') || 
                    lowerText.includes('get connection') || 
                    lowerText.includes('book now') || 
                    lowerText.includes('get quote')) {
                    toUrl = 'get-new-connection.html';
                }
                
                return `<a${beforeHref}href="${toUrl}"${afterHref}>${innerHtml}</a>`;
            });
            
            // Third pass: fix any leftover href="https://promo-theme.comcontact.html" missed by regex if missing quotes
            content = content.replace(/https:\/\/promo-theme\.comcontact\.html/g, 'contact.html');
            content = content.replace(/https:\/\/promo-theme\.comabout\.html/g, 'about.html');
            
            if (content !== originalContent) {
                fs.writeFileSync(file, content, 'utf8');
                console.log(`Successfully fixed links in ${file}`);
            }
        }
    });
    console.log('Finished processing all links.');
});
