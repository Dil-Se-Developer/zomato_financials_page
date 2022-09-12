import React from "react";
import { FiMenu } from "react-icons/fi";
import logo from "../../assets/logo_2.avif";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <div className="PageContainer">
        <nav className="NavSection">
          <div className="NavStart">
            <img src={logo} alt="zomato logo" />
            <span>| Investor Relations</span>
          </div>
          <ul className="NavEnd">
            <li>Financials</li>
            <li>New & Events</li>
            <li>Governance</li>
            <li>Esg initiatives</li>
            <li>resources</li>
          </ul>
        </nav>
        <nav className="NavHamSection">
          <FiMenu size={"30px"} color={"#1c1c1c"} />
        </nav>
      </div>
    </>
  );
};

export default Navbar;
