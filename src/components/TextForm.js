import React, {useState} from 'react'

export default function TextForm(props) {

const handleUpClick = ()=>{
    console.log("Uppercase was clicked"+ text);

    let newText = text.toUpperCase();
    setText(newText);

}
const handleLowClick= ()=>{

    let newText= text.toLowerCase();
    setText(newText);
}

const handleOnChange = (event)=>{
    console.log("On change");
    setText(event.target.value)
}


    const[text, setText]= useState('Enter text here');
    return (
        <>
        <div>
            <h2>{props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
        </div>
        <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(' ').length} words and {text.length} character</p>
        <p>{0.008 * text.split(" ").length} Minutes reads</p>
        <h2>preview</h2>
        <p>{text}</p>
        <p></p>
        </div>
        </>
    )
}
