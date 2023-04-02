import React, { useContext, useState } from "react";
import "./portfolio.css";
import {PortofoiloContext} from '../providers/portfoiloProvider'


const AddItemForm = (props) => {

 const{fetchPortofoiloeData} = useContext(PortofoiloContext);
 const[title,settitle]=useState('');
 const[image,setimage]=useState('');
 const[github,setgithub] = useState('');


const addFunction=()=>{

    let newItem={
      id:new Date(),
      image:image,
      title:title,
      github:github
    }

    props.setshowForm(false);
   //before add the new value we read the localStoage.
   const portFromStorage = JSON.parse(localStorage.Portfoilo || '[]');
   //add the new value and the previous array into new array.
   const newarray = [newItem, ...portFromStorage];
   //add the new array into the localStorage.
   localStorage.Portfoilo = JSON.stringify(newarray);
   fetchPortofoiloeData();
   alert('Your item added successfully!');
  }

  return (

      <div className="AddExpForm">
        <label>Title</label>
        <input type="text" placeholder="Title" name="Title" onChange={e=>{settitle(e.target.value)}} required/>
        <input type="text" placeholder="image" name="image" onChange={e=>{setimage(e.target.value)}} required/>
        <input type="text" placeholder="github" name="github" onChange={e=>{setgithub(e.target.value)}} required/>
        <button className="submitButton" type="submit" onClick={addFunction}>
          Submit
        </button>
      </div>

  );
};

export default AddItemForm;
