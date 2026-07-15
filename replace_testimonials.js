const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('index.html', 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

const section = $('.elementor-element-eb22312');

if (section.length > 0) {
    // Remove elementor-invisible to ensure it shows immediately
    section.removeClass('elementor-invisible');
    
    // Empty the e-con-inner and replace with our custom HTML
    const inner = section.find('> .e-con-inner');
    if (inner.length > 0) {
        inner.empty();
        
        // Remove padding from inner if any, to allow full width background
        inner.attr('style', 'display: block; width: 100%; padding: 0; max-width: 100%; margin: 0;');
        
        // Actually, to make the background full width, we should apply it to the parent section
        section.attr('style', 'max-width: 100%; padding: 0; margin: 0;');

        const customHTML = `
        <style>
        .custom-accordion-section {
            background-image: linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('images/ai_flame.png');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            padding: 80px 20px;
            width: 100%;
        }
        .custom-accordion-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            gap: 50px;
        }
        .custom-accordion-col {
            flex: 1 1 400px;
        }
        .custom-accordion-title {
            color: #fff;
            font-family: 'Inter', sans-serif;
            font-size: 28px;
            font-weight: 600;
            margin-bottom: 30px;
            text-transform: uppercase;
            text-align: center;
            letter-spacing: 1px;
        }
        .custom-details {
            background: #e9ecef;
            margin-bottom: 15px;
            border-radius: 4px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .custom-summary {
            padding: 18px 25px;
            font-family: 'Inter', sans-serif;
            font-size: 16px;
            font-weight: 700;
            color: #111;
            cursor: pointer;
            list-style: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: background 0.3s ease;
        }
        .custom-summary::-webkit-details-marker {
            display: none;
        }
        .custom-summary::after {
            content: '+';
            font-size: 24px;
            font-weight: 400;
            color: #111;
            line-height: 1;
        }
        .custom-details[open] .custom-summary::after {
            content: '-';
            font-size: 28px;
        }
        .custom-details[open] .custom-summary {
            background: #fff;
        }
        .custom-details[open] {
            background: #fff;
        }
        .custom-accordion-content {
            padding: 20px 25px 25px;
            font-family: 'Inter', sans-serif;
            font-size: 15px;
            line-height: 1.6;
            color: #333;
            border-top: 1px solid #eee;
        }
        </style>

        <div class="custom-accordion-section">
            <div class="custom-accordion-container">
                <!-- Left Col -->
                <div class="custom-accordion-col">
                    <div class="custom-accordion-title">INDUSTRIAL USAGE</div>
                    
                    <details class="custom-details" open>
                        <summary class="custom-summary">Textile Industry</summary>
                        <div class="custom-accordion-content">
                            Ravi Gas Service provides LPG Supply for your textile industry, LPG can be used in many applications in the industrial sector namely in space- and process-heating, powering industrial ovens, production of food, kilns, furnaces, production of packing material.
                        </div>
                    </details>
                    
                    <details class="custom-details">
                        <summary class="custom-summary">Automobile Industry</summary>
                        <div class="custom-accordion-content">
                            LPG is an excellent and efficient fuel for the automobile industry, providing cleaner emissions and cost-effective energy solutions for manufacturing and operations.
                        </div>
                    </details>

                    <details class="custom-details">
                        <summary class="custom-summary">Heavy load Industries</summary>
                        <div class="custom-accordion-content">
                            Ideal for heavy load industries requiring high-intensity heat and consistent energy supply. LPG offers unparalleled performance and reliability.
                        </div>
                    </details>
                </div>

                <!-- Right Col -->
                <div class="custom-accordion-col">
                    <div class="custom-accordion-title">COMMERCIAL USAGE</div>
                    
                    <details class="custom-details" open>
                        <summary class="custom-summary">Hotels</summary>
                        <div class="custom-accordion-content">
                            Ravi Gas Service offers product and services to Hotel industry keeping in mind consumer safety and saving in mind. We also offer high quality LPG Hose and fuel efficient hotplates.
                        </div>
                    </details>
                    
                    <details class="custom-details">
                        <summary class="custom-summary">Restaurants Hospitals</summary>
                        <div class="custom-accordion-content">
                            Ensuring continuous and safe LPG supply for commercial kitchens in restaurants and hospitals, adhering to the highest safety standards.
                        </div>
                    </details>

                    <details class="custom-details">
                        <summary class="custom-summary">Tea Kiosks</summary>
                        <div class="custom-accordion-content">
                            Cost-effective and highly portable LPG solutions perfectly suited for tea kiosks and small-scale commercial food vendors.
                        </div>
                    </details>
                </div>
            </div>
        </div>
        `;
        
        inner.html(customHTML);
    }
    
    fs.writeFileSync('index.html', $.html());
    console.log('Successfully replaced testimonials section with Usage Accordions');
} else {
    console.log('Could not find testimonials section (eb22312)');
}
