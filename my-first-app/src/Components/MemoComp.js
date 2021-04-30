import React from "react";

function MemoComp({ name }) {
  console.log("Memocomp");

  return <div>{name}</div>;
}

export default React.memo(MemoComp);
