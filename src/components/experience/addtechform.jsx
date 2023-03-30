import React, { useContext, useState } from "react";
import "./experience.css";
import { ExperContext } from "../providers/experProvider";
const AddTechForm = (props) => {
  const [inputList, setinputList] = useState([{ title: "" }]);
  const { fetchExperienceData } = useContext(ExperContext);

  const handleaddclick = () => {
    setinputList([...inputList, { title: "" }]);
  };

  const handleaddchange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setinputList(list);
  };

  const handleremove = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setinputList(list);
  };

  const addFunction = () => {
    let newItem = inputList;

    //before add the new value we read the localStoage.
    const experFromStorage = JSON.parse(localStorage.experTech || "[]");
    const newTech = [...newItem, ...experFromStorage];

    const ExperArrayFromStorage = JSON.parse(localStorage.ExperienceQ || "[]");

    let UpdateExperArray = ExperArrayFromStorage.map((exper) => {
      if (exper.id == props.id) {
        return { ...exper, tech: newTech };
      }
      return exper;
    });

    localStorage.setItem("ExperienceQ", JSON.stringify(UpdateExperArray));
    fetchExperienceData();
    alert("Your tech added successfully!");
    props.handleClose();
  };
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
      >
        <div className="AddExpForm" style={{ marginTop: "5%" }}>
          <label>Title</label>
          <input
            type="text"
            placeholder="dsfa"
            name="Title"
            value={props.title}
            readOnly
          />

          {inputList.map((input, i) => {
            return (
              <>
                <label key={i}>Tech</label>
                <div className="LabelStyle">
                  <input
                    type="text"
                    placeholder="title"
                    name="title"
                    onChange={(e) => handleaddchange(e, i)}
                  />

                  {inputList.length !== 1 && (
                    <button
                      className="removeButton"
                      onClick={() => handleremove(i)}
                    >
                      remove
                    </button>
                  )}
                  {inputList.length - 1 === i && (
                    <button className="addButton" onClick={handleaddclick}>
                      add new Tech item
                    </button>
                  )}
                </div>
              </>
            );
          })}
          <button className="submitButton" type="submit" onClick={addFunction}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default AddTechForm;
