const fs = require('fs');

const aboutContent = fs.readFileSync('about.html', 'utf8');

const mainStart = aboutContent.indexOf('<main class="site-main"');
const mainContentStart = aboutContent.indexOf('>', mainStart) + 1;
const mainContentEnd = aboutContent.indexOf('</main>');

const headerHTML = aboutContent.substring(0, mainContentStart);
const footerHTML = aboutContent.substring(mainContentEnd);

const premiumCSS = `
<style>
  /* Premium Domestic Page Styles */
  .domestic-hero {
    position: relative; 
    height: 450px; 
    background: url('images/1423x523-banner-2-2.jpg') center/cover no-repeat fixed; 
    display: flex; 
    align-items: center; 
    justify-content: center;
    overflow: hidden;
  }
  .domestic-hero::before {
    content: "";
    position: absolute; top: 0; left: 0; right: 0; bottom: 0; 
    background: linear-gradient(135deg, rgba(0,25,50,0.8) 0%, rgba(0,119,212,0.6) 100%);
  }
  .domestic-hero-title {
    position: relative; color: #fff; font-family: 'Thunder', 'Inter', sans-serif; 
    font-size: 80px; font-weight: 900; text-transform: uppercase; letter-spacing: 4px; z-index: 1;
    text-shadow: 0 10px 30px rgba(0,0,0,0.3);
    animation: slideDown 1s ease-out forwards;
  }

  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .domestic-container {
    max-width: 1300px;
    margin: -50px auto 80px auto;
    padding: 0 20px;
    position: relative;
    z-index: 10;
  }
  
  .premium-card {
    background: #ffffff;
    border-radius: 20px;
    box-shadow: 0 20px 50px rgba(0,0,0,0.06);
    margin-bottom: 50px;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease;
    border: 1px solid rgba(0, 119, 212, 0.1);
  }
  
  .premium-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 30px 60px rgba(0, 119, 212, 0.15);
  }

  /* Alternating Layout */
  .premium-card:nth-child(even) {
    flex-direction: row-reverse;
  }
  
  .card-content {
    flex: 1.2;
    min-width: 320px;
    padding: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .card-image-wrapper {
    flex: 1;
    min-width: 320px;
    position: relative;
    overflow: hidden;
  }
  
  .card-image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.7s ease;
  }

  .premium-card:hover .card-image-wrapper img {
    transform: scale(1.05);
  }
  
  .card-title {
    font-size: 36px;
    color: #1e293b;
    font-weight: 800;
    margin-bottom: 25px;
    font-family: 'Thunder', 'Inter', sans-serif;
    letter-spacing: 1px;
    text-transform: uppercase;
    position: relative;
    padding-bottom: 15px;
  }

  .card-title::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 60px;
    height: 4px;
    background: #0077d4;
    border-radius: 2px;
    transition: width 0.3s ease;
  }

  .premium-card:hover .card-title::after {
    width: 100px;
    background: #ff5500;
  }
  
  .card-text {
    font-size: 17px;
    color: #475569;
    line-height: 1.8;
    margin-bottom: 20px;
    font-family: 'Inter', sans-serif;
  }
  
  .premium-list {
    list-style: none;
    padding-left: 0;
    margin-bottom: 25px;
  }
  
  .premium-list li {
    font-size: 17px;
    color: #334155;
    line-height: 1.7;
    margin-bottom: 15px;
    padding-left: 35px;
    position: relative;
    font-family: 'Inter', sans-serif;
  }
  
  .premium-list li::before {
    content: "✓";
    position: absolute;
    left: 0;
    top: 2px;
    width: 22px;
    height: 22px;
    background: #e0f2fe;
    color: #0077d4;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
  }
  
  .domestic-btn-container {
    text-align: center;
    margin: 80px 0 40px 0;
  }
  
  .premium-btn {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    background: linear-gradient(135deg, #0077d4 0%, #005fa3 100%);
    color: #fff;
    padding: 18px 50px;
    border-radius: 40px;
    font-size: 20px;
    font-weight: 700;
    font-family: 'Inter', sans-serif;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.3s ease;
    box-shadow: 0 10px 30px rgba(0, 119, 212, 0.4);
    position: relative;
    overflow: hidden;
  }
  
  .premium-btn::after {
    content: '';
    position: absolute;
    top: 0; left: -100%; width: 100%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.7s ease;
  }

  .premium-btn:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 119, 212, 0.6);
    color: #fff;
  }

  .premium-btn:hover::after {
    left: 100%;
  }

  /* Highlights */
  .highlight-orange { color: #ff5500; }
  .bg-orange { background: #ff5500 !important; }

  @media (max-width: 991px) {
    .premium-card, .premium-card:nth-child(even) {
      flex-direction: column-reverse;
    }
    .card-image-wrapper {
      height: 300px;
    }
    .card-content {
      padding: 40px 30px;
    }
  }

  @media (max-width: 768px) {
    .domestic-hero-title { font-size: 50px; }
    .card-title { font-size: 28px; }
    .card-text, .premium-list li { font-size: 16px; }
    .premium-btn { font-size: 16px; padding: 15px 30px; }
  }
</style>
`;

