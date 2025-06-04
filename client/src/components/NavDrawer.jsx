import React, { useContext, useRef } from "react";
import { UtillsContext } from "../context/UtillsContext";
import { Link } from "react-router";

const NavDrawer = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(UtillsContext);

  const drawerRef = useRef();

  return (
    <div
      ref={drawerRef}
      className={`fixed top-20 right-3 z-10 w-[95%] rounded-b-xl bg-slate-600/40 py-2 text-center shadow-md backdrop-blur-md ${isMenuOpen ? "block" : "hidden"} `}
    >
      <ul className="flex flex-col items-center space-y-2 [&>li]:w-full [&>li]:py-1 [&>li]:text-2xl [&>li]:text-[#131515] [&>li]:active:bg-slate-600/5 [&>li]:active:backdrop-blur-md">
        <li onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Link to={"/"}>Home</Link>
        </li>
        <li onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Link to={"/games"}>Games</Link>
        </li>
        <li onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Link to={"/about"}>About</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavDrawer;
