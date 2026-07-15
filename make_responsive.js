const fs = require('fs');

let content = fs.readFileSync('about.html', 'utf8');

// We will inject a style block before the about-container
const styleBlock = `
<style>
  /* Responsive styles for About page */
  .about-hero-title {
    font-size: 56px;
  }
  .about-rates-box {
    padding: 50px;
  }
  .about-flex-container {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
  }
  .about-flex-item-text {
    flex: 1.5;
    min-width: 280px;
  }
  .about-flex-item-img {
    flex: 1;
    min-width: 280px;
  }
  .about-rates-container {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
  }
  .about-rates-item {
    flex: 1;
    min-width: 280px;
  }
  .about-mission-container {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-top: 60px;
    margin-bottom: 20px;
  }
  .about-mission-card {
    flex: 1;
    min-width: 280px;
    background: #ffffff;
    padding: 40px 30px;
    border-radius: 12px;
    border-bottom: 4px solid #ffcd57;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .about-mission-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.1);
  }
  
  @media (max-width: 768px) {
    .about-hero-title {
      font-size: 36px !important;
    }
    .about-rates-box {
      padding: 20px !important;
    }
    .about-flex-container, .about-rates-container, .about-mission-container {
      gap: 30px;
    }
    /* Force full width on smaller screens */
    .about-flex-item-text, .about-flex-item-img, .about-rates-item, .about-mission-card {
      min-width: 100% !important;
    }
  }
</style>
`;

// Insert style block just before <section class="about-container"
if (!content.includes('/* Responsive styles for About page */')) {
  content = content.replace('<section class="about-container"', styleBlock + '\n<section class="about-container"');
}

// Now replace inline styles with classes

// 1. Hero Title
content = content.replace(
  /font-size: 56px;/g,
  'font-size: 56px;" class="about-hero-title'
);

// 2. Main Flex Container
content = content.replace(
  /style="display: flex; flex-wrap: wrap; gap: 50px; align-items: flex-start; margin-bottom: 60px;"/g,
  'class="about-flex-container" style="align-items: flex-start; margin-bottom: 60px;"'
);

// 3. Text Item
content = content.replace(
  /style="flex: 1\.5; min-width: 350px;"/g,
  'class="about-flex-item-text"'
);

// 4. Image Item
content = content.replace(
  /style="flex: 1; min-width: 350px;"/g,
  'class="about-flex-item-img"'
);

// 5. Rates Box
content = content.replace(
  /style="background: #ffffff; padding: 50px; border-radius: 12px;/g,
  'class="about-rates-box" style="background: #ffffff; border-radius: 12px;'
);

// 6. Rates Flex Container
content = content.replace(
  /style="display: flex; flex-wrap: wrap; gap: 40px;"/g,
  'class="about-rates-container"'
);

// 7. Rates Items (Domestic & Non Domestic)
content = content.replace(
  /style="flex: 1; min-width: 300px;"/g,
  'class="about-rates-item"'
);

// 8. Mission Container
content = content.replace(
  /style="display: flex; flex-wrap: wrap; gap: 30px; margin-top: 60px; margin-bottom: 20px;"/g,
  'class="about-mission-container"'
);

// 9. Mission Cards
const oldMissionCardStyle = `style="flex: 1; min-width: 300px; background: #ffffff; padding: 40px 30px; border-radius: 12px; border-bottom: 4px solid #ffcd57; box-shadow: 0 10px 30px rgba(0,0,0,0.05); text-align: center; transition: transform 0.3s ease, box-shadow 0.3s ease;" onmouseover="this.style.transform='translateY(-10px)'; this.style.boxShadow='0 15px 40px rgba(0,0,0,0.1)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 10px 30px rgba(0,0,0,0.05)';"`;
content = content.split(oldMissionCardStyle).join('class="about-mission-card"');

fs.writeFileSync('about.html', content);
console.log('about.html is now fully responsive.');
