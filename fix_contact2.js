const fs = require('fs');

let content = fs.readFileSync('contact.html', 'utf8');

// I need to replace the content inside the contact-container with the new extracted data, while keeping the same theme/design.
// The old block was created by my script, so I can match and replace it.

const startMarker = '<section class="contact-container"';
const startIndex = content.indexOf(startMarker);
if (startIndex !== -1) {
    let endIndex = content.indexOf('</section>', startIndex) + '</section>'.length;
    
    const newContactBlock = `
      <section class="contact-container" style="max-width: 1000px; margin: 0 auto; padding: 50px; background: #fff; box-shadow: 0 10px 40px rgba(0,0,0,0.08); margin-top: -60px; position: relative; z-index: 2; border-radius: 12px; margin-bottom: 80px;">
        <h2 style="text-align: center; font-family: 'Inter', sans-serif; font-size: 32px; font-weight: 700; color: #333; margin-bottom: 40px;">FEEL FREE TO CONTACT US</h2>
        
        <div style="display: flex; flex-wrap: wrap; gap: 30px; margin-bottom: 40px;">
          <div style="flex: 1; min-width: 300px; background: #f9f9f9; padding: 30px; border-radius: 8px;">
            <h3 style="font-family: 'Inter', sans-serif; font-size: 24px; color: #0077d4; margin-bottom: 15px;">Ravi Gas Service</h3>
            
            <p style="font-family: 'Inter', sans-serif; font-size: 16px; color: #555; line-height: 1.6; margin-bottom: 15px;">
              <strong>ADDRESS:</strong><br/>
              DSS - 230, HUDA Market, Sector - 46<br/>
              Gurugram, Haryana 122003
            </p>
            
            <p style="font-family: 'Inter', sans-serif; font-size: 16px; color: #555; line-height: 1.6; margin-bottom: 15px;">
              <strong>GST No:</strong> 06AUOPS7038N1ZR
            </p>

            <p style="font-family: 'Inter', sans-serif; font-size: 16px; color: #555; line-height: 1.6; margin-bottom: 15px;">
              <strong>PHONE:</strong><br/>
              For Domestic LPG query: <a href="https://wa.me/09868251750" style="color: #ff5500; text-decoration: none;"><img src="https://ravigas.in/wp-content/uploads/2023/07/whatsapp-png-logo-7.png" style="width: 20px; vertical-align: middle; margin-right: 5px;">09868251750</a><br/>
              For Commercial LPG query: <a href="https://wa.me/09205123928" style="color: #ff5500; text-decoration: none;"><img src="https://ravigas.in/wp-content/uploads/2023/07/whatsapp-png-logo-7.png" style="width: 20px; vertical-align: middle; margin-right: 5px;">09205123928</a>
            </p>
            
            <p style="font-family: 'Inter', sans-serif; font-size: 16px; color: #555; line-height: 1.6; margin-bottom: 15px;">
              <strong>EMAIL:</strong><br/>
              <a href="mailto:info@ravigas.in" style="color: #ff5500; text-decoration: none;">info@ravigas.in</a><br/>
              <a href="mailto:sales@ravigas.in" style="color: #ff5500; text-decoration: none;">sales@ravigas.in</a>
            </p>
            
            <p style="font-family: 'Inter', sans-serif; font-size: 16px; color: #555; line-height: 1.6;">
              <strong>Web:</strong> <a href="https://ravigas.in" style="color: #0077d4; text-decoration: none;">www.ravigas.in</a>
            </p>
          </div>
          
          <div style="flex: 1.2; min-width: 300px;">
            <div style="width: 100%; height: 100%; min-height: 350px; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14033.739283445766!2d77.058512!3d28.436306!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18977242fd67%3A0xa686ec72f99aa930!2sRavi%20Gas%20Service%20(Bharat%20Gas)!5e0!3m2!1sen!2sin!4v1748411922459!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
        
        <div style="background: #fdfdfd; padding: 30px; border-radius: 8px; border: 1px solid #eee;">
          <h3 style="font-family: 'Inter', sans-serif; font-size: 20px; color: #333; margin-bottom: 20px;">Send us a message</h3>
          <form style="display: flex; flex-direction: column; gap: 15px;">
            <div style="display: flex; gap: 15px; flex-wrap: wrap;">
                <input type="text" placeholder="Your Name" style="flex: 1; min-width: 200px; padding: 12px; border: 1px solid #ccc; border-radius: 4px; font-family: 'Inter', sans-serif;" required />
                <input type="email" placeholder="Your Email" style="flex: 1; min-width: 200px; padding: 12px; border: 1px solid #ccc; border-radius: 4px; font-family: 'Inter', sans-serif;" required />
            </div>
            <input type="text" placeholder="Subject" style="padding: 12px; border: 1px solid #ccc; border-radius: 4px; font-family: 'Inter', sans-serif;" required />
            <textarea placeholder="Your Message" rows="5" style="padding: 12px; border: 1px solid #ccc; border-radius: 4px; font-family: 'Inter', sans-serif; resize: vertical;" required></textarea>
            <button type="submit" style="background: #ff5500; color: #fff; padding: 15px 30px; border: none; border-radius: 4px; font-family: 'Inter', sans-serif; font-weight: 600; font-size: 16px; cursor: pointer; align-self: flex-start; transition: background 0.3s;">Send Message</button>
          </form>
        </div>
      </section>`;

    content = content.substring(0, startIndex) + newContactBlock + content.substring(endIndex);
    fs.writeFileSync('contact.html', content);
    console.log('contact.html updated with text data from the website.');
} else {
    console.log('contact-container not found in contact.html');
}
