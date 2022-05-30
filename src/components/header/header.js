import React from "react";
import {Link} from "react-router-dom"
import user from "../../images/user.png";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      
        <div className="logo">Movie App </div>
      

      <div className="userimage">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};
export default Header;
