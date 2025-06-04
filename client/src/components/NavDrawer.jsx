import React, { useContext, useEffect, useRef } from "react";
import { UtillsContext } from "../context/UtillsContext";
import { Link } from "react-router";

const NavDrawer = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(UtillsContext);

  const drawerRef = useRef();

  console.log("Drawer rendered");

  // Function to close the drawer menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener to close the menu when clicking outside of it
    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div
      ref={drawerRef}
      className={`fixed top-20 right-3 z-10 w-[95%] rounded-b-xl bg-slate-600/40 py-2 text-center shadow-md backdrop-blur-md ${isMenuOpen ? "block" : "hidden"} `}
    >
      <ul className="flex flex-col items-center space-y-2 [&>li]:py-1 [&>li]:text-2xl [&>li]:text-[#131515]">
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
