import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/home/home.component";
import ShopPage from "./pages/shop/shop.component";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";

import { auth as AuthProvider } from "./firebase/firebase.utils";
// const DummyPage = () => <div>DummyPage</div>;

function App() {
  const [user, setUser] = useState({});

  var unsubscribeFromAuth = () => null;

  useEffect(() => {
    // this is an open subscription.
    // a messaging system between this app and firebase.
    // when the auth state changes, firebase will update the authstate.
    unsubscribeFromAuth = AuthProvider.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  // this might break auth
  useEffect(() => {
    console.log(user);
    return () => unsubscribeFromAuth();
  }, [user, unsubscribeFromAuth]);

  console.log(user);
  return (
    <div>
      <Header currentUser={user} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/sign-in" component={SignInSignUp} />
      </Switch>
      {/* {auth.currentUser ? auth.currentUser.email : ''} */}
    </div>
  );
}

export default App;
