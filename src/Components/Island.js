import React from "react";
import { useState } from "react";

export default function Island({ island, setIsland }) {
  let [visit, setVisit] = useState(0);
  return (
    <div
      className="Island"
      onClick={() => {
        setIsland(island);
        setVisit((visit = visit + 1));
      }}
    >
      <h3>{island.name}</h3>
      <p>Visitors {visit}</p>
      <img src={island.img} alt={island.name} />
    </div>
  );
}
