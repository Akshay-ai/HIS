import React, {useRef, useContext} from 'react'
import InfoContext from '../context/details/infoContext'

const PatientCard = (props) => {
    const context = useContext(InfoContext)
    const {editPatientDetail} = context;

    let diet =useRef(null);
    let dietBtn =useRef(null);
    let dietBtnDone =useRef(null);

    let des =useRef(null);
    let desBtn =useRef(null);
    let desBtnDone =useRef(null);

    let sym =useRef(null);
    let symBtn =useRef(null);
    let symBtnDone =useRef(null);

    let prescription =useRef(null);
    let prescriptionBtn =useRef(null);
    let prescriptionBtnDone =useRef(null);

    const editDiet = () => {
        diet.current.contentEditable = true;
        diet.current.style.border = "2px solid black";
        diet.current.focus();
        diet.current.style.backgroundColor = "white";
        dietBtn.current.style.display = "none";
        dietBtnDone.current.style.display = "inline";
    }

    const submitDiet = () => {
        props.patient.diet = diet.current.textContent
        console.log(diet.current.textContent);
        diet.current.contentEditable = true;
        diet.current.style.backgroundColor = "";
        diet.current.style.border = "0px solid black";
        dietBtn.current.style.display = "inline";
        dietBtnDone.current.style.display = "none";
        editPatientDetail(props.patient._id, props.patient.symptoms, props.patient.diet, props.patient.description)
    }
    
    const editprescription = () => {
        prescription.current.contentEditable = true;
        prescription.current.style.border = "2px solid black";
        prescription.current.focus();
        prescription.current.style.backgroundColor = "white";
        prescriptionBtn.current.style.display = "none";
        prescriptionBtnDone.current.style.display = "inline";
    }

    const submitprescription = () => {
        props.patient.prescription = diet.current.textContent
        prescription.current.contentEditable = true;
        prescription.current.style.backgroundColor = "";
        prescription.current.style.border = "0px solid black";
        prescriptionBtn.current.style.display = "inline";
        prescriptionBtnDone.current.style.display = "none";
        editPatientDetail(props.patient._id, props.patient.symptoms, props.patient.diet, props.patient.description, props.patient.prescription)
    }

    const editDes = () => {
        des.current.contentEditable = true;
        des.current.style.border = "2px solid black";
        des.current.focus();
        des.current.style.backgroundColor = "white";
        desBtn.current.style.display = "none";
        desBtnDone.current.style.display = "inline";
    }

    const submitDes = () => {
        props.patient.description = des.current.textContent
        console.log(des.current.textContent);
        des.current.contentEditable = true;
        des.current.style.backgroundColor = "";
        des.current.style.border = "0px solid black";
        desBtn.current.style.display = "inline";
        desBtnDone.current.style.display = "none";
        editPatientDetail(props.patient._id, props.patient.symptoms, props.patient.diet, props.patient.description)
    }

    const editSym = () => {
        sym.current.contentEditable = true;
        sym.current.style.border = "2px solid black";
        sym.current.focus();
        sym.current.style.backgroundColor = "white";
        symBtn.current.style.display = "none";
        symBtnDone.current.style.display = "inline";
    }

    const submitSym = () => {
        props.patient.symptoms = sym.current.textContent
        console.log(des.current.textContent);
        sym.current.contentEditable = true;
        sym.current.style.backgroundColor = "";
        sym.current.style.border = "0px solid black";
        symBtn.current.style.display = "inline";
        symBtnDone.current.style.display = "none";
        editPatientDetail(props.patient._id, props.patient.symptoms, props.patient.diet, props.patient.description)
    }

    return (
        <div className='col-md-3'>
            <div className="card text-dark bg-info mb-4" style={{maxWidth : "18rem"}}>
                <div className="card-header">{props.patient.name}</div>
                <div className="card-body">
                    <h5 className="card-title">Symptoms</h5>
                    <div className='d-flex justify-content-between mt-2'>
                        {!props.patient.symptoms ? <p ref={sym} className="card-text">No Symptoms Given </p> : props.patient.symptoms.length !== 0 ? <p ref={sym} className="card-text">{props.patient.symptoms}</p> : <p ref={sym} className="card-text">No Symptoms given </p>  }
                        <i ref={symBtn} onClick={() => editSym()} style={{cursor : "pointer"}}  className="far fa-edit"></i>
                        <i ref={symBtnDone} onClick={() => submitSym()} style={{display:'none', cursor : "pointer"}} className="fas fa-clipboard-list"></i>
                    </div>
                    <h5 className="card-title mt-2">Diet</h5>
                    <div className='d-flex justify-content-between mt-2'>
                        {!props.patient.diet ? <p ref={diet} className="card-text">No diet Given </p> : props.patient.diet.length !== 0 ? <p ref={diet} className="card-text">{props.patient.diet}</p> : <p ref={diet} className="card-text">No diet Given </p>  }
                        <i ref={dietBtn} onClick={() => editDiet()} style={{cursor : "pointer"}}  className="far fa-edit"></i>
                        <i ref={dietBtnDone} onClick={() => submitDiet()} style={{display:'none',cursor : "pointer" }} className="fas fa-clipboard-list"></i>
                    </div>
                    <div className='d-flex justify-content-between mt-2'>
                        {!props.patient.prescription ? <p ref={prescription} className="card-text">No prescription Given </p> : props.patient.prescription.length !== 0 ? <p ref={prescription} className="card-text">{props.patient.prescription}</p> : <p ref={prescription} className="card-text">No prescription Given </p>  }
                        <i ref={prescriptionBtn} onClick={() => editprescription()} style={{cursor : "pointer"}}  className="far fa-edit"></i>
                        <i ref={prescriptionBtnDone} onClick={() => submitprescription()} style={{display:'none',cursor : "pointer" }} className="fas fa-clipboard-list"></i>
                    </div>
                    <h5 className="card-title">Description</h5>
                    <div id='desp' className='d-flex justify-content-between mt-2'>
                        {!props.patient.description ? <p ref={des} className="card-text">No description given about Disease</p> : props.patient.description.length !== 0 ? <p ref={des} className="card-text">{props.patient.description}</p> : <p ref={des} className="card-text">No Description about Disease </p>  }
                        <i ref={desBtn} onClick={() => editDes()} style={{cursor : "pointer"}}  className="far fa-edit"></i>
                        <i ref={desBtnDone} onClick={() => submitDes()} style={{display:'none',cursor : "pointer" }} className="fas fa-clipboard-list"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PatientCard
