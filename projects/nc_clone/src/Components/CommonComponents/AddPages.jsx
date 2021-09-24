import React, { useState } from "react";

export default function AddPages() {
  const [pages, setPages] = useState(1);
  var pagesArray =Array.from(Array(pages).keys());
  const clickHandler=()=>{debugger
    if(pages>1){

      setPages(pages-1)
    }
    else alert("1 page details required")
  }
  return (
    <div>
    <div className="row">
      <div className="col">
        <button type="button"
          className="btn btn-primary mb-2 btn-sm float-end"
          onClick={() => setPages(pages + 1)}
        >
          Add Page
        </button>
        </div>
    </div>
      <fieldset>
        <legend>Page Information</legend>
        {pagesArray.map((e) => (
          <CreatePage onClickHandler={clickHandler} />
        ))}
      </fieldset>
    </div>
  );
}
function CreatePage({ onClickHandler }) {
  return (
    <>
      <div className="row">
        <div className="col-md-5">
          <label htmlFor="" className="col-form-label">
            Page Number
          </label>
          <input
            type="text"
            name=""
            id=""
            className="form-control form-control-sm"
          />
        </div>
        <div className="col-md-5">
          <label htmlFor="" className="col-form-label">
            Sequence Number
          </label>
          <input
            type="text"
            name=""
            id=""
            className="form-control form-control-sm"
          />
        </div>
        <div className="col">
        
          <a
            className="btn btn-link btn-danger mt-4"
            onClick={onClickHandler}
          >
            X
          </a>
        </div>
      </div>
    </>
  );
}
