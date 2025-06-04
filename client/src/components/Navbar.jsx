import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { UtillsContext } from "../context/UtillsContext";

const Navbar = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(UtillsContext);
  const navigate = useNavigate();

  // Define the two SVG path shapes as strings
  const hamburgerPath = "M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7";
  const closePath = "M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7";

  return (
    <nav className="fixed z-100 flex w-full items-center justify-between bg-[#4ae7d0] shadow-lg">
      <img
        onClick={() => navigate("/")}
        src="3.png"
        alt="logo"
        className="mx-2 h-20 cursor-pointer"
      />
      <span
        onClick={() => navigate("/")}
        className="relative cursor-pointer text-2xl font-semibold"
      >
        Games Of Web
        <span className="absolute -top-1 text-sm font-normal">2.0</span>
      </span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsMenuOpen((prev) => !prev);
        }}
      >
        <svg
          className="m-4 h-12 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 10 10"
          stroke="#131515"
          strokeWidth=".8"
          fill="rgba(0,0,0,0)"
          strokeLinecap="round"
        >
          <path
            d={isMenuOpen ? closePath : hamburgerPath}
            style={{ transition: "d 0.3s ease" }} // Attempt transition (limited browser support)
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
