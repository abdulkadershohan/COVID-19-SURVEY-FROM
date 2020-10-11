import React, {Component} from 'react';
import './input-form.css'
import {Link} from "react-router-dom";

class InputForm extends Component {
    render() {
        return (
            <div>
                <div className="input-form ">
                    <div className="input-form-2">
                        <form action="" className="input-form-content p-5">
                            <input name="name" type="text"  placeholder="Type your name here"/>
                            <input name="phone" type="text"  placeholder="Mobile Number"/>
                            <input name="division" type="text" placeholder="Division"/>
                            <input name="city" type="text" placeholder="City"/>
                            <input name="thana" type="text" placeholder="Thana"/>
                            <div>
                                <Link to="/survey/content">
                                    <input className=" btn btn-outline-success button-submit " type="submit"/>
                                </Link>

                            </div>

                        </form>
                    </div>
            </div>
            </div>
        );
    }
}

export default InputForm;