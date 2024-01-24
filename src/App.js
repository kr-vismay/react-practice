import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Student from './Student';
import Errormsg from './Errormsg';
import Item from './Item';
import Fooditems from './Fooditems';
function App() {
  // let things = ["apple","banana","greps","orange","mango"];
  let things = [];
function create(){
  var NAME = prompt("enter your name");
  console.log(NAME);
  setName(NAME);
}
  const [name,setName]=useState();
  return (
    
   <>
  
   <Fooditems items = {things}/>
   
   <Errormsg items = {things}/>
   <div>
    <h3>hello</h3>
    <button onClick={create}>Enter Name</button>
    <Student Name={name} />
    
    
   </div>
   </>
    
  );
}

export default App;
