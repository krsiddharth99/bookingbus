import React from 'react'
import { NavLink } from 'react-router-dom'
import { Breadcrumb, Timeline } from 'rsuite'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const timelineStyle = {
    fontWeight: '600',
    fontSize: '15px',
    color: 'black'
}

const listStyle = {
    marginBottom: '17px',
    color: 'white',
    fontWeight: '600',
    letterSpacing: '0.2px',
    fontSize: '18px',
}

const feature = [
    {
        'imgUrl': '/imgs/about/clean.png',
        'title': 'Clean & Sanitised Interiors'
    },
    {
        'imgUrl': '/imgs/about/lounge.png',
        'title': 'SmartBus Boarding Lounges'
    },
    {
        'imgUrl': '/imgs/about/Caption.png',
        'title': 'SmartBus Captains'
    },
    {
        'imgUrl': '/imgs/about/bottle.png',
        'title': 'Free Mineral Water Bottle'
    },
    {
        'imgUrl': '/imgs/about/insurance.png',
        'title': 'Complimentary Travel Insurance'
    },
    {
        'imgUrl': '/imgs/about/tracking.png',
        'title': 'GPS & CCTV Tracking'
    },
    {
        'imgUrl': '/imgs/about/time.png',
        'title': 'On-time performance'
    },
    {
        'imgUrl': '/imgs/about/halt.png',
        'title': 'No unwanted halts'
    },

]
const About = (props) => {
    return (
        <React.Fragment>
            <Header open={props.open} isLoggedIn={props.isLoggedIn} menuOpen={props.menuOpen} />
            <div className="container-fluid pt-90" style={{ backgroundImage: 'url("/imgs/about/bg.png")', backgroundSize: '100% 100%', height: '280px' }}>
                <div className="container">
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <NavLink to="/">Home</NavLink>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>About Us</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
            <div className="container mt-30">
                <div className="row">
                    <div className="col-md-6">
                        <h2 style={{ color: '#2C3138', fontWeight: 'bold' }}>Journey So Far</h2>
                        <p className="mt-20" style={{ color: 'rgba(0,0,0,0.7)', fontSize: '14px', fontWeight: '500' }}>IntrCity RailYatri started its journey in 2011 and IntrCity SmartBus was launched in early 2019.<br />
                        IntrCity SmartBus is a fleet of branded buses to give a standardized, safe, secure
                        & comfortable bus travel experience. IntrCity SmartBus started operations with 2
                        cities in early 2019, and as of today we connect over 100 cities PAN India.</p>
                        <Timeline className="mt-50" align="left">
                            <Timeline.Item time="Early 2019">
                                <p style={timelineStyle}>Start From SJT to P-Block Men's Hostel</p>
                            </Timeline.Item>
                            <Timeline.Item time="June 2019">
                                <p style={timelineStyle}>Started Some New Routes like F-Block (Ramanujan Block)</p>
                            </Timeline.Item>
                            <Timeline.Item time="October 2019">
                                <p style={timelineStyle}>Additional Services For Student</p>
                            </Timeline.Item>
                            <Timeline.Item time="January 2020">
                                <p style={timelineStyle}>Started Bus Booking for Airport or cities</p>
                            </Timeline.Item>
                            <Timeline.Item time="January 2021">
                                <p style={timelineStyle}>Successfully Achieve 100+ Student and Parent</p>
                            </Timeline.Item>
                        </Timeline>
                    </div>
                    <div className="col-md-6">
                        <img style={{ position: 'relative', top: '-100px' }} src="/imgs/bus.png" height="280px" width="500px" alt="" />
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-50 mb-30" style={{ background: '#2C3138' }}>
                <div className="container  pt-40 pb-40">
                    <h2 className="text-center" style={{ color: 'white', fontWeight: 'bold' }}>What makes IntrCity stand different</h2>
                    <h6 className="text-center" style={{ color: 'white', fontWeight: '500', letterSpacing: '0.4px' }}>(Let us present this as list of features and amenities)</h6>
                    <p className="text-center mt-20" style={{ color: 'rgba(255,255,255,0.7)', fontWeight: '400', fontSize: '13px', letterSpacing: '0.4px' }}>Unlike any other normal bus aggregator model, we have built IntrCity SmartBuses as a powerful substitute for trains & a convenient mode of transport for the modern-day budget traveller. To ensure the best experience for travellers we work closely with the top-notch ecosystem players in these following areas:</p>
                    <div className="row mt-60">
                        <div className="col-md-6">
                            <ul style={{ listStyleType: 'disc', marginLeft: '30px' }}>
                                <li style={listStyle}>Vehicle quality standardization</li>
                                <li style={listStyle}>Fleet monitoring</li>
                                <li style={listStyle}>IoT technology</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul style={{ listStyleType: 'disc', marginLeft: '30px' }}>
                                <li style={listStyle}>Crew training</li>
                                <li style={listStyle}>Pre & post boarding passenger experiences</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mb-70">
                <h2 className="text-center mb-20" style={{ color: '#2c3e50', fontWeight: 'bold' }}>Things you’ll love about IntrCity</h2>
                <div className="row">
                    {
                        feature.map((data) => {
                            return <div className="col-md-4 d-flex flex-column align-items-center mt-50">
                                <img src={data.imgUrl} height="150px" width="200px " alt="img" />
                                <h5 className="mt-10" style={{ color: '#2c3e50', fontWeight: 'bold' }}>{data.title}</h5>
                            </div>
                        })
                    }
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default About
