const fs = require('fs');

let content = fs.readFileSync('about.html', 'utf8');

// Fix hero banner title
content = content.replace(
  /<h1 style="position: relative; color: #fff; font-family: 'Thunder', 'Inter', sans-serif; font-size: 64px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; z-index: 1;">Contact Us<\/h1>/g,
  `<h1 style="position: relative; color: #fff; font-family: 'Thunder', 'Inter', sans-serif; font-size: 64px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; z-index: 1;">About Us</h1>`
);

// Fix <title> tag
content = content.replace(
  /<title>Contact Us - Ravi Gas Service<\/title>/g,
  '<title>About Us - Ravi Gas Service</title>'
);

fs.writeFileSync('about.html', content);
console.log('Fixed hero banner in about.html');
