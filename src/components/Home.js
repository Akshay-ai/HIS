import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner mt-3">
                    <div className="carousel-item active ">
                        <img src={`${require('./room4.jpg')}`} style={{opacity : "0.9"}} height="650px" className="d-block w-100" alt="..."/>
                        <div style={{backgroundColor : "white", opacity : "0.7"}} className="carousel-caption d-none d-md-block">
                            <h4 style={{color : "black"}}>World's Best Smart Hospitals</h4>
                            <p  style={{color : "black", fontSize : "large"}}>Thank you for being a part of the journey in making us the leaders in transforming healthcare digitally</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={`${require('./room2.jpg')}`} style={{opacity : "0.9"}} height="650px" className="d-block w-100" alt="..."/>
                        <div style={{backgroundColor : "white", opacity : "0.7"}} className="carousel-caption d-none d-md-block">
                            <h4 style={{color : "black"}}>You are not alone in case of an Emergency</h4>
                            <p  style={{color : "black", fontSize : "large"}}>Get the most advanced emergency care anywhere in just minutes. Contact Apollo Hospitals Now.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={`${require('./room3.jpg')}`} style={{opacity : "0.9"}} height="650px" className="d-block w-100" alt="..."/>
                        <div style={{backgroundColor : "white", opacity : "0.7"}} className="carousel-caption d-none d-md-block">
                            <h4 style={{color : "black"}}>Spot the Stroke!</h4>
                            <p  style={{color : "black", fontSize : "large"}}>When someone has a stroke, we lose crucial brain cells, the key to mobility, communication memory.<br/> #SpotStrokeStopStroke</p>
                        </div>
                    </div>
                </div>
            </div>
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
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item my-5"><a className="page-link" href="#"><i className="fas fa-chevron-left"></i></a></li>
                    <li className="page-item mx-4">
                    <div className="card" style={{width : "18rem"}}>
                        <img src={`${require('./image/neuro.jfif')}`} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <div className="card-body">
                            <a href="#" className="btn btn-primary">Nuerologist</a>
                        </div>
                        </div>
                    </div>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#"><i className="fas fa-chevron-right"></i></a></li>
                </ul>
            </nav>
        </>
    )
}

export default Home
