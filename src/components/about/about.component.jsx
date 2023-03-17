import React, { useState } from "react";
import "./about.css";
import image from "../../assets/4.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { MdOutlineModeEditOutline } from "react-icons/md";
import ElementMaker from "./ElementMaker";
import ClientEdits from "./clientsEdites";
import ProjectsEdit from "./projectsEdit";
import AboutMePar from './AboutMe'

const About = () => {
  const [showInputEle, setShowInputEle] = useState(false);
  const [showInputEle1, setShowInputEle1] = useState(false);
  const [showInputEle2, setShowInputEle2] = useState(false);
  const [showInputEle3, setShowInputEle3] = useState(false);
  const [AboutMe1, setAboutMe] = useState(localStorage.getItem("AboutMe")|| "A fresh graduate with the desire and ability to learn more and improve myself by working on my strengths and weaknesses. I have some experience at React and good knowledge of Angular, NodeJS, and MySQL. Primarily, I am seeking a role where I can learn and work on new things in the web development field, which will upgrade my skills with time and make me more efficient.");
  localStorage.setItem("AboutMe",AboutMe1)
  const [Experience, setExperience] = useState(localStorage.getItem("Experience")|| "6 month");
  localStorage.setItem("Experience",Experience)
  const [clients, setclients] = useState(localStorage.getItem("clients") || "Not Yet");
  localStorage.setItem("clients",clients);
  const [Projects, setProjects] = useState(localStorage.getItem("Projects") || "10 completed");
  localStorage.setItem("Projects",Projects);


  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>
                <ElementMaker
                  value={Experience}
                  handleChange={(e) => setExperience(e.target.value)}
                  handleDoubleClick={() => setShowInputEle1(true)}
                  handleBlur={() => setShowInputEle1(false)}
                  showInputEle={showInputEle1}
                />
              </small>
              <MdOutlineModeEditOutline style={{marginLeft:"5px"}}
                onClick={() => setShowInputEle1(true)}
                handleBlur={() => setShowInputEle1(false)}
                  showInputEle={showInputEle1}
              />
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>clients</h5>
              <small>
                <ClientEdits
                  value={clients}
                  handleChange={(e) => setclients(e.target.value)}
                  handleDoubleClick={() => setShowInputEle2(true)}
                  handleBlur={() => setShowInputEle2(false)}
                  showInputEle={showInputEle2}
                />
              </small>
              <MdOutlineModeEditOutline style={{marginLeft:"5px"}}
                onClick={() => setShowInputEle2(true)}
                handleBlur={() => setShowInputEle2(false)}
                showInputEle={showInputEle2}
              />
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>
                <ProjectsEdit
                  value={Projects}
                  handleChange={(e) => setProjects(e.target.value)}
                  handleDoubleClick={() => setShowInputEle(true)}
                  handleBlur={() => setShowInputEle(false)}
                  showInputEle={showInputEle}
                />
              </small>
              <MdOutlineModeEditOutline style={{marginLeft:"5px"}}
                onClick={() => setShowInputEle(true)}
                handleBlur={() => setShowInputEle(false)}
                showInputEle={showInputEle}
              />
            </article>
          </div>
          <p>
             
          <AboutMePar
                  value={AboutMe1}
                  handleChange={(e) => setAboutMe(e.target.value)}
                  handleDoubleClick={() => setShowInputEle3(true)}
                  handleBlur={() => setShowInputEle3(false)}
                  showInputEle={showInputEle3}
                />
                <MdOutlineModeEditOutline style={{color:"#faebd7",marginLeft:"5px"}} 
                         onClick={() => setShowInputEle3(true)}
                         handleBlur={() => setShowInputEle3(false)}
                         showInputEle={showInputEle3} />
         
          </p>

          <a href="contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
