import React, {Component} from 'react';
import ResultDanger from "../../Survey/Survey Result/ResultDanger";
import ResultAvg from "../../Survey/Survey Result/ResultAvg";
import ResultGreen from "../../Survey/Survey Result/ResultGreen";
class MainResult extends Component {


    render() {
       // let { score } = 4//this.state;
        const score=3;

        return (
            <div>

                    {score<=1 &&(<ResultGreen/>)}
                    {score===2 &&(<ResultAvg/>)}
                    {score>2  &&(<ResultDanger/>)}



            </div>
        );
    }
}

export default MainResult;