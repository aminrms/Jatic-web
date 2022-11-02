import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Landing from "./LandingPage/Landing";
import { Link } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import Header from "./Navbar/Header";
const MainPage = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/notfound" component={NotFound} />
        <Route exact path="/" component={Landing} />
        <Redirect to="/notfound" />
      </Switch>
    </>
  );
};

export default MainPage;
