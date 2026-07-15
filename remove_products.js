const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('index.html', 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

// Find the element with id="our-products" (or data-id="64bcad6")
const ourProductsSection = $('#our-products');

if (ourProductsSection.length > 0) {
    ourProductsSection.remove();
    fs.writeFileSync('index.html', $.html());
    console.log('Successfully removed the OUR PRODUCTS section');
} else {
    console.log('Could not find the OUR PRODUCTS section');
}
