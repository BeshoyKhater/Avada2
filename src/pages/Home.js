import React from "react";
import Sec1 from "../componends/Sec1";
import Sec2 from "../componends/sec2";
import Sec3 from "../componends/sec3";
class Home extends React.Component{
    render(){
        return(
            <div>
                <Sec1/>
                <Sec2/>
                <Sec3/>
            </div>
        )
    }
}
export default Home