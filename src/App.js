//import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


function App() { //this will return only one component
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert('Dark mode has been enabled', 'success')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled', 'success')

    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" Home="Home" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container'>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Textform mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>

    // fragment tag under this we can have multiple component <></>
    //component -> A collection of tags under a tag 
    // <>
    // <nav>
    //   <li>home</li>
    //   <li>home</li>
    // </nav>
    // </>
  );
}

export default App;
