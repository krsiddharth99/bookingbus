import React from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { Button, Icon, Input, InputGroup, Modal, Loader, Alert } from 'rsuite'

const SearchResult = (props) => {
    // var isHovered = false;
    let { search } = useParams();
    const [show, setShow] = React.useState(false);
    const [isLoading, setLoading] = React.useState(false);
    const [isBooking, setBookLoading] = React.useState(false);
    function open() {
        setShow(true);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }
    function close() {
        setShow(false);
    }
    function bookingLoader() {
        setBookLoading(true);
        setTimeout(() => {
            setBookLoading(false);
            close();
            Alert.success('Successful Booked.');
        }, 2000);
    }
    return (
        <>
            {search["searchTo"]}
            <Header open={props.open} isLoggedIn={props.isLoggedIn} menuOpen={props.menuOpen} />
            <div className="container pt-90">
                <div className="container position-sticky" style={{ top: '80px', left: '100px', zIndex: '10' }}>
                    <div className="d-flex" style={{ padding: '10px', backgroundColor: '#2c3e50', borderRadius: '10px' }}>
                        <InputGroup inside>
                            <InputGroup.Addon>
                                <Icon icon="circle-o" style={{ fontSize: '18px' }} />
                            </InputGroup.Addon>
                            <Input type="text" placeholder="From" name="from" value="p-block" />
                        </InputGroup>
                        <img src="/imgs/switch.png" height="40px" width="40px" alt="" />
                        <InputGroup inside>
                            <InputGroup.Addon>
                                <Icon icon="map-marker" style={{ fontSize: '18px' }} />
                            </InputGroup.Addon>
                            <Input type="text" placeholder="To" value="k-block" />
                        </InputGroup>
                    </div>
                    <img style={{ position: 'relative', top: '-26px' }} className="w-100" src="/imgs/shadow2.png" alt="" />
                </div>
                {
                    /* ******************************************** CARD ***********************************************/
                }
                <div className="d-flex justify-content-between mb-20 mt-20 search-card shadow-sm" style={{ borderRadius: '5px', cursor: 'pointer' }}>
                    <div className="pr-20 pl-20 pt-10 pb-10">
                        <div className="d-flex align-items-center">
                            <h4 style={{ color: 'black', fontWeight: '500' }}>Raj kalpana travels  pvt. ltd</h4>
                            <h6 className="ml-10 mr-10" style={{ paddingLeft: '5px', paddingRight: '5px', paddingTop: '3px', paddingBottom: '3px', backgroundImage: 'linear-gradient(to top left,yellow,orange)', borderRadius: '5px', fontWeight: '600', color: 'white' }}>3.5 <span style={{ fontWeight: '600', fontSize: '11px' }}>/ 5</span></h6>
                            <p style={{ fontSize: '12px', letterSpacing: '0.2px', color: 'rgba(0,0,0,0.6)', fontWeight: '600' }}>210 ratings</p>
                        </div>
                        <div className="mt-10 d-flex align-items-center">
                            <p style={{ fontSize: '13px', color: 'black' }}>A/C Sitting (2 + 1)</p> &nbsp; &nbsp; | &nbsp; &nbsp;
                            <p style={{ fontSize: '13px', color: 'black' }}><Icon className="m-0 p-0" icon="wheelchair" /> 35 seats left</p> &nbsp; &nbsp; | &nbsp; &nbsp;
                            <p style={{ fontSize: '13px', color: 'black' }}><Icon className="m-0 p-0" icon="window-maximize" /> 23 windows seats</p>
                        </div>
                        <div className=" mt-70 d-flex align-items-center">
                            <h4 style={{ fontWeight: '600', color: 'black' }}>21:30,&nbsp;</h4>
                            <h6 className="text-secondary">19 MAY</h6>
                            <p>&nbsp; ------------------ &nbsp;</p>
                            <h6>07 hrs 30 mins</h6>
                            <p>&nbsp; ------------------ &nbsp;</p>
                            <h4 style={{ fontWeight: '600', color: 'black' }}>5:00,&nbsp;</h4>
                            <h6 className="text-secondary">20 MAY</h6>
                        </div>
                    </div>
                    <div className="d-flex flex-column justify-content-between align-items-end pt-10 pb-10 pl-50 pr-20" style={{ backgroundColor: 'rgba(0,0,0,0.08)' }}>
                        <div className="d-flex flex-column align-items-end">
                            <p className="text-secondary" style={{ fontWeight: '500', letterSpacing: '0.1px', fontSize: '13px' }}>Starting From</p>
                            <h2 style={{ fontWeight: '600', color: 'black' }}>₹ 15</h2>
                        </div>
                        <Button className="mt-80 pl-20 pr-20" appearance="primary" style={{ backgroundImage: 'linear-gradient(to top right,#3498db,#2980b9,#34495e)', color: 'white', fontWeight: '600', letterSpacing: '0.5px', borderRadius: '40px', fontSize: '13px' }} onClick={() => { props.isLoggedIn ? open() : props.open() }}>BOOK SEATS</Button>
                    </div>
                </div>
                {
                    /* ******************************************** CARD ***********************************************/
                }
                <div id='one' className="d-flex justify-content-between mb-20 mt-20 shadow-sm search-card" style={{ borderRadius: '5px', cursor: 'pointer' }}>
                    <div className="pr-20 pl-20 pt-10 pb-10">
                        <div className="d-flex align-items-center">
                            <h4 style={{ color: 'black', fontWeight: '500' }}>Raj kalpana travels  pvt. ltd</h4>
                            <h6 className="ml-10 mr-10" style={{ paddingLeft: '5px', paddingRight: '5px', paddingTop: '3px', paddingBottom: '3px', backgroundImage: 'linear-gradient(to top left,yellow,orange)', borderRadius: '5px', fontWeight: '600', color: 'white' }}>3.5 <span style={{ fontWeight: '600', fontSize: '11px' }}>/ 5</span></h6>
                            <p style={{ fontSize: '12px', letterSpacing: '0.2px', color: 'rgba(0,0,0,0.6)', fontWeight: '600' }}>210 ratings</p>
                        </div>
                        <div className="mt-10 d-flex align-items-center">
                            <p style={{ fontSize: '13px', color: 'black' }}>A/C Sitting (2 + 1)</p> &nbsp; &nbsp; | &nbsp; &nbsp;
                            <p style={{ fontSize: '13px', color: 'black' }}><Icon className="m-0 p-0" icon="wheelchair" /> 35 seats left</p> &nbsp; &nbsp; | &nbsp; &nbsp;
                            <p style={{ fontSize: '13px', color: 'black' }}><Icon className="m-0 p-0" icon="window-maximize" /> 23 windows seats</p>
                        </div>
                        <div className=" mt-70 d-flex align-items-center">
                            <h4 style={{ fontWeight: '600', color: 'black' }}>21:30,&nbsp;</h4>
                            <h6 className="text-secondary">19 MAY</h6>
                            <p>&nbsp; ------------------ &nbsp;</p>
                            <h6>07 hrs 30 mins</h6>
                            <p>&nbsp; ------------------ &nbsp;</p>
                            <h4 style={{ fontWeight: '600', color: 'black' }}>5:00,&nbsp;</h4>
                            <h6 className="text-secondary">20 MAY</h6>
                        </div>
                    </div>
                    <div className="d-flex flex-column justify-content-between align-items-end pt-10 pb-10 pl-50 pr-20" style={{ backgroundColor: 'rgba(0,0,0,0.08)' }}>
                        <div className="d-flex flex-column align-items-end">
                            <p className="text-secondary" style={{ fontWeight: '500', letterSpacing: '0.1px', fontSize: '13px' }}>Starting From</p>
                            <h2 style={{ fontWeight: '600', color: 'black' }}>₹ 15</h2>
                        </div>
                        <Button className="mt-80 pl-20 pr-20" appearance="primary" style={{ backgroundImage: 'linear-gradient(to top right,#3498db,#2980b9,#34495e)', color: 'white', fontWeight: '600', letterSpacing: '0.5px', borderRadius: '40px', fontSize: '13px' }} onClick={() => { props.isLoggedIn ? open() : props.open() }}>BOOK SEATS</Button>
                    </div>
                </div>
            </div>
            <Footer />

            {
                /************************************************************************************/
                /************************************************************************************/
                /**************************** CONFIRM MODAL   ***************************************/
                /************************************************************************************/
                /************************************************************************************/
            }
            <Modal size="lg" show={show} onHide={close}>
                <Modal.Header>
                    <Modal.Title>
                        <p className="pl-20 pr-10 pt-10 pb-10 w-20" style={{ fontWeight: '600', fontSize: '13px', color: 'white', backgroundImage: 'linear-gradient(to top right,#1abc9c,#16a085)', borderRadius: '5px' }}>BOOKING SUMMARY</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        isLoading ? <div className="d-flex align-items-center justify-content-center">
                            <Loader speed="normal" size="md" />
                        </div> : <div className="d-flex justify-content-between">
                            <div className="pr-20 pt-10 pl-20 pb-10" style={{ border: '1px solid rgba(0,0,0,0.2)', borderRadius: '5px' }}>
                                <div className="d-flex align-items-center">
                                    <h4 style={{ color: 'black', fontWeight: '500' }}>Raj kalpana travels  pvt. ltd</h4>
                                    <h6 className="ml-10 mr-10" style={{ paddingLeft: '5px', paddingRight: '5px', paddingTop: '3px', paddingBottom: '3px', backgroundImage: 'linear-gradient(to top left,yellow,orange)', borderRadius: '5px', fontWeight: '600', color: 'white' }}>3.5 <span style={{ fontWeight: '600', fontSize: '11px' }}>/ 5</span></h6>
                                    <p style={{ fontSize: '12px', letterSpacing: '0.2px', color: 'rgba(0,0,0,0.6)', fontWeight: '600' }}>210 ratings</p>
                                </div>
                                <div className="mt-10 d-flex align-items-center">
                                    <p style={{ fontSize: '13px', color: 'black' }}>A/C Sitting (2 + 1)</p> &nbsp; &nbsp; | &nbsp; &nbsp;
                                    <p style={{ fontSize: '13px', color: 'black' }}><Icon className="m-0 p-0" icon="wheelchair" /> 35 seats left</p> &nbsp; &nbsp; | &nbsp; &nbsp;
                                    <p style={{ fontSize: '13px', color: 'black' }}><Icon className="m-0 p-0" icon="window-maximize" /> 23 windows seats</p>
                                </div>
                                <div className=" mt-30 d-flex align-items-center">
                                    <h4 style={{ fontWeight: '600', color: 'black' }}>21:30,&nbsp;</h4>
                                    <h6 className="text-secondary">19 MAY</h6>
                                    <p>&nbsp; ------------------ &nbsp;</p>
                                    <h6>07 hrs 30 mins</h6>
                                    <p>&nbsp; ------------------ &nbsp;</p>
                                    <h4 style={{ fontWeight: '600', color: 'black' }}>5:00,&nbsp;</h4>
                                    <h6 className="text-secondary">20 MAY</h6>
                                </div>
                                <div className="pl-10 pr-10 pt-10 pb-10 mt-10" style={{ borderRadius: '4px', border: '1px dashed #3498db' }}>
                                    <p style={{ fontSize: '12px', color: 'black' }}><span className="text-danger" style={{ fontWeight: '600' }}>NOTE :</span> The bus fare is to paid during the travel via cash or Gpay or other payment gateway method.</p>
                                </div>
                            </div>
                            <div className="pl-10 pt-10 pr-10 pb-10" style={{ borderRadius: '5px', border: '1px solid rgba(0,0,0,0.2)' }}>
                                <Button onClick={() => { bookingLoader(); }} className="pl-20 pr-20 w-100" appearance="primary" style={{ backgroundImage: 'linear-gradient(to top right,#3498db,#2980b9,#34495e)', color: 'white', fontWeight: '600', letterSpacing: '0.5px', borderRadius: '5px', fontSize: '13px' }}>
                                    {isBooking ? <p style={{ color: 'transparent' }}>
                                        ----------- <Loader speed="normal" size="xs" center={true} content={<p style={{ color: 'white', fontSize: '13px' }}>Booking....</p>} /> -----------
                                        </p> : "CONTINUE BOOKING".toString()}
                                </Button>
                                <div className=" mt-10 d-flex align-items-center justify-content-between">
                                    <p style={{ fontWeight: '600', fontSize: '13px' }}>Bus Fare</p>
                                    <p style={{ fontWeight: '600', fontSize: '13px', color: 'green' }}>₹ 12</p>
                                </div>
                                <div className=" d-flex align-items-center justify-content-between">
                                    <p style={{ fontWeight: '600', fontSize: '13px' }}>GST</p>
                                    <p style={{ fontWeight: '600', fontSize: '13px', color: 'red' }}>+ ₹3</p>
                                </div>
                                <hr className=" mt-10 mb-0" />
                                <div className=" d-flex align-items-center justify-content-between">
                                    <p style={{ fontWeight: '600', fontSize: '13px', color: 'black' }}>Total</p>
                                    <p style={{ fontWeight: '700', fontSize: '16px', color: 'black' }}>₹ 15</p>
                                </div>
                            </div>
                        </div>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={close} style={{ backgroundImage: 'linear-gradient(to top right,#d35400,#e74c3c,#c0392b)', color: 'white', fontWeight: '600' }} appearance="subtle">Cancel</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default SearchResult
