const fs = require('fs');
let indexContent = fs.readFileSync('index.html', 'utf8');
const customWidget = fs.readFileSync('temp_services.html', 'utf8');

const result = indexContent.replace(/<div class="elementor-element elementor-element-8f952d9 e-con-full e-flex elementor-invisible e-con e-parent"[\s\S]*?<a href="our-products\.html" class="pt-service-link"><\/a>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/, customWidget);

fs.writeFileSync('index.html', result);
console.log('Done!');
