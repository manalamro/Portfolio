import React, { useState } from "react";
import { ExperienceData } from "../../data/experience"; // ExperienceData Should be between curly braket '{}'.

export const ExperContext = React.createContext({});
const Experprovider = (props) => {
  const [ExperienceArray, setExperienceArray] = useState(ExperienceData);
  const fetchExperienceData = () => {
    const ExperienceFromStorage = JSON.parse(localStorage.ExperienceQ || "[]");
    console.log("ExperienceFromStorage:"+JSON.stringify(ExperienceFromStorage));

    if (ExperienceFromStorage.length === 0) {
      localStorage.ExperienceQ = JSON.stringify(ExperienceData);
      setExperienceArray(ExperienceData);
    } else {
      setExperienceArray(ExperienceFromStorage);
    }
  };
  return (
    <ExperContext.Provider
      value={{ fetchExperienceData, ExperienceArray, setExperienceArray }}
    >
      {props.children}
    </ExperContext.Provider>
  );
};
export default Experprovider;
