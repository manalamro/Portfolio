import React,{useContext,useState,useEffect} from "react";
import "./portfolio.css";
import {PortofoiloContext} from '../providers/portfoiloProvider'
import { CgAddR } from "react-icons/cg";
import AddItemForm from './addnewitem'

const Portfolio = () => {
const {fetchPortofoiloeData, PortfoiloItemsArray}=useContext(PortofoiloContext);
const [showForm,setshowForm]=useState(false);

const handleClick = () => {
  setshowForm(true);
};

useEffect(() => {
  fetchPortofoiloeData();
}, []);

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfoilo
      <CgAddR
          onClick={handleClick}
          style={{ marginLeft: "1%", fontSize: "20px", color: "#faebd7" }}
        />
      </h2>
      {showForm ? (
        <AddItemForm showForm={showForm} setshowForm={setshowForm} />
      ) : (
      <div className="container portfoilo-container">
        {PortfoiloItemsArray.map((item,index) => {
          return (
            <article key={index} className="portofolio-item">
              <div className="portfolio-item-image">
                <img src={item.image} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <div className="portofolio-item-cta">
                <a href={item.github} className="btn" target="_parent">
                  Github
                </a>
                <a href={item.github} className="btn" target="_parent">
                  live demo
                </a>
              </div>
      
            </article>
          );
        })}
      </div>
)}
    </section>
  );
};

export default Portfolio;
