import React, { useContext, useRef } from "react";
import { UtillsContext } from "../context/UtillsContext";
import { Link } from "react-router";

const NavDrawer = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(UtillsContext);

  const drawerRef = useRef();

  return (
    <div
      ref={drawerRef}
      className={`fixed top-20 right-3 z-10 w-[95%] rounded-b-xl bg-slate-600/40 py-2 text-center shadow-md backdrop-blur-md md:hidden ${isMenuOpen ? "block" : "hidden"} `}
    >
      <ul className="flex flex-col items-center space-y-2 [&>li]:w-full [&>li]:py-1 [&>li]:text-xl [&>li]:font-semibold">
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
