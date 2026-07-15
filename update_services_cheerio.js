const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('index.html', 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

const services = $('.pt-services.layout-grid .pt-service');

if (services.length >= 3) {
    // 1. Domestic
    const s1 = $(services[0]);
    s1.find('.pt-service-image img').attr('src', 'images/service-domestic.png').attr('alt', 'Domestic LPG');
    s1.find('.pt-service-title a').text('LPG for Domestic Purpose').attr('href', 'domestic.html');
    if (s1.find('.pt-service-text').length === 0) {
        $('<div class="pt-service-text" style="color: #ffffff; font-size: 14px; line-height: 1.5; margin-top: 10px; margin-bottom: 15px; font-family: \'Inter\', sans-serif;">At RAVI GAS SERVICE, through all of our Gurugram activities we believe in providing comfort to customers. With that in mind, we launched \'Beyond LPG\' in 2004.</div>').insertAfter(s1.find('.pt-service-title'));
    }
    s1.find('.pt-service-button a span').text('Read More');
    s1.find('.pt-service-button a').attr('href', 'domestic.html');
    s1.find('.pt-service-link').attr('href', 'domestic.html');
    // Add gradient background to caption for readability
    s1.find('.pt-service-caption').attr('style', 'bottom: 0; background: linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0)); padding: 25px;');

    // 2. Industrial
    const s2 = $(services[1]);
    s2.find('.pt-service-image img').attr('src', 'images/service-industrial.png').attr('alt', 'Industrial LPG');
    s2.find('.pt-service-title a').text('LPG For Industrial Purpose').attr('href', 'industrial.html');
    if (s2.find('.pt-service-text').length === 0) {
        $('<div class="pt-service-text" style="color: #ffffff; font-size: 14px; line-height: 1.5; margin-top: 10px; margin-bottom: 15px; font-family: \'Inter\', sans-serif;">LPG (Liquefied Petroleum Gas) can indeed be a viable and efficient fuel option for various industrial uses. Here are some reasons why LPG is considered.</div>').insertAfter(s2.find('.pt-service-title'));
    }
    s2.find('.pt-service-button a span').text('Read More');
    s2.find('.pt-service-button a').attr('href', 'industrial.html');
    s2.find('.pt-service-link').attr('href', 'industrial.html');
    s2.find('.pt-service-caption').attr('style', 'bottom: 0; background: linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0)); padding: 25px;');

    // 3. Commercial
    const s3 = $(services[2]);
    s3.find('.pt-service-image img').attr('src', 'images/service-commercial.png').attr('alt', 'Commercial LPG');
    s3.find('.pt-service-title a').text('LPG for Commercial Purpose').attr('href', 'bmcg.html');
    if (s3.find('.pt-service-text').length === 0) {
        $('<div class="pt-service-text" style="color: #ffffff; font-size: 14px; line-height: 1.5; margin-top: 10px; margin-bottom: 15px; font-family: \'Inter\', sans-serif;">Commercial usage of LPG gas (Liquefied Petroleum Gas) is quite common and widespread. LPG is a versatile and convenient fuel source that finds.</div>').insertAfter(s3.find('.pt-service-title'));
    }
    s3.find('.pt-service-button a span').text('Read More');
    s3.find('.pt-service-button a').attr('href', 'bmcg.html');
    s3.find('.pt-service-link').attr('href', 'bmcg.html');
    s3.find('.pt-service-caption').attr('style', 'bottom: 0; background: linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0)); padding: 25px;');

    fs.writeFileSync('index.html', $.html());
    console.log('Successfully updated services section using cheerio');
} else {
    console.log('Could not find enough services blocks');
}
