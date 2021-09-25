import React, { useState } from "react";
import { Link } from "react-router-dom";
import At_Int_and_Not_At_Int from '../CommonComponents/At_Int_and_Not_At_Int'
import PdfPage from "../CommonComponents/PdfPage";
import {FasIcons, IoMdArrowBack} from '../CommonComponents/Icons'
function Step1View() {  
  return (
    <>
      <div className="container-fluid pt-2">
        <div className="row">
          <div className="col-md-6">
           <PdfPage/>
          </div>
          <div className="col-md-6 border right-block">
            <div className="card">
              <div className="card-header p-2">
                <span className="float-left">FileName:Sample.pdf</span>
                <Link
                  className="float-end btn btn-secondary btn-sm "
                  to="/dashboard"
                >
                  <IoMdArrowBack style={{fontSize:"Large"}} className="mb-1 text-white" />GoBack
                </Link>
              </div>
              <div className="card-body">
                <form>
                  <div className="row">
                    <div className="form-group col-3">
                      <label htmlFor="" className="form-label">Main1</label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                      />
                    </div>
                    <div className="form-group col-3">
                      <label className="form-label" htmlFor="">Main1</label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                      />
                    </div>
                    <div className="form-group col">
                      <label htmlFor="" className="form-label">Main1</label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                      />
                    </div>
                  </div>                  
                    
                    {/* Intersection importing */}
                    <At_Int_and_Not_At_Int/>
                <div className="row">
                  <div className="form-group col">
                    <label htmlFor="" className="form-label">#1</label>
                    <input type="text" name="" id="" className="form-control form-control-sm"/>
                  </div>
                  <div className="form-group col">
                    <label htmlFor="" className="form-label">#2</label>
                    <input type="text" name="" id="" className="form-control form-control-sm"/>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col">
                    <label htmlFor="" className="form-label">#3</label>
                    <input type="text" name="" id="" className="form-control form-control-sm"/>
                  </div>
                  <div className="form-group col">
                    <label htmlFor="" className="form-label">#4</label>
                    <input type="text" name="" id="" className="form-control form-control-sm"/>
                  </div>
                </div>
                
                  <button type="submit" className="btn btn-sm btn-success mt-2 float-end mb-0 text-center"><FasIcons.FaRegSave  className="mb-1"/> Save</button>
               
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    
  );
}

export default Step1View;
