import React, {Component} from 'react';
import './input-form.css'
import {Link} from "react-router-dom";

///  <button type="submit" className="submit-btn">Continue</button>
//
class InputForm extends Component {


    render() {
        return (
            <div className="hero">
                <div className="form-box">
                    <div className="title">
                        <h4>Fill out the Form to Continue</h4>
                    </div>
                    <form id="login" className="input-group"  onSubmit={this.handleClick}>
                        <input type="text" className="input-field" placeholder="Type your name here" required />
                        <input type="text" className="input-field" placeholder="Mobile Number" required />
                        <input type="text" className="input-field" placeholder="Division" required />
                        <input type="text" className="input-field" placeholder="City" required />
                        <input type="text" className="input-field" placeholder="Thana" required />

                        <div className="submit-btn"
                        style={{
                            textDecoration:"none",
                            alignItems:"center",
                            justifyContent:"center",
                            display:"flex"
                        }}
                        >
                            <Link to="/survey/content" >Continue</Link>
                        </div>

                    </form>
                </div>
            </div>


        );
    }
}

export default InputForm;