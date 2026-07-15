const fs = require('fs');

const files = fs.readdirSync(__dirname).filter(file => file.endsWith('.html'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // We need to find the <div class="mobile-menu-wrap"> or <nav class="mobile-menu"> block
  // and modify the submenu under "OUR SERVICES"
  
  // Since regex can be tricky with HTML, we can just look for the mobile menu section
  const mobileMenuIndex = content.indexOf('class="mobile-menu"');
  if (mobileMenuIndex !== -1) {
    // split the content into before and after mobile menu
    const beforeMobileMenu = content.substring(0, mobileMenuIndex);
    let afterMobileMenu = content.substring(mobileMenuIndex);

    // Replace the toggle and submenu for OUR SERVICES in the mobile menu part
    // The exact HTML is:
    // <a href="#">OUR SERVICES ?</a>
    // <span class="submenu-toggle"></span>
    // <ul class="sub-menu">
    
    // Sometimes there are spaces or newlines, so we use regex on the afterMobileMenu string
    const searchPattern = /(<a[^>]*>OUR SERVICES[^<]*<\/a>\s*)<span class="submenu-toggle"><\/span>(\s*)<ul class="sub-menu">/i;
    
    if (searchPattern.test(afterMobileMenu)) {
      afterMobileMenu = afterMobileMenu.replace(searchPattern, 
        '$1<span class="submenu-toggle" style="display: none !important;"></span>$2<ul class="sub-menu" style="display: block !important;">'
      );
      
      content = beforeMobileMenu + afterMobileMenu;
    }
  }

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});

console.log('Mobile menu updated.');
