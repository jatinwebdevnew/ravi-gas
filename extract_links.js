const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('index.html', 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

let links = new Set();
$('a').each((i, el) => {
    let href = $(el).attr('href');
    if (href) {
        links.add(href);
    }
});

console.log(Array.from(links).sort());
