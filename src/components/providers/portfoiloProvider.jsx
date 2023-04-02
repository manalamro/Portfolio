import React, { useState } from "react";
import { PortfoiloItems } from "../../data/portfoilo"; // ExperienceData Should be between curly braket '{}'.

export const PortofoiloContext = React.createContext({});
const PortofoiloProvider = (props) => {
  const [PortfoiloItemsArray, setPortfoiloItemsArray] = useState(PortfoiloItems);

  const fetchPortofoiloeData = () => {
    const portofoiloFromStorage = JSON.parse(localStorage.Portfoilo || "[]");
    console.log("portofoiloFromStorage:"+JSON.stringify(portofoiloFromStorage));
    if (portofoiloFromStorage.length === 0) {
      localStorage.Portfoilo = JSON.stringify(PortfoiloItems);
      setPortfoiloItemsArray(PortfoiloItems);
    } else {
        setPortfoiloItemsArray(portofoiloFromStorage);
    }
  };

  return (
    <PortofoiloContext.Provider
      value={{ fetchPortofoiloeData, PortfoiloItemsArray, setPortfoiloItemsArray }}
    >
      {props.children}
    </PortofoiloContext.Provider>
  );
};
export default PortofoiloProvider;
