import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo/aglet_logo.svg";

export default function Header() {
  return (
    <header>
      <nav>
        <div>
          <img src={Logo} alt="Aglet" className="logo img-fluid" />
        </div>
        <div>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
