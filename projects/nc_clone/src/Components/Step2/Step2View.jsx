import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import { FasIcons, IoMdArrowBack, IoMdAdd } from '../CommonComponents/Icons'
import PdfPage from '../CommonComponents/PdfPage'
import Vehicle from '../CommonComponents/Vehicle'

export default function Step2View() {
    const [veh, setVeh] = useState(1)
    var vehicles=Array.from(Array(veh).keys())
    return (
        <>
            <div className="container-fluid pt-2">
                <div className="row">
                    <div className="col-md-6">
                        <PdfPage/>
                    </div>
                    <div className="col-md-6 border right-block">
                        <div className="form-group p-2 pb-0 d-flex justify-content-between">
                            <div className="grouping">
                                <div className="form-check-inline">
                                    <label htmlFor="form-check-label">File_24</label>
                                    <input type="radio" name="" id="" className="ms-2 form-check-input"/>
                                </div>
                                <div className="form-check-inline">
                                    <label htmlFor="form-check-label">File_36</label>
                                    <input type="radio" name="" id="" className="ms-2 form-check-input"/>
                                </div>
                            </div>
                            <div className="d-inline-block">
                                <Link type="button" className="btn btn-sm btn-secondary"><FasIcons.FaFlag className="mb-1"/> Flag</Link>
                                <Link to="/dashboard" className="btn  ms-3 btn-sm btn-secondary"><IoMdArrowBack className="mb-1 text-white" style={{fontSize:"Large"}} />GoBack</Link>
                                <button type="button" className="btn ms-3 btn-sm btn-secondary" onClick={()=>setVeh(veh+1)}><IoMdAdd style={{fontSize:"large",color:"white",marginBottom:"2px"}} /> Add Box</button>
                            </div>
                        </div>
                        <hr/>
                        {vehicles.map(e=> <Vehicle props={{unit:e,passanger:0}}/>)}                   
                        <button type="submit" className="btn btn-sm btn-success mt-3 mx-3 float-end"><FasIcons.FaRegSave className="mb-1"/> Save</button>
                    </div>               
                </div>
            </div>
        </>
    )
}
