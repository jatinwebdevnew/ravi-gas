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
}

/* Premium Layout Reset */
.domestic-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 60px 20px;
    font-family: 'Plus Jakarta Sans', sans-serif;
}

/* Hero Section */
.domestic-hero {
    text-align: center;
    margin-bottom: 60px;
    animation: fadeInDown 0.8s ease-out;
}
.domestic-hero h1 {
    font-size: 48px;
    font-weight: 800;
    color: #060097;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
}
.domestic-hero .subtitle {
    font-size: 18px;
    color: #67768e;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
}

/* Premium Cards */
.premium-card {
    display: flex;
    align-items: center;
    background: #ffffff;
    border-radius: 20px;
    padding: 40px;
    margin-bottom: 50px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    border: 1px solid rgba(0,0,0,0.02);
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    position: relative;
    overflow: visible;
}
.premium-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(6, 0, 151, 0.08);
}
.premium-card.reverse {
    flex-direction: row-reverse;
}

/* Card Content */
.card-content {
    flex: 1;
    padding: 0 40px;
}
.card-title {
    font-size: 32px;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 20px;
    position: relative;
    display: inline-block;
}
.card-title::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 4px;
    background: #ffcd57;
    border-radius: 2px;
}
.card-text {
    font-size: 17px;
    color: #67768e;
    line-height: 1.8;
    margin-bottom: 20px;
}
.card-list {
    list-style: none;
    padding: 0;
    margin: 0;
}
.card-list li {
    font-size: 16px;
    color: #1e293b;
    margin-bottom: 12px;
    padding-left: 28px;
    position: relative;
    font-weight: 500;
}
.card-list li::before {
    content: '✓';
    position: absolute;
    left: 0;
    top: 0;
    color: #060097;
    font-weight: bold;
    font-size: 18px;
}

/* Image Offset Frame */
.card-image-wrapper {
    flex: 1;
    position: relative;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.image-frame {
    position: relative;
    width: 100%;
    max-width: 450px;
    z-index: 2;
}
.image-frame::before {
    content: '';
    position: absolute;
    top: -15px;
    right: -15px;
    bottom: 15px;
    left: 15px;
    background: linear-gradient(135deg, rgba(6, 0, 151, 0.05), rgba(6, 0, 151, 0.15));
    border: 2px dashed #060097;
    border-radius: 20px;
    z-index: -1;
    transition: all 0.4s ease;
}
.premium-card.reverse .image-frame::before {
    right: 15px;
    left: -15px;
}
.premium-card:hover .image-frame::before {
    top: -20px;
    right: -20px;
}
.premium-card.reverse:hover .image-frame::before {
    left: -20px;
    right: 20px;
}
.image-frame img {
    width: 100%;
    height: auto;
    object-fit: contain;
    border: 8px solid #ffffff;
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
    transition: transform 0.4s ease;
    display: block;
    background: #fff;
}
.premium-card:hover .image-frame img {
    transform: scale(1.02);
}

/* Comparison Table */
.comparison-wrapper {
    margin-top: 80px;
    background: #fff;
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}
.comparison-wrapper h2 {
    text-align: center;
    font-size: 32px;
    font-weight: 700;
    color: #060097;
    margin-bottom: 40px;
}
.table-responsive {
    overflow-x: auto;
}
.premium-table {
    width: 100%;
    border-collapse: collapse;
    font-family: 'Inter', sans-serif;
    min-width: 800px;
}
.premium-table th, .premium-table td {
    padding: 20px;
    text-align: left;
    border-bottom: 1px solid #eee;
}
.premium-table th {
    background: #f8fafc;
    font-weight: 700;
    color: #1e293b;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}
.premium-table tr:last-child td {
    border-bottom: none;
}
.premium-table tr:hover td {
    background: #f8fafc;
}
.premium-table .positives {
    color: #16a34a;
    font-weight: 500;
}
.premium-table .negatives {
    color: #dc2626;
    font-weight: 500;
}
.premium-table td i {
    margin-right: 8px;
}

/* Call To Action */
.cta-wrapper {
    text-align: center;
    margin-top: 60px;
    padding: 20px;
}
.premium-btn {
    display: inline-block;
    background: linear-gradient(135deg, #060097 0%, #1a14c2 100%);
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    padding: 18px 50px;
    border-radius: 50px;
    text-decoration: none;
    box-shadow: 0 10px 20px rgba(6, 0, 151, 0.2);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}
.premium-btn::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%);
    transform: skewX(-25deg);
    transition: all 0.6s ease;
}
.premium-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 25px rgba(6, 0, 151, 0.3);
    color: #fff;
}
.premium-btn:hover::after {
    left: 150%;
}

