import React,{useState} from 'react'
import Alert from './Alert';

//var defaulText="";  
export default function Textarea (props) {
    const[text,setText]=useState("");//here setText is used to update text variable
    const handleUpChange=function ()
        {
            //console.log("hi how are u");
            if(text.length==0)
                props.showAlert("Write Something to get Change","warning");
            else
            {
                setText(text.toUpperCase());
                props.showAlert("Changed to UpperCase","success");
            }
            
        }
    const handleLoChange=function ()
    {
        //console.log("hi how are u");
        if(text.length==0)
            props.showAlert("Write Something to get Change","warning");
        else
        {
            setText(text.toLowerCase());
            props.showAlert("Changed to LowerCase","success");
        }
        
        

    }    
    const handleOnChange=function(event)
        {
            setText(event.target.value);
            //console.log(text);
        } 
    const handleClearChange=function()
    {
        if(text.length==0)
            props.showAlert("Nothing to clear","warning");
        else
        { 
            setText("");
            props.showAlert("Area clear to write","danger");
        } 
    }
    const handleExtraSpace=function()
    {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }   
    const handleCopyText=()=>
    {
    //    let text=document.getElementById('Textarea');
    //    text.select();
    //    text.setSelectionRange(0,999999);
        if(text.length==0)
         props.showAlert("Nothing to copy","danger");
        else
        { 
            navigator.clipboard.writeText(text);
            props.showAlert("Text copied to Clipboard","success");
        }

    }  
    
  return (
    <>
       <div className="container" >
        <div class="mb-3 my-3">
            <label htmlfor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
            <textarea className="form-control" placeholder='Enter the Text here' 
            style={(props.mode==='dark')?{backgroundColor:'#c1adad'}:{backgroundColor:'white'}}
            value={text} id="Textarea" onChange={handleOnChange} rows="8"></textarea>
            </div>
       </div>
       <div className="container">
            <button type="button"  disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleUpChange}>UpperCase</button>
            <button type="button" disabled={text.length===0} className="btn btn-secondary my-1 mx-1" onClick={handleLoChange}>LowerCase</button>
            <button type="button" disabled={text.length===0} className="btn  btn-success my-1 mx-1" onClick={handleClearChange}>Clear</button>
            <button type="button" disabled={text.length===0} className="btn  btn-success my-1 mx-1" onClick={handleClearChange}>Clear</button>
            <button type="button" disabled={text.length===0} className="btn  btn-success my-1 mx-1" onClick={handleExtraSpace}>Remv Ext Spaace</button>
            <button type="button" disabled={text.length===0} className="btn  btn-success my-1mx-1" onClick={handleCopyText}>Copy Text</button>
       </div>
        
       <div className="container" style={(props.mode==='dark')?{color:'lightblue'}:{color:'black'}}>
           <h3> Your Text Summary</h3>
          
           <p>You have written <strong>{text.length-(text===""?0:text.split(" ").length-1)}
           </strong> Charecters and <strong>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</strong> Words </p>
           <p>You can read this in <strong>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length*0.008}</strong> minutes</p>
           <h3>Preview</h3>
           <p>{text}</p>
       </div>
       {/* text==""?0:text.split(" ").length */}
       {/* text.length-(text===""?0:text.split(" ").length-1) */}
    </>
  )
}
