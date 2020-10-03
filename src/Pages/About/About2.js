import React from "react";
import {Link} from "react-router-dom";

const About2=props=>{
    return(
        <>
            <div className="a-card text-center shadow">
                <div className="overflow">
                    <img src={props.imgsrc} className={"card-img-top"} alt="ImageUpdate"/>
                </div>
                <div className="card-body text-dark">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text text-secondary">
                        Bangladesh University of Business and Technology (BUBT)

                    </p>
                    <p className="card-text text-secondary">
                       CSE 38
                    </p>
                    <h3>Team Members</h3>
                    <p>
                        <a className="text-decoration-none" href="http://facebook.com/abdulkadir.shohan.5"target="_blank">Abdul kader </a>
                         | 17182103236
                    </p>
                    <p>
                        <a className="text-decoration-none" href="https://www.facebook.com/tanjibjahanjir.tusher"target="_blank">Tanjib Jahangir Tusher  </a>
                        | 17182103231
                    </p>
                    <p>
                        <a className="text-decoration-none" href="https://www.facebook.com/sabbir.saidul.5"target="_blank">Saidul Islam Talukder  </a>
                        | 17182103257
                    </p>
                    <p>
                        <a className="text-decoration-none" href="https://www.facebook.com/profile.php?id=100008184429187"target="_blank">Dil Afrose Roshney  </a>
                        | 17182103235
                    </p>
                    <p>
                        <a className="text-decoration-none" href="https://www.facebook.com/yasmin.nipa.50"target="_blank">Yasmin Akter Nipa </a>
                        | 17182103265
                    </p>
                    <h3>Developer Contract</h3>

                    <p>Email Us</p>
                    <h6>abdulkadirshohan@gmail.com</h6>

                    <p>Mobile No</p>
                    <a className="text-decoration-none" href="tel:+8801766614798"><h6>+8801766614798</h6></a>

                    <a href="https://www.facebook.com/Covit-19-Survey-FORM-106000444581681" target="_blank" className="btn btn-outline-success">Learn More</a>
                </div>

            </div>


        </>

    );

}
export default About2