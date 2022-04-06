import React,{useState} from 'react'

export default function () {
    const [myStyle,setStyle]=useState({
        color:'black',
        backgroundColor:'white'
    });
    const [myBGMode,setBGMode]=useState("Enable Dark Mode");
    const handleBgMode=function()
    {
        if(myStyle.color=='white')
        {
            setStyle({
                color:'black',
                backgroundColor:'white'
            });
            setBGMode("Enable Dark Mode");
        }
        else
        {
            setStyle({
                color:'white',
                backgroundColor:'black'
            });
            setBGMode("Enable Light Mode")
        }
    }
  return (
    <div>
        <div className="accordion" id="accordionExample" >
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingOne">
            <button  style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               Free to Use.
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>Free to Use.</strong> </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingTwo">
            <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Compatible with both Mobile and Wed.
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>Compatible with both Mobile and Wed</strong> 
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Features to Come.
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <strong>Features to Come.</strong></div>
            </div>
        </div>
   </div>
    <div className="container my-2">
       <button type="button" className="btn btn-primary mx-1" onClick={handleBgMode}>{myBGMode}</button>
       </div>
    </div>
  )
}
