import React from "react";
import './footer.css'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaFacebookSquare} from 'react-icons/fa'

const Footer=()=>{
return(
<footer>
<a href="#header"className="footer_logo">MANAL</a>
<ul className="permalinks">
<li><a href="#header">Home</a></li>
<li><a href="#about">about</a></li>
<li><a href="#experience">experience</a></li>
<li><a href="#services">services</a></li>
<li><a href="#portfolio">portfolio</a></li>
<li><a href="#testimonials">testimonials</a></li>
<li><a href="#contact">contact</a></li>
</ul>
<div className="footer-socials">
    <a href="https://instagram.com/manal.amro.5?igshid=ZDdkNTZiNTM="><AiOutlineInstagram/></a>
    <a href="https://www.facebook.com/manal.amronm?mibextid=ZbWKwL"><FaFacebookSquare/></a>
</div>
<div className="footer_copyright">
    <small>&copy;All right reserved</small>
</div>
</footer>
)}

export default Footer;