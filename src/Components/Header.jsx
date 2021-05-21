import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Icon, Avatar } from 'rsuite'
import 'rsuite/dist/styles/rsuite-default.css'

const Header = (props) => {
    return (
        <React.Fragment>
            <div className="container-fluid header position-fixed l-0 r-0 t-0 pt-10 pb-10 shadow-sm" style={{ backgroundColor: 'white' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 ml-0 pl-0">
                            <NavLink to="/" style={{ textDecoration: 'none' }}>
                                <div className="d-flex align-items-center">
                                    <img src="/imgs/vitlogo.png" height="60px" width="60px" alt="" />
                                    <p className="ml-20" style={{ fontSize: '23px', color: '#2C3138', fontWeight: '600' }}>UNIV-BUS <span style={{ color: 'green' }}>SmartCity</span></p>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                <li>
                                    <NavLink to="/bus-ticket">Bus Ticket</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/get-free">Get Free Rides</NavLink>
                                </li>
                                <li>
                                    {
                                        props.isLoggedIn ? (
                                            <Button onClick={() => { props.menuOpen(); }} appearance="link" style={{ textDecoration: 'none' }}>
                                                <div className="d-flex">
                                                    <Avatar circle src="https://avatars2.githubusercontent.com/u/12592949?s=460&v=4" />
                                                    <div className="ml-10 d-flex flex-column align-items-start">
                                                        <h6 style={{ color: '#2C3138', fontWeight: 'bold' }}>Hi! Siddharth Kumar</h6>
                                                        <p style={{ color: '#2C3138', fontWeight: '500', fontSize: '13px' }}>18BCS0032</p>
                                                    </div>
                                                </div>
                                            </Button>
                                        ) : (<Button onClick={() => { props.open(); }} appearance="primary" style={{ color: 'white', backgroundColor: '#2c3e50', fontSize: '13px', fontWeight: '500', letterSpacing: '0.4px' }}><Icon icon="user" />&nbsp; Sign In</Button>)
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header
