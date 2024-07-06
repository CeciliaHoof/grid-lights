import { useEffect, useState } from "react";

import "./styles.css";

export default function App() {
  const [activated, setActivated] = useState([]);

  function handleClick(e) {
    if (activated.length < 8) {
      const id = e.target.id;
      if (!activated.includes(id)) {
        setActivated([...activated, id]);
      }
    }
  }

  const cellsDisplay = [];
  for (let i = 0; i < 9; i++) {
    if (i !== 4) {
      cellsDisplay.push(
        <Cell
          key={i}
          id={i}
          handleClick={handleClick}
          activated={activated.includes(i.toString())}
        />
      );
    } else {
      cellsDisplay.push(<span key={i} />);
    }
  }

  return <div className="container">{cellsDisplay}</div>;
}

function Cell({ id, handleClick, activated }) {
  return (
    <div
      className="cell"
      id={id}
      onClick={(e) => handleClick(e)}
      style={{ backgroundColor: activated ? "darkseagreen" : null }}
    />
  );
}
