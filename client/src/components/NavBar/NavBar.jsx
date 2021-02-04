import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import Reg from "../../containers/Registration/Registration";
import Login from "../../containers/Login/Login";

const NavBar = () => {
  return (
    <Router>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a>
            <Link to={"/reg"}>Reg</Link>
          </a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a>
            <Link to={"/login"}>Login</Link>
          </a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/reg" component={Reg} />
      </Switch>
    </Router>
  );
};
// react-router-dom npm install (import BrowserRouter as Router, Route, Switch, Link)
export default NavBar;
