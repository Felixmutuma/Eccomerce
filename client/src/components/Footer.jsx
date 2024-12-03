import React from "react";
import './Footer.css'

function Footer() {
    return ( 
        <div className="footer">
            <div className="footer-card">
                <h3>Menu</h3>
                <a href="/"><h4>Home</h4></a>
                <a href="/"><h4>Shop</h4></a>
                <a href="/"><h4>Contact Us</h4></a>
                <a href="/"><h4>Home</h4></a>
            </div>
            <div className="footer-card">
                <h3>Categories</h3>
                <a href="/"><h4>Casual</h4></a>
                <a href="/"><h4>Work & Office</h4></a>
                <a href="/"><h4>Activewear</h4></a>
                <a href="/"><h4>Party</h4></a>
            </div>
            <div className="footer-card">
                <h3>Resources</h3>
                <a href="/"><h4>Contact Support</h4></a>
                <a href="/"><h4>FAQS</h4></a>
                <a href="/"><h4>Live Chat</h4></a>
                <a href="/"><h4>Returns</h4></a>
            </div>
            <div className="footer-card">
                <h3>Social Media</h3>
                <a href="/"><h4>FaceBook</h4></a>
                <a href="/"><h4>Twitter</h4></a>
                <a href="/"><h4>Instagram</h4></a>
                <a href="/"><h4>Tiktok</h4></a>
            </div>
        </div>
     );
}

export default Footer;