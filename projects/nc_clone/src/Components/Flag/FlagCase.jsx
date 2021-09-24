import React from 'react'
import { Link } from 'react-router-dom'
import AddPages from '../CommonComponents/AddPages'
import At_Int_and_Not_At_Int from '../CommonComponents/At_Int_and_Not_At_Int'
import { FasIcons, IoMdArrowBack } from '../CommonComponents/Icons'
import PdfPage from '../CommonComponents/PdfPage'

export default function FlagCase() {
    return (
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-md-6">
                    <PdfPage/>
                </div>
                <div className="col-md-6 border right-block">
                    <div className="card">
                        <div className="card-header">
                            <span>Flaged Cases</span>
                            <div className="d-flex float-end">
                                <button className="btn btn-sm btn-primary">+</button>
                                <Link to="/dashboard" className="btn btn-sm btn-secondary ms-2 text-center"><IoMdArrowBack className="mb-1" />Go Back</Link>
                            </div>
                        </div>
                    <div className="card-body">
                        <form action="">
                            <div className="row">
                                <div className="col-md-3">
                                    <label htmlFor="" className="col-form-label">Date Of Crash</label>
                                    <input type="text" name="" id="" className="form-control form-control-sm"/>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="" className="col-form-label">Time Of Crash</label>
                                    <input type="text" name="" id="" className="form-control form-control-sm"/>
                                </div>
                                <div className="col">
                                    <label htmlFor="" className="col-form-label">CityTown</label>
                                    <input type="text" name="" id="" className="form-control form-control-sm"/>
                                </div>
                            </div>
                           <At_Int_and_Not_At_Int/>
                                <div className="col-md-4 mt-0">
                                    <label htmlFor="" className="col-form-label">Crash Report ID</label>
                                    <input type="text" name="" id="" className="form-control form-control-sm"/>
                                </div>
                            <AddPages/>
                            <button type="submit" className="btn btn-sm btn-success mt-2 float-end"><FasIcons.FaRegSave className="mb-1"/> Save</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

