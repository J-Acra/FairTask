import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import injectContext from "./store/appContext";
import { Login } from "./pages/login.jsx";
import { DashBoard } from "./pages/dashboard.jsx";
import { Registration } from "./pages/registration.jsx";
import { LandingPage } from "./pages/landingPage.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div className="h-100">
      <ToastContainer />
      <BrowserRouter basename={basename}>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Registration />
          </Route>
          <Route exact path="/home">
            <DashBoard />
          </Route>
          <Route>
            <h1>Not found!</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
