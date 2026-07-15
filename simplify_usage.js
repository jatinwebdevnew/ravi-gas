const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('index.html', 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

const section = $('.elementor-element-eb22312');

if (section.length > 0) {
    const inner = section.find('> .e-con-inner');
    if (inner.length > 0) {
        
        const simpleHTML = `
        <div style="padding: 60px 20px; max-width: 1200px; margin: 0 auto; font-family: 'Inter', sans-serif; background: #fff;">
            <div style="text-align: center; margin-bottom: 50px;">
                <h2 style="font-family: 'Thunder', 'Inter', sans-serif; font-size: 48px; font-weight: 700; color: #111; text-transform: uppercase; margin-bottom: 15px;">
                    Industrial & Commercial Usage
                </h2>
                <div style="width: 60px; height: 3px; background: #f47b20; margin: 0 auto 20px;"></div>
                <p style="color: #666; font-size: 16px; max-width: 700px; margin: 0 auto;">
                    Ravi Gas Service provides highly efficient and safe LPG solutions tailored for diverse industrial and commercial needs across Gurugram.
                </p>
            </div>

            <div style="display: flex; flex-wrap: wrap; gap: 40px; align-items: stretch;">
                
                <div style="flex: 1 1 450px;">
                    <img src="images/usage-ai-bg.png" alt="Industrial and Commercial LPG Usage" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
                </div>
                
                <div style="flex: 1 1 500px; display: flex; flex-direction: column; justify-content: center; gap: 30px;">
                    
                    <div style="background: #fafafa; border-left: 4px solid #f47b20; padding: 30px; border-radius: 0 8px 8px 0; box-shadow: 0 2px 10px rgba(0,0,0,0.03);">
                        <h3 style="font-size: 22px; font-weight: 700; color: #111; margin-bottom: 20px; text-transform: uppercase;">Industrial Usage</h3>
                        <ul style="list-style: none; padding: 0; margin: 0; color: #555; line-height: 1.8; font-size: 15px;">
                            <li style="margin-bottom: 12px;">
                                <strong style="color: #333;">Textile Industry:</strong> Space & process heating, ovens, kilns, furnaces, and packing material production.
                            </li>
                            <li style="margin-bottom: 12px;">
                                <strong style="color: #333;">Automobile Industry:</strong> Cleaner emissions and cost-effective energy solutions for operations.
                            </li>
                            <li>
                                <strong style="color: #333;">Heavy Load Industries:</strong> Consistent energy supply offering unparalleled performance and reliability.
                            </li>
                        </ul>
                    </div>
                    
                    <div style="background: #fafafa; border-left: 4px solid #0056b3; padding: 30px; border-radius: 0 8px 8px 0; box-shadow: 0 2px 10px rgba(0,0,0,0.03);">
                        <h3 style="font-size: 22px; font-weight: 700; color: #111; margin-bottom: 20px; text-transform: uppercase;">Commercial Usage</h3>
                        <ul style="list-style: none; padding: 0; margin: 0; color: #555; line-height: 1.8; font-size: 15px;">
                            <li style="margin-bottom: 12px;">
                                <strong style="color: #333;">Hotels:</strong> Quality products focused on consumer safety, including high-quality hoses and hotplates.
                            </li>
                            <li style="margin-bottom: 12px;">
                                <strong style="color: #333;">Restaurants & Hospitals:</strong> Ensuring continuous and safe LPG supply for commercial kitchens.
                            </li>
                            <li>
                                <strong style="color: #333;">Tea Kiosks:</strong> Cost-effective and highly portable LPG solutions suited for small-scale vendors.
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
        `;
        
        inner.html(simpleHTML);
    }
    
    fs.writeFileSync('index.html', $.html());
    console.log('Successfully simplified the usage section');
} else {
    console.log('Could not find testimonials section (eb22312)');
}
