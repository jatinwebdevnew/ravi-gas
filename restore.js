const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// 1. Inject temp_services.html
const tempServices = fs.readFileSync('temp_services.html', 'utf8');
const regex = /<div class="elementor-element elementor-element-c24a68c[^>]*>[\s\S]*?pt-icon-box.default">[\s\S]*?<div class="elementor-widget-container">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;
if (regex.test(content)) {
  content = content.replace(regex, tempServices);
  console.log('Successfully replaced c24a68c with custom services.');
} else {
  console.log('Could not find elementor-element-c24a68c. Trying alternative...');
  // It might be 8f952d9 from earlier
  const altRegex = /<div class="elementor-element elementor-element-8f952d9 e-con-full e-flex elementor-invisible e-con e-parent"[\s\S]*?<a href="https:\/\/promo-theme\.com\/fuelgize\/exploring-offshore-opportunities-deep-dive-into-offshore-drilling\/" class="pt-button textual">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/;
  if (altRegex.test(content)) {
    content = content.replace(altRegex, tempServices);
    console.log('Successfully replaced 8f952d9 with custom services.');
  } else {
    console.log('Failed to find block to replace!');
  }
}

// 2. Inject modal.html at the end of the body
const modal = fs.readFileSync('modal.html', 'utf8');
content = content.replace('</body>', modal + '\n  </body>');

fs.writeFileSync('index.html', content);
console.log('Done restoring customizations!');
