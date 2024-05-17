import React, { useState } from "react";
import "./App.css";

type Props =
{
  brandName: string;
  navItems: string[][];
}

const Navbar: React.FC<Props>  = ({brandName, navItems}) =>
{
    return(
        <>
        <div className="navbar">
            <span className="navbar-title">
                {brandName}
            </span>
        
        {navItems.map((item, index) => (
            <a key={index} href={item[1]} className="navbar-item">
                {item[0]}
            </a>
        ))}
        </div>
        </>
    )
};

export default Navbar;