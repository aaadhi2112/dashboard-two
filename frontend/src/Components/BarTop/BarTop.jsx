import React from 'react';
import './BarTop.css';
import { FaBars } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RiGovernmentFill } from "react-icons/ri";
import { FaUserTie } from "react-icons/fa";
import { IoNewspaperSharp } from "react-icons/io5";
import { HiUsers } from "react-icons/hi";
import { FaGlobe } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


function BarTop() {

    const topMenuItem=[
        {
            path:"/",
            icon:<RiGovernmentFill/>
        },
        {
            path:"/instituteregistery",
            icon:<FaUserTie />   
        },
        {
            path:"/academics",
            icon:<IoNewspaperSharp />
        },
        {
            path:"/instituteinspection",
            icon:<HiUsers />
        },
        {
            path:"/raiseaticket",
            icon:<IoNewspaperSharp />
        },
        {
            path:"/communication",
            icon:<FaGlobe />
        },
        {
            path:"/profile",
            icon:<CgProfile />
        }
    ]

    return (
        <div className='bartop'>
            <div className='bartophorizon'><h4 style={{ color: 'black' }}><strong>Bare Kaap</strong></h4></div>


            <div className='bartopmenuitems'>
                {
                    topMenuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="topbarlink" activeClassName="topbaractive">
                            <div className="topbaricon">{item.icon}</div>
                            <div  className="topbarlink_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>





        </div>
    )
}

export default BarTop