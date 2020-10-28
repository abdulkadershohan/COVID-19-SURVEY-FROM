import React, {Component} from 'react';
import './Danger.css'
import {Redirect}  from "react-router-dom";
import HotLine from "../../../Pages/Home Page/HotLine";

const ResultDanger=(props)=> {
    if(sessionStorage.getItem("username")!="danger"){
        return <Redirect to="/survey"/>
    }
    else {
        return (
            <div className="result-danger">
                <div className="danger-top">
                    <h1>Result: Danger Zone</h1>
                    <p>According to analysis your answer your are in Danger Zone</p>
                    <h3>Please go to the nearest hospital</h3>
                    <div className="hotline">
                        <HotLine/>
                    </div>
                </div>

            </div>
        );
    }

}
export default ResultDanger