import React, {useContext, useState} from 'react'
import InfoContext from '../context/details/infoContext'
import RecpCard from './RecpCard'

const Recp = (props) => {
    const context = useContext(InfoContext)
    const {getPatientByToken} = context;
    const [info, setInfo] = useState({token : "", details : ""});
    const onChange = (e) => {
        setInfo({...info, [e.target.name]: e.target.value});
    }

    const getPatient = async (e) => {
        e.preventDefault();
        info.details = await getPatientByToken(info.token);
        console.log(info.details);
    }
    return (
        <div style={{height : "100vh", width : "100%"}}>
            <div className="row my-3">
                <form onSubmit={getPatient}>
                    <div className="form-group my-2">
                        <label htmlFor="name">Enter Patient's Token Number</label>
                        <input onChange={onChange} required value={info.token} type="text" className="form-control" id="token" name='token' placeholder="Enter Token"/>
                    </div>
                    <button type="submit" className="my-2 btn btn-primary p-2">Get Patient Details</button>
                </form>
                <h1>Patients</h1>
                <div className='container my-3 mx-3'>
                    {info.details.length === 0 && 'No Patients'}
                </div>
                {info.details.length !== 0 ?  <><RecpCard patient={info.details} /> </> : ``  }
            </div>
        </div>
    )
}

export default Recp
