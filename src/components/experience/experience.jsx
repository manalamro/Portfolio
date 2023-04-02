import React, { useState, useContext, useEffect } from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { CgAddR } from "react-icons/cg";
import { RiAddCircleLine } from "react-icons/ri";
import AddFieldForm from "./addform";
import { ExperContext } from "../providers/experProvider";
import AddTechForm from "./addtechform";

const Experience = () => {
  const { fetchExperienceData, ExperienceArray } = useContext(ExperContext);
  const [showForm, setshowForm] = useState(false);
  const [showTechForm, setshowTechForm] = useState(false);

  const handleClick = () => {
    setshowForm(true);
  };

  const togglePopup = (id) => {
    setshowTechForm(!showTechForm);
    let exper2 = ExperienceArray.filter((exper) => exper.id == id);
    {
      exper2.map((exp) => (
        <>
          {localStorage.setItem("experTitle", exp.Title)}
          {localStorage.setItem("experID", exp.id)}
          {localStorage.setItem("experTech", JSON.stringify(exp.tech))}
        </>
      ));
    }
  };

  useEffect(() => {
    fetchExperienceData();
  }, []);

  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>
        My Experience and Knowledge
        <CgAddR
          onClick={handleClick}
          style={{ marginLeft: "1%", fontSize: "20px", color: "#faebd7" }}
        />
      </h2>
      {showForm ? (
        <AddFieldForm showForm={showForm} setshowForm={setshowForm} />
      ) : (
        <div className="container experience-container">
          {ExperienceArray.map((exper, index) => (
            <div className="experience_frontend" key={index}>
              <div className="experience-edit-delete-icons">
                <RiAddCircleLine
                  id={exper.id}
                  onClick={(e) => togglePopup(e.currentTarget.id)}
                />
              </div>
              <h3>{exper.Title}</h3>
              <div className="experience-content">
                {exper.tech.map((expfields, index) => (
                  <article className="experience_details" key={index}>
                    <BsFillPatchCheckFill
                      className="experience_details-icons"
                      key={index}
                    />
                    <div>
                      <h4>{expfields.title}</h4>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      {showTechForm && (
        <AddTechForm
          handleClose={togglePopup}
          title={localStorage.getItem("experTitle")}
          id={localStorage.getItem("experID")}
        />
      )}
    </section>
  );
};

export default Experience;
