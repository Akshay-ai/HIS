import InfoContext from "./infoContext";

import React, {useState} from 'react'

const InfoState = (props) => {
    const patientsInitial = [];
    const doctors = [];
    const recp = [];
    let getTiming;
    const [patients, setPatients] = useState(patientsInitial)
    const [doctor, setDoctors] = useState(doctors)
    const [recps, setRecps] = useState(recp)

    const getPatientByDoctorName = async () => {
        const response = await fetch("http://localhost:5000/patient/patients/getbyname", {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
                'auth-token' : localStorage.getItem('token'),
            },
            body : JSON.stringify({doctor_name : localStorage.getItem('username')})
        });
        const json = await response.json();
        setPatients(json)
    }

    const getPatientByToken = async (token) => {
        const response = await fetch("http://localhost:5000/patient/patients/gettoken/token/id/work", {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({token : token}),
        });
        const json = await response.json();
        return json;
    }

    const getPatientByDoctorNameforAdmin = async (doctor_name) => {
        const response = await fetch("http://localhost:5000/patient/patients/getbyname", {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
                'auth-token' : localStorage.getItem('token'),
            },
            body : JSON.stringify({doctor_name : doctor_name})
        });
        const json = await response.json();
        setPatients(json)
    }

    const getDoctorTimings = async (date, name, time) => {
        const response = await fetch("http://localhost:5000/doctor/docs/appointment/timing", {
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                'auth-token' : localStorage.getItem('token'),
                'name' : name,
                'time' : time,
                'dateNow' : date,
            },
        });
        const json = await response.json();
        console.log(json);
        getTiming = json.success;
        return getTiming
    }

    const onChangeSpecality = async (specality, branch) => {
        const response = await fetch("http://localhost:5000/doctor/docs/docField", {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({field : specality, branch : branch}),
        });
        const json = await response.json();
        setDoctors(json.doctor);
    }

    const setDoctorTiming = async (date, name, time) => {
        const response = await fetch("http://localhost:5000/doctor/docs/appointment/timing", {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
                'auth-token' : localStorage.getItem('token'),
            },
            body : JSON.stringify({date,name,time}),
        });
        const json = await response.json();
        console.log("From Info State ",json);
    }

    const addDoctor = async (name, branch, username, password, description, field, role) => {
        const response = await fetch("http://localhost:5000/doctor/", {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
                'auth-token' : localStorage.getItem('token'),
            },
            body : JSON.stringify({name, branch, username, password, description, field, role}),
        });
        const json = await response.json();
        console.log("From Info State ",json);
    }

    const editPatientDetail = async (id, symptoms, diet, description, prescription) => {
        const response = await fetch(`http://localhost:5000/patient/${id}`, {
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json',
                'auth-token' : localStorage.getItem('token'),
            },
            body : JSON.stringify({symptoms, diet, description, prescription})
        });
        const json = await response.json();
        console.log(json);
        let newPatients = JSON.parse(JSON.stringify(patients));
        for (let index = 0; index < newPatients.length; index++) {
            const element = newPatients[index];
            if(element._id === id) {
                if(symptoms) newPatients[index].symptoms = symptoms;
                if(diet) newPatients[index].diet = diet;
                if(description) newPatients[index].description = description;
                break;
            }
        }
        setPatients(newPatients)
    }

    const editDoctorDetail = async (id, name, description) => {
        const response = await fetch(`http://localhost:5000/doctor/${id}`, {
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json',
                'auth-token' : localStorage.getItem('token'),
            },
            body : JSON.stringify({name, description})
        });
        const json = await response.json();
        console.log(json);
        let newDoctor = JSON.parse(JSON.stringify(doctor));
        for (let index = 0; index < newDoctor.length; index++) {
            const element = newDoctor[index];
            if(element._id === id) {
                if(name) newDoctor[index].name = name;
                if(description) newDoctor[index].description = description;
                break;
            }
        }
        setDoctors(newDoctor)
    }

    const deleteDoctor = async (id) => {
        const response = await fetch(`http://localhost:5000/doctor/${id}`, {
            method : 'DELETE',
            headers : {
                'Content-Type' : 'application/json',
                'auth-token' : localStorage.getItem('token')
            },
        });
        const json = await response.json();
        console.log("JSON from InfoState: ", json);
        const newDoctors = doctor.filter((doc) => {return doc._id !== id});
        setDoctors(newDoctors);
    }

    return (
        <InfoContext.Provider value={{patients, setPatients, getPatientByDoctorName, editPatientDetail, getDoctorTimings, setDoctorTiming, onChangeSpecality, doctor, addDoctor, editDoctorDetail, deleteDoctor, getPatientByDoctorNameforAdmin, getPatientByToken, recps, setRecps}}  >
            {props.children}
        </InfoContext.Provider>
    )
}

export default InfoState
