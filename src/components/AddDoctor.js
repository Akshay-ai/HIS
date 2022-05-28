import React, {useContext, useState, useRef, useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import InfoContext from '../context/details/infoContext'

const AddDoctor = (props) => {
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
    const context = useContext(InfoContext)
    const {addDoctor} = context;
    const [info, setInfo] = useState({name : "", username : "", password : "", branch : "Hyderabad", specality : "Anesthesiologists", description : "", pic : "", role : ""});
    const img = useRef(null);

    const previewFile = (e) => {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = function(e) {
            info.pic =  reader.result;
        }
        console.log(info);
    }

    const onChange = (e) => {
        setInfo({...info, [e.target.name]: e.target.value});
    }

    useEffect(() => {
        console.log(info);
    }, [info])

    const docters = (e) => {
        e.preventDefault();
        console.log(info);
        const des = {
            about : info.description,
            pic : info.pic,
        }
        addDoctor(info.name, info.branch, info.username, info.password, des, info.specality, info.role)
        props.showAlert("Doctor Account Created", "success");
    }

    return (
        <div style={{height : "100%", width : "100%", backgroundImage : `url(${require("./image/doc1.jpg")})`,backgroundSize: 'cover', backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', borderRadius : "10px" }}>
            <div className='container col-7 col-offset-6' style={{backgroundColor : "rgba(0,0,0,0.7)", borderRadius : "10px", marginTop : "70px"}}>
                <form onSubmit={docters} className='my-5' style={{color : "white", fontWeight : "bold"}}>
                    <div className="mb-3 my-2">
                        <label htmlFor="name" className="form-label">Doctor Name</label>
                        <input value={info.name} type="text" className="form-control" id="name" name='name' onChange={onChange} aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3 my-2">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" value={info.username} className="form-control" id="username" onChange={onChange} name='username'/>
                    </div>
                    <div className="mb-3 my-2">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" value={info.password} className="form-control" id="passowrd" onChange={onChange} name='password'/>
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="branch">Select Branch</label>
                        <select onChange={onChange} required className="form-control" value={info.branch} name='branch' id="branch">
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
                    <div className="form-group my-3">
                        <label htmlFor="specality">Select specalist</label>
                        <select onChange={onChange} required className="form-control" value={info.specality} name='specality' id="specality">
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
                    <div className="form-group my-3">
                        <label htmlFor="role">Select Role</label>
                        <select onChange={onChange} required className="form-control" value={info.role} name='role' id="role">
                            <option value="admin">Admin</option>
                            <option value="doctor">Doctor</option>
                            <option value="test">recp</option>
                        </select>
                    </div>
                    <div className="input-group my-3">
                        <span className="input-group-text">Description</span>
                        <textarea onChange={onChange} name='description' value={info.description} className="form-control" aria-label="With textarea"></textarea>
                    </div>
                    <div className="input-group mb-3 my-3">
                        <input ref={img} onChange={previewFile} name='pic' type="file" className="form-control" id="pic"/>
                        <label className="input-group-text" htmlFor="pic">Doctor's pic</label>
                    </div>
                    <button type="submit" className="btn btn-primary my-2">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddDoctor
