import React from "react";
import "./Navbar.css";
import { LuShoppingBag } from "react-icons/lu";




function Navbar() {
    return ( 
        <div>
        <nav>
            <div>
                <img src="https://i.pinimg.com/736x/17/be/49/17be49d34d317573458ff3104110f28f.jpg" alt="" className="logo" />
            </div>
            <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>Categories</li>
                <li>About us</li>

            </ul>
            <LuShoppingBag style={{ color: 'white', fontSize: '2rem' }} />
        </nav>
        </div>
     );
}

export default Navbar;