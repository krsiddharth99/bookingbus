import React from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import { Breadcrumb, InputGroup, Icon, Input, Button, DatePicker } from 'rsuite';
import Footer from '../Components/Footer';

const NavLink = props => <Breadcrumb.Item componentClass={Link} {...props} />;

const BusTicket = (props) => {
    // var date = new Date();
    // var day = date.getDay();
    // var month = date.getMonth();
    // var year = date.getYear();

    // var today = day + "/" + month + "/" + year;
    return (
        <React.Fragment>
            <Header open={props.open} isLoggedIn={props.isLoggedIn} menuOpen={props.menuOpen} />
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-6 pt-90 pb-90">
                        <h2 className="pl-50" style={{ color: '#2c3e50', fontWeight: '700' }}>Online Bus Ticket Booking</h2>
                    </div>
                    <div className="col-md-6 pt-90 pb-90" style={{ backgroundImage: 'url("/imgs/graphic-cloud.png")', backgroundSize: '100% 100%' }}>
                        <img src="/imgs/bus.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="container" style={{ position: 'absolute', top: '54%', left: '8%' }}>
                <Breadcrumb>
                    <NavLink to="/">Home</NavLink>
                    <NavLink active>Bus Ticket</NavLink>
                </Breadcrumb>
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
                <img className="w-100" src="/imgs/shadow2.png" alt="" />
            </div>
            <div className="container-fluid" style={{ backgroundColor: '#F1F2F6' }}>
                <div className="container pt-90 pb-70">
                    <h2 className="text-center pt-20" style={{ color: '#2c3e50', fontWeight: '600' }}>Why Book With Us</h2>
                    <div className="row mt-40">
                        <div className="col-md-4">
                            <div className="d-flex flex-column align-items-center" style={{ padding: '10px' }}>
                                <img src="/imgs/bus-stand.png" height="150px" width="250px" alt="" />
                                <h4 className="text-center mt-10 mb-10" style={{ color: '#2c3e50', fontWeight: '600' }}>On Time Performance</h4>
                                <p className="text-center" style={{ color: "rgba(0,0,0,0.6)", fontSize: '14px' }}>Every SmartBus journey is an on-time journey as we always start on time. We ensure an uninterrupted trip with a complete 12-level bus quality check.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex flex-column align-items-center" style={{ padding: '10px' }}>
                                <img src="/imgs/mask-group.png" height="150px" width="250px" alt="" />
                                <h4 className="text-center mt-10 mb-10" style={{ color: '#2c3e50', fontWeight: '600' }}>Safety Promise</h4>
                                <p className="text-center" style={{ color: "rgba(0,0,0,0.6)", fontSize: '14px' }}>To avoid any break-down, our active 24x7 command centre monitors each SmartBus trip. Through live GPS tracking our trained VitCity team monitors each trip for your safety.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex flex-column align-items-center" style={{ padding: '10px' }}>
                                <img src="/imgs/bus.png" height="150px" width="250px" alt="" />
                                <h4 className="text-center mt-10 mb-10" style={{ color: '#2c3e50', fontWeight: '600' }}>Personalised Assistance</h4>
                                <p className="text-center" style={{ color: "rgba(0,0,0,0.6)", fontSize: '14px' }}>Our trained VitCity bus crew helps you with easy check-in and the professional bus-captain assists you throughout the journey.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <h2 className="text-center pt-40" style={{ color: '#2c3e50', fontWeight: '600' }}>Why Book With Us</h2>
                <div className="row mt-30">
                    <div className="col-md-3">
                        <div className="d-flex flex-column align-items-center" style={{ padding: '10px' }}>
                            <img src="/imgs/social-distance.png" height="80px" width="80px" alt="" />
                            <h5 className="text-center mt-10 mb-10" style={{ color: '#2c3e50', fontWeight: '600' }}>Private Cabin</h5>
                            <p className="text-center" style={{ color: "rgba(0,0,0,1.0)", fontSize: '13px' }}>Safe & secure cabins for single and double occupancy.</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="d-flex flex-column align-items-center" style={{ padding: '10px' }}>
                            <img src="/imgs/sanatize.png" height="80px" width="80px" alt="" />
                            <h5 className="text-center mt-10 mb-10" style={{ color: '#2c3e50', fontWeight: '600' }}>Boarding Lounges</h5>
                            <p className="text-center" style={{ color: "rgba(0,0,0,1.0)", fontSize: '13px' }}>100% hygienic and convenient bus boarding lounges for VitCity passengers.</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="d-flex flex-column align-items-center" style={{ padding: '10px' }}>
                            <img src="/imgs/insurance.png" height="80px" width="80px" alt="" />
                            <h5 className="text-center mt-10 mb-10" style={{ color: '#2c3e50', fontWeight: '600' }}>Travel Insurance</h5>
                            <p className="text-center" style={{ color: "rgba(0,0,0,1.0)", fontSize: '13px' }}>VitCity provides COVID-19 Insurance Cover for all SmartBus passengers.</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="d-flex flex-column align-items-center" style={{ padding: '10px' }}>
                            <img src="/imgs/crew.png" height="80px" width="80px" alt="" />
                            <h5 className="text-center mt-10 mb-10" style={{ color: '#2c3e50', fontWeight: '600' }}>SmartBus Heroes</h5>
                            <p className="text-center" style={{ color: "rgba(0,0,0,1.0)", fontSize: '13px' }}>Our dedicated staff will be wearing masks & gloves ensuring traveller’s safety at all times during the journey.</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <Button className="mt-30" appearance="ghost">Know More</Button>
                </div>
            </div>
            <div className="container-fluid pt-30 pb-30 mt-30" style={{ backgroundColor: '#F1F2F6' }}>
                <div className="container">
                    <h3 className="text-center" style={{ color: '#2c3e50', fontWeight: '600' }}>Experience the best of VitCity SmartBus</h3>
                    <p className="mt-20" style={{ color: 'rgba(0,0,0,0.6)', fontSize: '15px', fontWeight: '600' }}>Namaste travellers welcome aboard the VitCity SmartBus! Here you will experience the
                    best of online bus ticketing booking and exceptional onboard services. VitCity is India’s
                    leading smart bus booking platform with amazing bus travel arrangements. From being the most
                    popular online bus ticket booking platform to providing a branded fleet of dependable buses that
                    offer safe and comfortable journeys. VitCity has also become the most preferred mobile app by
                    many because of the easy smart bus booking and other in-bus branded features to help you during
                    the trip. It is a reliable mode for vit-city smart bus travel for those who could not procure a
                    confirmed train ticket. VitCity promises punctual departure and arrival, assured safety - CCTV
                    surveillance, GPS, Lounge for boarding and in-bus sanitized washroom, and personalised assistance
                    of Bus captain and boarding staff. VitCity is smart, safe ,and reliable! Book a smart bus for a
                    more dependable and safe on road journey. Travellers can book buses online through the VitCity.com
                    or download the user-friendly VitCity mobile app.</p>

                    <h5 className="mt-20 mb-20" style={{ color: '#2c3e50', fontWeight: '600' }}>Key branded features of VitCity</h5>
                    <ul style={{ listStyleType: 'disc', marginLeft: '30px' }}>
                        <li className="mb-10" style={{ fontWeight: '600', color: 'rgba(0,0,0,0.6)' }}>
                            VitCity App communication support - 24x7 communication both via the support center
                            and VitCity mobile app. Information on bus status and boarding location will be
                            provided to passengers via live GPS tracking. For any further information or query,
                            travellers can easily reach out to the VitCity Central Command Center via the mobile
                            app.
                        </li>
                        <li className="mb-10" style={{ fontWeight: '600', color: 'rgba(0,0,0,0.6)' }}>
                            Fully sanitized in-bus washrooms - smart bus in-bus washrooms are available for your comfortable
                            travel. Hand wash and sanitisers are available for use.
                        </li>
                        <li className="mb-10" style={{ fontWeight: '600', color: 'rgba(0,0,0,0.6)' }}>
                            Spacious seats and private cabins - VitCity passenger seats are spacious with ample legroom making
                            them supremely comfortable. The private cabins are built in a way that can be used for both single and
                            double occupancy. VitCity gives its travellers an experience of easy Volvo bus booking and safe smart
                            bus journeys.
                        </li>
                        <li className="mb-10" style={{ fontWeight: '600', color: 'rgba(0,0,0,0.6)' }}>
                            Safe bus boarding lounges - VitCity safe private boarding lounges help travellers wait for their smart
                            bus away from the busy streets. Travellers can conveniently board their VitCity SmartBus in style inside
                            clean, air-conditioned lounges away from contamination. Our dedicated intercity staff ensures bus boarding
                            lounges are super clean and fresh before each boarding.
                        </li>
                    </ul>

                    <h5 className="mt-20 mb-20" style={{ color: '#2c3e50', fontWeight: '600' }}>Easy Payment Gateway & Flexi Ticket</h5>
                    <p className="mt-20" style={{ color: 'rgba(0,0,0,0.8)', fontSize: '15px', fontWeight: '600' }}>VitCity online bus ticket booking platform offers all bus travellers the ‘Easy Payment
                    Gateway’ with all online payment options for online bus booking customers across India.
                    The easy payment options offer the simplest possible checkout experience without putting
                    in your card details each time or having to log in. It’s a single click online bus ticket
                    booking system making bus ticket booking convenient at any time of the day. So hop onto
                    VitCity easy payment gateway and enjoy the most convenient and secure way of payments and
                    other bus ticket offers. That is not all, we also offer the other exciting features like
                    Flexi Ticket! It is an exclusive feature that helps modify your bus ticket booking till
                    the very last hour at no extra charge. This never-before feature makes bus travel
                    completely stress-free. <br /><br />
                    VitCity Payment modes are:
                    <ul className="mt-20" style={{ listStyleType: 'disc', marginLeft: '30px' }}>
                            <li className="mb-10" style={{ fontWeight: '600', color: 'rgba(0,0,0,0.6)' }}>GooglePay</li>
                            <li className="mb-10" style={{ fontWeight: '600', color: 'rgba(0,0,0,0.6)' }}>Credit Card</li>
                            <li className="mb-10" style={{ fontWeight: '600', color: 'rgba(0,0,0,0.6)' }}>Debit Card</li>
                            <li className="mb-10" style={{ fontWeight: '600', color: 'rgba(0,0,0,0.6)' }}>UPI</li>
                            <li className="mb-10" style={{ fontWeight: '600', color: 'rgba(0,0,0,0.6)' }}>Net Banking</li>
                            <li className="mb-10" style={{ fontWeight: '600', color: 'rgba(0,0,0,0.6)' }}>Paytm</li>
                            <li className="mb-10" style={{ fontWeight: '600', color: 'rgba(0,0,0,0.6)' }}>PhonePay</li>
                        </ul>
                    </p>

                    <h5 className="mt-20 mb-20" style={{ color: '#2c3e50', fontWeight: '600' }}>How to book bus tickets online!</h5>
                    <p className="mt-20" style={{ color: 'rgba(0,0,0,0.6)', fontSize: '15px', fontWeight: '600' }}>VitCity SmartBus gives you an end to end travel experience, assisting you at every
                    step of your journey. Booking an intercity smart bus online has never been this simple and
                    easy all thanks to the exclusive online bus ticket booking features of VitCity SmartBus.
                    We have left no stone unturned to provide our customers with a hassle free bus ticket
                    booking experience! Go ahead and book your tickets on the VitCity SmartBus. To make an
                    online bus booking this is all you need to know:
                    </p>
                    <ul className="mt-20" style={{ listStyleType: 'disc', marginLeft: '30px' }}>
                        <li className="mb-10" style={{ fontWeight: '600', color: 'rgba(0,0,0,0.6)' }}>To book a SmartBus online visit VitCity.com</li>
                        <li className="mb-10" style={{ fontWeight: '600', color: 'rgba(0,0,0,0.6)' }}>Type in the boarding & arrival destination</li>
                        <li className="mb-10" style={{ fontWeight: '600', color: 'rgba(0,0,0,0.6)' }}>Select the travel date of your choice & click on ‘search’</li>
                        <li className="mb-10" style={{ fontWeight: '600', color: 'rgba(0,0,0,0.6)' }}>You can now view a wide range of buses and seat types for your easy intercity travel.</li>
                        <li className="mb-10" style={{ fontWeight: '600', color: 'rgba(0,0,0,0.6)' }}>Post online bus ticket booking, you will receive an M-ticket via SMS/Whatsapp and email.</li>
                    </ul>
                    <p className="mt-20" style={{ color: 'rgba(0,0,0,0.6)', fontSize: '15px', fontWeight: '600' }}>Travellers can avail big discounts and exciting offers while making a bus ticket
                    booking online. Book the VitCity branded smart buses for your next trip and travel
                    on all popular routes across India. Hurry Up! Book bus tickets online today!
                    </p>
                </div>
            </div>
            <div className="container mt-30 mb-30">
                <h2 className="mt-20 mb-20 text-center" style={{ color: '#2c3e50', fontWeight: '600' }}>Bus Ticket Booking - FAQ</h2>
                <div className="mt-30 pb-30">
                    <h5 className="mt-20" style={{ fontWeight: '600' }}>Q) What is VitCity SmartBus?</h5>
                    <p className="mt-10" style={{ fontWeight: '600', color: 'rgba(0,0,0,0.5)', fontSize: '14px' }}>A) RailYatri
                    has launched its branded VitCity SmartBus with exclusive in-built features. A multi-modal transportation
                    service backed with technology, designed to make bus travelers journey superbly comfortable. VitCity is
                    loaded with features like Hygienic toilet, Live GPS/CCTV, free WiFi, Clean blankets & personalised assistance
                      of a bus captain!</p>
                    <h5 className="mt-20" style={{ fontWeight: '600' }}>Q) How many routes does VitCity SmartBus cover in India?</h5>
                    <p className="mt-10" style={{ fontWeight: '600', color: 'rgba(0,0,0,0.5)', fontSize: '14px' }}>A) VitCity - The largest inter city smart bus service in the country. Currently operational in more than 12 cities and successfully runs on 400+ popular bus routes across India.</p>
                    <h5 className="mt-20" style={{ fontWeight: '600' }}>Q) What are the benefits of booking bus tickets through VitCity SmartBus App?</h5>
                    <p className="mt-10" style={{ fontWeight: '600', color: 'rgba(0,0,0,0.5)', fontSize: '14px' }}>
                        A) Nothing beats the comfort of SmartBus journeys! Adding to its charm, VitCity’s friendly mobile app features will help you with easy, timely and convenient booking.<br />
                        1. Get exciting offers and save more when you choose the VitCity app for bus booking. Hurry! Give us a try!<br />
                        2. No bus delays! Track your VitCity in real time. Explore information on current location, distance covered, estimated time of arrival and departure.<br />
                        3. Flexi Ticket! Now modify your bus booking till very last hour at no extra charges. A never before in-app feature for a stress-free travel!
                    </p>
                    <h5 className="mt-20" style={{ fontWeight: '600' }}>Q) How to avail discounts on bus booking with VitCity SmartBus?</h5>
                    <p className="mt-10" style={{ fontWeight: '600', color: 'rgba(0,0,0,0.5)', fontSize: '14px' }}>
                        A) It's our constant endeavor to deliver better value to our travelers. There are many offers and discounts available on our VitCity mobile app. Upon booking you can find out the ongoing deals and discounts offered just for you! Download the app now!
                    </p>
                    <h5 className="mt-20" style={{ fontWeight: '600' }}>Q) Is VitCity SmartBus reliable?</h5>
                    <p className="mt-10" style={{ fontWeight: '600', color: 'rgba(0,0,0,0.5)', fontSize: '14px' }}>
                        A) VitCity SmartBus powered by RailYatri, always updates features that simplify bus journeys for travelers..<br />
                        1. Bus information with live GPS tracking for arrival and departure confirmation.<br />
                        2. On-Time performance - VitCity is always ready 60 mins before the trip begins. Delivering the promise of on-time performance each time!<br />
                        3. Safety promise - With continuous CCTV and GPS tracking on buses, our round-the-clock command centre keeps a close watch for your safe journey.<br />
                        4. You can also connect with us at care@VitCity.com or call us on 73073093510 for any query.<br />
                        5. Bus journey summary - When the trip ends we share a journey summary where you can review - no. of stoppages, time of departure and arrival, bus speed summary, journey route. We believe in giving quality end-to-end experience to all our VitCity travelers.<br />
                    </p>
                    <h5 className="mt-20" style={{ fontWeight: '600' }}>Q) Why book VitCity bus ticket online?</h5>
                    <p className="mt-10" style={{ fontWeight: '600', color: 'rgba(0,0,0,0.5)', fontSize: '14px' }}>
                        A) Book bus tickets online on the VitCity website or download the mobile app for easy access!<br />
                        1. Now do quick and easy booking with VitCity anytime, anywhere!<br />
                        2. View wide choices of seats and bus type.<br />
                        3. A special feature for women only seats..<br />
                        4. Avail great offers and discounts through online bus booking.<br />
                        Travel with VitCity for an incredible bus journey experience!<br />
                    </p>
                    <h5 className="mt-20" style={{ fontWeight: '600' }}>Q) How to book bus tickets via VitCity App?</h5>
                    <p className="mt-10" style={{ fontWeight: '600', color: 'rgba(0,0,0,0.5)', fontSize: '14px' }}>
                        A) No more waiting at bus ticket counters, go ahead and experience the hassle-free booking experience:<br />
                        1. Visit the VitCity App, and select the boarding & arrival destination.<br />
                        2. Select the bus that is best suited. Further, select the seats and fill in the correct passenger details.<br />
                        3. Proceed to the payment gateway. And you are done!.<br />
                        4. The bus booking confirmation email, SMS and WhatsApp message will be sent on users registered details.<br />
                    </p>
                </div>
            </div>
            <Footer />

        </React.Fragment>
    )
}

export default BusTicket
