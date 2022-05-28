import React from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom';

const Navbar = () => {
    let history = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        history('/login');
    }
    return (
        <>
            <nav className="navbar rounded-bottom navbar-expand-lg navbar-dark" style={{backgroundColor : "rgb(153,50,204)"}}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Infinity Hospitals</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                </ul>
                {localStorage.getItem('role') === 'admin'? <form className="d-flex">
                <Link className="btn mx-2" style={{color:"white"}} to="/adddoctor" role="button">Add Doctor</Link>
                <Link className="btn mx-2" style={{color:"white"}} to="/admin" role="button">Doctors</Link>
                <Link className="btn mx-2" style={{color:"white"}} to="/patients" role="button">Patients</Link>
                <button onClick={handleLogout} className="btn" style={{color:"white"}}>Logout</button>
                </form> : localStorage.getItem('role') === 'test' ? <form className="d-flex">
                <Link className="btn mx-2" style={{color:"white"}} to="/recp" role="button">Appointment</Link>
                <button onClick={handleLogout} className="btn" style={{color:"white"}}>Logout</button>
                </form> :  !localStorage.getItem('token') ? <form className="d-flex">
                <Link className="btn mx-2" style={{color:"white"}} to="/appointment" role="button">Book Appointment</Link>
                <Link className="btn mx-2" style={{color:"white"}} to="/login" role="button">Login</Link>
                </form> :
                <form className="d-flex">
                    <Link className="btn mx-2" to="/doctor" style={{color:"white"}} role="button">Patient Details</Link>
                <button onClick={handleLogout} className="btn" style={{color:"white"}}>Logout</button>
                </form>
                }
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar
