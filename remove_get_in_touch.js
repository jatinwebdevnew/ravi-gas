const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('index.html', 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

const section = $('.elementor-element-1a69f93');

if (section.length > 0) {
    section.remove();
    fs.writeFileSync('index.html', $.html());
    console.log('Successfully removed the "Get in Touch" section (1a69f93)');
} else {
    console.log('Could not find the "Get in Touch" section');
}
