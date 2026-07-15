const fs = require('fs');

const aboutContent = fs.readFileSync('about.html', 'utf8');

const mainStart = aboutContent.indexOf('<main class="site-main"');
const mainContentStart = aboutContent.indexOf('>', mainStart) + 1;
const mainContentEnd = aboutContent.indexOf('</main>');

const headerHTML = aboutContent.substring(0, mainContentStart);
const footerHTML = aboutContent.substring(mainContentEnd);

const domesticCSS = `
<style>
  /* Domestic Page Row Styles */
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
    padding: 60px 20px;
    font-family: 'Inter', sans-serif;
  }
  
  .domestic-row {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    margin-bottom: 60px;
    align-items: flex-start;
  }
  
  .domestic-content {
    flex: 2;
    min-width: 300px;
  }
  
  .domestic-image {
    flex: 1;
    min-width: 300px;
  }
  
  .domestic-image img {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    display: block;
    margin: 0 auto;
  }
  
  .domestic-title {
    font-size: 28px;
    color: #1e293b;
    font-weight: 700;
    margin-bottom: 20px;
    font-family: 'Thunder', 'Inter', sans-serif;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  
  .domestic-text {
    font-size: 16px;
    color: #475569;
    line-height: 1.8;
    margin-bottom: 20px;
  }
  
  .domestic-list {
    list-style: none;
    padding-left: 0;
    margin-bottom: 20px;
  }
  
  .domestic-list li {
    font-size: 16px;
    color: #475569;
    line-height: 1.8;
    margin-bottom: 12px;
    padding-left: 24px;
    position: relative;
  }
  
  .domestic-list li::before {
    content: "•";
    color: #0077d4;
    font-size: 24px;
    position: absolute;
    left: 0;
    top: -4px;
  }
  
  .domestic-btn-container {
    text-align: center;
    margin: 60px 0;
  }
  
  .domestic-btn {
    display: inline-block;
    background-color: #0077d4;
    color: #fff;
    padding: 15px 40px;
    border-radius: 30px;
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;
    transition: background-color 0.3s ease, transform 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 119, 212, 0.4);
  }
  
  .domestic-btn:hover {
    background-color: #005fa3;
    color: #fff;
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    .domestic-hero-title {
      font-size: 42px;
    }
    .domestic-row {
      flex-direction: column;
    }
    .domestic-image {
      width: 100%;
      order: -1; /* Image appears above text on mobile */
      margin-bottom: 20px;
    }
    .domestic-title {
      font-size: 24px;
    }
  }
</style>
`;

