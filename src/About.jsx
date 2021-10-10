import React from 'react'
import CardAbout from './CardAbout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SdataAbout from './SdataAbout';

const About=()=>{
  return(
    <>
    <h1 className="about_head">We welcome with grateful heart every 
    customer every time, <br/>through premium products, services, value-for-money driven by innovation,<br/> technology & people-first approach.</h1>
    <h1 className="text-center mt-5 about_subhead">Our Core values</h1>
    <div className="container-fluid mb-5">
    <div className="row">
     <div className="col 10 mx-auto">
       <div className="row gy-10">
         {
           SdataAbout.map((val,ind)=>{
             return<CardAbout key={ind}
             imgsrc={val.imgsrc}
             title={val.title}
             msg={val.msg}
             />
           })
         }
       </div>
     </div>
    </div>
    </div>
    </>
  )
}
export default About;