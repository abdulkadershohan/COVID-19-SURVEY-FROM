import React, {Component} from 'react';
import ResultDanger from "../../Survey/Survey Result/ResultDanger";
import ResultAvg from "../../Survey/Survey Result/ResultAvg";
import ResultGreen from "../../Survey/Survey Result/ResultGreen";
class MainResult extends Component {
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

                <div>

                    {score<=1 &&(<ResultGreen/>)}
                    {score===2 &&(<ResultAvg/>)}
                    {score>2  &&(<ResultDanger/>)}
                </div>


            </div>
        );
    }
}

export default MainResult;