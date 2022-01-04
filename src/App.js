import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import { useState } from 'react';
import Navbar from './components/Navbar';
import AppointmentForm from './components/AppointmentForm';
import LoginForm from './components/LoginForm';
import Alert from './components/Alert';
import Doctor from './components/Doctor';
import InfoState from './context/details/InfoState';
import Home from './components/Home';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    },5000)
  }
  return (
    <>
      <InfoState>
        <Router>
          <Navbar/>
          <Alert alert={alert}/>
          <div className='container'>
            <Routes>
              <Route exact path="/appointment" element={<AppointmentForm showAlert = {showAlert}/>}/>
              <Route exact path="/login" element={<LoginForm showAlert = {showAlert}/>}/>
              <Route exact path="/doctor" element={<Doctor showAlert = {showAlert}/>}/>
              <Route exact path="/" element={<Home showAlert = {showAlert}/>}/>
            </Routes>
          </div>
        </Router>
      </InfoState>
    </>
  );
}

export default App;
