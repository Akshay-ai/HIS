import React, {useEffect, useContext, useState, useRef} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import InfoContext from '../context/details/infoContext'
import PatientCard from './PatientCard'

const Patient = (props) => {
    let history = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if(localStorage.getItem('role')) {
            var role = localStorage.getItem('role');
            if(role === 'admin') ;
            else history(`${location.pathname}`);
        }
        else {
            history(`${location.pathname}`);
        } ;
    }, [])
    const [info, setInfo] = useState({branch : "Hyderabad", specality : "Anesthesiologists",  doctorname :  ""});
    var editDoctor = useRef(null);
    const context = useContext(InfoContext)
    const {patients, getPatientByDoctorNameforAdmin} = context;

    useEffect(() => {
        console.log("Hello");
        getPatientByDoctorNameforAdmin(info.doctorname);
        // eslint-disable-next-line
    }, [info.doctorname])

    const onChangeSpecality = async () => {
        const response = await fetch("http://localhost:5000/doctor/docs/docField", {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({field : info.specality, branch : info.branch}),
        });
        const json = await response.json();
        console.log(json);
        if(!json.doctor.length) {
            editDoctor.current.options.length = 0;
            info.doctorname = '';
            getPatientByDoctorNameforAdmin(info.doctorname);
            return
        }
        if(json.success) {
            if(editDoctor.current.options.length === 0 || editDoctor.current.options[1].value !== json.doctor[0].username) {
                editDoctor.current.options.length = 0;
                info.doctorname = json.doctor[0].username;
                for (let index = 0; index < json.doctor.length; index++) {
                    editDoctor.current.add(new Option(json.doctor[index].username,json.doctor[index].username));
                }
            }
            getPatientByDoctorNameforAdmin(info.doctorname);
        }
        
    }
    useEffect(() => {
        onChangeSpecality();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [info.specality, info.branch]);

    const onChange = (e) => {
        setInfo({...info, [e.target.name]: e.target.value});    
    }
    return (
        <>
            <form className='my-5' style={{fontWeight : "bold"}}>
                <div className="form-group my-2">
                    <label htmlFor="branch">Select Branch</label>
                    <select onChange={onChange} value={info.branch} required className="form-control" name='branch' id="branch">
                        <option>Hyderabad</option>
                        <option>Chennai</option>
                        <option>Mumbai</option>
                        <option>Benguluru</option>
                        <option>Delhi</option>
                        <option>Kolkata</option>
                        <option>Lucknow</option>
                        <option>Pune</option>
                        <option>Warangal</option>
                        <option>Vizag</option>
                        <option>Ahmedabad</option>
                    </select>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="specality">Select specalist</label>
                    <select onChange={onChange} value={info.specality} required className="form-control" name='specality' id="specality">
                        <option value="Anesthesiologists">Anesthesiologists</option>
                        <option value="Cardiologists">Cardiologists</option>
                        <option value="Cardiologists">Dentist</option>
                        <option value="Dermatologists">Dermatologists</option>
                        <option value="Emergency">Emergency Medicine</option>
                        <option value="Endocrinologists">Endocrinologists</option>
                        <option value="Family Physicians">Family Physicians</option>
                        <option value="Gastroenterologists">Gastroenterologists</option>
                        <option value="Gynecologists">Gynecologists</option>
                        <option value="Neurologists">Neurologists</option>
                        <option value="Orthopaedics">Orthopaedics</option>
                        <option value="Ophthalmologists">Ophthalmologists</option>
                        <option value="Pathologists">Pathologists</option>
                        <option value="Pediatricians">Pediatricians</option>
                        <option value="Physiatrists">Physiatrists</option>
                        <option value="Plastic Surgeons">Plastic Surgeons</option>
                        <option value="Pulmonologists">Pulmonologists</option>
                        <option value="General Surgeons">General Surgeons</option>
                        <option value="Urologists">Urologists</option>
                    </select>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="doctorname">Select Doctor</label>
                    <select onChange={onChange} value={info.doctorname} ref={editDoctor} className="form-control" name='doctorname' id="doctorname">
                        {/* <option>Select Docter</option> */}
                    </select>
                </div>
            </form>
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
        </>
    )
};

export default Patient;
