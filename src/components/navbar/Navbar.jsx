import React from "react";
import { BiCommentDetail } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { BiBell } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <div className="navbarIcons">
          <div className="navbarIconItem">
            <BiUser />
            <span className="navbarIconBadge"></span>
          </div>
          <p>
            <span className="logo">My Health Assistant</span>
          </p>
        </div>
      </div>
      <div className="navbarCenter">
        <div className="searchBar">
          <BiSearch className="searchIcon" />
          <input type="text" placeholder="Search" className="searchInput" />
        </div>
      </div>
      <div className="navbarRight">
        <div className="navbarLinks">
          <span className="navbarLink">
            <Link to="/home">Homepage</Link>
          </span>
          <span className="navbarLink"> <Link to="/myProfile">My Profile</Link>
          </span>
          <span className="navbarLink" ><Link to="/create">Create</Link>
          </span>
          <span className="navbarLink" ><Link to="/author">Author</Link>
          </span>
        </div>
        <div className="navbarIcons">
          <div className="navbarIconItem navbarIconPosition">
            <BiUser />
            <span className="navbarIconBadge">2</span>
          </div>
        </div>
        <div className="navbarIconItem navbarIconPosition">
          <BiCommentDetail />
          <span className="navbarIconBadge">10</span>
        </div>
        <div className="navbarIconItem navbarIconPosition">
          <BiBell />
          <span className="navbarIconBadge">8</span>
        </div>
        <Link to="/myProfile">
          <img src="/assets/person/user.jpg" alt="" className="navbarImg" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
