import React from "react";
import { LuShoppingBag } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar({ cartCount }) {
  const navigate = useNavigate();

  return (
    <div>
      <nav>
        <div>
          <img
            src="https://i.pinimg.com/736x/17/be/49/17be49d34d317573458ff3104110f28f.jpg"
            alt=""
            className="logo"
          />
        </div>
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/shop")}>Shop</li>
          <li onClick={() => navigate("/categories")}>Categories</li>
          <li onClick={() => navigate("/about-us")}>About Us</li>
        </ul>
        <div style={{ position: "relative", cursor: "pointer" }}>
          <LuShoppingBag
            style={{ color: "white", fontSize: "2rem" }}
            onClick={() => navigate("/cart")}
          />
          {cartCount > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-8px",
                right: "-10px",
                backgroundColor: "red",
                color: "white",
                borderRadius: "50%",
                padding: "4px 8px",
                fontSize: "12px",
              }}
            >
              {cartCount}
            </span>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
