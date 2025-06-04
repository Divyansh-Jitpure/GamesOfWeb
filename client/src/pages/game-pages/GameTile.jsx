import React from "react";

const GameTile = ({ gameTitle }) => {
  return (
    <div className="analog-btn flex h-60 w-80 items-center justify-end bg-[#339989]">
      <span className="mr-2 text-2xl">{gameTitle}</span>
    </div>
  );
};

export default GameTile;
