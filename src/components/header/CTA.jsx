import React from "react";
import CV from '../../assets/manal_resume.pdf'
const CTA=()=>{
return(
    <div className="cta">
        <a href={CV} download className="btn">Dowenload CV</a>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
    </div>
)}

export default CTA;