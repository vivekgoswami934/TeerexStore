import React from "react";
import "./Navbar.css";
import a from "../../images/logo.png";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { useGlobalContext } from "../../Context";

const Navbar = () => {
  const { cart } = useGlobalContext();

  return (
    <div className="navbar">
      <Link to="/" className="logo_details link">
        <img className="logo" src={a} alt="logo" />
        TeeRex Store
      </Link>
      <span className="product_cart">
        <Link className="link" to="/">
          Products
        </Link>
        <Link className="link" to="/cart">
          <span><BsCart2 /> {cart?.length}</span>
          
        </Link>
      </span>
    </div>
  );
};

export default Navbar;
