const fs = require('fs');

const aboutContent = fs.readFileSync('about.html', 'utf8');

// Get header and footer parts
const mainStart = aboutContent.indexOf('<main class="site-main"');
const mainContentStart = aboutContent.indexOf('>', mainStart) + 1;
const mainContentEnd = aboutContent.indexOf('</main>');

const headerHTML = aboutContent.substring(0, mainContentStart);
const footerHTML = aboutContent.substring(mainContentEnd);

const domesticCSS = `
<style>
  /* Domestic Page Styles */
  .domestic-hero {
    position: relative; 
    height: 350px; 
    background: url('images/1423x523-banner-2-2.jpg') center/cover no-repeat; 
    display: flex; 
    align-items: center; 
    justify-content: center;
  }
  .domestic-hero::before {
    content: "";
    position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.6);
  }
  .domestic-hero-title {
    position: relative; color: #fff; font-family: 'Thunder', 'Inter', sans-serif; 
    font-size: 64px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; z-index: 1;
  }
  
  .domestic-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 20px;
    font-family: 'Inter', sans-serif;
  }
  
  .domestic-section {
    background: #ffffff;
    border-radius: 12px;
    padding: 50px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.05);
    margin-bottom: 40px;
    border-top: 4px solid #0077d4;
  }
  
  .domestic-section.orange-border {
    border-top: 4px solid #ff5500;
  }
  
  .domestic-title {
    font-size: 32px;
    color: #1e293b;
    font-weight: 700;
    margin-bottom: 25px;
    font-family: 'Thunder', 'Inter', sans-serif;
    letter-spacing: 1px;
  }
  
  .domestic-text {
    font-size: 18px;
    color: #475569;
    line-height: 1.8;
    margin-bottom: 20px;
  }
  
  .domestic-highlight {
    font-weight: 700;
    color: #0077d4;
  }
  
  .domestic-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
    margin-bottom: 40px;
  }
  
  .domestic-card {
    background: #f8fafc;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.03);
    transition: transform 0.3s ease;
  }
  
  .domestic-card:hover {
    transform: translateY(-5px);
  }
  
  @media (max-width: 768px) {
    .domestic-hero-title {
      font-size: 42px;
    }
    .domestic-section {
      padding: 30px 20px;
    }
    .domestic-title {
      font-size: 26px;
    }
    .domestic-text {
      font-size: 16px;
    }
  }
</style>
`;

const domesticHTML = `
  ${domesticCSS}
  <div class="header-space"></div>
  
  <!-- Hero Section -->
  <section class="domestic-hero">
    <h1 class="domestic-hero-title">DOMESTIC LPG</h1>
  </section>

  <div class="domestic-container">
    
    <!-- Introduction Section -->
    <div class="domestic-section">
      <h2 class="domestic-title">DOMESTIC LPG SERVICES</h2>
      <p class="domestic-text">
        At RAVI GAS SERVICE, through all of our Gurugram activities we believe in providing comfort to customers. With that in mind, we launched ‘Beyond LPG’ in 2004 as part of the bouquet of BPCL Value-Added Services. Bharat Petroleum collaborated with trusted brands / manufacturers and Bharat gas Distributors as part of this initiative to offer branded goods at competitive prices at customer’s doorsteps.
      </p>
      <p class="domestic-text">
        Ravi Gas Service Products on sale to customers include similar LPG products. Bearing in mind consumer health and customer loyalty, we also sell high-quality Suraksha LPG hose, as well as fuel efficient hotplates.
      </p>
    </div>

    <!-- Product Grid -->
    <div class="domestic-grid">
      <!-- Mini Cylinder -->
      <div class="domestic-card">
        <h3 class="domestic-title" style="font-size: 24px; color: #ff5500;">BHARAT GAS MINI</h3>
        <p class="domestic-text">
          Government has allowed 5 kg LPG cylinder with / without Domestic Pressure Regulator (DPR) to be sold through Public Sector Oil Marketing Companies (OMCs) Retail outlets, accessible to all and open for longer hours. Subsequently, the selling of 5 kg FTL cylinder was expanded to LPG distributorship points and Kirana / General stores etc. for more convenience of the target consumers as well.
        </p>
        <p class="domestic-text">
          The LPG sold under the system is known as Free Trade LPG (FTL). Only the cost of the commodity will be payable upon subsequent refill. Now you have the right to purchase Bharatgas Mini Cylinders (5 kg) in select cities at your convenience.
        </p>
        <p class="domestic-text domestic-highlight">You can pick up a Bharat gas Mini cylinder from Ravi Gas service.</p>
      </div>

      <!-- Composite Cylinder -->
      <div class="domestic-card">
        <h3 class="domestic-title" style="font-size: 24px; color: #ff5500;">COMPOSITE LPG CYLINDER</h3>
        <p class="domestic-text">
          Government has allowed 10 kg LPG cylinder with / without Domestic Pressure Regulator (DPR) to be sold through Public Sector Oil Marketing Companies (OMCs) Retail outlets, accessible to all and open for longer hours. Subsequently, the selling of 10 kg Composite LPG Cylinder was expanded to LPG distributorship points and Kirana / General stores etc.
        </p>
        <p class="domestic-text">
          The LPG sold under the system is known as Free Trade LPG (FTL). The cost of the product at the prevailing Non-Domestic 10 Kg cylinder price and administrative costs will be payable at the time of first selling cost of equipment. 
        </p>
        <p class="domestic-text domestic-highlight">You can pick up a Bharat gas Composite LPG Cylinder from Ravi Gas service.</p>
      </div>
    </div>

    <!-- Mandatory Inspection -->
    <div class="domestic-section orange-border">
      <h2 class="domestic-title">MANDATORY INSPECTION</h2>
      <p class="domestic-text">
        According to the Ministry of Petroleum & Natural Gas policy, an employee i.e. Bharat Gas mechanic will visit your home for the compulsory inspection of your gas connection, which takes place once in every two years. Your home and family's safety depends on that inspection.
      </p>
      <p class="domestic-text">
        During the inspection, any faulty gas equipment is to be replaced otherwise your safety is always at risk and your gas supply will be suspended. The sole responsibility of any unfair incident arising from faulty gas equipment lies only with the consumer. Also, the insurance policy lapses if the faulty equipment is not replaced. The operating condition of the stove is checked and other necessary instructions regarding safe use of LPG are given.
      </p>
      <p class="domestic-text domestic-highlight">
        View above, every two-year mandatory inspection of all gas consumers is of paramount importance as it improves customer safety and validates the insurance policy as well.
      </p>
    </div>

    <!-- Conservation Tips -->
    <div class="domestic-section">
      <h2 class="domestic-title">CONSERVATION TIPS</h2>
      <p class="domestic-text">
        <strong>Is there a way to save cooking LPG?</strong><br>
        Yes, there is and it’s no rocket science. Little adjustments in your cooking style here and there will do the trick. Scroll below to find some important tips on how you can save domestic LPG. Follow these 9 tips and find yourselves the difference in the LPG consumption in your kitchen.
      </p>
      <p class="domestic-text">
        If we conserve fuel, well it’s simple; it can be used by many more people. It is truly very easy to conserve LPG. Just follow above simple tips and save up to 30% LPG and make your cylinder last longer!
      </p>
    </div>

  </div>
`;

// Also fix the Title tag
let finalContent = headerHTML + domesticHTML + footerHTML;
finalContent = finalContent.replace(/<title>.*?<\/title>/, '<title>Domestic - Ravi Gas Service</title>');

fs.writeFileSync('domestic.html', finalContent);
console.log('domestic.html created successfully.');
