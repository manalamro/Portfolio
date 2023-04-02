import React, { useContext, useState } from "react";
import "./services.css";
import { ServiceContext } from "../providers/serviceprovider";

const AddServiceListdForm = (props) => {
  const { fetchServiceData } = useContext(ServiceContext);

  const [inputList, setinputList] = useState([{ ServiceTitle: "" }]);
  console.log("inputList" + JSON.stringify(inputList));

  const handleaddclick = () => {
    setinputList([...inputList, { ServiceTitle: "" }]);
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
    const serviceFromStorage = JSON.parse(localStorage.ServiceList || "[]");
    const newService = [...newItem, ...serviceFromStorage];
    console.log("newService::"+JSON.stringify(newService));
    const ServiceArrayFromStorage = JSON.parse(localStorage.service || "[]");
    console.log("ServiceArrayFromStorage::"+JSON.stringify(ServiceArrayFromStorage));

    let UpdateServiArray = ServiceArrayFromStorage.map((servi) => {
      if (servi.id == props.id) {
        return { ...servi, serviceList: newService };
      }
      return servi;
    });

    console.log("UpdateServiArray::"+JSON.stringify(UpdateServiArray));

    localStorage.setItem("service", JSON.stringify(UpdateServiArray));
    fetchServiceData();
    alert("Your service added successfully!");
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
          <label>Field</label>
          <input
            type="text"
            placeholder="field"
            name="Field"
            value={props.field}
            readOnly
          />

          {inputList.map((input, index) => {
            return (
              <div key={index}>
                <label key={input.index}>ServiceTitle</label>
                <div className="LabelStyle">
                  <input
                    type="text"
                    placeholder="ServiceTitle"
                    name="ServiceTitle"
                    onChange={(e) => handleaddchange(e, index)}
                    required
                  />

                  {inputList.length !== 1 && (
                    <button
                      className="removeButton"
                      onClick={() => handleremove(index)}
                    >
                      remove
                    </button>
                  )}
                  {inputList.length - 1 === index && (
                    <button className="addButton" onClick={handleaddclick}>
                      add new service item
                    </button>
                  )}
                </div>
              </div>
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
export default AddServiceListdForm;
