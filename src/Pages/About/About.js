import React, { Component } from 'react';
import logo from '../../images/logo.png'
import './About.css'

import About2 from "./About2";

class Team extends Component {
    render() {
        return (
            <>
                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">

                        <div className="col-md-4">
                            <About2 imgsrc={logo} title="Developed by Team 71"/>
                        </div>

                    </div>
                </div>

                </>


        );
    }
}

export default Team;