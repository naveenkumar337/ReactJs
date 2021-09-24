import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { FasIcons } from '../CommonComponents/Icons'
import PdfPage from '../CommonComponents/PdfPage'

export default function Step4View() {
    return (
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-md-6">
                    <PdfPage/>
                </div>
                <div className="col-md-6 border right-block">
                    <div className="row bg-light p-1 border">
                        <span className="col float-left flex-wrap">Driver N in Vehicle1</span>
                        <div className=" col d-flex justify-content-end">
                            <span>ROwLetter= N</span>
                            <Link to="/dashboard" className="btn btn-secondary ms-3 btn-sm float-end">GoBack</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <label htmlFor="" className="col-form-label">DOB</label>
                            <input type="text" name="" id="" className="form-control form-control-sm"/>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="" className="col-form-label">Age</label>
                            <input type="text" name="" id="" className="form-control form-control-sm"/>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="" className="col-form-label">Sex</label>
                            <input type="text" name="" id="" className="form-control form-control-sm"/>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="" className="col-form-label col-col-form-label">Use Cases</label>
                            <div className="d-flex">
                            <input type="text" name="" id="" className="form-control form-control-sm"/>
                            <input type="text" name="" id="" className="form-control form-control-sm"/>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="" className="col-form-label">Lic. Restictions (20)</label>
                            <input type="text" name="" id="" className="form-control form-control-sm"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="" className="col-form-label">Operator</label>
                            <input type="text" name="" id="" className="form-control form-control-sm"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="" className="col-form-label">Address</label>
                            <input type="text" name="" id="" className="form-control form-control-sm"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <label htmlFor="" className="col-form-label">city</label>
                            <input type="text" name="" id="" className="form-control form-control-sm"/>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="" className="col-form-label">State</label>
                            <input type="text" name="" id="" className="form-control form-control-sm"/>
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="" className="col-form-label">Zip</label>
                            <input type="text" name="" id="" className="form-control form-control-sm"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="" className="col-form-label">Insurence Company</label>
                            <input type="text" name="" id="" className="form-control form-control-sm"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="" className="col-form-label me-1">Vehivle Travel Direction</label>
                            <div className="d-flex">
                                <div className="form-check-inline">
                                    <label htmlFor="" className="form-check-label me-1">A1</label>
                                    <input type="radio" name="step4RadioOptios" id="" className="form-check-input"/>
                                </div>
                                <div className="form-check-inline">
                                    <label htmlFor="" className="form-check-label me-1">A2</label>
                                    <input type="radio" name="step4RadioOptios" id="" className="form-check-input"/>
                                </div>
                                <div className="form-check-inline">
                                    <label htmlFor="" className="form-check-label me-1">A3</label>
                                    <input type="radio" name="step4RadioOptios" id="" className="form-check-input"/>
                                </div>
                                <div className="form-check-inline">
                                    <label htmlFor="" className="form-check-label me-1">A4</label>
                                    <input type="radio" name="step4RadioOptios" id="" className="form-check-input"/>
                                </div>
                                <div className="form-check-inline">
                                    <label htmlFor="" className="form-check-label me-1">A5</label>
                                    <input type="radio" name="step4RadioOptios" id="" className="form-check-input"/>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <label htmlFor="" className="col-form-label">Respponding To Emergency</label>
                            <input type="text" name="" id="" className="form-control form-control-sm"/>
                        </div>
                     </div>
                    <fieldset className="mt-2 mb-0">
                        <legend>Driver Information</legend>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="" className="col-form-label">Citation</label>
                                <input type="text" name="" id="" className="form-control form-control-sm"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="" className="col-form-label">Viol1</label>
                                <input type="text" name="" id="" className="form-control form-control-sm"/>
                            </div>
                            <div className="col">
                                <label htmlFor="" className="col-form-label">Viol2</label>
                                <input type="text" name="" id="" className="form-control form-control-sm"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="" className="col-form-label">Viol3</label>
                                <input type="text" name="" id="" className="form-control form-control-sm"/>
                            </div>
                            <div className="col">
                                <label htmlFor="" className="col-form-label">Viol4</label>
                                <input type="text" name="" id="" className="form-control form-control-sm"/>
                            </div>
                    </div>
                    </fieldset>
                    <div className="row">
                        <div className="col"><label htmlFor="" className="col-form-label">1</label><input type="text" name="" id="" className="form-control form-control-sm"/></div>
                        <div className="col"><label htmlFor="" className="col-form-label">2</label><input type="text" name="" id="" className="form-control form-control-sm"/></div>
                        <div className="col"><label htmlFor="" className="col-form-label">3</label><input type="text" name="" id="" className="form-control form-control-sm"/></div>
                        <div className="col"><label htmlFor="" className="col-form-label">4</label><input type="text" name="" id="" className="form-control form-control-sm"/></div>
                        <div className="col"><label htmlFor="" className="col-form-label">5</label><input type="text" name="" id="" className="form-control form-control-sm"/></div>
                        <div className="col"><label htmlFor="" className="col-form-label">6</label><input type="text" name="" id="" className="form-control form-control-sm"/></div>
                        <div className="col"><label htmlFor="" className="col-form-label">7</label><input type="text" name="" id="" className="form-control form-control-sm"/></div>
                        <div className="col"><label htmlFor="" className="col-form-label">8</label><input type="text" name="" id="" className="form-control form-control-sm"/></div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="" className="col-form-label">Medical Facility</label>
                            <input type="text" name="" id="" className="form-control form-control-sm"/>
                        </div>
                    </div>
               <button className="btn btn-sm btn-success mt-3 me-2 float-end"><FasIcons.FaRegSave className="mb-1"/> Save</button>
                </div>
            </div>
        </div>
    )
}
