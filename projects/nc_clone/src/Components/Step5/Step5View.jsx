import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FasIcons, IoMdArrowBack } from "../CommonComponents/Icons";
import PdfPage from "../CommonComponents/PdfPage";

export default function Step5View() {
  return (
    <div className="container-fluid">
      <div className="row mt-3">
        <div className="col-md-6">
          <PdfPage />
        </div>
        <div className="col-md-6 border right-block">
          <div className="border p-auto alert m-0 p-2 alert-success">
              Vehicle 1 TruckBus Info
            <Link to="/dashboard" className="btn btn-sm btn-secondary float-end"><IoMdArrowBack className="mb-1 text-white" style={{fontSize:"Large"}} />GoBack</Link>
          </div>
          <form>
            <div className="row">
                <div className="col-md-4">
                    <label htmlFor="" className="col-form-label">Unit No</label>
                    <input type="text" name="" id="" className="form-control form-control-sm"/>
                </div>
                <div className="col">
                    <label htmlFor="" className="col-form-label">Reg</label>
                    <input type="text" name="" id="" className="form-control form-control-sm"/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="" className="col-form-label">Name#1</label>
                    <input type="text" name="" id="" className="form-control form-control-sm"/>
                </div>
                <div className="col">
                    <label htmlFor="" className="col-form-label">Name#2</label>
                    <input type="text" name="" id="" className="form-control form-control-sm"/>
                </div>
            </div>
            <div className="col">
                <label htmlFor="adressarea" className="col-form-label">Address</label>
                <textarea name="adressarea" id="adressarea" className=" form-control"></textarea>
            </div>
             <div className="row">
            <div className="col">
                <label htmlFor="" className="col-form-label">col#1</label>
                <input type="text" name="" id="" className="form-control form-control-sm"/>
            </div>
            <div className="col">
                <label htmlFor="" className="col-form-label">col#2</label>
                <input type="text" name="" id="" className="form-control form-control-sm"/>
            </div>
            <div className="col">
                <label htmlFor="" className="col-form-label">col#3</label>
                <input type="text" name="" id="" className="form-control form-control-sm"/>
            </div>
        </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="" className="col-form-label">Section1</label>
                    <input type="text" name="" id="" className="form-control form-control-sm"/>
                </div>
                <div className="col">
                    <label htmlFor="" className="col-form-label">Section2</label>
                    <input type="text" name="" id="" className="form-control form-control-sm"/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="" className="col-form-label">Name#1</label>
                    <input type="text" name="" id="" className="form-control form-control-sm"/>
                </div>
                <div className="col">
                    <label htmlFor="" className="col-form-label">Name#2</label>
                    <input type="text" name="" id="" className="form-control form-control-sm"/>
                </div>
            </div>
            <div className="row">
            <div className="col">
                <label htmlFor="" className="col-form-label">InterState</label>
                <input type="text" name="" id="" className="form-control form-control-sm"/>
            </div>
            <div className="col">
                <label htmlFor="" className="col-form-label">cargoBody Type</label>
                <input type="text" name="" id="" className="form-control form-control-sm"/>
            </div>
            <div className="col">
                <label htmlFor="" className="col-form-label">GVWR or GCWR</label>
                <input type="text" name="" id="" className="form-control form-control-sm"/>
            </div>
        </div>
            
            <fieldset className="mt-2">
                <legend>TrailerInformation</legend>
                <div className="row">
                    <div className="col">
                        <label htmlFor="" className="col-form-label">TrailerReg</label>
                        <input type="text" name="" id="" className="form-control form-control-sm"/>
                    </div>
                    <div className="col">
                        <label htmlFor="" className="col-form-label">RegType</label>
                        <input type="text" name="" id="" className="form-control form-control-sm"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="" className="col-form-label">div#1</label>
                        <input type="text" className="form-control form-control-sm"/>
                    </div>
                    <div className="col">
                        <label htmlFor="" className="col-form-label">div#2</label>
                        <input type="text" className="form-control form-control-sm"/>
                    </div>
                    <div className="col">
                        <label htmlFor="" className="col-form-label">div#3</label>
                        <input type="text" className="form-control form-control-sm"/>
                    </div>
                </div>
            </fieldset>

            <fieldset className="">
                <legend>Hazmath Information</legend>
                <div className="row">
                    <div className="col-md-2">
                        <label htmlFor="" className="col-form-label">div#1</label>
                        <input type="text" className="form-control form-control-sm"/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="" className="col-form-label">div#2</label>
                        <input type="text" className="form-control form-control-sm"/>
                    </div>
                    <div className="col">
                        <label htmlFor="" className="col-form-label">div#3</label>
                        <input type="text" className="form-control form-control-sm"/>
                    </div>
                </div>
           
                <div className="row">
                    <div className="col">
                        <label htmlFor="" className="col-form-label">Weighted 4 digit</label>
                        <input type="text" name="" id="" className="form-control form-control-sm"/>
                    </div>
                    <div className="col">
                        <label htmlFor="" className="col-form-label">Release code</label>
                        <input type="text" name="" id="" className="form-control form-control-sm"/>
                    </div>
                </div>
                </fieldset>
        <button type="submit" className="btn btn-sm btn-success mt-2 float-end"><FasIcons.FaRegSave className="mb-1"/>Save</button>
        </form>
        </div>
      </div>
    </div>
  );
}
