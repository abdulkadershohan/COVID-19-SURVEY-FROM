import React, {Component} from 'react';
import './input-form.css'
import {Link} from "react-router-dom";
import axios from 'axios'

class InputForm extends Component {
    constructor(props) {
        super(props);
        this.onChangeName=this.onChangeName.bind(this);
        this.onChangePhone=this.onChangePhone.bind(this);
        this.onChangeDiv=this.onChangeDiv.bind(this);
        this.onChangeCity=this.onChangeCity.bind(this);
        this.onChangeThana=this.onChangeThana.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            name:'',
            phone:'',
            division:'',
            city:'',
            thana:''

        }

    }
    onChangeName(e){
        this.setState({
            name:e.target.value
        })
    }
    onChangePhone(e){
        this.setState({
            phone:e.target.value
        })
    }
    onChangeDiv(e){
        this.setState({
            division:e.target.value
        })
    }
    onChangeCity(e){
        this.setState({
            city:e.target.value
        })
    }
    onChangeThana(e){
        this.setState({
            thana:e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault()
        const obj={
            name:this.state.name,
            phone:this.state.phone,
            division:this.state.division,
            thana:this.state.thana,
            city:this.state.city,
        }

        axios.post('/insert.php',obj)
           /* .then(res=>console.log(res.data))

            */
            .then(response=>{
                console.log(response)
            })
            .catch(error=>{
                console.log(error)
            })
        

        this.setState({
            name:'',
            phone:'',
            division:'',
            city:'',
            thana:''
        })


    }
    render() {
        return (
            <div className="hero">
                <div className="form-box">
                    <div className="title">
                        <h4>Fill out the Form to Continue</h4>
                    </div>
                    <form id="login" className="input-group"  onSubmit={this.onSubmit}>
                        <input type="text" className="input-field" placeholder="Type your name here" required
                               value={this.state.name}
                               onChange={this.onChangeName}
                        />
                        <input type="text" className="input-field" placeholder="Mobile Number" required
                               value={this.state.phone}
                               onChange={this.onChangePhone}
                        />
                        <input type="text" className="input-field" placeholder="Division" required
                               value={this.state.division}
                               onChange={this.onChangeDiv}
                        />
                        <input type="text" className="input-field" placeholder="City" required
                               value={this.state.city}
                               onChange={this.onChangeCity}
                        />
                        <input type="text" className="input-field" placeholder="Thana" required
                               value={this.state.thana}
                               onChange={this.onChangeThana}
                        />


                            <button type="submit" className="submit-btn">Continue</button>


                    </form>
                </div>

            </div>


        );
    }
}

export default InputForm;