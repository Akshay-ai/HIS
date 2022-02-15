import React from 'react'

const About = () => {
    return (
        <>
            <div className="container d-flex justify-content-between my-5">
                <img src={`${require('./image/hsp1.png')}`} style={{width : "500px", height : "450px"}} className="card-img-top" alt="..."/>
                <p className="mx-5" style={{fontFamily : "arial"}}>
                    <span className="mb-2" style={{fontWeight : "bold", color : "red", fontSize : "20px"}}>Welcome to Infinity Hospital</span> <br/>
                We are one of the largest corporate healthcare groups in AP and Telangana in terms of number of patients treated and treatments offered, according to the CRISIL Report. We provide multi-disciplinary integrated healthcare services, with a focus on primary secondary & tertiary care in Tier 2-3 cities and primary, secondary, tertiary and quaternary healthcare in Tier 1 cities. We operate 9 multi-speciality hospitals under the “KIMS Hospitals” brand, with an aggregate bed capacity of 3,064, including over 2,500 operational beds as of December 31, 2020, which is 2.2 times more beds than the second largest provider in AP and Telangana, according to the CRISIL report. We offer a comprehensive range of healthcare services across over 25 specialties and super specialties, including cardiac sciences, oncology, neurosciences, gastric sciences, orthopaedics, organ transplantation, renal sciences and mother & child care. 
“CRISIL Research, a division of CRISIL Limited (CRISIL) has taken due care and caution in preparing this report (“CRISIL Report”) based on the Information obtained by CRISIL from sources which it considers reliable (“Data”). However, CRISIL does not guarantee the accuracy, adequacy or completeness of the Data / CRISIL Report and is not responsible for any errors or omissions or for the results obtained from the use of Data / CRISIL Report. This CRISIL Report is not a recommendation to invest / disinvest in any entity covered in the CRISIL Report and no part of this CRISIL Report should be construed as an expert advice or investment advice or any form of investment banking within the meaning of any law or regulation. CRISIL especially states that it has no liability whatsoever to the third-party subscribers / third-party users / transmitters/ distributors of this CRISIL Report.
                </p>
            </div>
            <div className="d-flex justify-content-between container">
                <div className="mx -4 row my-3 d-flex justify-content-between">
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
            <img src={`${require('./image/hb.png')}`} style={{width : "500px", height : "500px"}} className="card-img-top" alt="..."/>

            </div>
        </>
    )
}

export default About