import React,{useState} from 'react'
function At_Int_and_Not_At_Int() {  
  const [atInt, setAtInt] = useState(true)
  return <>
<div className="row">
                <div className="col m-3 ">
                  <label className="text-center form-check-label" onClick={()=>setAtInt(true)}  >
                    At Interaction  <input type="radio" name="inlineRadioOptions" className="form-check-input" checked={atInt?"checked":""} />
                  </label>
                  <label className="ms-3 form-check-label text-center" onClick={()=>setAtInt(false)} >
                    Not-At Interaction  <input type="radio" className="form-check-input" name="inlineRadioOptions" checked={!atInt?"checked":""}/></label>
                </div>                  
 </div>
{atInt? <AT_IntersectionBlock/> : <NOT_AT_IntersectionBlock/>}
  </>;
}

export default At_Int_and_Not_At_Int;

function AT_IntersectionBlock() {
  return (
    <>
        <fieldset className="spending-counts">
          <legend className="spending-counts">AT INTERSECTION</legend>
          <div className="row">
            <div className="col-md-4">
              <label className="col-form-label">Data1</label>
              <input type="text" className="form-control form-control-sm" />
            </div>
            <div className="col-md-4">
              <label className="col-form-label">Data1</label>
              <input type="text" className="form-control form-control-sm" />
            </div>
            <div className="col-md-4">
              <label className="col-form-label">Data1</label>
              <input type="text" className="form-control form-control-sm" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <label className="col-form-label">Data2</label>
              <input type="text" className="form-control form-control-sm" />
            </div>
            <div className="col-md-4">
              <label className="col-form-label">Data2</label>
              <input type="text" className="form-control form-control-sm" />
            </div>
            <div className="col-md-4">
              <label className="col-form-label">Data2</label>
              <input type="text" className="form-control form-control-sm" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <label className="col-form-label">Data3</label>
              <input type="text" className="form-control form-control-sm" />
            </div>
            <div className="col-md-4">
              <label className="col-form-label">Data3</label>
              <input type="text" className="form-control form-control-sm" />
            </div>
            <div className="col-md-4">
              <label className="col-form-label">Data3</label>
              <input type="text" className="form-control form-control-sm" />
            </div>
          </div>
        </fieldset>
    </>
  );
}

