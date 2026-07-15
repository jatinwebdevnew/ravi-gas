const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('index.html', 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

// Find the About Us heading
const aboutUsHeading = $('.pt-heading-title:contains("Now Bharatagas Booking made Simpler")');

if (aboutUsHeading.length > 0) {
    // 1. Update Title
    aboutUsHeading.text('About us Ravi Gas Service');

    // 2. Update Subtitle
    const subtitle = aboutUsHeading.siblings('.pt-heading-subtitle').find('span');
    if (subtitle.length > 0) {
        subtitle.text('GURUGRAM`S TRUSTED LPG COMPANY');
    }

    // 3. Update Text Content
    // The text is in the next elementor-widget-text-editor
    // It's in the same parent column. Let's find the text-editor in the parent structure.
    const textEditor = aboutUsHeading.closest('.elementor-widget-pt-heading').next('.elementor-widget-text-editor');
    if (textEditor.length > 0) {
        textEditor.find('p').text("We are a professionally managed LPG Distributorship of Bharat Petroleum Corporation Limited focused primarily on Domestic and Commercial LPG Sales. We are a team of vibrant and young professionals who are transforming the LPG business in and around Gurugram. Our company is a natural choice for LPG gas cylinders for Domestic as well as Industrial use by all forward looking, smart companies. From our inception in 2004 we have earned the reputation of being a highly reliable provider of Domestic and Commercial gas cylinders provider of Gurugram. In a short span of time we have never heard of performance figures of LPG Distribution Industry and became one of the largest Domestic and commercial LPG distributors of BPCL. We have a team of professionals who are engaged with Diesel to LPG conversion in Gurugram and adjoining Districts.");
    }

    // 4. Update Images
    // The images are in the next column: .elementor-element-c36cdc9
    const imageColumn = aboutUsHeading.closest('.elementor-element-b8c1540').next('.elementor-element-c36cdc9');
    if (imageColumn.length > 0) {
        // Find the first image and replace it
        const firstImg = imageColumn.find('.elementor-widget-image img').first();
        if (firstImg.length > 0) {
            firstImg.attr('src', 'images/products-range.jpg');
            // Remove the second small floating image as the reference only has one clean image
            const secondImgWidget = imageColumn.find('.elementor-element-30f7308');
            if (secondImgWidget.length > 0) {
                secondImgWidget.remove();
            }
            
            // Add a subtle border to the image to match the reference style
            firstImg.attr('style', 'border: 1px solid #0077d4; border-radius: 4px; padding: 10px; background: #fff;');
        }
    }

    fs.writeFileSync('index.html', $.html());
    console.log('Successfully updated About Us section');
} else {
    console.log('Could not find About Us section');
}
