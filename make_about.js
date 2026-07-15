const fs = require('fs');

let content = fs.readFileSync('about.html', 'utf8');

// Replace banner text
content = content.replace(/<h2 class="elementor-heading-title elementor-size-default">CONTACT US<\/h2>/g, '<h2 class="elementor-heading-title elementor-size-default">ABOUT US</h2>');

// Find the contact section
const startMarker = '<section class="contact-container"';
const startIndex = content.indexOf(startMarker);

if (startIndex !== -1) {
    let endIndex = content.indexOf('</section>', startIndex) + '</section>'.length;
    
    const newAboutBlock = `
      <section class="about-container" style="padding: 80px 20px; background: #fdfdfd; margin-bottom: 0;">
        <div style="max-width: 1200px; margin: 0 auto;">
          <div style="text-align: center; margin-bottom: 60px;">
            <span style="color: #0077d4; font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px;">About Us</span>
            <h2 style="font-family: 'Thunder', 'Inter', sans-serif; font-size: 56px; font-weight: 700; color: #1e293b; text-transform: uppercase; margin-top: 10px;">WELCOME TO RAVI GAS SERVICE</h2>
          </div>
          
          <div style="display: flex; flex-wrap: wrap; gap: 50px; align-items: flex-start; margin-bottom: 60px;">
            <!-- Left Side: Text -->
            <div style="flex: 1.5; min-width: 350px;">
              <p style="font-family: 'Inter', sans-serif; font-size: 18px; color: #475569; line-height: 1.8; margin-bottom: 25px;">
                We are a professionally managed LPG Distributorship of Bharat Petroleum Corporation Limited focused primarily on Domestic and Commercial LPG Sales. We are a team of vibrant and young professionals who are transforming the LPG business in Gurugram and our company is a natural choice for LPG gas cylinders for Domestic as well as Industrial use by all forward looking, smart companies.
              </p>
              <p style="font-family: 'Inter', sans-serif; font-size: 18px; color: #475569; line-height: 1.8; margin-bottom: 40px;">
                We have earned the reputation of being a highly reliable provider of Domestic and Commercial gas cylinders connection Provider of Gurugram. In a short span of time we have never heard of performance figures of LPG Distribution Industry and became one of the largest Domestic and commercial LPG distributors of BPCL. We have a team of professionals who are engaged with Diesel to LPG Conversion in Gurugram and adjoining Districts.
              </p>
              
              <h3 style="font-family: 'Inter', sans-serif; font-size: 32px; color: #1e293b; font-weight: 700; margin-bottom: 25px;">ABOUT MANAGEMENT</h3>
              <p style="font-family: 'Inter', sans-serif; font-size: 18px; color: #475569; line-height: 1.8; margin-bottom: 25px;">
                Our Director, <strong>Mr. Ravindra Singh</strong> is a Law Graduate and he has a long sales experience prior to inception of Ravi Gas Service in 2004. His vision, experience and guidance has led our company to be the leader of LPG Distribution in Gurugram and we have achieved great success under his leadership. He challenged the assumption of the industry to provide innovative and most valued services and he has an in depth understanding of LPG Industry as well as customer requirements.
              </p>
            </div>
            
            <!-- Right Side: Image -->
            <div style="flex: 1; min-width: 350px;">
              <div style="width: 100%; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.08); border: 3px solid #0077d4;">
                <img src="https://ravigas.in/wp-content/uploads/2023/07/721be3e9-cf48-4cc4-b60d-6eaf9be5179c.jpg" alt="Management" style="width: 100%; height: auto; display: block;" />
              </div>
            </div>
          </div>
          
          <!-- Bottom: LPG Rates Table -->
          <div style="background: #ffffff; padding: 50px; border-radius: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.05); border: 1px solid #f0f0f0; margin-top: 40px;">
            <div style="text-align: center; margin-bottom: 40px;">
              <h3 style="font-family: 'Inter', sans-serif; font-size: 32px; color: #1e293b; font-weight: 700; margin-bottom: 10px;">LPG Rates for the month of May -2025 in Gurugram</h3>
            </div>
            
            <div style="display: flex; flex-wrap: wrap; gap: 40px;">
                <div style="flex: 1; min-width: 300px;">
                    <h4 style="font-family: 'Inter', sans-serif; font-size: 24px; color: #0077d4; font-weight: 600; margin-bottom: 20px;">Domestic</h4>
                    <table style="width: 100%; border-collapse: collapse; font-family: 'Inter', sans-serif;">
                        <thead>
                            <tr style="background-color: #f8fafc; border-bottom: 2px solid #e2e8f0;">
                                <th style="padding: 15px; text-align: left; color: #1e293b; font-weight: 600;">Weight(Kg)</th>
                                <th style="padding: 15px; text-align: right; color: #1e293b; font-weight: 600;">Prices (₹)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid #f1f5f9;">
                                <td style="padding: 15px; color: #475569;">14.2 Kg Cyl</td>
                                <td style="padding: 15px; text-align: right; color: #475569; font-weight: 500;">861.50</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #f1f5f9;">
                                <td style="padding: 15px; color: #475569;">10 Kg Cyl</td>
                                <td style="padding: 15px; text-align: right; color: #475569; font-weight: 500;">620</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style="flex: 1; min-width: 300px;">
                    <h4 style="font-family: 'Inter', sans-serif; font-size: 24px; color: #ff5500; font-weight: 600; margin-bottom: 20px;">Non Domestic</h4>
                    <table style="width: 100%; border-collapse: collapse; font-family: 'Inter', sans-serif;">
                        <thead>
                            <tr style="background-color: #f8fafc; border-bottom: 2px solid #e2e8f0;">
                                <th style="padding: 15px; text-align: left; color: #1e293b; font-weight: 600;">Weight(Kg)</th>
                                <th style="padding: 15px; text-align: right; color: #1e293b; font-weight: 600;">Prices (₹)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid #f1f5f9;">
                                <td style="padding: 12px 15px; color: #475569;">19Kg Cyl</td>
                                <td style="padding: 12px 15px; text-align: right; color: #475569; font-weight: 500;">1765</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #f1f5f9;">
                                <td style="padding: 12px 15px; color: #475569;">5Kg FTL Cyl-New Connection</td>
                                <td style="padding: 12px 15px; text-align: right; color: #475569; font-weight: 500;">1471</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #f1f5f9;">
                                <td style="padding: 12px 15px; color: #475569;">5Kg FTL Cyl-Refill</td>
                                <td style="padding: 12px 15px; text-align: right; color: #475569; font-weight: 500;">527</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #f1f5f9;">
                                <td style="padding: 12px 15px; color: #475569;">5Kg FTL POS Cyl-New Connection</td>
                                <td style="padding: 12px 15px; text-align: right; color: #475569; font-weight: 500;">NA</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #f1f5f9;">
                                <td style="padding: 12px 15px; color: #475569;">5Kg FTL POS Cyl-Refill</td>
                                <td style="padding: 12px 15px; text-align: right; color: #475569; font-weight: 500;">NA</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #f1f5f9;">
                                <td style="padding: 12px 15px; color: #475569;">47.5Kg Cyl</td>
                                <td style="padding: 12px 15px; text-align: right; color: #475569; font-weight: 500;">4408</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #f1f5f9;">
                                <td style="padding: 12px 15px; color: #475569;">19Kg BMCG</td>
                                <td style="padding: 12px 15px; text-align: right; color: #475569; font-weight: 500;">2204</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
          </div>
        </div>
      </section>`;

    content = content.substring(0, startIndex) + newAboutBlock + content.substring(endIndex);
    fs.writeFileSync('about.html', content);
    console.log('about.html layout created with text data from the website.');
} else {
    console.log('contact-container not found in about.html');
}
