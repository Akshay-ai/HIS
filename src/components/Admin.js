import React, {useState, useContext, useEffect} from 'react'
import InfoContext from '../context/details/infoContext'
import DoctorCard from './DoctorCard';

const Admin = (props) => {
    const [info, setInfo] = useState({branch : "Hyderabad", specality : "Anesthesiologists"});
    const onChange = (e) => {
        setInfo({...info, [e.target.name]: e.target.value});    
    }
    const context = useContext(InfoContext)
    const {onChangeSpecality, doctor} = context;
    useEffect(() => {
        if(localStorage.getItem('role')) {
            onChangeSpecality(info.specality, info.branch);
        }
        // eslint-disable-next-line
    }, [info])
    useEffect(() => {
        onChangeSpecality(info.specality, info.branch);
        // eslint-disable-next-line
    },[])
    return (
        <div>
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
            </form>
            <div style={{height : "100vh", width : "100%"}}>
            <div className="row my-3">
                <h1>Doctors</h1>
                <div className='container my-3 mx-3'>
                    {doctor.length === 0 && 'No Doctors'}
                </div>
                <div className='d-flex justify-content-start flex-wrap'>
                    {doctor.length !==0 && doctor.map((doctor) => {
                        return <DoctorCard showAlert = {props.showAlert} key={doctor._id} doctor={doctor}/>
                    })}
                </div>
            </div>
        </div>
        </div>
    )
}

export default Admin
