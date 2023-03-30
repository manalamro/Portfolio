import React, { useContext,useEffect, useState } from "react";
import "./experience.css";
import {ExperContext} from '../providers/experProvider'


const AddFieldForm = (props) => {
  const{fetchExperienceData} =useContext(ExperContext);

  const [inputList, setinputList] = useState([{title:''}]);
  console.log("inputList"+JSON.stringify(inputList));
  const[title,setTitle]= useState('');

  const handleaddclick = () => {
    setinputList([...inputList, {title:''}]);
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
  if (title ==''){
    alert("you should enter value for Title or title for tech ")
  }
  else {
    let newItem={
      id:new Date,
      Title:title,
      tech:inputList
    }
    props.setshowForm(false);

   //before add the new value we read the localStoage.
   const experFromStorage = JSON.parse(localStorage.ExperienceQ || '[]');
   //add the new value and the previous array into new array.
   const newExps = [newItem, ...experFromStorage];
   //add the new array into the localStorage.
   localStorage.ExperienceQ = JSON.stringify(newExps);
   fetchExperienceData();
   alert('Your car added successfully!');
  }
  
}

  return (
    <>
      <div className="AddExpForm">
        <label>Title</label>
        <input type="text" placeholder="Title" name="Title" onChange={e=>{setTitle(e.target.value)}} required/>
        {inputList.map((input,index) => {
          return (
            <>
              <label key={input.index}>Tech</label>
              <div className="LabelStyle" key={index} >
                <input
                  type="text"
                  placeholder="title"
                  name="title"
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
    </>
  );
};

export default AddFieldForm;