/* Animations */
@keyframes fadeInDown {
    from { opacity: 0; transform: translateY(-30px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Responsive */
@media (max-width: 991px) {
    .premium-card, .premium-card.reverse {
        flex-direction: column;
        text-align: center;
        padding: 30px 20px;
    }
    .card-title::after {
        left: 50%;
        transform: translateX(-50%);
    }
    .card-list li {
        text-align: left;
    }
    .card-image-wrapper {
        margin-top: 30px;
        width: 100%;
    }
    .image-frame::before {
        top: -10px;
        right: -10px;
        bottom: 10px;
        left: 10px;
    }
    .premium-card.reverse .image-frame::before {
        right: 10px;
        left: -10px;
    }
}
</style>
`;

const whyLpgContent = `
<div class="site-wrapper">
    ${premiumCSS}
    <div class="domestic-container">
        
        <div class="domestic-hero">
            <h1>Why LPG</h1>
            <p class="subtitle">LPG is the fuel of modern India. Discover the incredible benefits of converting from Diesel to LPG.</p>
        </div>

        <div class="premium-card">
            <div class="card-content">
                <h2 class="card-title">Cost Savings</h2>
                <p class="card-text">
                    LPG is generally cheaper than diesel fuel, which can lead to significant cost savings in the long run. The exact savings will depend on the current fuel prices and availability in your region.
                </p>
                <ul class="card-list">
                    <li>Lower running costs compared to Diesel</li>
                    <li>Highly efficient combustion</li>
                    <li>Stable pricing in the long term</li>
                </ul>
            </div>
            <div class="card-image-wrapper">
                <div class="image-frame">
                    <img src="C:/Users/RAO JATIN/.gemini/antigravity-ide/brain/6f0034f7-d948-41b6-8116-a227178b4d4c/lpg_cost_savings_1784085206115.png" alt="Cost Savings">
                </div>
            </div>
        </div>

        <div class="premium-card reverse">
            <div class="card-content">
                <h2 class="card-title">Environmental Impact</h2>
                <p class="card-text">
                    LPG is considered a cleaner-burning fuel compared to diesel. It produces lower levels of harmful emissions such as carbon dioxide (CO2), nitrogen oxides (NOx), sulfur oxides (SOx), and particulate matter.
                </p>
                <ul class="card-list">
                    <li>Reduced carbon footprint</li>
                    <li>Improved air quality</li>
                    <li>Zero solid residue or black smoke</li>
                </ul>
            </div>
            <div class="card-image-wrapper">
                <div class="image-frame">
                    <img src="C:/Users/RAO JATIN/.gemini/antigravity-ide/brain/6f0034f7-d948-41b6-8116-a227178b4d4c/lpg_environment_1784085219517.png" alt="Environmental Impact">
                </div>
            </div>
        </div>

        <div class="premium-card">
            <div class="card-content">
                <h2 class="card-title">Performance</h2>
                <p class="card-text">
                    LPG combustion typically produces a smoother and quieter engine operation compared to diesel. The engine can run more quietly, with reduced vibration and noise levels.
                </p>
                <ul class="card-list">
                    <li>Smoother engine operation</li>
                    <li>Significant noise reduction</li>
                    <li>Lower vibration levels</li>
                </ul>
            </div>
            <div class="card-image-wrapper">
                <div class="image-frame">
                    <img src="C:/Users/RAO JATIN/.gemini/antigravity-ide/brain/6f0034f7-d948-41b6-8116-a227178b4d4c/lpg_performance_1784085233748.png" alt="Performance">
                </div>
            </div>
        </div>

        <div class="premium-card reverse">
            <div class="card-content">
                <h2 class="card-title">Engine Longevity</h2>
                <p class="card-text">
                    LPG combustion generally produces less wear and tear on engine components compared to diesel. LPG has a higher octane rating and excellent lubrication properties.
                </p>
                <ul class="card-list">
                    <li>Longer engine life</li>
                    <li>Less wear and tear on components</li>
                    <li>Higher octane rating</li>
                </ul>
            </div>
            <div class="card-image-wrapper">
                <div class="image-frame">
                    <img src="C:/Users/RAO JATIN/.gemini/antigravity-ide/brain/6f0034f7-d948-41b6-8116-a227178b4d4c/lpg_longevity_1784085248223.png" alt="Engine Longevity">
                </div>
            </div>
        </div>

        <div class="comparison-wrapper">
            <h2>Fuel Comparison Analysis</h2>
            <div class="table-responsive">
                <table class="premium-table">
                    <thead>
                        <tr>
                            <th>Fuel Type</th>
                            <th>Key Positives</th>
                            <th>Key Negatives</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>LPG</strong></td>
                            <td class="positives">
                                <i class="fa fa-check-circle"></i> Higher calorific value<br>
                                <i class="fa fa-check-circle"></i> Does not produce any smoke<br>
                                <i class="fa fa-check-circle"></i> No solid residue<br>
                                <i class="fa fa-check-circle"></i> No harmful gases on burning
                            </td>
                            <td class="negatives">
                                -
                            </td>
                        </tr>
                        <tr>
                            <td><strong>High Speed Diesel</strong></td>
                            <td class="positives">-</td>
                            <td class="negatives">
                                <i class="fa fa-times-circle"></i> Harmful emissions and residue<br>
                                <i class="fa fa-times-circle"></i> Increasing price<br>
                                <i class="fa fa-times-circle"></i> Cruder and messier<br>
                                <i class="fa fa-times-circle"></i> Production damages land
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Electricity</strong></td>
                            <td class="positives">-</td>
                            <td class="negatives">
                                <i class="fa fa-times-circle"></i> Higher maintenance cost<br>
                                <i class="fa fa-times-circle"></i> Causes dry air<br>
                                <i class="fa fa-times-circle"></i> High potential for fires
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Furnace Oil</strong></td>
                            <td class="positives">-</td>
                            <td class="negatives">
                                <i class="fa fa-times-circle"></i> Higher installation cost<br>
                                <i class="fa fa-times-circle"></i> Expensive running costs<br>
                                <i class="fa fa-times-circle"></i> Higher maintenance costs
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Coal</strong></td>
                            <td class="positives">-</td>
                            <td class="negatives">
                                <i class="fa fa-times-circle"></i> Non-renewable resource<br>
                                <i class="fa fa-times-circle"></i> Maximum CO2 per BTU<br>
                                <i class="fa fa-times-circle"></i> Severe environmental impact
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Solar Energy</strong></td>
                            <td class="positives">-</td>
                            <td class="negatives">
                                <i class="fa fa-times-circle"></i> Weather dependent<br>
                                <i class="fa fa-times-circle"></i> Expensive installation<br>
                                <i class="fa fa-times-circle"></i> Inefficient for heating
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="cta-wrapper">
            <a href="contact-us.html" class="premium-btn">Convert to LPG Today</a>
        </div>

    </div>
</div>
`;

// Also let's fix the mobile sync issue by ensuring the nav is the latest
// For simplicity, we just dump it into why-lpg.html based on about.html
// Also replace the title
let finalContent = preMain + whyLpgContent + postMain;
finalContent = finalContent.replace('<title>About Us - Ravi Gas Service</title>', '<title>Why LPG - Ravi Gas Service</title>');

// We also need to copy those images to the local repo directory so they can be loaded via relative paths.
fs.copyFileSync('C:/Users/RAO JATIN/.gemini/antigravity-ide/brain/6f0034f7-d948-41b6-8116-a227178b4d4c/lpg_cost_savings_1784085206115.png', 'lpg_cost_savings.png');
fs.copyFileSync('C:/Users/RAO JATIN/.gemini/antigravity-ide/brain/6f0034f7-d948-41b6-8116-a227178b4d4c/lpg_environment_1784085219517.png', 'lpg_environment.png');
fs.copyFileSync('C:/Users/RAO JATIN/.gemini/antigravity-ide/brain/6f0034f7-d948-41b6-8116-a227178b4d4c/lpg_performance_1784085233748.png', 'lpg_performance.png');
fs.copyFileSync('C:/Users/RAO JATIN/.gemini/antigravity-ide/brain/6f0034f7-d948-41b6-8116-a227178b4d4c/lpg_longevity_1784085248223.png', 'lpg_longevity.png');

finalContent = finalContent.replace(/C:\/Users\/RAO JATIN\/\.gemini\/antigravity-ide\/brain\/6f0034f7-d948-41b6-8116-a227178b4d4c\/lpg_cost_savings_1784085206115\.png/g, 'lpg_cost_savings.png');
finalContent = finalContent.replace(/C:\/Users\/RAO JATIN\/\.gemini\/antigravity-ide\/brain\/6f0034f7-d948-41b6-8116-a227178b4d4c\/lpg_environment_1784085219517\.png/g, 'lpg_environment.png');
finalContent = finalContent.replace(/C:\/Users\/RAO JATIN\/\.gemini\/antigravity-ide\/brain\/6f0034f7-d948-41b6-8116-a227178b4d4c\/lpg_performance_1784085233748\.png/g, 'lpg_performance.png');
finalContent = finalContent.replace(/C:\/Users\/RAO JATIN\/\.gemini\/antigravity-ide\/brain\/6f0034f7-d948-41b6-8116-a227178b4d4c\/lpg_longevity_1784085248223\.png/g, 'lpg_longevity.png');


fs.writeFileSync('why-lpg.html', finalContent);
console.log('why-lpg.html created successfully');
