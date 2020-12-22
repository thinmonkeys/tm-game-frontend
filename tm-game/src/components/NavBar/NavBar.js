import "./NavBar.css";
import React, { Component } from "react";
import NavBarItem from "./NavBarItem.js";

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavBarItem
            name="Home"
            path="/"
            isActive={window.location.pathname === "/"}
          />
        </li>
        <li>
          <NavBarItem
            name="Direct Debits"
            path="../DirectDebit/DirectDebit"
            isActive={window.location.pathname === "/DirectDebit/DirectDebit"}
          />
        </li>
        <li>
          <NavBarItem
            name="Incomes"
            path="../Incomes/Incomes"
            isActive={window.location.pathname === "/Incomes/Incomes"}
          />
        </li>
        <li>
          <NavBarItem
            name="Standing Orders"
            path="../StandingOrders"
            isActive={window.location.pathname === "/StandingOrders"}
          />
        </li>
        <li>
          <NavBarItem
            name="Contact"
            path="../Contact/Contact"
            isActive={window.location.pathname === "/Contact/Contact"}
          />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
