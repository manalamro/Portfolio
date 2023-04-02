import React, { useState, useContext, useEffect } from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
import { CgAddR } from "react-icons/cg";
import { RiAddCircleLine } from "react-icons/ri";
import AddFieldForm from "../services/addservice";
import { ServiceContext } from "../providers/serviceprovider";
import AddServiceListdForm from '../services/addNewService'
const Service = () => {
  const { fetchServiceData, serviceArray } = useContext(ServiceContext);
  const [showForm, setshowForm] = useState(false);
  const [showServiceForm, setshowServiceForm] = useState(false);

  const handleClick = () => {
    setshowForm(true);
  };

  const togglePopup = (id) => {
    setshowServiceForm(!showServiceForm);
    let service2 = serviceArray.filter((service) => service.id == id);
    {
      service2.map((servi) => (
        <>
          {localStorage.setItem("servicefield", servi.field)}
          {localStorage.setItem("serviceID", servi.id)}
          {localStorage.setItem("ServiceList", JSON.stringify(servi.serviceList))}
        </>
      ));
    }
  };


  useEffect(() => {
    fetchServiceData();
  }, []);

  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>
        Services
        <CgAddR
          onClick={handleClick}
          style={{ marginLeft: "1%", fontSize: "20px", color: "#faebd7" }}
        />
      </h2>
      {showForm ? (
        <AddFieldForm setshowForm={setshowForm}/>
      ) : (
        <div className="container services_container">
         {serviceArray.map((service,index)=>(
          <div key={service.id}>
          <article className="service">
            <div className="service_head">
              <div className="service-edit-delete-icons">
                <RiAddCircleLine
                                  id={service.id}
                                  onClick={(e) => togglePopup(e.currentTarget.id)} />
              </div>
              <h3>{service.field}</h3>
            </div>
            {service.serviceList.map((serviceList,index)=>(
          <ul className="service_list" key={index}>
          <li>
            <BiCheck className="service_list-icon" />
            <p>{serviceList.ServiceTitle}</p>
          </li>
        </ul>
            ))}
  
          </article>
          </div>
  ))}
        </div>
      
      )}
    
    {showServiceForm && (
        <AddServiceListdForm
          handleClose={togglePopup}
          field={localStorage.getItem("servicefield")}
          id={localStorage.getItem("serviceID")}
        />
      )}
    </section>
  );
};

export default Service;
