const fs = require('fs');
let indexContent = fs.readFileSync('index.html', 'utf8');
const widgetContent = fs.readFileSync('dumped_fixed.html', 'utf8');
const widgetLines = widgetContent.split(/\r?\n/).slice(2, 64);
const cleanWidget = widgetLines.join('\n');

const result = indexContent.replace(/<style>[\s\S]*?class="custom-services-grid">[\s\S]*?Industrial Supply<\/h3>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/, cleanWidget);

fs.writeFileSync('index.html', result);
console.log('Done!');
