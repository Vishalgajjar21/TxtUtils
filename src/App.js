import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {

  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }


  const toggleMode = () => {
    if (mode === 'dark') {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils-Lightmode";
    } else {
      setmode('dark');
      document.body.style.backgroundColor = 'rgb(15 25 61)';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils-Darkmode";

      setInterval(() => {
        document.title = "Convert your text now";
      }, 2000);
      setInterval(() => {
        document.title = "TextUtils is Amazing";
      }, 1500);

    }
  }

  return (
    <>

      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        
        <div className="container my-3">
          
          <Routes>
            <Route
              exact path="/"
              element={
                <TextForm showAlert={showAlert} heading="Enter the text to Utilize below" mode={mode} />
            }
            ></Route>
            <Route
              exact path="/about"
              element={
                <About showAlert={showAlert} mode={mode} />
              }
            ></Route>
          </Routes> 
        </div>
       </BrowserRouter> 
    </>
  );
}
export default App;
