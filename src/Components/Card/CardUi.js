import React from "react";
import {Link} from "react-router-dom";

 const CardUi=props=>{
     return(
         <>
            <div className="card text-center shadow">
                <div className="overflow">
                    <img src={props.imgsrc} className={"card-img-top"} alt="ImageUpdate"/>
                </div>
               <div className="card-body text-dark">
                   <h4 className="card-title">{props.title}</h4>
                   <p className="card-text text-secondary">{props.p}</p>
                   <Link to={props.url} className="btn btn-outline-success">Learn More</Link>
               </div>
            </div>


         </>

     );

}
export default CardUi