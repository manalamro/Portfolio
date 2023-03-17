import React from "react";
import './services.css'
import{BiCheck} from 'react-icons/bi'
const Service=()=>{
return(

<section id="services">
<h5>What I Offer</h5>
<h2>Services</h2>
<div className="container services_container">
    <article className="service">
        <div className="service_head">
            <h3 >web development</h3>
        </div>
        <ul className="service_list">
        <li>
            <BiCheck className="service_list-icon"/>
        <p >Lorem,Asperiores ipsum id voluptatem.</p>
        </li>
        <li>
            <BiCheck className="service_list-icon"/>
        <p >Lorem,Asperiores ipsum id voluptatem.</p>
        </li>
        <li>
            <BiCheck className="service_list-icon"/>
        <p >Lorem,Asperiores ipsum id voluptatem.</p>
        </li>
        <li>
            <BiCheck className="service_list-icon"/>
        <p >Lorem,Asperiores ipsum id voluptatem.</p>
        </li>
        
        </ul>
    </article>

    {/* web development end */}
    <article className="service">
        <div className="service_head">
            <h3 >data analytics</h3>
        </div>
        <ul className="service_list">
        <li>
            <BiCheck className="service_list-icon"/>
        <p >Lorem,Asperiores ipsum id voluptatem.</p>
        </li>
        <li>
            <BiCheck className="service_list-icon"/>
        <p >Lorem,Asperiores ipsum id voluptatem.</p>
        </li>
        <li>
            <BiCheck className="service_list-icon"/>
        <p >Lorem,Asperiores ipsum id voluptatem.</p>
        </li>
        <li>
            <BiCheck className="service_list-icon"/>
        <p >Lorem,Asperiores ipsum id voluptatem.</p>
        </li>
        </ul>
    </article>
    
       {/* web development end */}
       <article className="service">
        <div className="service_head">
            <h3 >data analytics</h3>
        </div>
        <ul className="service_list">
        <li>
            <BiCheck className="service_list-icon"/>
        <p >Lorem,Asperiores ipsum id voluptatem.</p>
        </li>
        <li>
            <BiCheck className="service_list-icon"/>
        <p >Lorem,Asperiores ipsum id voluptatem.</p>
        </li>
        <li>
            <BiCheck className="service_list-icon"/>
        <p >Lorem,Asperiores ipsum id voluptatem.</p>
        </li>
        <li>
            <BiCheck className="service_list-icon"/>
        <p >Lorem,Asperiores ipsum id voluptatem.</p>
        </li>
        </ul>
    </article>

</div>
</section>

)}

export default Service;