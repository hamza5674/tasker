import React, { useState } from "react";
import loogo from "../../assets/images/svgs/loogo.svg"
import logo from "../../assets/images/logo.png";
import { SideNav } from "./style";
//icons
import { MdDashboard } from "react-icons/md";
import { FaRug } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { RiContactsBook2Fill } from "react-icons/ri";
import { NavLink, Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

function AsideNav({ isOpen, toggleAsideNav }) {


  const NavData = [
    {
      id: 1,
      icon: <MdDashboard />,
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      id: 1,
      icon: <FaRug />,
      name: "Administration",
      path: "/Administration",
    },
    {
      id: 1,
      icon: <FaRegLightbulb />,
      name: "Buildings",
      path: "/Buildings",
    },
    {
      id: 1,
      icon: <RiTeamFill />,
      name: "Supervisors",
      path: "/Supervisors",
    },
    {
      id: 1,
      icon: <RiContactsBook2Fill />,
      name: "Contact",
      path: "/Contact",
    },
    {
      id: 1,
      icon: <FaRegLightbulb />,
      name: "Tenants",
    },
    {
      id: 1,
      icon: <RiTeamFill />,
      name: "Directory",
    },
    {
      id: 1,
      icon: <RiContactsBook2Fill />,
      name: "Service Category",
    },
    {
      id: 1,
      icon: <RiContactsBook2Fill />,
      name: "Report",
    },
  ];
  return (
    <div >
<SideNav>
      <div  className="sidebar" style={{ width: isOpen ? "190px" : "50px" }} >
        <div className="top_section">
          <div style={{ marginLeft: isOpen ? "60px" : "0px" }} className="bars">
            <FaBars onClick={toggleAsideNav} />
          </div>
          <div style={{ display: isOpen ? "block" : "none" }} className="logo">
            <img src={loogo}/>
          </div>
        </div>
        {NavData.map((item, index) => (
          <NavLink to={item.path} key={index} className="link">
           

            
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            
            </div>
          </NavLink>
        ))}
      </div>
    </SideNav>
    </div>
    
  );
}

export default AsideNav;

