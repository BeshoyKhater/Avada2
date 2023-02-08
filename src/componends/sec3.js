import React from "react";
import { Link } from "react-router-dom";
import '../css/sec3.css';

class Sec3 extends React.Component{
    render(){
        return(
            <>
                <div className="row lection">
                    <div className="collection col-lg- col-md-3 col-sm-6 col-xs-12">
                        <h2>Browse the</h2>
                        <h2>latest</h2>
                        <h2>collections.</h2>
                        <p className="pt-4">Morbi leo sagittis placerat sem.<br/> Nisl tincidunt nulla fames nisl<br/> risus egestas.</p>
                        <span className="fs-5"><Link><u>Buy Avada today!</u></Link></span>
                    </div>
                    <div className="collection col-lg-3 col-md-3 col-sm-6 col-xs-12"><Link><div className="lection-pic1"><img src="https://avada.theme-fusion.com/retail/wp-content/uploads/sites/113/2021/02/cat-19.jpg"alt="img"/></div></Link>
                        <span>Casual collection <small>7</small></span>
                    </div>
                    <div className="collection col-lg-3 col-md-3 col-sm-6 col-xs-12"><Link><div className="lection-pic2"><img src="https://avada.theme-fusion.com/retail/wp-content/uploads/sites/113/2021/02/cat-18.jpg"alt="img"/></div></Link>
                        <span>Spring collection <small>11</small></span>
                    </div>
                    <div className="collection col-lg-3 col-md-3 col-sm-6 col-xs-12"><Link><div className="lection-pic3"><img src="https://avada.theme-fusion.com/retail/wp-content/uploads/sites/113/2021/02/cat-14.jpg"alt="img"/></div></Link>
                        <span>Streetwear <small>4</small></span>
                    </div>
                </div>
                <div className="row new">
                    <div className=" col-md-6 col-xs-12 new-child ">
                        <Link>
                            <div className="new-text1 center-position">             
                                <h2>Shop woman</h2>
                                <p className="pb-3">Morbi leo sagittis placerat sem. Nisl tincidunt <br/> nulla fames nisl risus egestas.</p>
                                <p className="fw-bold"><u> View women’s collection</u></p>
                            </div>
                            <div className="new-pic1 "><div className="fil"></div></div>
                        </Link>
                    </div>
                    <div className="row col-md-6 col-xs-12 new2">
                    <div className="col-12 new-child">
                        <Link>
                            <div className="new-text2 center-position">             
                                <h2>Shop streetwear</h2>
                                <p className="pb-3">Morbi leo sagittis placerat sem. Nisl tincidunt <br/> nulla fames nisl risus egestas.</p>
                                <p className="fw-bold"><u> View streetwear collection</u></p>
                            </div>
                            <div className="new-pic2 "><div className="fil"></div></div>
                        </Link>
                    </div>
                        <div className="new-child col-12">
                        <Link>
                            <div className="new-text3 center-position">             
                                <h2>Shop men</h2>
                                <p className="pb-3">Morbi leo sagittis placerat sem. Nisl tincidunt <br/> nulla fames nisl risus egestas.</p>
                                <p className="fw-bold"><u> View men’s collection</u></p>
                            </div>
                            <div className="new-pic3"><div className="fil"></div></div>
                        </Link>
                    </div>
                    </div>
                </div>
                <div className=" backgruond">
                        <h2>Latest from the blog</h2>
                        <p>Morbi leo sagittis placerat sem nisl tincidunt nulla.</p>
                    <div className="the-blog row ">
                        <div className="parent-blog col-md-4 col-sm-6 col-xs-12">
                            <Link>
                                <div className="backgruond-pic1"> </div>
                            </Link>
                                <div className="backgruond-text">
                                    <Link>
                                        <div className="back-text">
                                            <h4 className="fw-bold">6 brands to shop for a fresh start this spring</h4>
                                            <p>Read article <span><i class="fa-solid fa-arrow-right"></i></span></p>
                                        </div>
                                    </Link>
                                </div>
                        </div>

                        <div className="parent-blog col-md-4 col-sm-6 col-xs-12">
                            <Link>
                                <div className="backgruond-pic2"> </div>
                            </Link>
                            <div className="backgruond-text">
                                <Link>
                                    <div className="back-text">
                                        <h4 className="fw-bold">Cute valentines day gifts for him or her</h4>
                                        <p>Read article <span><i class="fa-solid fa-arrow-right"></i></span></p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        
                        <div className="parent-blog col-md-4 col-sm-6 col-xs-12">
                            <Link>
                                <div className="backgruond-pic3"> </div>
                            </Link>
                             <div className="backgruond-text">
                                <Link>
                                    <div className="back-text">
                                        <h4 className="fw-bold">Street style lookbook – 2021 Edition</h4>
                                        <p>Read article <span><i class="fa-solid fa-arrow-right"></i></span></p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                
            </>
        )
    }
}
export default Sec3







