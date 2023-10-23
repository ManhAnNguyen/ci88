import React, { useState } from "react";
import "./styles.css";
import { AiFillApple, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdOutlineMenuOpen } from "react-icons/md";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div id="header">
      <AiFillApple size={50} color="white" />
      <div className="header-right">
        <ul className={`list ${isOpen && "isOpen"}`}>
          <li>
            <a>HOME</a>
          </li>
          <li>
            <a>ABOUT</a>
          </li>
          <li>
            <a>CONTACT US</a>
          </li>
          <li>
            <a>PRODUCT</a>
          </li>
          <li>
            <a>REVIEWS</a>
          </li>
          <AiOutlineClose
            className="close"
            size={20}
            color="white"
            onClick={() => setIsOpen(false)}
          />
        </ul>
        <MdOutlineMenuOpen
          onClick={() => setIsOpen(true)}
          color="white"
          className="menu-icon"
          size={30}
        />
      </div>
    </div>
  );
};

export default Header;