function NOT_AT_IntersectionBlock() {
  return (
    <>
      {/* Not At Intersection */}
        <fieldset className="spending-counts">
          <legend className="spending-counts">NOT AT INTESECTION</legend>
          <div className="row">
            <div className="col-md-2">
              <label className="col-form-label">Data1</label>
              <input type="text" name="" id="" className="form-control form-control-sm"/>
            </div>
            <div className="col-md-2">
              <label className="col-form-label">Data1</label>
              <input type="text" name="" id="" className="form-control form-control-sm"/>
            </div>
            <div className="col-md-2">
              <label className="col-form-label">Data1</label>
              <input type="text" name="" id="" className="form-control form-control-sm"/>
            </div>
            <div className="col-md-6">
              <label className="col-form-label">Data1</label>
              <input
                type="text"
                name=""
                id=""
                className="form-control form-control-sm"
              />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-1 p-0">
              <label className="col-form-label" htmlFor="">Data2</label>
              <input
                type="text"
                name=""
                id=""
                className="form-control form-control-sm"
              />
            </div>
            <div className="col-md-3">
              <div className="form-check form-check-inline mt-3">
                <input
                  type="radio"
                  name="inlineRadioOptions1"
                  id=""
                  className="form-check-input"
                />
                <label htmlFor="" className="form-check-label">
                  A
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="inlineRadioOptions1"
                  id=""
                  className="form-check-input"
                />
                <label htmlFor="" className="form-check-label">
                  B
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="inlineRadioOptions1"
                  id=""
                  className="form-check-input"
                />
                <label htmlFor="" className="form-check-label">
                  C
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="inlineRadioOptions1"
                  id=""
                  className="form-check-input form-check-input-sm"
                />
                <label htmlFor="" className="form-check-label">
                  D
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="inlineRadioOptions1"
                  id=""
                  className="form-check-input form-check-input-sm"
                />
                <label htmlFor="" className="form-check-label">
                  NA
                </label>
              </div>
            </div>
            <div className="col-md-1 mt-4 p-0">
              <strong>of</strong>
            </div>
            <div className="col-md-3 p-0">
              <label className="col-form-label">Data2</label>
              <div className="input-group-inline d-flex">
                <input
                  type="text"
                  name="group1"
                  className="form-control form-control-sm"
                />
                <input
                  type="text"
                  name="group1"
                  className="form-control form-control-sm"
                />
                <input
                  type="text"
                  name="group1"
                  className="form-control form-control-sm"
                />
              </div>
            </div>
            <div className="col-md-1 text-center p-0">
              <label className="col-form-label" style={{ color: "#fff" }}>
                Data2
              </label>
              <span className="dot"></span>
            </div>
            <div className="col-md-1 p-0">
              <label className="col-form-label" style={{ color: "#fff" }}>
                Data2
              </label>
              <input
                type="text"
                name=""
                id=""
                className="form-control form-control-sm"
              />
            </div>
            <div className="col-md-1 text-center p-0">
              <label className="col-form-label" style={{ color: "#fff" }}>
                Data2
              </label>
              <strong>OR</strong>
            </div>
            <div className="col-md-1 p-0">
              <label className="col-form-label">Data2</label>
              <input type="text" className="form-control form-control-sm" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-1 p-0">
              <label className="col-form-label" htmlFor="">Data3</label>
              <input
                type="text"
                name=""
                id=""
                className="form-control form-control-sm"
              />
            </div>
            <div className="col-md-3">
              <div className="form-check form-check-inline mt-3">
                <input
                  type="radio"
                  name="inlineRadioOptions2"
                  id=""
                  className="form-check-input"
                />
                <label htmlFor="" className="form-check-label">
                  A
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="inlineRadioOptions2"
                  id=""
                  className="form-check-input"
                />
                <label htmlFor="" className="form-check-label">
                  B
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="inlineRadioOptions2"
                  id=""
                  className="form-check-input"
                />
                <label htmlFor="" className="form-check-label">
                  C
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="inlineRadioOptions2"
                  id=""
                  className="form-check-input form-check-input-sm"
                />
                <label htmlFor="" className="form-check-label">
                  D
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="inlineRadioOptions2"
                  id=""
                  className="form-check-input form-check-input-sm"
                />
                <label htmlFor="" className="form-check-label">
                  NA
                </label>
              </div>
            </div>
            <div className="col-md-1 mt-4 p-0">
              <strong>of</strong>
            </div>
            <div className="col p-0">
              <label className="col-form-label">Data3</label>
              <input
                type="text"
                name="group1"
                className="form-control form-control-sm"
              />
            </div>
            <div className="col p-0">
              <label className="col-form-label">Data3</label>
              <input
                type="text"
                name=""
                id=""
                className="form-control form-control-sm"
              />
            </div>
          </div>

          <div className="row line">
            <div className="col-md-1 p-0">
              <label className="col-form-label">Data4</label>
              <input type="text" className="form-control form-control-sm" />
            </div>
            <div className="col-md-3">
              <div className="form-check form-check-inline mt-3">
                <input
                  type="radio"
                  name="inlineRadioOptions3"
                  id=""
                  className="form-check-input"
                />
                <label htmlFor="" className="form-check-label">
                  A
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="inlineRadioOptions3"
                  id=""
                  className="form-check-input"
                />
                <label htmlFor="" className="form-check-label">
                  B
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="inlineRadioOptions3"
                  id=""
                  className="form-check-input"
                />
                <label htmlFor="" className="form-check-label">
                  C
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="inlineRadioOptions3"
                  id=""
                  className="form-check-input form-check-input-sm"
                />
                <label htmlFor="" className="form-check-label">
                  D
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="inlineRadioOptions3"
                  id=""
                  className="form-check-input form-check-input-sm"
                />
                <label htmlFor="" className="form-check-label">
                  NA
                </label>
              </div>
            </div>
            <div className="col-md-1 mt-4 p-0">
              <strong>of</strong>
            </div>
            <div className="col p-0">
              <label className="col-form-label">Data4</label>
              <input type="text" className="form-control form-control-sm" />
            </div>
          </div>
        </fieldset>
    </>
  );
}
