import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selector";

import Header from "./components/header/header.component";
import HomePage from "./pages/home/home.component";
import ShopPage from "./pages/shop/shop.component";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import "./App.css";

function App({ currentUser, setCurrentUser }) {
  // const unsubscribeFromAuth;

  useEffect(() => {
    // this is an open subscription.
    // a messaging system between this app and firebase.
    // when the auth state changes, firebase will update the authstate.
    // unsubscribeFromAuth = auth.onAuthStateChanged
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        // subscribe to the userRef for any changes to the db
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }, [setCurrentUser]);

  // need to find the hook equivalent of componentWillUnmount().
  // useEffect(() => {
  //   return () => unsubscribeFromAuth();
  // });

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          path="/sign-in"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInSignUp />)}
        />
      </Switch>
    </div>
  );
}

// used for mapping state to props
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

// used for distributing actions by mapping actions to props
const mapDispatchToProps = (dispatch) => ({
  // dispatch receives the action object and passes it to every reducer
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