const domesticHTML = `
  ${domesticCSS}
  <div class="header-space"></div>
  
  <!-- Hero Section -->
  <section class="domestic-hero">
    <h1 class="domestic-hero-title">DOMESTIC</h1>
  </section>

  <div class="domestic-container">
    
    <!-- 1. DOMESTIC LPG -->
    <div class="domestic-row">
      <div class="domestic-content">
        <h2 class="domestic-title">DOMESTIC LPG</h2>
        <p class="domestic-text">
          At RAVI GAS SERVICE, through all of our Gurugram activities we believe in providing comfort to customers. With that in mind, we launched 'Beyond LPG' in 2004 as part of the bouquet of BPCL Value-Added Services. Bharat Petroleum collaborated with trusted brands / manufacturers and Bharat gas Distributors as part of this initiative to offer branded goods at competitive prices at customer's doorsteps.
        </p>
        <p class="domestic-text">
          Ravi Gas Service Products on sale to customers include similar LPG products. Bearing in mind consumer health and customer loyalty, we also sell high-quality Suraksha LPG hose, as well as fuel efficient hotplates.
        </p>
      </div>
      <div class="domestic-image">
        <img src="https://ravigas.in/wp-content/uploads/2023/06/domestic.jpg" alt="Domestic LPG Cylinders">
      </div>
    </div>

    <!-- 2. SAFETY -->
    <div class="domestic-row">
      <div class="domestic-content">
        <h2 class="domestic-title">SAFETY</h2>
        <p class="domestic-text">
          The SURAKSHA LPG hose has been made available via the Bharatgas network for keeping with our commitment to customer safety. The Suraksha hose is made of:
        </p>
        <ul class="domestic-list">
          <li>Abrasion, Ozone & Weather Resistant</li>
          <li>Strong Grip (you feel secure)</li>
          <li>Long Lasting (5 years guarantee)</li>
          <li>Leak-proof (100% guarantee)</li>
        </ul>
        <p class="domestic-text">
          It is recommended that the tube is exchanged for a new one past the expiry period limit. It is standard for residential cooker and is recommended for connection at home.
        </p>
      </div>
      <!-- No image for safety in mockup -->
    </div>

    <!-- 3. BHARAT GAS MINI -->
    <div class="domestic-row">
      <div class="domestic-content">
        <h2 class="domestic-title">BHARAT GAS MINI</h2>
        <p class="domestic-text">
          Government has allowed 5 kg LPG cylinder with / without Domestic Pressure Regulator (DPR) to be sold through Public Sector Oil Marketing Companies (OMCs) Retail outlets, accessible to all and open for longer hours. Subsequently, the selling of 5 kg FTL cylinder was expanded to LPG distributorship points and Kirana / General stores etc. for more convenience of the target consumers as well.
        </p>
        <p class="domestic-text">
          The LPG sold under the system is known as Free Trade LPG (FTL). The cost of the product at the prevailing Non-Domestic 5 Kg cylinder price and administrative costs will be payable at the time of first selling cost of equipment (DPR plus cylinder). Only the cost of the commodity will be payable upon subsequent refill. Ravi Gas Service understand that you need the versatility to purchase cylinders at will. Now you have the right to purchase Bharatgas Mini Cylinders (5 kg) in select cities at your convenience.
        </p>
        <p class="domestic-text">
          You can pick up a Bharat gas Mini cylinder from Ravi Gas service.
        </p>
      </div>
      <div class="domestic-image">
        <img src="https://ravigas.in/wp-content/uploads/2023/06/gasmini.jpg" alt="Bharat Gas Mini Cylinder">
      </div>
    </div>

    <!-- 4. COMPOSITE CYLINDER -->
    <div class="domestic-row">
      <div class="domestic-content">
        <h2 class="domestic-title">BHARAT GAS COMPOSITE LPG Cylinder</h2>
        <p class="domestic-text">
          Government has allowed 10 kg LPG cylinder with / without Domestic Pressure Regulator (DPR) to be sold through Public Sector Oil Marketing Companies (OMCs) Retail outlets, accessible to all and open for longer hours. Subsequently, the selling of 10 kg Composite LPG Cylinder was expanded to LPG distributorship points and Kirana / General stores etc. for more convenience of the target consumers as well.
        </p>
        <p class="domestic-text">
          The LPG sold under the system is known as Free Trade LPG (FTL). The cost of the product at the prevailing Non-Domestic 10 Kg cylinder price and administrative costs will be payable at the time of first selling cost of equipment (DPR plus cylinder). Only the cost of the commodity will be payable upon subsequent refill. Ravi Gas Service understand that you need the versatility to purchase cylinders at will. Now you have the right to purchase Bharatgas Composite LPG Cylinder (10 kg) in select cities at your convenience.
        </p>
        <p class="domestic-text">
          You can pick up a Bharat gas Composite LPG Cylinder from Ravi Gas service.
        </p>
      </div>
      <div class="domestic-image">
        <img src="https://ravigas.in/wp-content/uploads/2023/07/10-kg-cilender.jpg" alt="Composite LPG Cylinder">
      </div>
    </div>

    <!-- 5. MANDATORY INSPECTION -->
    <div class="domestic-row">
      <div class="domestic-content">
        <h2 class="domestic-title">MANDATORY INSPECTION</h2>
        <p class="domestic-text">
          According to the Ministry of Petroleum & Natural Gas policy, An employee i.e. Bharat Gas mechanic will visit your home for the compulsory inspection of your gas connection, which takes place once in every two years. Your home and family's safety depends on that inspection.
        </p>
        <p class="domestic-text">
          During the inspection, any faulty gas equipment is to be replaced otherwise your safety is always at risk. Any faulty gas equipment shall be replaced during the inspection, otherwise your safety is always at risk and your gas supply will be suspended (Subscription Voucher Ref Clause 10 issued). The sole responsibility of any unfair incident arising from faulty gas equipment lies only with the consumer. Also, the insurance policy lapses if the faulty equipment is not replaced. The operating condition of the stove is checked and other necessary instructions regarding safe use of LPG are given.
        </p>
        <p class="domestic-text">
          View above, every two-year mandatory inspection of all gas consumers is of paramount importance as it improves customer safety and validates the insurance policy as well.
        </p>
      </div>
      <div class="domestic-image">
        <img src="https://ravigas.in/wp-content/uploads/2023/06/inspec.jpg" alt="Mandatory Inspection">
      </div>
    </div>

    <!-- 6. CONSERVATION TIPS -->
    <div class="domestic-row">
      <div class="domestic-content">
        <h2 class="domestic-title">CONSERVATION TIPS</h2>
        <p class="domestic-text">
          Is there a way to save cooking LPG?
        </p>
        <p class="domestic-text">
          Yes, there is and it’s no rocket science. Little adjustments in your cooking style here and there will do the trick. Scroll below to find some important tips on how you can save domestic LPG.
        </p>
        <ul class="domestic-list">
          <li><strong>Pressure Cooking:</strong> Pressure cooking saves fuel, especially 20% on rice, 46% on pulses and so on as compared to conventional method of cooking. The saving is time is also very good.</li>
          <li><strong>Water Quantity:</strong> The optimum quantity of water saves fuel. If you use surplus amount of water, extra energy is required to evaporate the same.</li>
          <li><strong>Low flame:</strong> When the liquid reaches boiling point, switch your stove to low flame as it’s enough to keep them boiling. Anything extra will be a wastage of energy.</li>
          <li><strong>Soaking:</strong> Soaking saves fuel and time.</li>
          <li><strong>Wide vessels:</strong> It is always better to use wide flat bottom vessels over narrow ones since they capture the flames better. And if you cover the flame as much as possible by using a broad vessel, you will save fuel.</li>
          <li><strong>Use Lids:</strong> It is a good practice to cover cooking vessels and pans with a lid as it stops the heat from loss to the atmosphere, which leads to a waste of fuel.</li>
          <li><strong>Use small burners:</strong> A cooking pan continues to boil on low with a small burner. This small burner consumes 6% to 10% less.</li>
          <li><strong>Clean the burners:</strong> It is important to clean the burners of your gas stove regularly. Soot clogged gas burners increase fuel consumption. Regular maintenance of your stove keeps you safe too.</li>
          <li><strong>Clean the vessels:</strong> A coating of un-burnt carbon is usually found on the bottom of vessels and cookers, which prevent the heat passing into, causing the loss of heat to the vessels contents. This increases your fuel consumption by as much as 10%.</li>
        </ul>
        <p class="domestic-text">
          Follow these 9 tips and find yourselves the difference in the LPG consumption in your kitchen.
        </p>
        <p class="domestic-text">
          If we conserve fuel, well it’s simple; it can be used by many more people. It is truly very easy to conserve LPG. Just follow above simple tips and save up to 30% LPG and make your cylinder last longer!
        </p>
      </div>
      <div class="domestic-image">
        <img src="https://ravigas.in/wp-content/uploads/2023/06/conserv-1.jpg" alt="Conservation Tips">
      </div>
    </div>

    <!-- Get A New Connection Button -->
    <div class="domestic-btn-container">
      <a href="get-new-connection.html" class="domestic-btn">Get A New Connection</a>
    </div>

  </div>
`;

let finalContent = headerHTML + domesticHTML + footerHTML;
fs.writeFileSync('domestic.html', finalContent);
console.log('domestic.html redesigned successfully to match image.');
