import React from "react";
import './Content.css'
import shipping from './images/shipping.jpeg'
import bestPrice from './images/best-price.jpeg'
import quality from './images/quality.jpeg'
import secure from './images/secure.jpeg'


function Content() {

    
    return ( 
        <>
            <div className="hero">
            <h1>Boost your fashion effortlessly with us today!</h1>
            <h4>Effortlessly blend comfort and style with our Casual & Everyday collection, featuring cozy sweaters, versatile denim,<br/> laid-back tees,  and relaxed-fit joggers for your everyday adventures</h4>
            <button id="btn1">VIEW COLLECTION</button>
            </div>
            <div className="content">
                <h2>Most Popular </h2> <button id="view-more">View More...</button>
             <div className="card-container">
                <div className="card">
                    <img src="https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/img-06-a-black-300x366.jpg" alt="img" />
                    <h4>Evening Dresses</h4>
                    <h4>Bohemian Rhapdosy Attire</h4>
                    <h4>Ksh 2500</h4>

                </div>
                <div className="card">
                    <img src="https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/img-08-a-400x488.jpg" alt="img" />
                    <h4>Work & Office</h4>
                    <h4>Timeless Action Collection</h4>
                    <h4>Ksh 1900</h4>

                </div>
                <div className="card">
                    <img src="https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/img-05-a-white-300x366.jpg" alt="img" />
                    <h4>Tops</h4>
                    <h4>Midnight Gala Maxi Dresses</h4>
                    <h4>Ksh 2100</h4>

                </div>
                
             </div>
             <div className="hero-2">
                <div>
                    <h1>Elevate Your Wardrobe, <br />Embrace Timeless Style!</h1>
                    <h4>Explore our collections today and experience the joy of fashion. <br />Shop now for the epitome  of chic sophistication!</h4>
                    <button id="btn2">SHOP NOW</button>
                </div>
             </div>
             <h1 className="mytitle">Why Shop with Us</h1>
             <div className="why-shop-with-us">
                
                <div className="shop-container">
                    <img src={shipping} alt="img1" />
                    <h3>Free Shipping</h3>
                    <p>Shopping with no extra charges – <br />savor the liberty of complimentary shipping <br /> on every order.</p>
                </div>

                <div className="shop-container">
                    <img src={quality} alt="img1" />
                    <h3>Quality Products</h3>
                    <p>Short description or details about the above</p>
                </div>

                <div className="shop-container">
                    <img src={secure} alt="img1" />
                    <h3>Secure Payments</h3>
                    <p>Shop with confidence knowing <br /> that your transactions are safeguarded.</p>
                </div>

                <div className="shop-container">
                    <img src={bestPrice} alt="img1" />
                    <h3>Affordable Prices</h3>
                    <p>Short description or details about the above</p>
                </div>

             </div>
            </div>
        </>
     );
}

export default Content;