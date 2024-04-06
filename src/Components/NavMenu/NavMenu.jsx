import React, { useState } from "react";
import "./NavMenu.scss";

const NavMenu = () => {
  // State to track the active navigation item
  const [activeNavItem, setActiveNavItem] = useState("Home");

  const navItems = [
    { id: "Home", name: "Головна", icon: "fa fa-home", description: "Home" },
    {
      id: "TennisBenefits",
      name: "Про теніс",
      icon: "fa fa-heartbeat",
      description: "Tennis Benefits",
    },
    {
      id: "GoogleLocation",
      name: "Локація",
      icon: "fa fa-map-marker",
      description: "GoogleLocation",
    },
    {
      id: "Gallery",
      name: "Галерея",
      icon: "fa fa-picture-o",
      description: "Gallery",
    },
  ];

  // Function to handle navigation item click
  const handleNavItemClick = (itemId) => {
    setActiveNavItem(itemId);
    const section = document.getElementById(itemId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="nav__container">
      <div className="sidenav right">
        {navItems.map((item) => (
          <div
            key={item.id}
            className={`nav ${activeNavItem === item.id ? "active" : ""}`}
            onClick={() => handleNavItemClick(item.id)}
          >
            <div className={`icon ${item.icon}`}></div>
            <div className="description">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavMenu;
