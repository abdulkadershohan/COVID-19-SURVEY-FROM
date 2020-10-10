import React, {Component} from 'react';
import './input-form.css'

class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            score:this.props.sendData
        }
    }

    render() {
        let { score } = this.state;

        return (
            <div>
                <div className="input-form ">
                    <form action="" className=" input-form-content p-5">
                        <input name="name" type="text"  placeholder="Type your name here"/>
                        <input name="phone" type="text"  placeholder="Mobile Number"/>
                        <input name="division" type="text" placeholder="Division"/>
                        <input name="city" type="text" placeholder="City"/>
                        <input name="thana" type="text" placeholder="Thana"/>
                        <div>
                            <input  className=" btn btn-outline-success " type="submit"/>

                        </div>

                    </form>

                    <h1>{score}</h1>

                </div>
                
            </div>
        );
    }
}

export default InputForm;