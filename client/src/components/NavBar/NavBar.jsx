import React from "react";
import { Breadcrumb } from "antd";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Registration from "../../containers/Registration/Registration";
import Login from "../../containers/Login/Login";
import Dashboard from "../../containers/Dashboard/Dashboard";
import Rewards from "../../containers/Rewards/Rewards";
import Communication from "../../containers/Communication/Communication";

const NavBar = () => {
  return (
    <Router>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to={"/dashboard"}>Dashboard</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={"/registration"}>Registration</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={"/login"}>Login</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={"/rewards"}>Rewards</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={"/communication"}>Communication</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/rewards" component={Rewards} />
        <Route path="/communication" component={Communication} />
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
};
// react-router-dom npm install (import BrowserRouter as Router, Route, Switch, Link)
export default NavBar;
