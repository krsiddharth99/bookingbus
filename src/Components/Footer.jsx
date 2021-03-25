import React from 'react'
import { NavLink } from 'react-router-dom';
import { Icon } from 'rsuite'

const iconStyle = {
    paddingTop: '6px',
    paddingLeft: '7px',
    height: '32px',
    width: '32px',
    borderRadius: '50%',
    backgroundColor: 'white',
    boxShadow: '3px 2px 8px 0px rgba(0,0,0,0.4),inset 1px 1px 3px 0px rgba(0,0,0,0.4)',
    marginRight: '10px',
    // textAlign: 'center',
    fontSize: '21px',
}

const headingText = {
    color: 'white',
    fontSize: '18px',
    marginBottom: '1px',
    fontWeight: '600',
}

const dividerStyle = {
    width: '30px',
    borderTop: '1px solid #FCCCB0',
    marginBottom: '18px',
}


const Footer = () => {
    return (
        <React.Fragment>
            {
                /****************************************************************************************************/
                /****************************************************************************************************/
                /*********************************WEB FOOTER Footer******************************************/
                /****************************************************************************************************/
                /****************************************************************************************************/
            }
            <div className="container-fluid d-block flex-fill pt-40 pb-40 position-relative b-0 l-0 r-0 footer">
                <div className="container d-flex flex-column justify-content-center align-items-center">
                    <div className="row">
                        <div className="col-md-3">
                            <p style={headingText}>VitCity SmartBus</p>
                            <hr className="mt-10" style={dividerStyle} />
                            <p style={{ color: 'white', fontSize: '13px', letterSpacing: '0.6px', marginBottom: '10px' }}>IntrCity powered by RailYatri, is India’ s first SmartBus network, founded on the principle of solving challenges of traveling in a bus. IntrCity has evolved into offering its travelers an end-to-end travel experience and branded in-bus features for a safer journey.</p>

                        </div>
                        <div className="col-md-3">
                            <p style={headingText}>Info</p>
                            <hr className="mt-10" style={dividerStyle} />
                            <ul>
                                <li>
                                    <NavLink to="/about">ABOUT US<hr /></NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact-us">CONTACT US<hr /></NavLink>
                                </li>
                                <li>
                                    <NavLink to="/offers">OFFERS<hr /></NavLink>
                                </li>
                                <li>
                                    <NavLink to="/terms-and-conditions" >TERMS &amp; CONDITIONS<hr /></NavLink>
                                </li>
                                <li>
                                    <NavLink to="/faq">FAQ<hr /></NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <p style={headingText}>Booking With Us</p>
                            <hr className="mt-10" style={dividerStyle} />
                            <ul>
                                <li>
                                    <NavLink to="/bus-ticket">BUS TICKET<hr /></NavLink>
                                </li>
                                <li>
                                    <NavLink to="/bus-hire">BUS HIRE<hr /></NavLink>
                                </li>
                                <li>
                                    <NavLink to="/my-booking">MY BOOKINGS<hr /></NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <p style={headingText}>Contact Us</p>
                            <hr className="mt-10" style={dividerStyle} />
                            <ul>
                                <li>
                                    <Icon icon="phone" style={{ color: 'white' }} /><span style={{ color: 'white', fontSize: '14px', fontFamily: 'Raleway', fontWeight: '600' }}>&nbsp;&nbsp;+91 9076652887</span><br />
                                </li>
                                <li>
                                    <Icon icon="envelope" style={{ color: 'white' }} /><span style={{ color: 'white', fontSize: '14px', fontFamily: 'Raleway', fontWeight: '500' }}>&nbsp;&nbsp;VitCity@company.in</span>
                                </li>
                                <li>
                                    <div className="container-fluid d-flex justify-content-start align-items-start mt-20 mb-25 social-icon">
                                        <Icon icon="facebook" style={iconStyle} />
                                        <Icon icon="google" style={iconStyle} />
                                        <Icon icon="twitter" style={iconStyle} />
                                        <Icon icon="instagram" style={iconStyle} />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-50 " style={{ color: '#FCCCB0', fontWeight: '500', fontFamily: 'Raleway', letterSpacing: '1px' }}>Copyright &copy; 2021 VitCity SmartBus by vit.pvt.ltd</div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer
