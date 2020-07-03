import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/discover">
            Discover Movies
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
