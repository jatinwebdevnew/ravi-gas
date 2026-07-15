const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('index.html', 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

const section = $('#lpg-uses');

if (section.length > 0) {
    const inner = section.find('.e-con-inner');
    inner.empty();

    // Remove animation classes to ensure it shows immediately if elementor JS fails
    section.removeClass('elementor-invisible');

    const newContent = `
        <div class="pt-heading text-align-center" style="margin-bottom: 30px;">
            <h2 class="pt-heading-title h1" style="font-family: 'Thunder', 'Inter', sans-serif; font-size: 64px; font-weight: 700; text-transform: uppercase; color: #111;">
                OUR PRODUCTS RANGE
            </h2>
        </div>
        
        <p style="text-align: center; color: #555; font-size: 16px; line-height: 1.6; margin-bottom: 50px; font-family: 'Inter', sans-serif; max-width: 1000px; margin-left: auto; margin-right: auto;">
            Starting from a portable 5 kg cylinder, hugely popular 19 kg package, space saving 35 kg cylinders to the large 47.5 kg capacity cylinders to the Jumbo 422 Kg Hippo Cylinders Bharatgas comes in various packages. Bulk tankers of various capacities from 6 MT to 18 MT allows liberty to the customers to choose the package as per their requirement. The state of the art blending plant at JNPT enables Bharatgas to provide butane and propane separately resulting in enhanced end product performance for the customers needing them.
        </p>

        <div style="display: flex; flex-wrap: wrap; gap: 50px; align-items: center; max-width: 1200px; margin: 0 auto;">
            <div style="flex: 1 1 400px;">
                <img src="images/products-range.jpg" alt="Our Products Range" style="width: 100%; border: 2px solid #0077d4; border-radius: 4px; padding: 15px; background: #fff;" />
            </div>
            <div style="flex: 1 1 400px;">
                <p style="color: #555; font-size: 16px; line-height: 1.6; margin-bottom: 30px; font-family: 'Inter', sans-serif;">
                    These cylinders are used by majority for Industrial &amp; Commercial Sector. Ravi Gas Service is at advantage in terms of weight &amp; Prices as govt. subsidies are not applicable in these sections. We provide LPG which is much cleaner &amp; pocket friendly prices. This make us a leader in Domestic, Commercial &amp; Industrial Sector.
                </p>
                <div class="pt-service-button">
                    <a class="pt-button filled" href="our-products.html" style="background-color: #0056b3; border-color: #0056b3; padding: 12px 24px; border-radius: 30px;">
                        <span style="color: #fff; font-weight: 600;">VIEW MORE</span>
                    </a>
                </div>
            </div>
        </div>
        <div style="padding-bottom: 60px;"></div>
    `;
    
    // Some elementor flexbox resets just in case e-con-inner is display:flex by default
    inner.attr('style', 'display: block; width: 100%;');
    inner.html(newContent);

    fs.writeFileSync('index.html', $.html());
    console.log('Successfully replaced lpg-uses section with Our Products Range');
} else {
    console.log('Could not find lpg-uses section');
}
