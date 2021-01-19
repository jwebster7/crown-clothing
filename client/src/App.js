import React, { lazy, useEffect, Suspense } from "react";

import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.actions";

import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import Header from "./components/header/header.component";
// import HomePage from "./pages/home/home.component";
// import ShopPage from "./pages/shop/shop.component";
// import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";
// import CheckoutPage from "./pages/checkout/checkout.component";
import Spinner from "./components/spinner/spinner.component";

// import "./App.css";
import { GlobalStyle } from "./global.styles";

const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));
const HomePage = lazy(() => import("./pages/home/home.component"));
const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const SignInSignUp = lazy(() =>
  import("./pages/sign-in-sign-up/sign-in-sign-up.component")
);

function App({ currentUser, checkUserSession }) {
  // const unsubscribeFromAuth;

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route
              path="/sign-in"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInSignUp />
              }
            />
          </Switch>
        </Suspense>
      </ErrorBoundary>
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
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
