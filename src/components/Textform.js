import React ,{useState}from 'react';

export default function Textform(props) { 
   
    const handleUpClick= ()=>{
        console.log("uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
    }
  
        const handleClearClick= ()=>{
          console.log("icon clicked"+text);
          let newText="";
          setText(newText);
      
    }
    
    const handleLoClick= ()=>{
      console.log(+text);
      let newText=text.toLowerCase();
      setText(newText);
  }

    const handleOnChange= (event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const handleCopy=()=>{
      console.log("i m copy");
      let text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.Value);
    }
const handleExtraSpace=()=>{
  console.log("removing extra space");
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "));
}
    const[text,setText]=useState('');
    
    return ( 
    <>
    <div className="container">
     <h1>{props.heading}-</h1>
   <div class="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange}id="myBox" rows="10"></textarea>
 </div>
 <button className=  "btn btn-dark mx-4" onClick={handleUpClick}>convert to uppercase</button>
 <button className=  "btn btn-danger mx-4" onClick={handleLoClick}>convert to lowercase</button>
 <button className=  "btn btn-success mx-4" onClick={handleClearClick}>clear the text</button>
 <boutton className=  "btn btn-warning mx-4" onClick={handleCopy}>copy text</boutton>
 <boutton className=  "btn btn-info mx-4" onClick={handleExtraSpace}>remove extra space</boutton>
 
    </div>
    
  
 <div className="container my3">
<h2>Your Text Summary</h2>
<p>{text.split(" ").length }words and {text.length} character</p>
<p>{0.008 *  text.split(" ").length} minutes</p>
<h2>Preview</h2>
<p>{text}</p>
 </div>
</>
    )
      }
