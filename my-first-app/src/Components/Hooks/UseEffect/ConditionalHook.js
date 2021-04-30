import React from "react";
import { useState, useEffect } from "react";
function ConditionalHook() {
  const [Count, setCount] = useState(0);
  const [Text, setText] = useState("");
  useEffect(() => {
    console.log("Update Document title");
    document.title = `Clicked ${Count} Times`;
  }, [Count]);
  return (
    <div>
      <p>Conditional Hook Component</p>
      <input
        type="text"
        value={Text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => setCount(Count + 1)}>Click {Count}</button>
    </div>
  );
}

export default ConditionalHook;
