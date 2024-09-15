import React from "react";
import './header.css'
import CTA from "./CTA";
import Image from '../../assets/5.png'
import HeadrSocials from "./HeaderSocials";
const Header=()=>{
return(
<header id="header">
   <div className="container header_container">
   <h5>hello I'm</h5>
   <h1>Manal Amro</h1>
   <h5 className="text-light">software engineer</h5>
    <CTA/>
    <HeadrSocials/>
    <div className="header_img">
        <img src={Image} alt="header_image"></img>
    </div>    
    <a href="#contact" className="scroll_down">Scroll Down</a>
   </div>
</header>
)}

export default Header;