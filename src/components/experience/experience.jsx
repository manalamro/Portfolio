import React, { useState } from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { CgAddR } from "react-icons/cg";
import { RiAddCircleLine } from "react-icons/ri";
import AddTechForm from './addtechform'
import AddFieldForm from './addform'

const Experience = () => {
  const experience = [
    {
      id: 1,
      Title: "Frontend Development",
      tech: [
        { id: 1,title: "HTML"},
        { id: 2,title: "CSS"},
        { id: 3,title: "Javascript"},
        { id: 4,title: "ReactJS"},
        { id: 5,title: "Angular"},
        { id: 6,title: "Redux"},
        { id: 7,title: "TypeScript"},
        { id: 8,title: "BootStrap"},
      ],
    },

    {
      id: 2,
      Title: "Backend Development",
      tech:[
        { id: 9,title: "PHP"},
        { id: 10,title: "Node JS"},
        { id: 11,title: "SQL"},
      ],
    },
  ];

  localStorage.setItem("experienceData", JSON.stringify(experience));

  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>
      My Experience and Knowledge
              <CgAddR
          style={{ marginLeft: "1%", fontSize: "20px", color: "#faebd7" }}
        />
      </h2>
      <div className="container experience-container">
        {experience.map((exper, index) => (
          <div className="experience_frontend">
            <div className="experience-edit-delete-icons">
              <RiAddCircleLine />
            </div>
            <h3>{exper.Title}</h3>
            <div className="experience-content">
              {exper.tech.map((expfields, index) => (
                <article key={expfields.id} className="experience_details">
                  <BsFillPatchCheckFill className="experience_details-icons" />
                  <div>
                    <h4>{expfields.title}</h4>
                    {/* <small className="text-light">{expfields.level}</small> */}
                    {/* <MdOutlineModeEditOutline key={expfields.id} style={{ fontSize: "15px", marginLeft:"3px"}}  */}
                    {/* /> */}
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
