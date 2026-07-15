const fs = require('fs');

const baseContent = fs.readFileSync('about.html', 'utf8');

const mainStart = baseContent.indexOf('<main class="site-main"');
const mainContentStart = baseContent.indexOf('>', mainStart) + 1;
const mainContentEnd = baseContent.indexOf('</main>', mainContentStart);

const preMain = baseContent.substring(0, mainContentStart);
const postMain = baseContent.substring(mainContentEnd);

const premiumCSS = `
<style>
/* Global fix for horizontal scroll */
html, body {
    overflow-x: hidden;
    width: 100%;
    max-width: 100%;
}
.site-wrapper {
    overflow-x: hidden;
    width: 100%;
    position: relative;
    background-color: #f9fbfd;
}

/* Premium Layout Reset */
.text-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 60px 20px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    color: #1e293b;
    line-height: 1.8;
}

/* Hero Section */
.hero-section {
    position: relative;
    background: url('https://ravigas.in/wp-content/uploads/2023/06/commercial-lpg-min.jpg') no-repeat center center;
    background-size: cover;
    background-color: #060097;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.hero-section::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0.5);
}
.hero-section h1 {
    position: relative;
    z-index: 1;
    font-size: 56px;
    font-weight: 800;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 0;
    text-align: center;
}

/* Typography Styles */
.centered-heading {
    text-align: center;
    font-size: 36px;
    font-weight: 700;
    color: #060097;
    margin-bottom: 30px;
    text-transform: uppercase;
}
.sub-text {
    font-size: 16px;
    color: #475569;
    margin-bottom: 15px;
}
.sub-link {
    display: inline-block;
    color: #060097;
    text-decoration: none;
    font-weight: 600;
    margin-bottom: 30px;
}
.sub-link:hover {
    text-decoration: underline;
}

.section-title {
    font-size: 24px;
    font-weight: 700;
    color: #060097;
    margin-top: 40px;
    margin-bottom: 20px;
}

.feature-paragraph {
    margin-bottom: 25px;
    font-size: 16px;
    color: #475569;
}
.feature-paragraph strong {
    color: #1e293b;
    font-weight: 700;
}

/* Comparison Table */
.comparison-wrapper {
    margin-top: 50px;
    margin-bottom: 50px;
    background: #fff;
    border: 1px solid #e2e8f0;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}
.table-responsive {
    overflow-x: auto;
}
.premium-table {
    width: 100%;
    border-collapse: collapse;
    font-family: 'Inter', sans-serif;
    min-width: 800px;
    font-size: 14px;
}
.premium-table th, .premium-table td {
    padding: 15px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
    border-right: 1px solid #e2e8f0;
    vertical-align: top;
}
.premium-table th:last-child, .premium-table td:last-child {
    border-right: none;
}
.premium-table th {
    background: #060097;
    font-weight: 600;
    color: #ffffff;
    text-align: center;
}
.premium-table tr:last-child td {
    border-bottom: none;
}
.premium-table tr:hover td {
    background: #f8fafc;
}
.premium-table .positives {
    color: #475569;
}
.premium-table .negatives {
    color: #475569;
}
.premium-table td span {
    display: block;
    margin-bottom: 10px;
}

/* Responsive */
@media (max-width: 768px) {
    .hero-section h1 {
        font-size: 40px;
    }
    .centered-heading {
        font-size: 28px;
    }
}
</style>
`;

