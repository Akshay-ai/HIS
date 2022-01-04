import React, {useState, useEffect, useRef} from 'react'

const AppointmentForm = (props) => {
    const editDoctor = useRef(null);
    const [info, setInfo] = useState({name : "", number : "", branch : "Hyderabad", symptoms : "", specality : "Anesthesiologists", doctorname :  "" , date : "2021-01-03"});
    const onChangeSpecality = async () => {
        const response = await fetch("http://localhost:5000/doctor/docs/docField", {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({field : info.specality, branch : info.branch}),
        });
        const json = await response.json();
        if(json.success) {
            if(editDoctor.current.options.length === 0 || editDoctor.current.options[1].value !== json.doctor[0].username) {
                editDoctor.current.options.length = 0;
                editDoctor.current.add(new Option("Select Doctor","Select Doctor"));
                // console.log("Doctor Name : ",json.doctor[0].username);
                // setInfo({...info, [info.doctorname] : " "});
                for (let index = 0; index < json.doctor.length; index++) {
                    editDoctor.current.add(new Option(json.doctor[index].username,json.doctor[index].username));
                }
            }
        }
    }
    
    useEffect(() => {
        onChangeSpecality();
        console.log(info);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [info]);
    const onChange = (e) => {
        setInfo({...info, [e.target.name]: e.target.value});
    }
    const bookAppointment = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/patient", {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({name : info.name, Phone_Number : info.number, doctor_name : info.doctorname, symptoms : info.symptoms}),
        });
        console.log("Doctor Name ", info.doctorname);
        const json = await response.json();
        console.log(json);
        if(json.success) {
            props.showAlert("Appointment Booked SuccessFully", "success");
        }
        else {
            props.showAlert("Appointment din't booked Try Again", "danger");
        }
    }
    return (
        <div style={{height : "100%", width : "100%", backgroundImage : `url(${require("./hsp2.jpg")})`,backgroundSize: 'cover', backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', borderRadius : "10px" }}>
        <div className='container col-7 col-offset-6' style={{backgroundColor : "rgb(135,203,250)", borderRadius : "10px", marginTop : "70px"}}>
            <h1 className="my-3" style={{fontFamily : "arial"}}>Appointment Form</h1>
            <form className='my-5' onSubmit={bookAppointment}>
                <div className="form-group my-2">
                    <label htmlFor="name">Patient Name</label>
                    <input onChange={onChange} required minLength={3} value={info.name} type="text" className="form-control" id="name" name='name' placeholder="Enter Your Name"/>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="phone">Mobile Number</label>
                    <input minLength={10} maxLength={10} onChange={onChange} value={info.number} type="number" required className="form-control" id="phone" name='number' placeholder="Enter Your Mobile Number"/>
                </div>
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
                <div className="form-group my-2">
                    <label htmlFor="exampleFormControlTextarea1">Symptoms</label>
                    <textarea onChange={onChange} value={info.symptoms} className="form-control" name='symptoms' id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="exampleFormControlTextarea1">Date</label>
                    <input required type="date" onChange={onChange} value={info.date}  min={info.date} max="2021-03-30"  className="form-control" id="date" name='date' />
                </div>
                <div className="form-group my-3" >
                    <label className="btn btn-outline-primary">
                        <input required type="radio" name="options" id="option1" autoComplete="off"/> 10:00 - 12:30
                    </label>
                    <label className="btn btn-outline-primary m-2">
                        <input type="radio" name="options" id="option2" autoComplete="off"/> 1:30 - 3:30
                    </label>
                    <label className="btn btn-outline-primary">
                        <input type="radio" name="options" id="option3" autoComplete="off"/> 4:00 - 5:30
                    </label>
                    <label className="btn btn-outline-primary m-2">
                        <input type="radio" name="options" id="option3" autoComplete="off"/> 6:00 - 8:30
                    </label>
                </div>

                <button type="submit" className="my-2 btn btn-primary">Submit</button>
            </form>
        </div>
        </div>
    )
}

export default AppointmentForm
