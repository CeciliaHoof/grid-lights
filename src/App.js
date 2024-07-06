import { act, useEffect, useState } from "react";

import "./styles.css";

export default function App() {
  const [activated, setActivated] = useState([]);
  const [deactivation, setDeactivation] = useState(false)

  function handleClick(e) {
    const id = e.target.id;
    if (!activated.includes(id)) {
      const newActive = [...activated, id];
      setActivated(newActive);
      if (newActive.length === 8) {
        deactivate();
      }
    }
  }

  function deactivate() {
    setDeactivation(true)
    const timer = setInterval(() => {
      setActivated((active) => {
        const newActive = [...active]
        newActive.pop()

        if (newActive.length === 0) {
          clearInterval(timer)
          setDeactivation(false)
        }

        return newActive
      })
    }, 300)
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
          deactivation = {deactivation}
        />
      );
    } else {
      cellsDisplay.push(<span key={i} />);
    }
  }

  return <div className="container">{cellsDisplay}</div>;
}

function Cell({ id, handleClick, activated, deactivation }) {
  return (
    <button
      className="cell"
      id={id}
      onClick={(e) => handleClick(e)}
      disabled={activated || deactivation}
      style={{ backgroundColor: activated ? "darkseagreen" : "white" }}
    />
  );
}
