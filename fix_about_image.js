const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('index.html', 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

let found = false;

$('img').each(function() {
    const src = $(this).attr('src');
    if (src && src.includes('products-range.jpg')) {
        console.log('Found image with src:', src);
        
        // Ensure the image scales correctly without cropping
        let currentStyle = $(this).attr('style') || '';
        $(this).attr('style', currentStyle + ' max-width: 100% !important; height: auto !important; object-fit: contain !important;');
        
        // Also remove any width/height attributes that might be forcing a crop
        $(this).removeAttr('width');
        $(this).removeAttr('height');
        
        // Also fix the parent container if it has a fixed height or object-fit constraints
        const parent = $(this).parent();
        parent.attr('style', (parent.attr('style') || '') + ' height: auto !important; width: 100% !important; display: block;');
        
        const widgetContainer = $(this).closest('.elementor-widget-container');
        widgetContainer.attr('style', (widgetContainer.attr('style') || '') + ' height: auto !important;');

        found = true;
    }
});

if (found) {
    fs.writeFileSync('index.html', $.html());
    console.log('Successfully updated image to be fully responsive without cropping');
} else {
    console.log('Could not find products-range.jpg');
}
