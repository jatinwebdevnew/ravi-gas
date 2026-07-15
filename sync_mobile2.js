const fs = require('fs');

let indexContent = fs.readFileSync('index.html', 'utf8');

const mobileStart = '<div class="mobile-menu-wrap">';
let mobileStartIndex = indexContent.indexOf(mobileStart);
let mobileEndIndex = indexContent.indexOf('    <main class="site-main', mobileStartIndex);
const mobileMenuBlock = indexContent.substring(mobileStartIndex, mobileEndIndex);

const files = fs.readdirSync(__dirname).filter(f => f.endsWith('.html') && f !== 'index.html');

let updatedFiles = [];
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  let fileMobileStart = content.indexOf(mobileStart);
  if (fileMobileStart !== -1) {
      let fileMobileEnd = content.indexOf('    <main class="site-main', fileMobileStart);
      if (fileMobileEnd === -1) fileMobileEnd = content.indexOf('  <main class="site-main', fileMobileStart);
      if (fileMobileEnd === -1) fileMobileEnd = content.indexOf('<main class="site-main', fileMobileStart);
      
      if (fileMobileEnd !== -1) {
          content = content.substring(0, fileMobileStart) + mobileMenuBlock + content.substring(fileMobileEnd);
      }
  }

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    updatedFiles.push(file);
  }
});

console.log('Synced mobile menu in: ' + updatedFiles.join(', '));
