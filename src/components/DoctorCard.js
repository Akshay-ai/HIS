import React, {useRef, useContext} from 'react'
import InfoContext from '../context/details/infoContext'

const DoctorCard = (props) => {
    const context = useContext(InfoContext)
    const {editDoctorDetail, deleteDoctor} = context;

    var pic = useRef(null);
    var name = useRef(null);
    var desp = useRef(null);
    var editBtn = useRef(null);
    var submitBtn = useRef(null);
    var delBtn = useRef(null);
    var uploadimg = useRef(null);
    var description = {};

    const editDoc = () => {
        name.current.contentEditable = true;
        name.current.style.border = "2px solid black";
        name.current.style.backgroundColor = "white";
        name.current.style.color = "black"
        desp.current.contentEditable = true;
        desp.current.style.border = "2px solid black";
        desp.current.style.backgroundColor = "white";
        desp.current.style.color = "black"
        editBtn.current.style.display = "none";
        delBtn.current.style.display = "none";
        submitBtn.current.style.display = "block";
        uploadimg.current.style.display = "inline";
        pic.current.style.display = "none";
    }

    const submitDoc = () => {
        props.doctor.name = name.current.textContent;
        if(props.doctor.description){
            if(props.doctor.description.pic) {
                description = {
                    about : desp.current.textContent,
                    pic : (description.pic) ? description.pic : props.doctor.description.pic,
                }
            }
            else {
                description = {
                    about : desp.current.textContent,
                    pic : (description.pic) ? description.pic : "",
                }
            }
        }
        name.current.contentEditable = false;
        name.current.style.border = "0px solid black";
        name.current.style.backgroundColor = "";
        name.current.style.color = "white"
        desp.current.contentEditable = false;
        desp.current.style.border = "0px solid black";
        desp.current.style.backgroundColor = "";
        desp.current.style.color = "white"
        editBtn.current.style.display = "block";
        delBtn.current.style.display = "block";
        submitBtn.current.style.display = "none";
        uploadimg.current.style.display = "none";
        pic.current.style.display = "block";
        editDoctorDetail(props.doctor._id, props.doctor.name,description)
    }

    const delDoc = () => {
        deleteDoctor(props.doctor._id);
    }

    const previewFile = (e) => {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = function(e) {
            description.pic =  reader.result;
        }
    }

    return (
        <div>
            <div className="card text-white bg-primary m-3" style={{minWidth: "400px"}}>
                <div className="row g-0">
                    <div ref={pic} className="col-md-4">
                        <img  src={`${!props.doctor.description ? "" : props.doctor.description.pic}`} className="img-fluid rounded-start" style={{height : "100%"}} alt="..."/>
                    </div>
                    <div ref={uploadimg} style={{display : "none"}} className="input-group mb-3 my-3">
                        <label className="input-group-text" htmlFor="pic">Doctor's pic</label>
                        <input onChange={previewFile} name='pic' type="file" className="btn btn-lg btn-primary" id="pic"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 ref={name} className="card-title">{props.doctor.name}</h5>
                            <h6 className='mt-3'>Description</h6>
                            {!props.doctor.description || props.doctor.description.length === 0 ? <p ref={desp} className="card-text">No Description</p> : <p ref={desp} className="card-text">{props.doctor.description.about}</p>}
                            <p className="card-text">{props.doctor.field}</p>
                            <div className='d-flex justify-content-start '>
                                <i ref={editBtn} className="fas fa-pen-square fa-lg m-2" onClick={() => editDoc()} style={{cursor : "pointer"}}></i>
                                <i ref={delBtn}  className="fas fa-user-minus fa-lg m-2" onClick={() => delDoc()} style={{cursor : "pointer"}}></i>
                                <i ref={submitBtn} className="fas fa-check-square fa-lg" onClick={() => submitDoc()} style={{display : "none", cursor : "pointer"}} ></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorCard
