import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import { setCurrentUser } from "./redux/user/user.actions";

import Header from "./components/header/header.component";
import HomePage from "./pages/home/home.component";
import ShopPage from "./pages/shop/shop.component";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import "./App.css";

function App({ setCurrentUser }) {
  var unsubscribeFromAuth = () => null;

  useEffect(() => {
    // this is an open subscription.
    // a messaging system between this app and firebase.
    // when the auth state changes, firebase will update the authstate.
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        // subscribe to the userRef for any changes to the db
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }, []);

  useEffect(() => {
    return () => unsubscribeFromAuth();
  }, [unsubscribeFromAuth]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/sign-in" component={SignInSignUp} />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  // dispatch receives the action object and passes it to every reducer
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

// connect(stateToProps, dispatchToProps)
export default connect(null, mapDispatchToProps)(App);