const domesticHTML = `
  ${premiumCSS}
  
  <!-- Hero Section -->
  <section class="domestic-hero">
    <h1 class="domestic-hero-title">DOMESTIC LPG</h1>
  </section>

  <div class="domestic-container">
    
    <!-- 1. DOMESTIC LPG -->
    <div class="premium-card">
      <div class="card-content">
        <h2 class="card-title">DOMESTIC LPG</h2>
        <p class="card-text">
          At RAVI GAS SERVICE, through all of our Gurugram activities we believe in providing comfort to customers. With that in mind, we launched 'Beyond LPG' in 2004 as part of the bouquet of BPCL Value-Added Services. Bharat Petroleum collaborated with trusted brands / manufacturers and Bharat gas Distributors as part of this initiative to offer branded goods at competitive prices at customer's doorsteps.
        </p>
        <p class="card-text">
          Ravi Gas Service Products on sale to customers include similar LPG products. Bearing in mind consumer health and customer loyalty, we also sell high-quality Suraksha LPG hose, as well as fuel efficient hotplates.
        </p>
      </div>
      <div class="card-image-wrapper">
        <img src="https://ravigas.in/wp-content/uploads/2023/06/domestic.jpg" alt="Domestic LPG Cylinders">
      </div>
    </div>

    <!-- 2. SAFETY (No image, spans full) -->
    <div class="premium-card" style="display: block;">
      <div class="card-content" style="padding: 60px;">
        <h2 class="card-title">SAFETY <span class="highlight-orange">GUARANTEED</span></h2>
        <p class="card-text">
          The SURAKSHA LPG hose has been made available via the Bharatgas network for keeping with our commitment to customer safety. The Suraksha hose is made of:
        </p>
        <ul class="premium-list" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 10px;">
          <li>Abrasion, Ozone & Weather Resistant</li>
          <li>Strong Grip (you feel secure)</li>
          <li>Long Lasting (5 years guarantee)</li>
          <li>Leak-proof (100% guarantee)</li>
        </ul>
        <p class="card-text">
          It is recommended that the tube is exchanged for a new one past the expiry period limit. It is standard for residential cooker and is recommended for connection at home.
        </p>
      </div>
    </div>

    <!-- 3. BHARAT GAS MINI -->
    <div class="premium-card">
      <div class="card-content">
        <h2 class="card-title">BHARAT GAS MINI</h2>
        <p class="card-text">
          Government has allowed 5 kg LPG cylinder with / without Domestic Pressure Regulator (DPR) to be sold through Public Sector Oil Marketing Companies (OMCs) Retail outlets, accessible to all and open for longer hours. Subsequently, the selling of 5 kg FTL cylinder was expanded to LPG distributorship points and Kirana / General stores etc. for more convenience of the target consumers as well.
        </p>
        <p class="card-text">
          The LPG sold under the system is known as Free Trade LPG (FTL). Only the cost of the commodity will be payable upon subsequent refill. Now you have the right to purchase Bharatgas Mini Cylinders (5 kg) in select cities at your convenience.
        </p>
        <p class="card-text highlight-orange" style="font-weight: 700; font-size: 18px;">
          You can pick up a Bharat gas Mini cylinder from Ravi Gas service.
        </p>
      </div>
      <div class="card-image-wrapper">
        <img src="https://ravigas.in/wp-content/uploads/2023/06/gasmini.jpg" alt="Bharat Gas Mini Cylinder">
      </div>
    </div>

    <!-- 4. COMPOSITE CYLINDER -->
    <div class="premium-card">
      <div class="card-content">
        <h2 class="card-title">COMPOSITE <span class="highlight-orange">CYLINDER</span></h2>
        <p class="card-text">
          Government has allowed 10 kg LPG cylinder with / without Domestic Pressure Regulator (DPR) to be sold through Public Sector Oil Marketing Companies (OMCs) Retail outlets, accessible to all and open for longer hours. Subsequently, the selling of 10 kg Composite LPG Cylinder was expanded to LPG distributorship points and Kirana / General stores etc. for more convenience of the target consumers as well.
        </p>
        <p class="card-text">
          The LPG sold under the system is known as Free Trade LPG (FTL). Only the cost of the commodity will be payable upon subsequent refill. Now you have the right to purchase Bharatgas Composite LPG Cylinder (10 kg) in select cities at your convenience.
        </p>
        <p class="card-text highlight-orange" style="font-weight: 700; font-size: 18px;">
          You can pick up a Bharat gas Composite LPG Cylinder from Ravi Gas service.
        </p>
      </div>
      <div class="card-image-wrapper">
        <img src="https://ravigas.in/wp-content/uploads/2023/07/10-kg-cilender.jpg" alt="Composite LPG Cylinder">
      </div>
    </div>

    <!-- 5. MANDATORY INSPECTION -->
    <div class="premium-card">
      <div class="card-content">
        <h2 class="card-title">MANDATORY INSPECTION</h2>
        <p class="card-text">
          According to the Ministry of Petroleum & Natural Gas policy, An employee i.e. Bharat Gas mechanic will visit your home for the compulsory inspection of your gas connection, which takes place once in every two years. Your home and family's safety depends on that inspection.
        </p>
        <p class="card-text">
          During the inspection, any faulty gas equipment is to be replaced otherwise your safety is always at risk and your gas supply will be suspended. The sole responsibility of any unfair incident arising from faulty gas equipment lies only with the consumer.
        </p>
        <p class="card-text" style="font-style: italic; background: #fff7ed; padding: 15px; border-left: 4px solid #ff5500; border-radius: 4px;">
          Every two-year mandatory inspection of all gas consumers is of paramount importance as it improves customer safety and validates the insurance policy as well.
        </p>
      </div>
      <div class="card-image-wrapper">
        <img src="https://ravigas.in/wp-content/uploads/2023/06/inspec.jpg" alt="Mandatory Inspection">
      </div>
    </div>

    <!-- 6. CONSERVATION TIPS -->
    <div class="premium-card">
      <div class="card-content">
        <h2 class="card-title">CONSERVATION TIPS</h2>
        <p class="card-text highlight-orange" style="font-weight: 700; font-size: 20px;">
          Is there a way to save cooking LPG?
        </p>
        <p class="card-text">
          Yes, there is and it’s no rocket science. Little adjustments in your cooking style here and there will do the trick. Scroll below to find some important tips on how you can save domestic LPG.
        </p>
        <ul class="premium-list">
          <li><strong>Pressure Cooking:</strong> Pressure cooking saves fuel, especially 20% on rice, 46% on pulses and so on as compared to conventional method of cooking.</li>
          <li><strong>Water Quantity:</strong> The optimum quantity of water saves fuel. If you use surplus amount of water, extra energy is required to evaporate the same.</li>
          <li><strong>Low flame:</strong> When the liquid reaches boiling point, switch your stove to low flame as it’s enough to keep them boiling.</li>
          <li><strong>Soaking:</strong> Soaking saves fuel and time.</li>
          <li><strong>Wide vessels:</strong> It is always better to use wide flat bottom vessels over narrow ones since they capture the flames better.</li>
          <li><strong>Use Lids:</strong> It is a good practice to cover cooking vessels and pans with a lid as it stops the heat from loss to the atmosphere.</li>
          <li><strong>Clean the burners & vessels:</strong> Regular maintenance of your stove keeps you safe too. A coating of un-burnt carbon increases fuel consumption by as much as 10%.</li>
        </ul>
        <p class="card-text" style="font-weight: 600;">
          If we conserve fuel, well it’s simple; it can be used by many more people. Save up to 30% LPG and make your cylinder last longer!
        </p>
      </div>
      <div class="card-image-wrapper">
        <img src="https://ravigas.in/wp-content/uploads/2023/06/conserv-1.jpg" alt="Conservation Tips">
      </div>
    </div>

    <!-- Get A New Connection Button -->
    <div class="domestic-btn-container">
      <a href="get-new-connection.html" class="premium-btn">
        Get A New Connection
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </a>
    </div>

  </div>
`;

let finalContent = headerHTML + domesticHTML + footerHTML;
fs.writeFileSync('domestic.html', finalContent);
console.log('domestic.html redesigned with premium theme and animations.');
