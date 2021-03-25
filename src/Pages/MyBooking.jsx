import React from 'react'
import { NavLink } from 'react-router-dom'
import { Breadcrumb, Button, Input, InputGroup, Divider } from 'rsuite';
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const MyBooking = () => {
    return (
        <React.Fragment>
            <Header />
            <div className="container-fluid pt-90" style={{ backgroundImage: 'url("/imgs/about/bg.png")', backgroundSize: '100% 100%', height: '250px' }}>
                <div className="container">
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <NavLink to="/">Home</NavLink>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>My Booking</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
            <div className="container d-flex justify-content-center">
                <div className="pt-50 pb-50 pl-20 pr-20" style={{ backgroundColor: '#2C3138', width: '32%', borderRadius: '10px', position: "relative", top: '-80px' }}>
                    <h5 className="text-center" style={{ color: 'white' }}>My Bus Booking</h5>
                    <p className="text-center mb-30" style={{ color: 'white', fontSize: '12px', marginTop: '5px' }}>Search your PNR &amp; Bus Booking</p>
                    <Input type="text" placeholder="Enter Your PNR Number" />
                    <Divider><p style={{ color: 'white' }}>Or</p></Divider>
                    <InputGroup inside>
                        <InputGroup.Addon style={{ marginRight: '10px' }}>
                            <p>+91</p>
                        </InputGroup.Addon>
                        <Input style={{ paddingLeft: '50px' }} type="text" placeholder="Mobile Number" />
                    </InputGroup>
                    <Button className="mt-30 w-100" style={{ backgroundColor: '#2ecc71', fontWeight: '600', letterSpacing: '0.5px', color: 'white' }}>Submit</Button>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default MyBooking
