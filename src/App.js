import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import About from './components/About';
import React,{useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [myMode,setMyMode]=useState({// to set the bgColor to dark or ligth
    color:'dark',
    backgroundColor:'light'
  });
  const [alert,setAlert] =useState(null)
  const showAlert=function(message,type)
  {
    console.log(message)
    setAlert({
      message:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000);
  }
  const modeChange=function()
  {
     if(myMode.backgroundColor==='dark')
     {
       setMyMode({
         color:'dark',
         backgroundColor:'light'
       });
       document.body.style.backgroundColor='white';
       showAlert("Light Mode Enabled","success");
     }
     else
     {
      setMyMode({
        color:'dark',
        backgroundColor:'dark'
      })
      document.body.style.backgroundColor='black';
      showAlert("Dark Mode Enabled","success");
     }
  }
  return (
    <div className="App">
      <Router>
      <Navbar title="TextUtility" toggle={modeChange} mode={myMode.backgroundColor}/>
      <Alert  alert={alert} />
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <div className="container">
          <Textarea heading="Enter Text to Analize" showAlert={showAlert} mode={myMode.backgroundColor}/> 
          {/* <About/> */}
          </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


export default App;