import React from "react";
import GameTile from "./GameTile";

const Games = () => {
  return (
    <div className="flex flex-col items-center">
      <section className="mt-30 flex flex-col flex-wrap gap-10">
        <GameTile gameTitle="Memory Game" />
        <GameTile gameTitle="Flappy Rick" />
        <GameTile gameTitle="Piano" />
        <GameTile gameTitle="Piano" />
      </section>
    </div>
  );
};

export default Games;
