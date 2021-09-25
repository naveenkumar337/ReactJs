import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FasIcons, IoMdArrowBack } from "../CommonComponents/Icons";
import PdfPage from "../CommonComponents/PdfPage";

function Step3View() {
  return (
    <>
      <div className="container-fluid">
        <div className="row pt-2">
          <div className="col-md-6">
            <PdfPage />
          </div>
          <div className="col-md-6  border right-block">
            <div className="card-header m-o p-1 d-flex justify-content-between">
              <span>Unit #</span>
              <Link to="/dashboard" className="btn btn-sm btn-secondary">
              <IoMdArrowBack className="mb-1 text-white" style={{fontSize:"Large"}} />
                GoBack
              </Link>
            </div>
            <form action="">
              <div className="row mt-3">
                <div className="col-md-2">
                  <label htmlFor="" className="form-label">
                    Unit No
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control form-control-sm disabled"
                  />
                </div>
                <div className="col">
                  <label htmlFor="" className="form-label">
                    Reg
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    disabled
                  ></input>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <label htmlFor="" className="form-label">
                    Name#1
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control form-control-sm"
                  />
                </div>
                <div className="col">
                  <label htmlFor="" className="form-label">
                    Name#1
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control form-control-sm"
                  />
                </div>
              </div>
              <fieldset className="mt-3">
                <legend>Vehicle Infomratio</legend>
                <div className="row">
                  <div className="col">
                    <label htmlFor="" className="form-label">
                      Vehicle Year
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="form-control form-control-sm"
                    />
                  </div>
                  <div className="col">
                    <label className="form-label">Vehicle Make</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="form-control form-control-sm"
                    />
                  </div>
                  <div className="col">
                    <label className="form-label">Vehicle Config</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="form-control form-control-sm"
                    />
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <legend>Owner Information</legend>
                <div className="row">
                  <label htmlFor="" className="form-label">
                    Label 1
                  </label>
                  <input type="text" className="form-control form-control-sm" />
                </div>
                <div className="row">
                  <label htmlFor="" className="form-label">
                    Label 2
                  </label>
                  <input type="text" className="form-control form-control-sm" />
                </div>
                <div className="row">
                  <div className="col">
                    <label htmlFor="" className="form-label">
                      Field 1
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="form-control form-control-sm"
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="" className="form-label">
                      Field 2
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="form-control form-control-sm"
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="" className="form-label">
                      Field 3
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="form-control form-control-sm"
                    />
                  </div>
                </div>
              </fieldset>
              <div className="row mt-3">
                <div className="col">
                  <label htmlFor="" className="form-label">
                    #1
                  </label>
                </div>
                <div className="col">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control form-control-sm"
                  />
                </div>
                <div className="col">
                  <label htmlFor="" className="form-label">
                    Event Sequence (23)
                  </label>
                </div>
                <div className="col">
                  <input
                    type="text"
                    name=""
                    id="eventSequence-1"
                    className="form-control form-control-sm ms-1"
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    name=""
                    id="eventSequence-2"
                    className="form-control form-control-sm ms-1"
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    name=""
                    id="eventSequence-3"
                    className="form-control form-control-sm ms-1"
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    name=""
                    id="eventSequence-4"
                    className="form-control form-control-sm ms-1"
                  />
                </div>
              </div>

              <div className="row mt-3">
                <div className="col">
                  <label htmlFor="" className="form-label">
                    Most HarmFull Event(24)
                  </label>
                  <input
                    type="text"
                    name=""
                    className="form-control form-control-sm"
                    id=""
                  />
                </div>
                <div className="col">
                  <label htmlFor="" className="form-label">
                    Distributing code
                  </label>
                </div>
                <div className="col">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control form-control"
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control form-control"
                  />
                </div>
                <div className="col">
                  <label htmlFor="" className="form-label">
                    Driver distraction by(1)
                  </label> 
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control form-control-sm"
                  />
                </div>
              </div>
           
              <div className="row mt-3">
               <div className="col">
                   <label htmlFor="" className="form-label">Name#</label>
                </div>
               <div className="col">
                   <input type="text" name="" id="" className="form-control form-control-sm"/>
                </div>
               <div className="col">
                   <input type="text" name="" id="" className="form-control form-control-sm"/>
                </div>
               <div className="col">
                   <input type="text" name="" id="" className="form-control form-control-sm"/>
                </div>
                <div className="col">
                   <label htmlFor="" className="form-label">Name#</label>
                   <input type="text" name="" id="" className="form-control form-control-sm"/>
                </div>
                <div className="col">
                   <label htmlFor="" className="form-label">Name#</label>
                   <input type="text" name="" id="" className="form-control form-control-sm"/>
                </div>
           </div>
                <div className="row mt-3">
                    <div className="col"><label htmlFor="" className="form-label">Name #1</label><input type="text" name="" id="" className="form-control form-control-sm"/></div>
                    <div className="col"><label htmlFor="" className="form-label">Name #2</label><input type="text" name="" id="" className="form-control form-control-sm"/></div>
                    <div className="col"><label htmlFor="" className="form-label">Name #3</label><input type="text" name="" id="" className="form-control form-control-sm"/></div>
                    <div className="col"><label htmlFor="" className="form-label">Name #4</label><input type="text" name="" id="" className="form-control form-control-sm"/></div>
                </div>
           <button className="btn btn-sm btn-success mt-3 me-3 float-end"><FasIcons.FaRegSave className="mb-1"/> Save</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Step3View;
