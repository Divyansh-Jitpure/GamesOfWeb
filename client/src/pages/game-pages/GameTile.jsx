import React from "react";
import { useNavigate } from "react-router";

const GameTile = ({ gameTitle }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/${gameTitle.toLowerCase().replace(/\s+/g, "-")}`);
      }}
      className="analog-btn flex h-60 w-80 items-center justify-end bg-[#339989]"
    >
      <span className="mr-2 text-2xl">{gameTitle}</span>
    </div>
  );
};

export default GameTile;
