import React from 'react'
import { Breadcrumb, Input, InputGroup, Icon, DatePicker, Button } from 'rsuite'
import Footer from '../Components/Footer';
import Header from '../Components/Header';

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

const branch = [
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

const safety = [
    {
        'imgUrl': '/imgs/cabin.webp',
        'title': 'Private Cabins',
        'desc': 'IntrCity provides safe and secure cabins for all travellers',
    },
    {
        'imgUrl': 'imgs/san.webp',
        'title': 'Regular Sanatization',
        'desc': 'All buses are fresh & safe before each trip!',
    },
    {
        'imgUrl': 'imgs/safe.webp',
        'title': 'Safe Boarding',
        'desc': 'Travellers can wait in safe & private boarding lounges',
    },
    {
        'imgUrl': 'imgs/wait.webp',
        'title': 'Free Travel Insurance',
        'desc': 'Free Travel Insurance cover worth ₹5lacs to every passenger travelling with us. In any incident, we are there for you.',
    }
]

const booking = [
    {
        'imgUrl': '/imgs/Pocket.webp',
        'title': 'Pocket Friendly',
        'desc': 'Get cashback & big discounts',
    },
    {
        'imgUrl': 'imgs/ticket.webp',
        'title': 'Flexi Ticket',
        'desc': 'Modify the journey details till last moment',
    },
    {
        'imgUrl': 'imgs/about/insurance.png',
        'title': 'Staff with Mask',
        'desc': 'Our Bus Captains wear a mask throughout the journey',
    },
    {
        'imgUrl': 'imgs/track.webp',
        'title': 'Track your Bus',
        'desc': 'Know bus journey status & boarding location via live GPS tracking',
    }
]

const travelling = [
    {
        'imgUrl': '/imgs/Pocket.webp',
        'title': 'Enjoy Free Wifi',
        'desc': 'Enjoy free wifi & entertainment during your journey',
    },
    {
        'imgUrl': 'imgs/ticket.webp',
        'title': 'Bus Caption',
        'desc': 'Professional bus captain will assist you throughout the journey',
    },
    {
        'imgUrl': 'imgs/about/insurance.png',
        'title': 'Comfy Sleepers',
        'desc': 'Unwind in our clean and secure sleeper berths',
    },
    {
        'imgUrl': 'imgs/track.webp',
        'title': 'Travel relax',
        'desc': 'Fully sanitized in-bus washrooms for your comfortable travel',
    }
]
const Home = (props) => {
    return (
        <React.Fragment>
            <Header open={props.open} isLoggedIn={props.isLoggedIn} menuOpen={props.menuOpen} />
            <div className="container-fluid m-0 p-0">
                <div className="container-fluid d-flex justify-content-end" style={{ backgroundImage: 'url("/imgs/about/bg.png")', backgroundSize: '100% 100%', height: '280px' }}>
                    <img src="/imgs/bus.png" style={{ position: 'relative', top: '90px', left: '75px' }} alt="" />
                </div>
                <h3 className="text-center mb-20" style={{ color: '#2C3138', fontWeight: 'bold' }}>Book Your Bus Ticket</h3>
                <div className="container position-sticky" style={{ top: '80px', left: '100px', zIndex: '10' }}>
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
                <div className="container d-flex justify-content-center mb-30">
                    <Button appearance="ghost">Explore our SmartBus Routes</Button>
                </div>
                <div className="container">
                    <h3 className="text-center" style={{ fontWeight: 'bold', color: 'rgba(0,0,0,0.8)' }}>Offers</h3>
                    <p className="text-center" style={{ fontWeight: '500', color: 'rgba(0,0,0,0.5)' }}>Grab best offers for easy bus ticket booking</p>
                    <div className="row mt-50">
                        {
                            discount.map((data) => {
                                return <div className="col-md-4">
                                    <div className="shadow-lg" style={{ borderRadius: '10px', backgroundColor: 'white' }}>
                                        <div className="mb-20 w-100" style={{ borderRadius: '10px', height: '180px', backgroundImage: 'url("' + data.imgUrl + '")', backgroundSize: '100% 100%' }}></div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <div className="container d-flex justify-content-center mt-30">
                        <Button appearance="ghost">Know More</Button>
                    </div>
                </div>
                <div className="container-fluid mt-50 mb-30" style={{ backgroundImage: 'url("/imgs/bg.webp")', backgroundSize: '100% 100%' }}>
                    <div className="container  pt-40 pb-40">
                        <h2 className="text-center" style={{ color: 'white', fontWeight: 'bold' }}>IntrCity SmartBus Lounge</h2>
                        <p className="text-center mt-20" style={{ color: 'rgba(255,255,255,0.7)', fontWeight: '400', fontSize: '13px', letterSpacing: '0.4px' }}>The first-of-its-kind, a premium lounge for bus travellers. You can now wait for your bus to arrive in style & comfort<br />of an air conditioned lounge that is equipped with all modern amenities</p>
                        <div className="row mt-50">
                            {
                                branch.map((data) => {
                                    return <div className="col-md-4 mb-40">
                                        <div className="pt-90 pl-10 pr-10 pb-20" style={{ borderRadius: '10px', backgroundSize: '100% 100%', backgroundImage: 'linear-gradient(to top,rgba(23,44,69,1.0),rgba(23,44,69,0.3) 50%),url("' + data.imgUrl + '")' }}>
                                            <h6 className="mt-20 mb-10" style={{ color: 'white', fontWeight: '600' }}>{data.name}</h6>
                                            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', fontWeight: '500' }}>{data.address}</p>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                        <h2 className="text-center mt-20" style={{ color: 'white', fontWeight: 'bold' }}>Coming Soon near you!</h2>
                        <p className="text-center" style={{ color: 'rgba(255,255,255,0.7)', fontWeight: '400', fontSize: '13px', letterSpacing: '0.4px' }}>AP-Amravati, Bhopal</p>
                    </div>
                </div>
                <div className="container-fluid d-flex justify-content-between" style={{ position: 'relative', top: '-150px' }}>
                    <img src="/imgs/arr2.webp" alt="arr2" height="250px" width="300px" />
                    <img src="/imgs/arr1.webp" alt="arr1" height="300px" width="300px" />
                </div>
                <div className="container" style={{ position: 'relative', top: '-200px' }}>
                    <h2 className="text-center" style={{ fontWeight: 'bold', color: 'rgba(0,0,0,0.8)' }}>SmartBus Assists You at Every Step of Your Journey</h2>
                    <h4 className="text-center mt-10" style={{ fontWeight: 'bold', color: 'blue' }}>Safety on a SmartBus</h4>
                    <img style={{ marginLeft: '34%' }} src="/imgs/arr6.webp" height="50px" width="150px" alt="" />
                    <div className="row mt-30 mb-30">
                        {
                            safety.map((d) => {
                                return <div className="col-md-3 d-flex flex-column align-items-center">
                                    <img src={d.imgUrl} alt="url" height="130px" width="180px" />
                                    <h4 className="text-center mt-20" style={{ fontWeight: 'bold', color: 'rgba(0,0,0,0.8)' }}>{d.title}</h4>
                                    <p className="text-center" style={{ color: 'rgba(0,0,0,0.7)', fontWeight: '400', fontSize: '13px', letterSpacing: '0.4px' }}>{d.desc}</p>
                                </div>
                            })
                        }
                    </div>
                    <img style={{ marginLeft: '38%' }} src="/imgs/arr4.webp" height="100px" width="250px" alt="" />
                    <h4 className="text-center mt-10" style={{ fontWeight: 'bold', color: 'blue' }}>Booking with SmartBus</h4>
                    <div className="row mt-30 mb-50">
                        {
                            booking.map((d) => {
                                return <div className="col-md-3 d-flex flex-column align-items-center">
                                    <img src={d.imgUrl} alt="url" height="130px" width="180px" />
                                    <h4 className="text-center mt-20" style={{ fontWeight: 'bold', color: 'rgba(0,0,0,0.8)' }}>{d.title}</h4>
                                    <p className="text-center" style={{ color: 'rgba(0,0,0,0.7)', fontWeight: '400', fontSize: '13px', letterSpacing: '0.4px' }}>{d.desc}</p>
                                </div>
                            })
                        }
                    </div>
                    <img style={{ marginLeft: '44%' }} src="/imgs/arr3.webp" height="100px" width="80px" alt="" />
                    <h4 className="text-center mt-10" style={{ fontWeight: 'bold', color: 'blue' }}>Travelling on a SmartBus</h4>
                    <div className="row mt-30 mb-30">
                        {
                            travelling.map((d) => {
                                return <div className="col-md-3 d-flex flex-column align-items-center">
                                    <img src={d.imgUrl} alt="url" height="130px" width="180px" />
                                    <h4 className="text-center mt-20" style={{ fontWeight: 'bold', color: 'rgba(0,0,0,0.8)' }}>{d.title}</h4>
                                    <p className="text-center" style={{ color: 'rgba(0,0,0,0.7)', fontWeight: '400', fontSize: '13px', letterSpacing: '0.4px' }}>{d.desc}</p>
                                </div>
                            })
                        }
                    </div>
                    <img style={{ marginLeft: '38%' }} src="/imgs/arr5.webp" height="150px" width="120px" alt="" />
                    <img style={{ marginLeft: '44%' }} src="/imgs/best.webp" height="190px" width="160px" alt="" />
                </div>
                <div className="container-fluid pt-50 pb-50" style={{ backgroundColor: '#F1F2F6' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <img src="/imgs/phone.webp" alt="" />
                            </div>
                            <div className="d-flex flex-column align-items-start justify-content-center ">
                                <h3 className="mt-20" style={{ fontWeight: 'bold', color: 'rgba(0,0,0,0.8)' }}>Get The VitCity SmartBus App </h3>
                                <p style={{ color: 'rgba(0,0,0,0.7)', fontWeight: '400', fontSize: '15px', letterSpacing: '0.4px' }}>Exclusive in-App bus booking features</p>
                                <div className="d-flex mt-30">
                                    <img src="/imgs/apple.png" style={{ borderRadius: '100px' }} height="50px" width="180px" alt="" />
                                    <img src="/imgs/gplay.png" style={{ borderRadius: '100px' }} height="50px" width="180px" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Home
