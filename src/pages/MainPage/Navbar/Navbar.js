import React from "react";
import { Link, NavLink } from "react-router-dom";
import { NavbarData } from "../../../constants/UI";
import "./Navbar.css";
import { Button } from "@mui/material";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-fit py-5 px-3">
      <div className="flex items-center justify-around gap-6 ">
        {NavbarData.map((item, idx) => {
          return (
            <NavLink
              activeClassName="active"
              to={item.path}
              key={idx}
              className="flex nav-link items-center justify-center w-fit h-fit text-gray-400 text-md font-semibold"
            >
              {item.icon}
              <span className="">{item.name}</span>
            </NavLink>
          );
        })}
      </div>
      <div className="flex items-center justify-center">
        <Link
          to="/"
          className="flex items-center justify-center w-40 py-[0.9rem] px-2 bg-[#00a3a6] rounded-xl text-white font-semibold text-sm"
        >
          میزبان شوید
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
