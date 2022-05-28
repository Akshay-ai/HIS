import React, {useContext, useState, useEffect, useRef} from 'react'
import InfoContext from '../context/details/infoContext'
import RecpCard from './RecpCard'

const Recp = (props) => {
    const card = useRef(null);
    const context = useContext(InfoContext)
    const {getPatientByToken} = context;
    const [info, setInfo] = useState({token : "", details : ""});

    const onChange = (e) => {
        setInfo({...info, [e.target.name]: e.target.value});
    }

    useEffect( () => {
        console.log(info);
        if (info.token.length === 4) {
            getPatientByToken(info.token)
            .then((data) => {setInfo({...info, details : data})});
            if(info.details.success === false) {
                info.details = "";
            }
        }
    }, [info.token])

    return (
        <div style={{height : "100vh", width : "100%"}}>
            <div className="row my-3">
                <form>
                    <div className="form-group my-2">
                        <label htmlFor="name">Enter Patient's Token Number</label>
                        <input onChange={onChange} required value={info.token} type="text" className="form-control" id="token" name='token' placeholder="Enter Token"/>
                    </div>
                </form>
                <h1>Patients</h1>
                <div className='container my-3 mx-3'>
                    {info.details.length === 0 && 'No Patients'}
                </div>
                <div ref={card}>
                    {info.token.length === 4 ?  <><RecpCard patient={info.details} /> </> : ``  }
                </div>
            </div>
        </div>
    )
}

export default Recp