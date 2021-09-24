import React,{useState} from 'react'
import Step0Components from '../Step0/Step0Component'
import {FisIcons,FasIcons,VscGraph,BasIcons} from '../CommonComponents/Icons'
import {BrowserRouter as Router,
    Switch,
    Route,
    Link} from 'react-router-dom'

import Dashboard from '../DashBoard/DashBoard'
import Step1View from '../Step1/Step1View'
import Step2View from '../Step2/Step2View'
import Step3View from '../Step3/Step3View'
import Step4View from '../Step4/Step4View'
import Step5View from '../Step5/Step5View'
import FlageCases from '../Flag/FlagCase'
import Reports from '../Reports/ReportPage'

export default function HomePage() {
    return (
        <div>
        <SideBar/>    
        </div>
    )
}
function SideBar(){
    const [toggle, setToggle] = useState(false)
    console.log("object");
    return(
        <>
        <div className="sidebar-menu overflow-hidden">
        <div className="row table-responsive">            
            <div className={`sidebar ${toggle?'':'toggle'}`}>
                <div className="w-auto heading m-2 text-center text-white"><span className="h6 text-center">User Entry Site</span></div>
                <div className="w-auto text-center m-2 text-white"><span className="">Welcome</span></div>
               
                <ul className="w-auto list-group">
                <li className="w-auto list-group-item border-0"><Link className="" to="/dashboard"><strong><BasIcons.BsGraphUp style={{color:"white",fontWeight:'bold'}}/></strong> DashBoard <span className="badge rounded-circle bg-secondary"><strong><FisIcons.FiRefreshCcw className=""/></strong></span></Link></li>
                    <li className="w-auto list-group-item border-0"><Link className="" to="/step1list"><BasIcons.BsReverseLayoutTextWindowReverse/> Step1 <span className="badge rounded-circle bg-secondary">0</span></Link></li>
                    <li className="w-auto list-group-item border-0"><Link className="" to="/step2list"><BasIcons.BsReverseLayoutTextWindowReverse/> Step2 <span className="badge rounded-circle  bg-secondary">0</span></Link></li>
                    <li className="w-auto list-group-item border-0"><Link className="" to="/step3list"><BasIcons.BsReverseLayoutTextWindowReverse/> Step3 <span className="badge rounded-circle bg-secondary">0</span></Link></li>
                    <li className="w-auto list-group-item border-0"><Link className="" to="/step4list"><BasIcons.BsReverseLayoutTextWindowReverse/> Step4 <span className="badge rounded-circle bg-secondary">0</span></Link></li>
                    <li className="w-auto list-group-item border-0"><Link className="" to="/step5list"><BasIcons.BsReverseLayoutTextWindowReverse/> Step5 <span className="badge rounded-circle bg-secondary">0</span></Link></li>
                    <li className="w-auto list-group-item border-0"><Link className="" to="/step6list"><BasIcons.BsReverseLayoutTextWindowReverse/> Step6 <span className="badge rounded-circle bg-secondary">0</span></Link></li>
                    <li className="w-auto list-group-item border-0"><Link className="" to="/flagcases"><FasIcons.FaFlag/> Flagged Cases <span className="badge rounded-circle bg-secondary">0</span></Link></li>
                    <li className="w-auto list-group-item border-0"><Link className="" to="/reports"><VscGraph/> Reports </Link></li>
                </ul>
              
            </div>       
       <div className="col ps-0 mt-0">
           <div className="navbar d-flex justify-content-between pt-0 p-2 navbar-light bg-light">
           <a className="navbar-brand cursor-pointer font-weight-bold" onClick={()=>setToggle(!toggle)}><span><FasIcons.FaBars></FasIcons.FaBars></span> </a>  
           <button type="button" className="btn cursor-pointer text-white btn-secondary btn-sm">GoBack</button>         
           </div>
           <div className="bg-secondary w-100 ps-0 border d-flex align-items-center">
           <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">Home</li>
                    <li class="breadcrumb-item active" aria-current="page">Library</li>
                </ol>
          </nav>
           </div>
           <div className="p-1">
           {/* <Step0Components/> */}
           <Switch>
            <Route path="/dashboard"><Dashboard/> </Route>
            <Route path="/step1list"><Step0Components/></Route>            
            <Route path="/reports"><Reports/></Route>
        </Switch>
           </div>
       </div>
       
         </div>
        </div>
        </>
            )
}
