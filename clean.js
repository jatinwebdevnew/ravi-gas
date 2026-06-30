const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Remove srcset attributes entirely
html = html.replace(/srcset=['"][^'"]+['"]/gi, '');

// 2. Remove sizes attributes entirely
html = html.replace(/sizes=['"][^'"]+['"]/gi, '');

// 3. Replace any remaining promo-theme.com/fuelgize/wp-content/uploads/... with images/...
html = html.replace(/https:\\?\/\\?\/promo-theme\.com\\?\/fuelgize\\?\/wp-content\\?\/uploads\\?\/[0-9]{4}\\?\/[0-9]{2}\\?\//g, 'images/');
html = html.replace(/https:\/\/promo-theme\.com\/fuelgize\/wp-content\/uploads\/[0-9]{4}\/[0-9]{2}\//g, 'images/');

// 4. Replace other assets paths
html = html.replace(/https:\\?\/\\?\/promo-theme\.com\\?\/fuelgize\\?\/wp-content\\?\/plugins\\?[^"']+\\?\/assets\\?\/js\\?\//g, 'js/');
html = html.replace(/https:\/\/promo-theme\.com\/fuelgize\/wp-content\/plugins\/[^"']+\/assets\/js\//g, 'js/');

// 5. Remove link canonical and other meta links to promo-theme
html = html.replace(/<link[^>]+href=['"]https:\/\/promo-theme\.com[^>]*>/gi, '');
html = html.replace(/<link[^>]+href=['"]\/wp-json[^>]*>/gi, ''); // remove oembed links
html = html.replace(/<meta[^>]+content=['"]https:\/\/promo-theme\.com[^>]*>/gi, '');
html = html.replace(/<script type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi, '');

// 6. Any other https://promo-theme.com leftovers in data-popup-json, etc.
html = html.replace(/https:\\?\/\\?\/promo-theme\.com\\?\/fuelgize\\?\/pt-portfolio[^\s"'\\]+/g, '#');

// 7. General cleanup of any http/https in <link> and <script>
// Find any remaining http links and replace them with local if they exist, or just remove them.
html = html.replace(/<link[^>]+href=['"]https?:\/\/[^'"]+['"][^>]*>/gi, '');
html = html.replace(/<script[^>]+src=['"]https?:\/\/[^'"]+['"][^>]*>.*?<\/script>/gi, '');

// Finally, replace any remaining 'promo-theme.com' strings to ensure ZERO results
html = html.replace(/promo-theme\.com/g, 'localhost');

fs.writeFileSync('index.html', html);

// Process CSS files in css/
const cssDir = './css';
if (fs.existsSync(cssDir)) {
    const files = fs.readdirSync(cssDir);
    for (const file of files) {
        if (file.endsWith('.css')) {
            let cssPath = `${cssDir}/${file}`;
            let css = fs.readFileSync(cssPath, 'utf8');
            css = css.replace(/promo-theme\.com/g, 'localhost');
            fs.writeFileSync(cssPath, css);
        }
    }
}

console.log("Cleanup complete!");
