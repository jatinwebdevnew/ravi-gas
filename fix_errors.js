const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(__dirname).filter(file => file.endsWith('.html'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Fix 1: Replace localhost/fuelgize URLs with ravigas.in
  // Also fix escaped URLs like https:\/\/localhost\/fuelgize to https:\/\/ravigas.in
  content = content.replace(/https:\/\/localhost\/fuelgize/g, 'https://ravigas.in');
  content = content.replace(/https:\\\/\\\/localhost\\\/fuelgize/g, 'https:\\\/\\\/ravigas.in');
  // Also any relative /fuelgize paths
  content = content.replace(/"\/fuelgize\//g, '"https://ravigas.in/');

  // Fix 2: Remove cdn-cgi scripts (Cloudflare)
  content = content.replace(/<script[^>]*src=["'][^"']*cdn-cgi[^"']*["'][^>]*><\/script>/g, '');

  // Fix 3: Remove wp-i18n-js-after script block entirely
  // It starts with <script id="wp-i18n-js-after"> and ends with </script>
  content = content.replace(/<script\s+id="wp-i18n-js-after"[\s\S]*?<\/script>/g, '');

  // Remove preloads that might fail from cdn-cgi
  content = content.replace(/<link[^>]*href=["'][^"']*cdn-cgi[^"']*["'][^>]*>/g, '');

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});

console.log('All done fixing console errors.');
