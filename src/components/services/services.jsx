import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
import { CgAddR } from "react-icons/cg";

const Service = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services
      <CgAddR
        style={{ marginLeft: "1%", fontSize: "20px", color: "#faebd7" }}
      />
      </h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>web development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem,Asperiores ipsum id voluptatem.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem,Asperiores ipsum id voluptatem.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem,Asperiores ipsum id voluptatem.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem,Asperiores ipsum id voluptatem.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Service;
