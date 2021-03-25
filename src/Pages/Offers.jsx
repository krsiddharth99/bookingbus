import React from 'react'
import { NavLink } from 'react-router-dom'
import { Breadcrumb, Input, InputGroup, Icon, DatePicker, Button } from 'rsuite'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const discount = [
    {
        'imgUrl': '/imgs/dis1.png',
        'title': 'VitCity Welcome Offer',
        'desc': 'Get 15% Off on 1st SmartBus Trip',
        'valid': 'Valid Upto 31 Mar',
    },
    {
        'imgUrl': '/imgs/dis2.png',
        'title': 'Exclusive SmartBus Discount',
        'desc': 'Book Now & Enjoy Flat 10% Off',
        'valid': 'Valid Upto 31 Mar',
    },
    {
        'imgUrl': '/imgs/dis3.jpg',
        'title': 'FLAT 35% off on all FabHotels',
        'desc': 'FabHotel offer to VitYatries',
        'valid': 'Valid Upto 31 Mar',
    },
]

const Offers = (props) => {
    return (
        <React.Fragment>
            <Header open={props.open} isLoggedIn={props.isLoggedIn} menuOpen={props.menuOpen} />
            <div className="container-fluid pt-90" style={{ backgroundImage: 'url("/imgs/about/bg.png")', backgroundSize: '100% 100%', height: '240px' }}>
                <div className="container">
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <NavLink to="/">Home</NavLink>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>Offers</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
            <div className="container position-absolute" style={{ top: '210px', left: '100px' }}>
                <div className="d-flex" style={{ padding: '10px', backgroundColor: '#2c3e50', borderRadius: '10px' }}>
                    <InputGroup inside>
                        <InputGroup.Addon>
                            <Icon icon="circle-o" style={{ fontSize: '18px' }} />
                        </InputGroup.Addon>
                        <Input type="text" placeholder="From" />
                    </InputGroup>
                    <img src="/imgs/switch.png" height="40px" width="40px" alt="" />
                    <InputGroup inside>
                        <InputGroup.Addon>
                            <Icon icon="map-marker" style={{ fontSize: '18px' }} />
                        </InputGroup.Addon>
                        <Input type="text" placeholder="To" />
                    </InputGroup>
                    <InputGroup inside>
                        <DatePicker className="ml-10 mr-10 w-100" format="DD-MM-YYYY" />
                    </InputGroup>
                    <Button className="w-25" appearance="primary" style={{ color: 'white', backgroundColor: '#2ecc71', fontSize: '13px', fontWeight: '500', letterSpacing: '0.4px' }}><Icon icon="search" />&nbsp; Search</Button>
                </div>
                <img style={{ position: 'relative', top: '-26px' }} className="w-100" src="/imgs/shadow2.png" alt="" />
            </div>
            <div className="container-fluid" style={{ backgroundColor: '#F1F2F6' }}>
                <div className="container pt-60 pb-60">
                    <h3 className="text-center pt-20" style={{ color: '#2c3e50', fontWeight: '600' }}>Bus Ticket Booking Offers, Coupon & Promo Codes</h3>
                    <div className="row mt-50">
                        {
                            discount.map((data) => {
                                return <div className="col-md-4">
                                    <div className="shadow-lg" style={{ borderRadius: '10px', backgroundColor: 'white' }}>
                                        <div className="mb-20 w-100" style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px', height: '180px', backgroundImage: 'url("' + data.imgUrl + '")', backgroundSize: '100% 100%' }}></div>
                                        <div className="pl-10 pr-10">
                                            <h6 style={{ fontWeight: 'bold', color: 'black' }}>{data.title}</h6>
                                            <p style={{ fontSize: '13px', fontWeight: '500' }}>{data.desc}</p>
                                            <div className="d-flex align-items-center justify-content-between mt-20">
                                                <p style={{ fontSize: '11px', fontWeight: '500', color: 'rgba(0,0,0,0.5)' }}>{data.valid}</p>
                                                <div className="d-flex justify-content-end">
                                                    <Button appearance="link" style={{ fontSize: '11px', fontWeight: '500' }}><Icon icon="copy" /> Copy Coupon Code</Button>
                                                    <Button appearance="link" style={{ fontSize: '11px', fontWeight: '500' }}>T &amp; C</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment >
    )
}

export default Offers
