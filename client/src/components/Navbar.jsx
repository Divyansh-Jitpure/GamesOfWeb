import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { UtillsContext } from "../context/UtillsContext";

const Navbar = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(UtillsContext);
  const navigate = useNavigate();
  return (
    <nav className="fixed flex w-full items-center justify-between shadow-lg">
      <img
        onClick={() => navigate("/")}
        src="/src/assets/3.png"
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
      <span>
        <svg
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="m-4 h-12 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 10 10"
          stroke="#131515"
          stroke-width=".8"
          fill="rgba(0,0,0,0)"
          stroke-linecap="round"
        >
          <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
            <animate
              dur="0.2s"
              attributeName="d"
              values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7"
              fill="freeze"
              begin="start.begin"
            />
            <animate
              dur="0.2s"
              attributeName="d"
              values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7"
              fill="freeze"
              begin="reverse.begin"
            />
          </path>
          <rect width="10" height="10" stroke="none">
            <animate
              dur="2s"
              id="reverse"
              attributeName="width"
              begin="click"
            />
          </rect>
          <rect width="10" height="10" stroke="none">
            <animate
              dur="0.001s"
              id="start"
              attributeName="width"
              values="10;0"
              fill="freeze"
              begin="click"
            />
            <animate
              dur="0.001s"
              attributeName="width"
              values="0;10"
              fill="freeze"
              begin="reverse.begin"
            />
          </rect>
        </svg>
      </span>
    </nav>
  );
};

export default Navbar;
