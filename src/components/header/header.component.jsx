import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import { auth } from "../../firebase/firebase.utils";
import "./header.styles.scss";

const Header = ({ currentUser }) => {
  const toggleSignInOut = currentUser ? (
    <div className="option" onClick={() => auth.signOut()}>
      SIGN OUT
    </div>
  ) : (
    <Link className="option" to="/sign-in">
      S I G N I N
    </Link>
  );
  return (
    <div className="header">
      <Link to="/">
        <Logo className="logo-container" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          S H O P
        </Link>
        <Link className="option" to="/contact">
          C O N T A C T
        </Link>
        {toggleSignInOut}
      </div>
    </div>
  );
};

export default Header;
