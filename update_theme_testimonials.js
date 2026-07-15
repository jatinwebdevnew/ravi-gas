const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('index.html', 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

const section = $('.elementor-element-eb22312');

if (section.length > 0) {
    const inner = section.find('> .e-con-inner');
    if (inner.length > 0) {
        // Clear previous styles from our last edit
        inner.attr('style', '');
        section.attr('style', '');

        const customHTML = `
        <style>
        .clean-section {
            padding: 80px 20px;
            width: 100%;
            background: #ffffff;
        }
        .clean-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            gap: 50px;
            align-items: flex-start;
        }
        .clean-col-image {
            flex: 1 1 450px;
        }
        .clean-col-accordions {
            flex: 1 1 500px;
        }
        .clean-main-heading {
            color: #111;
            font-family: 'Thunder', 'Inter', sans-serif;
            font-size: 54px;
            font-weight: 700;
            text-transform: uppercase;
            margin-bottom: 10px;
        }
        .clean-sub-heading {
            color: #f47b20;
            font-family: 'Inter', sans-serif;
            font-size: 16px;
            font-weight: 600;
            text-transform: uppercase;
            margin-bottom: 30px;
            letter-spacing: 1px;
        }
        .clean-accordion-title {
            color: #111;
            font-family: 'Thunder', 'Inter', sans-serif;
            font-size: 32px;
            font-weight: 700;
            margin-bottom: 20px;
            margin-top: 40px;
            text-transform: uppercase;
            text-align: left;
        }
        .clean-accordion-title:first-child {
            margin-top: 0;
        }
        .clean-details {
            background: #fff;
            margin-bottom: 10px;
            border: 1px solid #eee;
            border-radius: 4px;
        }
        .clean-summary {
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
            background: #fdfdfd;
            transition: all 0.3s ease;
        }
        .clean-summary:hover {
            color: #f47b20;
        }
        .clean-summary::-webkit-details-marker {
            display: none;
        }
        .clean-summary::after {
            content: '+';
            font-size: 24px;
            font-weight: 400;
            color: #f47b20;
        }
        .clean-details[open] .clean-summary::after {
            content: '-';
            font-size: 28px;
        }
        .clean-details[open] .clean-summary {
            background: #fff;
            color: #f47b20;
            border-bottom: 1px solid #eee;
        }
        .clean-details[open] {
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }
        .clean-accordion-content {
            padding: 20px 25px;
            font-family: 'Inter', sans-serif;
            font-size: 15px;
            line-height: 1.6;
            color: #555;
        }
        </style>

        <div class="clean-section">
            <div class="clean-container">
                <!-- Left Col (Image) -->
                <div class="clean-col-image">
                    <img src="images/usage-ai-bg.png" alt="Industrial and Commercial LPG Usage" style="width: 100%; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
                </div>

                <!-- Right Col (Accordions) -->
                <div class="clean-col-accordions">
                    <div class="clean-sub-heading">Versatile Applications</div>
                    <div class="clean-main-heading">INDUSTRIAL & COMMERCIAL USAGE</div>
                    
                    <!-- Industrial -->
                    <div class="clean-accordion-title">Industrial Usage</div>
                    
                    <details class="clean-details" open>
                        <summary class="clean-summary">Textile Industry</summary>
                        <div class="clean-accordion-content">
                            Ravi Gas Service provides LPG Supply for your textile industry, LPG can be used in many applications in the industrial sector namely in space- and process-heating, powering industrial ovens, production of food, kilns, furnaces, production of packing material.
                        </div>
                    </details>
                    
                    <details class="clean-details">
                        <summary class="clean-summary">Automobile Industry</summary>
                        <div class="clean-accordion-content">
                            LPG is an excellent and efficient fuel for the automobile industry, providing cleaner emissions and cost-effective energy solutions for manufacturing and operations.
                        </div>
                    </details>

                    <details class="clean-details">
                        <summary class="clean-summary">Heavy load Industries</summary>
                        <div class="clean-accordion-content">
                            Ideal for heavy load industries requiring high-intensity heat and consistent energy supply. LPG offers unparalleled performance and reliability.
                        </div>
                    </details>
                    
                    <!-- Commercial -->
                    <div class="clean-accordion-title">Commercial Usage</div>
                    
                    <details class="clean-details" open>
                        <summary class="clean-summary">Hotels</summary>
                        <div class="clean-accordion-content">
                            Ravi Gas Service offers product and services to Hotel industry keeping in mind consumer safety and saving in mind. We also offer high quality LPG Hose and fuel efficient hotplates.
                        </div>
                    </details>
                    
                    <details class="clean-details">
                        <summary class="clean-summary">Restaurants Hospitals</summary>
                        <div class="clean-accordion-content">
                            Ensuring continuous and safe LPG supply for commercial kitchens in restaurants and hospitals, adhering to the highest safety standards.
                        </div>
                    </details>

                    <details class="clean-details">
                        <summary class="clean-summary">Tea Kiosks</summary>
                        <div class="clean-accordion-content">
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
    console.log('Successfully updated Usage Accordions with clean theme and AI image');
} else {
    console.log('Could not find testimonials section (eb22312)');
}
