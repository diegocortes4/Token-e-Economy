import React from "react";
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Registration from "../../containers/Registration/Registration";
import Login from "../../containers/Login/Login";
import Dashboard from "../../containers/Dashboard/Dashboard";
import Task from "../../containers/Task/Task";
import TaskUpdate from "../../containers/TaskUpdate/TaskUpdate";
import Rewards from "../../containers/Rewards/Rewards";
import RewardsUpdate from "../../containers/RewardsUpdate/RewardsUpdate";
import Communication from "../../containers/Communication/Communication";

const { Header } = Layout;

const NavBar = () => {
  return (
    <Router>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link to={"/login"}>Login</Link>
            </Menu.Item>
            {/* <Menu.Item key="2">
              <Link to={"/registration"}>Registration</Link>
            </Menu.Item> */}
            <Menu.Item key="2">
              <Link to={"/dashboard"}>Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to={`/task/${sessionStorage.getItem("currentuserid")}`}>
                Task
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to={"/rewards"}>Rewards</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to={"/communication"}>Communication</Link>
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>

      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/task/:id" component={Task} />
        <Route exact path="/task/update/:id" component={TaskUpdate} />
        <Route exact path="/rewards" component={Rewards} />
        <Route exact path="/rewards/update/:id" component={RewardsUpdate} />
        <Route path="/communication" component={Communication} />
        <Route exact path="/" component={Login} />
      </Switch>
    </Router>
  );
};
// react-router-dom npm install (import BrowserRouter as Router, Route, Switch, Link)
export default NavBar;
