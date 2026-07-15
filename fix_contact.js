const fs = require('fs');

let content = fs.readFileSync('contact.html', 'utf8');

// Replace title and H1
content = content.replace(/<title>Get New Connection - Ravi Gas Service<\/title>/, '<title>Contact Us - Ravi Gas Service</title>');
content = content.replace(
    /<h1([^>]*)>Get New Connection<\/h1>/,
    '<h1$1>Contact Us</h1>'
);

// We need to replace the entire <section class="kyc-container">...</section>
// Let's find where it starts and ends.
const startIndex = content.indexOf('<section class="kyc-container"');
if (startIndex !== -1) {
    // Find the matching closing </section>
    let endIndex = content.indexOf('</section>', startIndex) + '</section>'.length;
    
    // We replace it with a nice contact block
    const contactBlock = `
      <section class="contact-container" style="max-width: 1000px; margin: 0 auto; padding: 50px; background: #fff; box-shadow: 0 10px 40px rgba(0,0,0,0.08); margin-top: -60px; position: relative; z-index: 2; border-radius: 12px; margin-bottom: 80px;">
        <h2 style="text-align: center; font-family: 'Inter', sans-serif; font-size: 32px; font-weight: 700; color: #333; margin-bottom: 40px;">Get In Touch</h2>
        <div style="display: flex; flex-wrap: wrap; gap: 30px;">
          <div style="flex: 1; min-width: 300px; background: #f9f9f9; padding: 30px; border-radius: 8px;">
            <h3 style="font-family: 'Inter', sans-serif; font-size: 20px; color: #0077d4; margin-bottom: 15px;">Our Office</h3>
            <p style="font-family: 'Inter', sans-serif; font-size: 16px; color: #555; line-height: 1.6; margin-bottom: 15px;">
              <strong>Ravi Gas Service</strong><br/>
              DSS - 230, HUDA Market<br/>
              Sector - 46, Gurugram<br/>
              Haryana 122003
            </p>
            <p style="font-family: 'Inter', sans-serif; font-size: 16px; color: #555; line-height: 1.6; margin-bottom: 15px;">
              <strong>Phone:</strong><br/>
              <a href="tel:09868251750" style="color: #ff5500; text-decoration: none;">09868251750</a>, 
              <a href="tel:09205123928" style="color: #ff5500; text-decoration: none;">09205123928</a>
            </p>
            <p style="font-family: 'Inter', sans-serif; font-size: 16px; color: #555; line-height: 1.6;">
              <strong>Email:</strong><br/>
              <a href="mailto:info@ravigas.in" style="color: #ff5500; text-decoration: none;">info@ravigas.in</a>
            </p>
          </div>
          <div style="flex: 2; min-width: 300px;">
            <form style="display: flex; flex-direction: column; gap: 15px;">
              <input type="text" placeholder="Your Name" style="padding: 12px; border: 1px solid #ccc; border-radius: 4px; font-family: 'Inter', sans-serif;" required />
              <input type="email" placeholder="Your Email" style="padding: 12px; border: 1px solid #ccc; border-radius: 4px; font-family: 'Inter', sans-serif;" required />
              <input type="text" placeholder="Subject" style="padding: 12px; border: 1px solid #ccc; border-radius: 4px; font-family: 'Inter', sans-serif;" required />
              <textarea placeholder="Your Message" rows="5" style="padding: 12px; border: 1px solid #ccc; border-radius: 4px; font-family: 'Inter', sans-serif; resize: vertical;" required></textarea>
              <button type="submit" style="background: #ff5500; color: #fff; padding: 15px 30px; border: none; border-radius: 4px; font-family: 'Inter', sans-serif; font-weight: 600; font-size: 16px; cursor: pointer; align-self: flex-start;">Send Message</button>
            </form>
          </div>
        </div>
      </section>`;

    content = content.substring(0, startIndex) + contactBlock + content.substring(endIndex);
    fs.writeFileSync('contact.html', content);
    console.log('contact.html updated with contact layout.');
} else {
    console.log('kyc-container not found in contact.html');
}
