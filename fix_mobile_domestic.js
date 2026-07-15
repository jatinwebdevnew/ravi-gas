const fs = require('fs');
let content = fs.readFileSync('domestic.html', 'utf8');

// Fix the hardcoded min-widths that cause overflow
content = content.replace(/min-width:\s*320px;/g, 'min-width: 0;');

// Inject mobile-specific overrides before closing body tag
const mobileFixCSS = `
<style>
  /* Ultimate Mobile Responsiveness Fixes */
  @media (max-width: 768px) {
    /* Prevent any horizontal overflow */
    body, html {
      overflow-x: hidden;
      width: 100%;
    }
    
    .domestic-container {
      padding: 0 15px;
      margin-top: -30px;
    }
    
    /* Ensure cards wrap perfectly */
    .premium-card {
      margin-bottom: 30px;
      border-radius: 12px;
    }
    
    .card-content {
      padding: 30px 20px !important;
    }
    
    .card-image-wrapper {
      padding: 20px 15px !important;
    }
    
    /* Fix offset frame causing horizontal scroll */
    .image-frame::before {
      top: 10px !important;
      right: -10px !important;
      border-width: 3px !important;
    }
    
    .premium-card:nth-child(even) .image-frame::before {
      right: auto !important;
      left: -10px !important;
    }
    
    /* Adjust typography for mobile */
    .domestic-hero-title {
      font-size: 40px !important;
      letter-spacing: 2px !important;
    }
    
    .card-title {
      font-size: 24px !important;
      margin-bottom: 15px !important;
    }
    
    .card-title::after {
      width: 40px !important;
    }
    
    .card-text, .premium-list li {
      font-size: 15px !important;
      line-height: 1.6 !important;
      margin-bottom: 15px !important;
    }
    
    .premium-btn {
      padding: 15px 30px !important;
      font-size: 16px !important;
      width: 100%;
      justify-content: center;
    }
    
    .domestic-btn-container {
      margin: 40px 0 20px 0 !important;
    }
  }
</style>
`;

content = content.replace('</body>', mobileFixCSS + '\n</body>');

fs.writeFileSync('domestic.html', content);
console.log('Mobile responsiveness perfectly fixed.');
