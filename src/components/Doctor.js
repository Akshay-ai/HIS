import React, {useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import InfoContext from '../context/details/infoContext'
import PatientCard from './PatientCard'

const Doctor = (props) => {
    let history = useNavigate();
    useEffect(() => {
        if(localStorage.getItem('role')) {
            var role = localStorage.getItem('role');
            if(role === 'doctor') ;
            else history('/login');
        }
        else {
            history('/login');
        } ;
    }, [])
    const context = useContext(InfoContext)
    const {patients, getPatientByDoctorName} = context;
    useEffect(() => {
        if(localStorage.getItem('token')) {
            getPatientByDoctorName();
        }
        // eslint-disable-next-line
    }, [])
    return (
        <div style={{height : "100vh", width : "100%"}}>
            <div className="row my-3">
                <h1>Patients</h1>
                <div className='container my-3 mx-3'>
                    {patients.length === 0 && 'No Patients'}
                </div>
                {patients.length !== 0 && patients.map((patient) => {
                    return <PatientCard showAlert = {props.showAlert} key={patient._id} patient={patient}/>
                })}
            </div>
        </div>
    )
}

export default Doctor
