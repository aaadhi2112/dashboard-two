import React, { useState } from 'react';
import "./Sidebar.css";
import { FaBars } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RiGovernmentFill } from "react-icons/ri";
import { FaUserTie } from "react-icons/fa";
import { IoNewspaperSharp } from "react-icons/io5";
import { HiUsers } from "react-icons/hi";
import { FaGlobe } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function Sidebar({children}) {

    const[isOpen ,setIsOpen] = useState(false)
    const toggle =()=> setIsOpen(!isOpen)
    
    const menuItem=[
        {
            path:"/",
            name:"Government Overview",
            icon:<RiGovernmentFill/>
        },
        {
            path:"/instituteregistery",
            name:"Institute Registry",
            icon:<FaUserTie />   
        },
        {
            path:"/academics",
            name:"Academics",
            icon:<IoNewspaperSharp />
        },
        {
            path:"/instituteinspection",
            name:"Institute Inspection",
            icon:<HiUsers />
        },
        {
            path:"/raiseaticket",
            name:"Raise a Ticket",
            icon:<IoNewspaperSharp />
        },
        {
            path:"/communication",
            name:"Communication",
            icon:<FaGlobe />
        },
        {
            path:"/profile",
            name:"Profile",
            icon:<CgProfile />
        }
    ]

  return (
    <div className="container1">
        <div className="sidebar" style={{width: isOpen ? "300px" : "50px"}} >
            <div className="top_section">
            <div style={{marginLeft: isOpen ? "5px" : "0px"}}  className="bars"><FaBars onClick={toggle}/></div>
                <h3 style={{display: isOpen ? "block" : "none"}} className="logo"><strong>Bare Kaab</strong></h3>
            </div>
            <div className='boooyaaa'>
            {
                menuItem.map((item,index)=>(
                    <NavLink to={item.path} key={index} className="link" activeClassName="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                    </NavLink>
                ))
            }
            </div>
        </div>
        <main>{children}</main>
    </div>
  )
}

export default Sidebar