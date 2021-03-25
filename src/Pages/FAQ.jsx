import React from 'react'
import { NavLink } from 'react-router-dom'
import { Breadcrumb, Timeline } from 'rsuite'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const FAQ = (props) => {
    return (
        <React.Fragment>
            <Header open={props.open} isLoggedIn={props.isLoggedIn} menuOpen={props.menuOpen} />
            <div className="container-fluid pt-90" style={{ backgroundImage: 'url("/imgs/about/bg.png")', backgroundSize: '100% 100%', height: '280px' }}>
                <div className="container">
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <NavLink to="/">Home</NavLink>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>FAQ</Breadcrumb.Item>
                    </Breadcrumb>
                    <p className="mt-20" style={{ color: 'rgba(0,0,0,0.7)', fontSize: '14px', fontWeight: '500' }}>VitCity by RailYatri has become the most preferred VitCity smart bus fleet. Our branded smart buses with the best possible amenities on-board comply with the highest safety standards. Post lockdown count on us for a 100% hygienic, sanitised and physically distant journey!</p>
                </div>
            </div>
            <div className="container">
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

export default FAQ
