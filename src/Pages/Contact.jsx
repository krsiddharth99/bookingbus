import React from 'react'
import { NavLink } from 'react-router-dom'
import { Breadcrumb, Timeline } from 'rsuite'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const branch = [
    {
        'imgUrl': '/imgs/l1.png',
        'name': 'Vellore',
        'address': 'Room No: 321,Technical Tower, Near Girls Hostel, VIT, Vellore, Tamil Nadu ',
    },
    {
        'imgUrl': '/imgs/l2.png',
        'name': 'Chennai',
        'address': 'Room No: 321,Technical Tower, Near Girls Hostel, VIT, Vellore, Tamil Nadu ',
    },
    {
        'imgUrl': '/imgs/l3.png',
        'name': 'AP-Amravati',
        'address': 'Room No: 321,Technical Tower, Near Girls Hostel, VIT, Vellore, Tamil Nadu ',
    },
    {
        'imgUrl': '/imgs/l4.png',
        'name': 'Bhopal',
        'address': 'Room No: 321,Technical Tower, Near Girls Hostel, VIT, Vellore, Tamil Nadu ',
    },
]
const Contact = (props) => {
    return (
        <React.Fragment>
            <Header open={props.open} isLoggedIn={props.isLoggedIn} menuOpen={props.menuOpen} />
            <div className="container-fluid pt-90" style={{ backgroundImage: 'url("/imgs/about/bg.png")', backgroundSize: '100% 100%', height: '280px' }}>
                <div className="container">
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <NavLink to="/">Home</NavLink>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
            <div className="container shadow-lg pt-50 pb-50 pl-60 pr-60 bg-white" style={{ borderRadius: '10px', position: 'relative', top: '-100px' }}>
                <h2 className="text-center" style={{ color: '#2C3138', fontWeight: 'bold' }}>Contact Us - We would love to hear from you</h2>
                <p className="mt-20 text-center" style={{ color: 'rgba(0,0,0,0.6)', fontWeight: '500' }}>We are the creators of India’s 1st fleet of branded buses that guarantee safe & hygienic journeys. We’re here to help you solve your queries and provide answers to questions related to UNIV-BUS SmartBus and it’s services.</p>
                <p className="mt-50" style={{ color: 'rgba(0,0,0,0.9)', fontWeight: '600' }}>Support Center - 24x7 personalised assistance</p>
                <p className="mt-10" style={{ color: 'rgba(0,0,0,0.9)', fontWeight: '600' }}>Head Office : <span style={{ fontSize: '14px', color: 'rgba(0,0,0,0.6)', fontWeight: '600' }}>Room No: 321,Technical Tower, Near Girls Hostel, VIT, Vellore, Tamil Nadu </span></p>
                <p className="mt-10" style={{ color: 'rgba(0,0,0,0.9)', fontWeight: '600' }}>Email : <span style={{ fontSize: '14px', color: 'rgba(0,0,0,0.6)', fontWeight: '600' }}>vitofficial@vit.ac.in </span></p>
                <p className="mt-10" style={{ color: 'rgba(0,0,0,0.9)', fontWeight: '600' }}>Tel : <span style={{ fontSize: '14px', color: 'rgba(0,0,0,0.6)', fontWeight: '600' }}>+91 41678952 </span></p>
            </div>
            <div className="container-fluid" style={{ backgroundColor: '#F1F2F6' }}>
                <div className="container pt-40 pb-40 pl-50 pr-50">
                    <h2 className="text-center" style={{ color: '#2C3138', fontWeight: 'bold' }}>UNIV-BUS SmartBus Lounge - safe & private boarding space for your convenience</h2>
                    <div className="row mt-50">
                        {
                            branch.map((data) => {
                                return <div className="col-md-4 mb-40">
                                    <img src={data.imgUrl} alt="l1" style={{ borderRadius: '15px' }} />
                                    <h6 className="mt-20 mb-10" style={{ color: 'rgba(0,0,0,0.9)', fontWeight: '600' }}>{data.name}</h6>
                                    <p style={{ fontSize: '14px', color: 'rgba(0,0,0,0.6)', fontWeight: '500' }}>{data.address}</p>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Contact
