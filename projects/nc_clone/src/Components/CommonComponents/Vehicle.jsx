import React,{useState} from 'react'

export default function Vehicle({props}) {
    const [pass, setPass] = useState(props.passanger)
    var passangers=Array.from(Array(pass).keys())

    function Remove_Pass(num){
        setPass(pass-num);
    }
    return (
        <div>
             <div className="card mb-3">
                        <div className="card-header mb-0 pb-0 d-flex justify-content-between">
                            <p className="text-start">Unit {props.unit+1}</p>
                            <div className="">                             
                                <button className="ms-3 btn btn-sm btn-secondary" onClick={(e)=>setPass(pass+1)} >Add Pass</button>
                            </div>
                        </div>
                        <div className="card-body  mb-0 pb-0">
                            <div className="row">
                                <div className="col-md-4">
                                    <label htmlFor="" className="form-label">Data1</label>
                                    <input type="text" name="" id="" className="form-control form-control-sm"/>
                                 </div>
                                 <div className="col mt-4 d-flex">
                                     <label htmlFor="" className="text-center ms-3 form-check-label"><input type="checkbox" name="" id="" className="me-2 form-check-input-sm"/>#1</label>
                                     <label htmlFor="" className="text-center ms-3 form-check-label"><input type="checkbox" name="" id="" className="me-2 form-check-input-sm"/>#2</label>
                                     <label htmlFor="" className="text-center ms-3 form-check-label"><input type="checkbox" name="" id="" className="me-2 form-check-input-sm"/>#3</label>
                                     <label htmlFor="" className="text-center ms-3 form-check-label"><input type="checkbox" name="" id="" className="me-2 form-check-input-sm"/>#4</label>
                                 </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="form-label">Data#</label>
                                <input type="text" name="" id="" className="form-control form-control-sm"/>
                            </div>
                            <div className="form-group">
                                <fieldset className="mt-3">
                                    <legend>Driver#</legend>
                                    <div className="form row">
                                        <div className="col-md-5"><span>RowLetter</span></div>
                                        <div className="col-md-5"><input type="text" name="" id="" className="form-control form-control-sm"/></div>
                                        <div className="col"><button className="btn btn-sm btn-light">X</button></div>
                                    </div>
                                </fieldset>
                            </div>
                           
                           { passangers.map(e=><Passanger_Component num={e+1} onclick_Handle={()=>Remove_Pass(1)}/>) }

                        </div>
                    </div>
        </div>
    )
}

function Passanger_Component({num,onclick_Handle}){
    console.log(num)
    return(<>
    <div className="form-group">
                            <fieldset className="mt-3">
                                    <legend>Passanger {num}</legend>
                                    <div className="form row">
                                        <div className="col-md-5"><span>RowLetter</span></div>
                                        <div className="col-md-5"><input type="text" name="" id="" className="form-control form-control-sm"/></div>
                                        <div className="col"><button className="btn btn-sm btn-light" onClick={onclick_Handle}>X</button></div>
                                    </div>
        </fieldset>
    </div>
    </>)
}