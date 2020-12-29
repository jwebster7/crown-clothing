import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <Logo className="logo-container" />
      </Link>
      <div className='options'>
        <Link className='option' to="/shop">
          S H O P
        </Link>
        <Link className='option' to="/contact">
          C O N T A C T
        </Link>
      </div>
    </div>
  );
};

export default Header;
