import React from "react";
import { Link } from "react-router-dom";
import '../css/Sec1.css'
class Sec1 extends React.Component{
    render(){
        return(
            <>
            <div className="row ig ">
                <div className="col-md-6 col-xs-12 child">
                    <Link>
                        <div className="text center-position">             
                            <h2>Shop woman</h2>
                            <p className="pb-3">Morbi leo sagittis placerat sem. Nisl tincidunt <br/> nulla fames nisl risus egestas.</p>
                            <p className="fw-bold"><u> View women’s collection</u></p>
                        </div>
                        <div className="pic"></div>
                    </Link>
                </div>
            
            <div className="col-md-6 col-xs-12 child">
                 <Link>
                    <div className="text center-position ">
                        <h2>Shop men</h2>
                        <p className="pb-3">Morbi leo sagittis placerat sem. Nisl tincidunt <br/> nulla fames nisl risus egestas.</p>
                        <p className="fw-bold"><u> View men’s collection</u></p>
                    </div>
                    <div className="pic1"></div>
                </Link>
            </div>
            </div>
            
        <div className="nn row">
            
                <div class='sh col-lg-5 col-md-7 col-12'>
                    <input type='search' className="search col-lg-4 col-xs-12" placeholder="Search all products in our store ..."/>
                </div>
                <div className="more col-lg-5 col-md-4 col-12">
                    <div className=" ic"><Link> <i class="fa-solid fa-venus i"></i>Shop women</Link></div>
                    <div className="ic"><Link> <i class="fa-solid fa-mars i"></i>Shop men</Link></div>
                    <div className="  ic"><Link><i class="fa-brands fa-shopify i"></i>Shop deals</Link></div>
                    <div className=" ic "><Link><i class="fa-solid fa-bag-shopping i"></i>Shop new collections</Link></div>
                </div>

            
        </div>
            </>
        )
    }
}

export default Sec1