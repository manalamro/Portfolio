import React, { useContext, useState } from "react";
import "./services.css";
import {ServiceContext} from '../providers/serviceprovider'
const AddFieldForm = (props) => {
  const{fetchServiceData} =useContext(ServiceContext);

  const [inputList, setinputList] = useState([{ServiceTitle:''}]);
  console.log("inputList"+JSON.stringify(inputList));
  const[field,setfield]= useState('');

  const handleaddclick = () => {
    setinputList([...inputList, {ServiceTitle:''}]);
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

const addFunction=()=>{
  if (field ==''){
    alert("you should enter value for Title")
  }
  else {
    let newItem={
      id:new Date,
      field:field,
      serviceList:inputList
    }
    props.setshowForm(false);

   //before add the new value we read the localStoage.
   const serviceFromStorage = JSON.parse(localStorage.service || '[]');
   //add the new value and the previous array into new array.
   const newService = [newItem, ...serviceFromStorage];
   //add the new array into the localStorage.
   localStorage.service = JSON.stringify(newService);
   fetchServiceData();
   alert('Your service added successfully!');
  }
  
}

  return (
    <>
      <div className="AddExpForm">
        <label>Title</label>
        <input type="text" placeholder="service field" name="field" onChange={e=>{setfield(e.target.value)}} required/>
        {inputList.map((input,index) => {
          return (
            <div key={index}>
              <label key={input.index}>ServiceTitle</label>
              <div className="LabelStyle" >
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
    </>
  );
};

export default AddFieldForm;
