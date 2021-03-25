import React from 'react'
import { NavLink } from 'react-router-dom'
import { Input, Steps, ButtonGroup, Button, DatePicker } from 'rsuite'
import Footer from '../Components/Footer'

const travel = [
    {
        'imgUrl': '/imgs/social-distance.png',
        'title': 'PrivateCapsule',
        'desc': 'Exclusive private cabins for family & individual travellers.',
    },
    {
        'imgUrl': '/imgs/sanatize1.png',
        'title': 'RegularSanitization',
        'desc': '5 step stringent cleaning & sanitization protocol before every trip to ensure 100% protection.',
    },
    {
        'imgUrl': '/imgs/crew.png',
        'title': 'SmartBusHeroes',
        'desc': 'Trained staff equipped with masks & gloves to ensure travel safety protocols.',
    },
    {
        'imgUrl': '/imgs/bag.png',
        'title': 'BYOB (Bring your own blanket)',
        'desc': 'We strongly recommend our passengers to bring their own blankets, masks, & pillows.',
    },
]
const BusHire = () => {
    const [step, setStep] = React.useState(0);
    const onChange = nextStep => {
        setStep(nextStep < 0 ? 0 : nextStep > 1 ? 1 : nextStep);
    };

    const onNext = () => onChange(step + 1);
    const onPrevious = () => onChange(step - 1);

    return (
        <React.Fragment>
            <div className="shadow-sm pt-10 pb-10 position-fixed bg-white" style={{ left: '0px', right: '0px', zIndex: '7' }}>
                <NavLink to="/" style={{ textDecoration: 'none' }}>
                    <div className="d-flex align-items-center justify-content-center">
                        <img src="/imgs/vitlogo.png" height="70px" width="70px" alt="vitlogo" />
                        <p className="ml-20" style={{ fontSize: '25px', color: '#2C3138', fontWeight: '600' }}>VitCity <span style={{ color: 'green' }}>SmartCity</span></p>
                    </div>
                </NavLink>
            </div>
            <div className="container-fluid d-flex justify-content-end pt-90" style={{ backgroundImage: 'url("/imgs/about/bg.png")', backgroundSize: '100% 100%', height: '380px' }}>
                <img src="/imgs/bus.png" height="270px" width="530px" alt="" />
            </div>
            <div className="container">
                <div className="pt-30 pb-30 pl-20 pr-20" style={{ backgroundColor: '#2C3138', width: '32%', borderRadius: '10px', position: "relative", top: '-240px' }}>
                    <h5 className="text-center mb-20" style={{ color: 'white' }}>Special Services for stranded travellers to hire full bus</h5>
                    <Steps current={step} style={{ zIndex: '2' }}>
                        <Steps.Item />
                        <Steps.Item />
                    </Steps>
                    <div className="">
                        {
                            step == 0 ? (
                                <div className="mt-20 mb-20">
                                    <Input className="mb-10" placeholder="Name" type="text" />
                                    <Input className="mb-10" placeholder="Registration No." type="text" />
                                    <Input className="mb-10" placeholder="Phone" type="phone" />
                                </div>
                            ) : (
                                <div className="mt-20 mb-20">
                                    <Input className="mb-10" placeholder="From" type="text" />
                                    <Input className="mb-10" placeholder="To" type="text" />
                                    <div className="d-flex mb-10">
                                        <DatePicker format="DD-MM-YYYY" defaultValue={Date} />
                                        <Input className="ml-10" placeholder="Travellers" type="number" />
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <ButtonGroup className="mt-40 d-flex justify-content-end">
                        <Button onClick={onPrevious} disabled={step === 0}>Previous</Button>
                        {
                            step == 1 ? <Button style={{ backgroundColor: 'green', color: 'white' }}>Submit</Button> : <Button onClick={onNext} disabled={step === 1}>Next</Button>}
                    </ButtonGroup>
                </div>
            </div>
            <div className="container" style={{ position: 'relative', top: '-120px' }}>
                <h3 className="text-center" style={{ color: 'green', fontWeight: '600' }}>VitCity key steps to ensure safe travel</h3>
                <p className="text-center" style={{ fontSize: '14px', color: 'black', fontWeight: '600' }}>Your Safety is our top priority</p>
                <div className="row mt-50">
                    {
                        travel.map((data) => {
                            return <div className="col-md-3">
                                <div className="d-flex align-items-center">
                                    <img src={data.imgUrl} height="80px" width="80px" alt="" />
                                    <div className=" ml-10">
                                        <h6 className="text-center" style={{ color: 'black', fontWeight: 'bold' }}>#{data.title}</h6>
                                        <p className="mt-10 text-center" style={{ color: 'rgba(0,0,0,0.6)', fontSize: '13px', fontWeight: '500' }}>{data.desc}</p>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default BusHire
