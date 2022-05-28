import React from 'react'
const RecpCard = (props) => {
    return (
        <div className='col-md-3'>
            <div className="card text-dark bg-info mb-4" style={{maxWidth : "18rem"}}>
                <div className="card-header">{props.patient.name}</div>
                <div className="card-body">
                    <h5 className="card-title mt-2">Phone Number</h5>
                    <div className='d-flex justify-content-between mb-2'>
                        {props.patient.Phone_Number}
                    </div>
                    <h5 className="card-title">Doctor Name</h5> 
                    <div id='desp' className='d-flex justify-content-between mb-2'>
                        {props.patient.doctor_name }
                    </div>
                    <h5 className="card-title">Date Of Appointment</h5> 
                    <div id='desp' className='d-flex justify-content-between mb-2'>
                        {props.patient.dateOfAppointment }
                    </div>
                    <h5 className="card-title">Timings</h5> 
                    <div id='desp' className='d-flex justify-content-between mb-2'>
                        {props.patient.timings}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecpCard
