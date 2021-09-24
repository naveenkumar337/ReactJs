import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import At_Int_and_Not_At_Int from '../CommonComponents/At_Int_and_Not_At_Int'
import { FasIcons, IoMdArrowBack } from "../CommonComponents/Icons";
import PdfPage from "../CommonComponents/PdfPage";

function Step0View() {
  return (
    <>
      <div className="container-fluid" style={{minHeight:"100vh"}}>
        <div className="row pt-3">
        <div className="col-md-6">
         <PdfPage/>
        </div>
        <div className="col-md-6 border right-block">
          <div className="">
            <div className="form p-1">
                <div className="d-block">
                    <div className="d-flex row">
                        <div className="col-md-6">
                        <span className="">FileName: sample.pdf</span>
                        <span className="">CaseNumber: Case-1</span>
                        </div>
                        <div className="col-md-6">                          
                          <Link to="/step1list" className="btn btn-secondary btn-sm float-end mt-2"><IoMdArrowBack className="mb-1" />Go Back</Link>                       
                          <button type="button" className="btn btn-danger btn-sm float-end mt-2 me-3">Delete File</button>
                        </div>
                    </div>
                </div>
                <hr className="mt-0"/>
                <div className="d-block">
                   <div  className="d-flex m-2">
                  <button type="button" className="btn btn-success btn-sm">Same case Move to next case</button>
                  <button type="button" className="btn ms-3 btn-danger btn-sm">Ignore this Page</button>
                </div>                
                </div>
                <hr/>                
              <form className="form p-1">
                <div className="form row">
                  <div className="col-md-3">
                    <label className="col-form-label">Date of Crash</label>
                    <input type="text" placeholder="Enter DOC" className="form-control form-control-sm" />
                  </div>
                  <div className="col-md-3">
                    <label className="col-form-label">Time of Crash</label>
                    <input type="text" placeholder="Enter TOC" className="form-control form-control-sm" />
                  </div>
                  <div className="col-md-6">
                    <label className="col-form-label">City/Town</label>
                    <input type="text" placeholder="Enter City" className="form-control form-control-sm border-success" />
                  </div>
                </div>
             {/* Intersection block */}
             <At_Int_and_Not_At_Int/>
                <div className="row">
                <div className="col">
                  <label className="col-form-label">Number</label>
                  <input type="text" name="" id="" className="form-control form-control-sm"/>
                </div>
                <div className="col">
                  <label  className="col-form-label">Number</label>
                  <input type="text" name="" id="" className="form-control form-control-sm"/>
                </div>
                </div>
            <button className="btn btn-success m-3 float-end"><FasIcons.FaRegSave className="mb-1"/> Save</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}


export {Step0View};
