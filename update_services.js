const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf8');

// Find the pt-services container
const servicesStartStr = '<div class="pt-services layout-grid arrows-default arrows-align-">';
const servicesStart = indexHtml.indexOf(servicesStartStr);

if (servicesStart === -1) {
    console.error('Could not find pt-services block');
    process.exit(1);
}

// Find the end of the pt-services div
const servicesEnd = indexHtml.indexOf('</div>', indexHtml.indexOf('</div>', indexHtml.indexOf('</div>', servicesStart + servicesStartStr.length) + 6) + 6); // Just rough logic, let's use regex instead or specific slicing.

// A better way: replace everything between `<div class="pt-services layout-grid arrows-default arrows-align-">` and the closing `</div>` that matches it.
// Since it's nested, string replacement is safer.
const replacementHtml = `
<div class="pt-services layout-grid arrows-default arrows-align-">
    <div class="pt-service">
        <div class="pt-service-image">
            <img decoding="async" width="1064" height="620" src="images/service-domestic.png" class="attachment-full size-full" style="object-fit: cover;" alt="Domestic LPG" />
        </div>
        <div class="pt-service-caption" style="bottom: 0; background: linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0)); padding: 30px;">
            <div class="pt-service-title">
                <a href="domestic.html" style="font-size: 26px; line-height: 1.2;">LPG for Domestic Purpose</a>
            </div>
            <div class="pt-service-text" style="color: #e2e8f0; font-size: 15px; line-height: 1.6; margin-top: 15px; margin-bottom: 20px; font-family: 'Inter', sans-serif;">
                At RAVI GAS SERVICE, through all of our Gurugram activities we believe in providing comfort to customers. With that in mind, we launched 'Beyond LPG' in 2004.
            </div>
            <div class="pt-service-button ">
                <a class="pt-button textual" href="domestic.html">
                    <span>Read More</span>
                    <i aria-hidden="true" class="pticon pticon-plus"></i>
                </a>
            </div>
        </div>
        <a href="domestic.html" class="pt-service-link"></a>
    </div>

    <div class="pt-service">
        <div class="pt-service-image">
            <img loading="lazy" decoding="async" width="1064" height="620" src="images/service-industrial.png" class="attachment-full size-full" style="object-fit: cover;" alt="Industrial LPG" />
        </div>
        <div class="pt-service-caption" style="bottom: 0; background: linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0)); padding: 30px;">
            <div class="pt-service-title">
                <a href="industrial.html" style="font-size: 26px; line-height: 1.2;">LPG For Industrial Purpose</a>
            </div>
            <div class="pt-service-text" style="color: #e2e8f0; font-size: 15px; line-height: 1.6; margin-top: 15px; margin-bottom: 20px; font-family: 'Inter', sans-serif;">
                LPG (Liquefied Petroleum Gas) can indeed be a viable and efficient fuel option for various industrial uses. Here are some reasons why LPG is considered.
            </div>
            <div class="pt-service-button ">
                <a class="pt-button textual" href="industrial.html">
                    <span>Read More</span>
                    <i aria-hidden="true" class="pticon pticon-plus"></i>
                </a>
            </div>
        </div>
        <a href="industrial.html" class="pt-service-link"></a>
    </div>

    <div class="pt-service">
        <div class="pt-service-image">
            <img loading="lazy" decoding="async" width="1064" height="620" src="images/service-commercial.png" class="attachment-full size-full" style="object-fit: cover;" alt="Commercial LPG" />
        </div>
        <div class="pt-service-caption" style="bottom: 0; background: linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0)); padding: 30px;">
            <div class="pt-service-title">
                <a href="bmcg.html" style="font-size: 26px; line-height: 1.2;">LPG for Commercial Purpose</a>
            </div>
            <div class="pt-service-text" style="color: #e2e8f0; font-size: 15px; line-height: 1.6; margin-top: 15px; margin-bottom: 20px; font-family: 'Inter', sans-serif;">
                Commercial usage of LPG gas (Liquefied Petroleum Gas) is quite common and widespread. LPG is a versatile and convenient fuel source that finds.
            </div>
            <div class="pt-service-button ">
                <a class="pt-button textual" href="bmcg.html">
                    <span>Read More</span>
                    <i aria-hidden="true" class="pticon pticon-plus"></i>
                </a>
            </div>
        </div>
        <a href="bmcg.html" class="pt-service-link"></a>
    </div>
</div>
`;

// Find start and end using split or index
const parts = indexHtml.split('<div class="pt-services layout-grid arrows-default arrows-align-">');
if (parts.length < 2) {
    console.error('Cannot find target block');
    process.exit(1);
}

// The block ends right before </div>\n                </div>\n              </div>\n            </div>\n            <div class="elementor-element elementor-element-355cf31'
// So we can find the next elementor-element
const afterBlock = parts[1].substring(parts[1].indexOf('</div>\n                </div>\n              </div>\n            </div>\n            <div class="elementor-element elementor-element-355cf31'));

const finalHtml = parts[0] + replacementHtml + afterBlock;

fs.writeFileSync('index.html', finalHtml);
console.log('Replaced pt-services successfully!');
