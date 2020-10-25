import React, {Component} from 'react';
import './Result.css'
import {Redirect}  from "react-router-dom";
const ResultAvg=()=> {
    if(sessionStorage.getItem("username")!="avg"){
        return <Redirect to="/survey"/>
    }
    else{
        return (
            <div className="result-avg">
                <div className="danger-top">

                </div>

            </div>
        );
    }

}
export default ResultAvg