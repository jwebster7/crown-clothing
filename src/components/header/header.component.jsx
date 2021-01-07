import React from "react";
import { connect } from "react-redux";
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
      SIGNIN
    </Link>
  );
  return (
    <div className="header">
      <Link to="/">
        <Logo className="logo-container" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {toggleSignInOut}
      </div>
    </div>
  );
};

// state is top-level root reducer
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
