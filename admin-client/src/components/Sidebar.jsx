import React from "react";
import { Link } from "react-router-dom";
import dashboardImg from "../assets/icon3.svg";
import users from "../assets/icon6.svg";
import orders from "../assets/icon4.svg";
import Settings from "../assets/icon2.svg";
import Logout from "../assets/icon1.svg";
import dashboard from "../assets/icon7.svg";
const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="head">
          <img src={dashboard} alt="" />
          <h1>Laundrybin</h1>
        </div>

        <div className="list_links">
          <Link to="/" className="link">
            <img src={dashboardImg} alt="" />
            <h3>Dashboard</h3>
          </Link>

          <Link to="/users" className="link">
            <img src={users} alt="" />
            <h3>Users</h3>
          </Link>

          <Link to="/orders" className="link">
            <img src={orders} alt="" />
            <h3>Orders</h3>
          </Link>

          <Link to="/settings" className="link">
            <img src={Settings} alt="" />
            <h3>Settings</h3>
          </Link>

          <Link to="/logout" className="link">
            <img src={Logout} alt="" />
            <h3>Logout</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
