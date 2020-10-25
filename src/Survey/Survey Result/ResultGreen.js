import React, {Component} from 'react';
import './Result.css'
import {Redirect}  from "react-router-dom";
const ResultGreen=()=> {
    if(sessionStorage.getItem("username")!="green"){
        return <Redirect to="/survey"/>
    }
    else {
        return (
            <div className="result-green">
                <div className="danger-top">

                </div>

            </div>

        );
    }

}
export default ResultGreen