const whyLpgContent = `
<div class="site-wrapper">
    ${premiumCSS}
    
    <div class="hero-section">
        <h1>Why LPG</h1>
    </div>

    <div class="text-container">
        
        <h2 class="centered-heading">LPG THE FUEL OF MODERN INDIA</h2>
        
        <p class="sub-text">Non Subsidised Prices Of Indane Metros(Rs./14.2 Kg Cylinder)</p>
        
        <a href="#" class="sub-link">Want to Diesel to LPG Conversion?</a>

        <h3 class="section-title">Advantages</h3>
        
        <p class="feature-paragraph">
            <strong>Cost savings:</strong> LPG is generally cheaper than diesel fuel, which can lead to significant cost savings in the long run. The exact savings will depend on the current fuel prices and availability in your region.
        </p>
        
        <p class="feature-paragraph">
            <strong>Environmental impact:</strong> LPG is considered a cleaner-burning fuel compared to diesel. It produces lower levels of harmful emissions such as carbon dioxide (CO2), nitrogen oxides (NOx), sulfur oxides (SOx), and particulate matter. As a result, converting to LPG can help reduce your vehicle's carbon footprint and contribute to improved air quality.
        </p>

        <p class="feature-paragraph">
            <strong>Performance:</strong> LPG combustion typically produces a smoother and quieter engine operation compared to diesel. The engine can run more quietly, with reduced vibration and noise levels.
        </p>

        <p class="feature-paragraph">
            <strong>Engine longevity:</strong> LPG combustion generally produces less wear and tear on engine components compared to diesel. LPG has higher octane rating and lubrication properties, which can contribute to a longer engine life.
        </p>

        <div class="comparison-wrapper">
            <div class="table-responsive">
                <table class="premium-table">
                    <thead>
                        <tr>
                            <th>LPG</th>
                            <th>High Speed Diesel</th>
                            <th>Electricity</th>
                            <th>Furnace Oil</th>
                            <th>Coal</th>
                            <th>Solar energy</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="positives">
                                <span><strong>Positives</strong></span>
                                <span>A higher calorific value</span>
                                <span>Does not produce any smoke</span>
                                <span>Does not have a solid residue</span>
                                <span>Does not emit harmful gases on burning</span>
                                <span>Easy and safer to store than other fuels</span>
                                <span>Low ignition point</span>
                                <span>It has a controllable combustion</span>
                                <span>It burns at a moderate rate</span>
                                <span>Highly Eco-friendly</span>
                                <span>Better for health as there are no harmful gas emissions</span>
                            </td>
                            <td class="negatives">
                                <span><strong>Negatives</strong></span>
                                <span>Produces harmful emissions and residue</span>
                                <span>Increasing price due to increased demand</span>
                                <span>Diesel is cruder and messier</span>
                                <span>Diesel production requires large farmlands which damages the land</span>
                                <span>Higher maintenance during storage</span>
                                <span>Exhaust fumes can seriously harm and even kill people exposed to it</span>
                                <span>-</span>
                                <span>-</span>
                                <span>-</span>
                                <span>-</span>
                            </td>
                            <td class="negatives">
                                <span><strong>Negatives</strong></span>
                                <span>Electricity heating has a higher maintenance cost</span>
                                <span>Causes dry air in the environment</span>
                                <span>Highly potential to fires</span>
                                <span>Emits dangerous levels of carbon monoxide</span>
                                <span>Reduced moisture in the air can cause respiratory disorders</span>
                                <span>Highly expensive and inefficient</span>
                                <span>Electricity comes from fossil fuels like coal and petroleum which is itself polluting</span>
                                <span>-</span>
                                <span>-</span>
                                <span>-</span>
                            </td>
                            <td class="negatives">
                                <span><strong>Negatives</strong></span>
                                <span>Higher installation cost</span>
                                <span>Expensive running or energy costs</span>
                                <span>Higher maintenance costs</span>
                                <span>More restricted to boiler usage only</span>
                                <span>Oil is naturally toxic, releases carbon dioxide</span>
                                <span>Oil containers are not compact and not easy to access</span>
                                <span>Hard to detect leakage, which makes it less safe to use and store</span>
                                <span>-</span>
                                <span>-</span>
                                <span>-</span>
                            </td>
                            <td class="negatives">
                                <span><strong>Negatives</strong></span>
                                <span>It is a non-renewable resource</span>
                                <span>Coal contains maximum CO2 per BTU</span>
                                <span>Severely harmful environmental, social, health and safety impacts</span>
                                <span>The high cost of transportation</span>
                                <span>Coal ash is difficult to dispose</span>
                                <span>Coal emissions cause asthma and lung cancer</span>
                                <span>-</span>
                                <span>-</span>
                                <span>-</span>
                                <span>-</span>
                            </td>
                            <td class="negatives">
                                <span><strong>Negatives</strong></span>
                                <span>Dependent on weather and availability of sunlight</span>
                                <span>Installation is expensive</span>
                                <span>Inefficient for heating</span>
                                <span>Requires a lot of storage space</span>
                                <span>Consumes more time for heating</span>
                                <span>-</span>
                                <span>-</span>
                                <span>-</span>
                                <span>-</span>
                                <span>-</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <h3 class="section-title">Benefits of LPG:</h3>
        <p class="feature-paragraph">LPG (liquefied petroleum gas) offers several benefits across various applications. Here are some of the key advantages of using LPG:</p>
        
        <p class="feature-paragraph">
            <strong>Versatility:</strong> LPG is a versatile fuel that can be used for various purposes, including residential, commercial, industrial, and automotive applications. It is commonly used for heating, cooking, powering vehicles, and as a fuel in industrial processes.
        </p>

        <p class="feature-paragraph">
            <strong>Clean Burning:</strong> LPG is a cleaner-burning fuel compared to other fossil fuels like coal and diesel. It emits lower levels of harmful pollutants such as sulfur dioxide (SO2), nitrogen oxides (NOx), particulate matter, and greenhouse gases. This makes it an environmentally friendly fuel choice.
        </p>

        <p class="feature-paragraph">
            <strong>Energy Efficiency:</strong> LPG has a high calorific value, which means it provides a significant amount of energy per unit of volume. This high energy efficiency makes it an effective fuel for heating and cooking, resulting in reduced energy consumption and lower fuel costs.
        </p>

        <p class="feature-paragraph">
            <strong>Storage and Transport:</strong> LPG is stored and transported in liquid form, which allows for efficient storage and distribution. It can be easily transported in cylinders or bulk tanks, making it accessible in remote areas where natural gas pipelines are not available.
        </p>

    </div>
</div>
`;

let finalContent = preMain + whyLpgContent + postMain;
finalContent = finalContent.replace('<title>About Us - Ravi Gas Service</title>', '<title>Why LPG - Ravi Gas Service</title>');

// We need to keep the synced header from the current why-lpg.html so it has the mobile menu fixes.
let existingWhy = fs.readFileSync('why-lpg.html', 'utf8');
const whyHeaderStart = existingWhy.indexOf('<header');
const whyHeaderEnd = existingWhy.indexOf('</header>') + 9;
const existingHeader = existingWhy.substring(whyHeaderStart, whyHeaderEnd);

const finalHeaderStart = finalContent.indexOf('<header');
const finalHeaderEnd = finalContent.indexOf('</header>') + 9;
finalContent = finalContent.substring(0, finalHeaderStart) + existingHeader + finalContent.substring(finalHeaderEnd);

fs.writeFileSync('why-lpg.html', finalContent);
console.log('why-lpg.html created successfully with text-only layout');
