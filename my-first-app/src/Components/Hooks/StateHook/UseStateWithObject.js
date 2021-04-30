import React, { useState } from "react";

function StateHookWithObject() {
  const [obj, setObj] = useState({ fName: "", lName: "" });
  return (
    <div>
      {/* The bellow tow lines codes will loose the data while updating the another value */}
      {/* <input type="text" onChange={(e) => setObj({ fName: e.target.value })} />
      <input type="text" onChange={(e) => setObj({ lName: e.target.value })} /> */}

      {/* The bellow tow lines codes remember the data */}
      <input
        type="text"
        onChange={(e) => setObj({ ...obj, fName: e.target.value })}
      />
      <input
        type="text"
        onChange={(e) => setObj({ ...obj, lName: e.target.value })}
      />
      <p>
        FirstName:{" "}
        <i>
          <b>{obj.fName}</b>
        </i>{" "}
        LastName:{" "}
        <i>
          <b>{obj.lName}</b>
        </i>
      </p>
    </div>
  );
}

export default StateHookWithObject;
