import InfoContext from "./infoContext";

import React, {useState} from 'react'

const InfoState = (props) => {
    const patientsInitial = []
    const [patients, setPatients] = useState(patientsInitial)

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
        console.log(json);
        setPatients(json)
    }

    const editPatientDetail = async (id, symptoms, diet, description) => {
        const response = await fetch(`http://localhost:5000/patient/${id}`, {
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json',
                'auth-token' : localStorage.getItem('token'),
            },
            body : JSON.stringify({symptoms, diet, description})
        });
        // const json = await response.json();
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

    return (
        <InfoContext.Provider value={{patients, setPatients, getPatientByDoctorName, editPatientDetail}}  >
            {props.children}
        </InfoContext.Provider>
    )
}

export default InfoState
