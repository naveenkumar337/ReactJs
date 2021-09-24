import React,{useState} from 'react'
import Data from './ReportData'
export default function ReportPage() {
const [count, setCount] = useState(0)
    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <input type="date" className="border-top-0 mt-3 border-start-0 border-end-0 border-bottom-2"/>
                </div>
            
            </div>
            <div className="row mt-3 d-flex border-bottom justify-content-center">
                <div className="col-md-6 btns d-flex justify-content-center">
                <div className="col-md-3"><a className={`btn btn-sm w-100 report-btn ${count===0?'active':''}`} onClick={()=>setCount(0)}>Step0</a></div>
                <div className="col-md-3"><a className={`btn btn-sm w-100 report-btn ${count===1?'active':''}`} onClick={()=>setCount(1)}>Step1</a></div>
                <div className="col-md-3"><a className={`btn btn-sm w-100 report-btn ${count===2?'active':''}`} onClick={()=>setCount(2)}>Step2</a></div>
                <div className="col-md-3"><a className={`btn btn-sm w-100 report-btn ${count===3?'active':''}`} onClick={()=>setCount(3)}>Step3</a></div>
                <div className="col-md-3"><a className={`btn btn-sm w-100 report-btn ${count===4?'active':''}`} onClick={()=>setCount(4)}>Step4</a></div>
                <div className="col-md-3"><a className={`btn btn-sm w-100 report-btn ${count===5?'active':''}`} onClick={()=>setCount(5)}>Step5</a></div>
            </div>
            </div>
            <div className="slide" data-ride="carousel">
                <div className="carousel-inner">    
                <div className={`carousel-item ${count===0?'active':''}`}>
                    <DataTable page={count}/>                 
                </div>                  
                <div className={`carousel-item ${count===1?'active':''}`}>
                    <DataTable page={count}/>                 
                </div>                
                <div className={`carousel-item ${count===2?'active':''}`}>
                    <DataTable page={count}/>                 
                </div>                
                 <div className={`carousel-item ${count===3?'active':''}`}>
                    <DataTable page={count}/>                 
                </div>              
                <div className={`carousel-item ${count===4?'active':''}`}>
                    <DataTable page={count}/>                 
                </div>
                <div className={`carousel-item ${count===5?'active':''}`}>
                    <DataTable page={count}/>                 
                </div>                
                       
                </div>
            </div>
            {/* <DataTable/> */}
        </div>
    )
}

function DataTable({page}){
    var _data=Data.filter((e)=>e.Step===page);
    return (<>
    {_data.length>0?
    <div className="d-flex p-2 justify-content-center">
        <div className=" col-md-4">
    <table className="table table-striped table-responsive">
        <thead className="">
            <tr>
                <th>Employee Name</th>
                <th>Count</th>
            </tr>
        </thead>
        <tbody>
           {_data.map(e=><tr><td>{e.Name}</td><td>{e.Count}</td></tr>)}
        </tbody>
    </table>
    </div>
    </div>
    :
    <span className="h4 text-secondary d-flex justify-content-center mt-5">No Data Found</span>}
    </>);
}
