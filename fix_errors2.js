const fs = require('fs');

const files = fs.readdirSync(__dirname).filter(file => file.endsWith('.html'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // 1. Remove cdn-cgi multiline scripts
  // e.g. <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js">\n</script>
  content = content.replace(/<script[^>]*src="\/cdn-cgi\/[^>]*>[\s\S]*?<\/script>/g, '');

  // 2. Remove the specific preload image tag that is unused
  content = content.replace(/<link rel="preload" as="image" href="css\/Now-Bharatagas-Booking-made-Simpler-1\.jpg"\s*\/>/g, '');

  // 3. Suppress ChunkLoadError for elementor static exports
  const catchScript = `
    <script>
      window.addEventListener('unhandledrejection', function(event) {
        if (event.reason && event.reason.name === 'ChunkLoadError') {
          event.preventDefault(); // Stop it from showing in the console
        }
      });
    </script>
    <script id="elementor-webpack-runtime-js"`;
  
  if (!content.includes('ChunkLoadError') && content.includes('<script id="elementor-webpack-runtime-js"')) {
    content = content.replace('<script id="elementor-webpack-runtime-js"', catchScript);
  }

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});

console.log('Finished fixing deep errors.');
