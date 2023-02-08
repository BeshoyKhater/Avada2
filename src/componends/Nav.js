import React from "react"
import { Outlet, Link } from "react-router-dom";
import  '../css/Nav.css'

class Nav extends React.Component{
  render(){
    return(
      <>
        <button id="btnUp">^</button>
      <div class='row parent'>
        <p class='col m-0 p'>Viverra quis quam nec cursus lorem egestas <Link class='link'><u>venenatis diam</u></Link> sed cursus.</p>
        <div class='icons col'>
         <Link to="http://facebook.com" target='_blank' aria-label="FaceBook" data-bs-placement='top' data-bs-toggle='tooltip'><i class="fa-brands fa-facebook-f p-2 pt-3"></i></Link>
         <Link><i class="fa-brands fa-twitter p-2 pt-3 "></i></Link>
         <Link><i class="fa-brands fa-instagram p-2 pt-3"></i></Link>
        <Link><i class="fa-brands fa-youtube p-2 pt-3"></i></Link>
        </div>
        <hr/>
      </div>
       
      <nav class="navbar navbar-expand-lg Nav ">
   <div class="container-fluid">

     <Link class="navbar-brand logo" href="#"><img src="https://avada.theme-fusion.com/retail/wp-content/uploads/sites/113/2021/04/retail-logo-svg.svg" alt="img"/></Link>
     <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"><i class="fa-solid fa-list"></i></span>
     </button>
     <div class="collapse navbar-collapse " id="navbarSupportedContent">
       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         <li class="nav-item">
           <Link class="nav-link active" aria-current="page" to="/">Home</Link>
         </li>
         <li class="nav-item">
           <Link class="nav-link" to="about">About</Link>
         </li>
         <li class="nav-item dropdown">
           <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Shop
           </Link>
           <ul class="dropdown-menu shop " aria-labelledby="navbarDropdown">
             <li><Link class="dropdown-item" href="#">Shop</Link></li>
             <li><Link class="dropdown-item" href="#">Shop Classic – Sidebar</Link></li>
             <li><Link class="dropdown-item" href="#">Shop Grid – 3 Columns</Link></li>
             <li><Link class="dropdown-item" href="#">Shop Grid – 4 Columns</Link></li>
             <li><Link class="dropdown-item" href="#">Shop – List View</Link></li>
           </ul>
         </li>
         <li class="nav-item dropdown">
           <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
           </Link>
           <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
             <li><Link class="dropdown-item" href="#">Action</Link></li>
             <li><Link class="dropdown-item" href="#">Another action</Link></li>
             <li><hr class="dropdown-divider"/></li>
             <li><Link class="dropdown-item" href="#">Something else here</Link></li>
           </ul>
         </li>
         <li class="nav-item dropdown ">
           <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Blog
           </Link>
           <ul class="dropdown-menu blog" aria-labelledby="navbarDropdown">
             <li><Link class="dropdown-item" href="#">Blog – No sidebar</Link></li>
             <li><Link class="dropdown-item" href="#">Blog – Grid with sidebar</Link></li>
           </ul>
         </li>
         <li class="nav-item">
           <Link class="nav-link" href="#">Contact</Link>
         </li>
       </ul>
     </div>
           <Link ><i class="fa-regular fa-user fs-5"></i> </Link>
              <Link> <i id="tt" class="fa-solid fa-cart-shopping  fs-5 p-2"></i></Link>
   </div>
        <div className="form1 row">
          <form>
            <div class="mb-3">
              <input type="email" placeholder="Username" class="form-control" id="exampleInputEmail1"/>
            </div>
            <div class="mb-3">
              <input type="password"placeholder="Password" class="form-control" id="exampleInputPassword1"/>
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
              <label class="form-check-label" for="exampleCheck1">Remember Me</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <button type="submit" class="btn">Register</button>
          </form>
        </div>
 </nav>
        
 <Outlet/> 
 </>
    )
  }
}
// ----------------------------javaScript---------------------


export default Nav
// let btn=document.getElementById('btnUp')

// window.onscroll=function(){
//     if(scrollY >+ 400){
//         btn.style.display='block'
//     }else{
//         btn.style.display='none'
//     }
// }
// btn.onclick=function(){
//     scroll({
//         top:0,
//         behavior:"smooth"
//     })
// }