import React, {Component} from 'react';
import './Result.css'
import {Redirect}  from "react-router-dom";
const ResultDanger=(props)=> {
    if(sessionStorage.getItem("username")!="danger"){
        return <Redirect to="/survey"/>
    }
    else {
        return (
            <div className="result-danger">
                <div className="danger-top">

                </div>

            </div>
        );
    }

}
export default ResultDanger