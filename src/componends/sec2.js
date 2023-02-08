import React from "react";
import { Link } from "react-router-dom";
import '../css/sec2.css'

class Sec2 extends React.Component{
    render(){
        return(
        <>
            <div className="div1">
                <span className="log"><img src="https://avada.theme-fusion.com/retail/wp-content/uploads/sites/113/2021/02/icon-1.svg" alt="img"></img></span>
                <h3>Urna elit, sem lobortis faucibus <strong><u>Facilisi vel lectus etiam</u></strong></h3>
                <h3>phasellus odio in massa sociis congue massa feugiat ut sit</h3>
                <h3 className="pb-4">pulvinar in.</h3>
                <Link><p className="pb-5"><u>Buy Avada theme today!</u></p></Link>
            </div>

            <div className="row product">
                <h2>Latest products</h2>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 son">
                    <Link><div className="pro1"><div className="opas"><span>Simple Tank Top</span></div></div></Link>
                    <p className="pt-4">Simple Tank Top</p>
                    <p>$30.00 &nbsp;<del><small>$45.00</small></del>&nbsp; <span className="bor">33% Off</span></p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 son">
                    <Link><div className="pro2"><div className="opas"><span>Dark Silk Shirt</span></div></div></Link>
                    <p className="pt-4">Dark Silk Shirt</p>
                    <p>$55.00</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 son ">
                    <Link><div className="pro3"><div className="opas"><span>Spring Dotted Dress</span></div></div></Link>
                    <p className="pt-4 ">Spring Dotted Dress</p>
                    <p>$30.00 &nbsp;<del><small>$45.00</small></del>&nbsp; <span className="bor">33% Off</span></p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 son">
                    <Link><div className="pro4"><div className="opas"><span>Wool Parka</span></div></div></Link>
                    <p className="pt-4">Wool Parka</p>
                    <p >$30.00</p>
                </div>
            

            
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 son">
                    <Link><div className="pro5"><div className="opas"><span>White Dress</span></div></div></Link>
                    <p className="pt-4">White Dress</p>
                    <p>$32.00</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 son">
                    <Link><div className="pro6"> <div className="opas"><span>Light Floral Dress</span></div></div></Link>
                    <p className="pt-4">Light Floral Dress</p>
                    <p>$30.00 &nbsp;<del><small>$45.00</small></del>&nbsp; <span className="bor">33% Off</span></p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 son">
                    <Link><div className="pro7"><div className="opas"><span >Men Jacket</span></div></div></Link>
                    <p className="pt-4">Men Jacket</p>
                    <p>$55.00</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 son">
                    <Link><div className="pro8"><div className="opas"><span>Red Sweater</span></div></div></Link>
                    <p className="pt-4">Red Sweater</p>
                    <p>$40.00</p>
                </div>
            </div>
        </>
        )
    }
}

export default Sec2