const fs = require('fs');

let content = fs.readFileSync('contact.html', 'utf8');

const startMarker = '<section class="contact-container"';
const startIndex = content.indexOf(startMarker);
if (startIndex !== -1) {
    let endIndex = content.indexOf('</section>', startIndex) + '</section>'.length;
    
    const newContactBlock = `
      <section class="contact-container" style="padding: 80px 20px; background: #fdfdfd; margin-bottom: 0;">
        <div style="max-width: 1200px; margin: 0 auto;">
          <div style="text-align: center; margin-bottom: 60px;">
            <span style="color: #0077d4; font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px;">Contact Us</span>
            <h2 style="font-family: 'Thunder', 'Inter', sans-serif; font-size: 56px; font-weight: 700; color: #1e293b; text-transform: uppercase; margin-top: 10px;">FEEL FREE TO CONTACT US</h2>
          </div>
          
          <div style="display: flex; flex-wrap: wrap; gap: 50px; align-items: flex-start; margin-bottom: 60px;">
            <!-- Left Side: Contact Details -->
            <div style="flex: 1; min-width: 350px;">
              <h3 style="font-family: 'Inter', sans-serif; font-size: 28px; color: #1e293b; font-weight: 700; margin-bottom: 30px;">Ravi Gas Service</h3>
              
              <div style="display: flex; align-items: flex-start; gap: 20px; margin-bottom: 25px;">
                <div style="width: 50px; height: 50px; background: rgba(0, 119, 212, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                  <i class="fa fa-map-marker" style="color: #0077d4; font-size: 24px;"></i>
                </div>
                <div>
                  <h4 style="font-family: 'Inter', sans-serif; font-size: 18px; color: #1e293b; font-weight: 600; margin: 0 0 5px 0;">Our Address</h4>
                  <p style="font-family: 'Inter', sans-serif; font-size: 16px; color: #67768e; line-height: 1.6; margin: 0;">DSS - 230, HUDA Market, Sector - 46<br/>Gurugram, Haryana 122003</p>
                  <p style="font-family: 'Inter', sans-serif; font-size: 14px; color: #67768e; margin: 5px 0 0 0;"><strong>GST No:</strong> 06AUOPS7038N1ZR</p>
                </div>
              </div>

              <div style="display: flex; align-items: flex-start; gap: 20px; margin-bottom: 25px;">
                <div style="width: 50px; height: 50px; background: rgba(0, 119, 212, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                  <i class="fa fa-phone" style="color: #0077d4; font-size: 24px;"></i>
                </div>
                <div>
                  <h4 style="font-family: 'Inter', sans-serif; font-size: 18px; color: #1e293b; font-weight: 600; margin: 0 0 5px 0;">Phone Numbers</h4>
                  <p style="font-family: 'Inter', sans-serif; font-size: 16px; color: #67768e; line-height: 1.6; margin: 0; display: flex; align-items: center; gap: 10px;">
                    <span style="min-width: 140px;">Domestic LPG:</span> 
                    <a href="https://wa.me/09868251750" style="color: #ff5500; text-decoration: none; font-weight: 500;"><img src="https://ravigas.in/wp-content/uploads/2023/07/whatsapp-png-logo-7.png" style="width: 20px; vertical-align: middle; margin-right: 5px;">09868251750</a>
                  </p>
                  <p style="font-family: 'Inter', sans-serif; font-size: 16px; color: #67768e; line-height: 1.6; margin: 5px 0 0 0; display: flex; align-items: center; gap: 10px;">
                    <span style="min-width: 140px;">Commercial LPG:</span> 
                    <a href="https://wa.me/09205123928" style="color: #ff5500; text-decoration: none; font-weight: 500;"><img src="https://ravigas.in/wp-content/uploads/2023/07/whatsapp-png-logo-7.png" style="width: 20px; vertical-align: middle; margin-right: 5px;">09205123928</a>
                  </p>
                </div>
              </div>

              <div style="display: flex; align-items: flex-start; gap: 20px; margin-bottom: 25px;">
                <div style="width: 50px; height: 50px; background: rgba(0, 119, 212, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                  <i class="fa fa-envelope" style="color: #0077d4; font-size: 20px;"></i>
                </div>
                <div>
                  <h4 style="font-family: 'Inter', sans-serif; font-size: 18px; color: #1e293b; font-weight: 600; margin: 0 0 5px 0;">Email Address</h4>
                  <p style="font-family: 'Inter', sans-serif; font-size: 16px; color: #67768e; line-height: 1.6; margin: 0;">
                    <a href="mailto:info@ravigas.in" style="color: #ff5500; text-decoration: none; display: block; margin-bottom: 3px;">info@ravigas.in</a>
                    <a href="mailto:sales@ravigas.in" style="color: #ff5500; text-decoration: none; display: block;">sales@ravigas.in</a>
                  </p>
                </div>
              </div>

              <div style="display: flex; align-items: flex-start; gap: 20px;">
                <div style="width: 50px; height: 50px; background: rgba(0, 119, 212, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                  <i class="fa fa-globe" style="color: #0077d4; font-size: 24px;"></i>
                </div>
                <div>
                  <h4 style="font-family: 'Inter', sans-serif; font-size: 18px; color: #1e293b; font-weight: 600; margin: 0 0 5px 0;">Website</h4>
                  <p style="font-family: 'Inter', sans-serif; font-size: 16px; color: #67768e; line-height: 1.6; margin: 0;">
                    <a href="https://ravigas.in" style="color: #ff5500; text-decoration: none;">www.ravigas.in</a>
                  </p>
                </div>
              </div>
            </div>
            
            <!-- Right Side: Google Map -->
            <div style="flex: 1.2; min-width: 350px;">
              <div style="width: 100%; height: 100%; min-height: 450px; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.08);">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14033.739283445766!2d77.058512!3d28.436306!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18977242fd67%3A0xa686ec72f99aa930!2sRavi%20Gas%20Service%20(Bharat%20Gas)!5e0!3m2!1sen!2sin!4v1748411922459!5m2!1sen!2sin" width="100%" height="100%" style="border:0; min-height: 450px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
          
          <!-- Bottom: Contact Form -->
          <div style="background: #ffffff; padding: 50px; border-radius: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.05); border: 1px solid #f0f0f0; margin-top: 40px;">
            <div style="text-align: center; margin-bottom: 40px;">
              <h3 style="font-family: 'Inter', sans-serif; font-size: 28px; color: #1e293b; font-weight: 700; margin-bottom: 10px;">Send Us a Message</h3>
              <p style="font-family: 'Inter', sans-serif; font-size: 16px; color: #67768e;">Have any questions? We'd love to hear from you.</p>
            </div>
            <form style="display: flex; flex-direction: column; gap: 20px; max-width: 800px; margin: 0 auto;">
              <div style="display: flex; gap: 20px; flex-wrap: wrap;">
                  <input type="text" placeholder="Your Name *" style="flex: 1; min-width: 250px; padding: 16px 20px; border: 1px solid #e2e8f0; border-radius: 8px; font-family: 'Inter', sans-serif; font-size: 16px; background: #f8fafc; color: #334155; outline: none; transition: border-color 0.3s;" onfocus="this.style.borderColor='#0077d4'; this.style.background='#fff';" onblur="this.style.borderColor='#e2e8f0'; this.style.background='#f8fafc';" required />
                  <input type="email" placeholder="Your Email *" style="flex: 1; min-width: 250px; padding: 16px 20px; border: 1px solid #e2e8f0; border-radius: 8px; font-family: 'Inter', sans-serif; font-size: 16px; background: #f8fafc; color: #334155; outline: none; transition: border-color 0.3s;" onfocus="this.style.borderColor='#0077d4'; this.style.background='#fff';" onblur="this.style.borderColor='#e2e8f0'; this.style.background='#f8fafc';" required />
              </div>
              <input type="text" placeholder="Subject *" style="padding: 16px 20px; border: 1px solid #e2e8f0; border-radius: 8px; font-family: 'Inter', sans-serif; font-size: 16px; background: #f8fafc; color: #334155; outline: none; transition: border-color 0.3s;" onfocus="this.style.borderColor='#0077d4'; this.style.background='#fff';" onblur="this.style.borderColor='#e2e8f0'; this.style.background='#f8fafc';" required />
              <textarea placeholder="Your Message *" rows="6" style="padding: 16px 20px; border: 1px solid #e2e8f0; border-radius: 8px; font-family: 'Inter', sans-serif; font-size: 16px; background: #f8fafc; color: #334155; resize: vertical; outline: none; transition: border-color 0.3s;" onfocus="this.style.borderColor='#0077d4'; this.style.background='#fff';" onblur="this.style.borderColor='#e2e8f0'; this.style.background='#f8fafc';" required></textarea>
              <div style="text-align: center; margin-top: 10px;">
                <button type="submit" style="background: #ff5500; color: #fff; padding: 18px 45px; border: none; border-radius: 50px; font-family: 'Inter', sans-serif; font-weight: 700; font-size: 16px; text-transform: uppercase; letter-spacing: 1px; cursor: pointer; transition: all 0.3s; box-shadow: 0 4px 15px rgba(255, 85, 0, 0.3);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 20px rgba(255, 85, 0, 0.4)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(255, 85, 0, 0.3)';">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </section>`;

    content = content.substring(0, startIndex) + newContactBlock + content.substring(endIndex);
    fs.writeFileSync('contact.html', content);
    console.log('contact.html layout updated to be full screen with better alignment.');
} else {
    console.log('contact-container not found in contact.html');
}
