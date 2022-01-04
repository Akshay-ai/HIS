import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='container mt-5'>
            <div className="card mb-3" style={{minWidth: "540px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                <img src= {`${require('./hello.jpg')}`} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Infinity World of Care</h5>
                    <p className="card-text m-3">Established by Dr Sathwik Reddy in 1983, Infinity Healthcare has a robust presence across the healthcare ecosystem. From routine wellness  preventive health care to innovative life-saving treatments and diagnostic services, Infinity Hospitals has touched more than 120 million lives from over 120 countries, offering the best clinical outcomes.</p>
                    <Link to='/appointment' className="btn mx-2 bg-primary" style={{color : "white"}}>Book Appointment</Link>
                </div>
                </div>
            </div>
            </div>
            <div className="row my-3 d-flex justify-content-between">
            <div className="card text-white bg-primary m-5  mb-3" style={{maxWidth: "18rem"}}>
            <div className="card-header">7000 + Healing Hands</div>
            <div className="card-body">
                <p className="card-text">Largest network of the world’s finest and brightest medical experts who provide compassionate care using outstanding expertise and advanced technology</p>
            </div>
            </div>
            <div className="card text-white bg-primary m-5  mb-3" style={{maxWidth: "18rem"}}>
            <div className="card-header">4000+ Pharmacies</div>
            <div className="card-body">
                <p className="card-text">Infinity Pharmacy is India’s first, largest and most trusted branded pharmacy network, with over 4000 plus outlets covering the entire nation</p>
            </div>
            </div>
            
            </div>
            <div className='row my-3 d-flex justify-content-between'>
            <div className="card text-white bg-primary m-5  mb-3" style={{maxWidth: "18rem"}}>
            <div className="card-header">Most Advanced HealthCare Technology</div>
            <div className="card-body">
                <p className="card-text">Infinity Hospitals has been the pioneer in bringing ground-breaking healthcare technologies to India.</p>
            </div>
            </div>
            <div className="card text-white bg-primary m-5  mb-3" style={{maxWidth: "18rem"}}>
            <div className="card-header">Best Clinical Outcomes</div>
            <div className="card-body">
                <p className="card-text">Leveraging its vast medical expertise & technological advantage, Infinity Hospitals has consistently delivered best in class clinical outcomes.</p>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Home
