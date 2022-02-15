import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'

const Home = () => {
    return (
        <>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner mt-3">
                    <div className="carousel-item active ">
                        <img src={`${require('./image/room4.jpg')}`} style={{opacity : "0.9"}} height="650px" className="d-block w-100" alt="..."/>
                        <div style={{backgroundColor : "white", opacity : "0.7"}} className="carousel-caption d-none d-md-block">
                            <h4 style={{color : "black"}}>World's Best Smart Hospitals</h4>
                            <p  style={{color : "black", fontSize : "large"}}>Thank you for being a part of the journey in making us the leaders in transforming healthcare digitally</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={`${require('./image/room2.jpg')}`} style={{opacity : "0.9"}} height="650px" className="d-block w-100" alt="..."/>
                        <div style={{backgroundColor : "white", opacity : "0.7"}} className="carousel-caption d-none d-md-block">
                            <h4 style={{color : "black"}}>You are not alone in case of an Emergency</h4>
                            <p  style={{color : "black", fontSize : "large"}}>Get the most advanced emergency care anywhere in just minutes. Contact Infinity Hospitals Now.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={`${require('./image/room3.jpg')}`} style={{opacity : "0.9"}} height="650px" className="d-block w-100" alt="..."/>
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
                    <img src= {`${require('./image/hello.jpg')}`} className="img-fluid rounded-start" alt="..."/>
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
                <h2 className="mt-5 container">Our Specalities</h2>
                <div className="my-3 container d-flex justify-content-between">
                <div className="card" style={{width : "18rem"}}>
                    <img src={`${require('./image/ne.jpg')}`} style={{width : "280px", height : "250px"}} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <div className="card-body">
                        <Link to="/" className="container btn btn-primary">Neurologists</Link>
                    </div>
                    </div>
                </div>
                <div className="card" style={{width : "18rem"}}>
                    <img src={`${require('./image/gyno.jpg')}`} style={{width : "280px", height : "250px"}} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <div className="card-body">
                        <Link to="/" className="container btn btn-primary">Gynecologists</Link>
                    </div>
                    </div>
                </div>
                <div className="card" style={{width : "18rem"}}>
                    <img src={`${require('./image/heart.jpg')}`} style={{width : "280px", height : "250px"}} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <div className="card-body">
                        <Link to="/" className="container btn btn-primary">Cardiologists</Link>
                    </div>
                    </div>
                </div>
                <div className="card" style={{width : "18rem"}}>
                    <img src={`${require('./image/ortho.jpg')}`} style={{width : "280px", height : "250px"}} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <div className="card-body">
                        <Link to="/" className="container btn btn-primary">Orthopaedics</Link>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="container">
                <About/>
            </div>
        </>
    )
}

export default Home
