import React from 'react';
import './AboutUs.css';
import { OurMission } from '../components/OurMission'
const AboutUs = () => {
  return (
    <div>
      <section className="hero-section">
        <h2>About Us</h2>
      </section>
   
      <section className="new-section">
        <div className="box-container">
          <div className="box">
            
            <p>"Discover Beauty with Divine Secrets"</p>
          </div>
          <div className="box1">
            <h3>Who We Are:</h3>
            <p>At Divine-Secrets Skincare, we believe in the importance of skin care. We take pride in offering high-quality products designed for all our customers. Our mission is to make skin care enjoyable and unique, helping you maintain healthy, radiant skin. Join us today to explore a variety of products that will help you achieve beautiful skin."</p>
          </div>
        </div>

        
      </section>
      <section className="image-section">
        <div className="image-box">
          <img src="https://img.freepik.com/free-photo/top-view-natural-cosmetics-concept_23-2148565323.jpg" alt="Sample Image" ></img>
          <div className="image-text">
            <h3>About Our Product</h3>
         <p>Our products are designed with care to provide you with the best in skincare. We offer a range of high-quality skincare products tailored to your unique needs. Whether you need gentle cleansers, nourishing moisturizers, or age-defying treatments, we've got you covered.

We believe that taking care of your skin should be enjoyable and rejuvenating. With our products, you'll not only look beautiful but also feel confident in your own skin.

Explore our product range and start your skincare journey with Divine-Secrets today.

Thank you for choosing Divine-Secrets Skincare, where your beauty and skin's well-being are our top priorities.</p>
          </div>
        </div>
      </section>
      <OurMission />
    </div>
    
  );

};
<OurMission />
export default AboutUs;
