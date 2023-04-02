import React, { useState } from "react";
import { Services } from "../../data/service"; // ExperienceData Should be between curly braket '{}'.

export const ServiceContext = React.createContext({});
const Serviceprovider = (props) => {
  const [serviceArray, setserviceArray] = useState(Services);
  const fetchServiceData = () => {
    const serviceFromStorage = JSON.parse(localStorage.service || "[]");
    if (serviceFromStorage.length === 0) {
      localStorage.service = JSON.stringify(Services);
      setserviceArray(Services);
    } else {
      setserviceArray(serviceFromStorage);
    }
  };
  return (
    <ServiceContext.Provider
      value={{ fetchServiceData, serviceArray, setserviceArray }}
    >
      {props.children}
    </ServiceContext.Provider>
  );
};
export default Serviceprovider;
