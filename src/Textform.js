import React, { useState } from 'react'

export default function Textform(props) {
    const handelupclick = ()=>{
        console.log("uppercasce was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handeldownclick = ()=>{
        console.log("uppercasce was clicked" + text);
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const handelonchange = (event)=>{
        console.log("uppercasce was clicked");
        setText(event.target.value);
    }
    const[text,setText]=useState('enter the value');
  return (
      <div className="container">
 <div>
        <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" onChange={handelonchange} value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2 my-3" style={{margin:"1rem"}} onClick={handelupclick}>convert to uppercase</button>
<button className="btn btn-primary mx-2 my-3" onClick={handeldownclick}>convert to lowercase</button>
    </div>
    <div className="container my-3">
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length} words , {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
      </div>
   
  )
}
