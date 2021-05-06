import React, { useState, useEffect } from "react";

function CleanUp() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <HookMouse />}
    </div>
  );
}
function HookMouse() {
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);

  const logMouseValues = (e) => {
    // console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect((e) => {
    // console.log("Updating UseState");
    window.addEventListener("mousemove", logMouseValues);
    return () => {
      // console.log("closing the mouse hover");
      window.removeEventListener("mousemove", logMouseValues);
    };
  }, []);

  return (
    <div>
      X:{X} and Y:{Y}
    </div>
  );
}
export default CleanUp;
