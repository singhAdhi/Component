import React, { useState, useEffect } from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import "animate.css";
const Header = () => {
  const [show, setShow] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [inner, setInner] = useState("one");
  const [activeLink, setActive] = useState("one");

  const handleMouse = (data) => {
    setInner(data);
    setActive(data);
  };
  const handleMouseEnter = () => {
    setShowContent(true);
  };

  const handleMouseLeave = () => {
    setShowContent(false);
  };

  return (
    <div>
      <header className="bg-black flex items-center justify-between px-9 container relative">
        <nav>
          <img src={logo} alt="" className=" w-7 h-7" />
        </nav>

        <ul className="flex gap-4 ">
          <li
            className="text-white flex py-5"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="flex cursor-pointer gap-2 items-center ">
              Home
              <FaChevronDown className={showContent && "rotate-180"} />
            </span>
            {showContent && (
              <div className="">
                <div className="w-full text-black border absolute left-0 top-[100%] flex justify-between items-center animate__animated animate__slideInDown -z-50">
                  <div className="left flex flex-col w-1/2 border-r-2">
                    <Link
                      className={`hover:bg-yellow-200 p-3 rounded-md ${
                        activeLink === "one" && "bg-yellow-200"
                      }`}
                      onMouseEnter={() => handleMouse("one")}
                    >
                      Platfrom
                    </Link>
                    <Link
                      className={`hover:bg-[#FFF5D9] p-3 rounded-md ${
                        activeLink === "two" && "bg-[#FFF5D9]"
                      }`}
                      onMouseEnter={() => handleMouse("two")}
                    >
                      Enrich
                    </Link>
                    <Link
                      className={`hover:bg-slate-400 p-3 rounded-md ${
                        activeLink === "three" && "bg-slate-400"
                      }`}
                      onMouseEnter={() => handleMouse("three")}
                    >
                      Close
                    </Link>
                    <Link
                      className={`hover:bg-orange-400 p-3 rounded-md ${
                        activeLink === "four" && "bg-orange-400"
                      }`}
                      onMouseEnter={() => handleMouse("four")}
                    >
                      Accept
                    </Link>
                  </div>
                  <div className="right w-1/2">
                    {inner === "one" ? (
                      <div className="bg-yellow-200 p-3 h-80 flex items-center justify-center">
                        Inner Data of One
                      </div>
                    ) : (
                      ""
                    )}
                    {inner === "two" ? (
                      <div className="bg-[#FFF5D9] p-3 h-80 flex items-center justify-center">
                        {" "}
                        Inner Data of two
                      </div>
                    ) : (
                      ""
                    )}
                    {inner === "three" ? (
                      <div className="bg-slate-300 p-3 h-80 flex items-center justify-center">
                        {" "}
                        Inner Data of three
                      </div>
                    ) : (
                      ""
                    )}
                    {inner === "four" ? (
                      <div className="bg-orange-400 p-3 h-80 flex items-center justify-center">
                        {" "}
                        Inner Data of four
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            )}
          </li>

          <li className="text-white py-5">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="text-white py-5">
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
        <ul>
          <li>Log in </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
