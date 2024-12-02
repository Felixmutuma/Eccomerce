import React from "react";
import './Content.css'

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
            </div>
        </>
     );
}

export default Content;