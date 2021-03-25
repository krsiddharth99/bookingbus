import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import BusTicket from './Pages/BusTicket';
import About from './Pages/About.jsx';
import BusHire from './Pages/BusHire.jsx';
import Contact from './Pages/Contact.jsx';
import FAQ from './Pages/FAQ.jsx';
import GetFree from './Pages/GetFree.jsx';
import MyBooking from './Pages/MyBooking.jsx';
import Offers from './Pages/Offers.jsx';
import Terms from './Pages/Terms.jsx';
import { Drawer, Button, Input, InputGroup, Icon, Avatar } from 'rsuite';

function App() {
  const [isLoggedIn, setLogin] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [menu, setMenu] = React.useState(false);

  /************************************* OPEN/CLOSE LOGIN DRAWER **********************************/

  function open() {
    setShow(true);
  }
  function close() {
    setShow(false);
  }

  /****************************************** LOGIN CHANGE ****************************************/

  function login() {
    setLogin(true);
  }
  function logout() {
    setLogin(false);
  }

  /****************************************** MENU DRAWER ****************************************/

  function menuOpen() {
    setMenu(true);
  }
  function menuClose() {
    setMenu(false);
  }

  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact render={(props) => <Home open={open} isLoggedIn={isLoggedIn} menuOpen={menuOpen} />} />
          <Route path="/about" exact render={(props) => <About open={open} isLoggedIn={isLoggedIn} menuOpen={menuOpen} />} />
          <Route path="/bus-hire" exact render={(props) => <BusHire />} />
          <Route path="/bus-ticket" exact render={(props) => <BusTicket open={open} isLoggedIn={isLoggedIn} menuOpen={menuOpen} />} />
          <Route path="/contact-us" exact render={(props) => <Contact open={open} isLoggedIn={isLoggedIn} menuOpen={menuOpen} />} />
          <Route path="/faq" exact render={(props) => <FAQ open={open} isLoggedIn={isLoggedIn} menuOpen={menuOpen} />} />
          <Route path="/get-free" exact render={(props) => <GetFree />} />
          <Route path="/my-booking" exact render={(props) => <MyBooking />} />
          <Route path="/offers" exact render={(props) => <Offers open={open} isLoggedIn={isLoggedIn} menuOpen={menuOpen} />} />
          <Route path="/terms-and-conditions" exact render={(props) => <Terms />} />
        </Switch>
        {
          /************************************************************************************************/
          /************************************************************************************************/
          /************************************* LOGIN DRAWER *********************************************/
          /************************************************************************************************/
          /************************************************************************************************/
        }
        <Drawer show={show} onHide={close}>
          <Drawer.Header>
            <Drawer.Title>
              <div className="d-flex align-items-center justify-content-center">
                <img src="/imgs/vitlogo.png" height="50px" width="50px" alt="vitlogo" />
                <p className="ml-20" style={{ fontSize: '24px', color: '#2C3138', fontWeight: '600' }}>VitCity <span style={{ color: 'green' }}>SmartCity</span></p>
              </div>
            </Drawer.Title>
          </Drawer.Header>
          <Drawer.Body>
            <div className="container pl-50 pr-50 pt-50 pb-30" style={{ backgroundColor: 'rgba(0,0,0,0.08)', borderRadius: '10px' }}>
              <img src="/imgs/bus.svg" alt="bus svg" height="170px" width="450px" />
              <p className="mt-20" style={{ color: '#2C3138', fontWeight: 'bold' }}>Vit Student Login</p>
              <InputGroup className="mb-10 mt-20" inside>
                <Input placeholder="Registration Number" />
                <InputGroup.Addon>
                  <Icon icon="user" />
                </InputGroup.Addon>
              </InputGroup>
              <InputGroup className="mb-10" inside >
                <Input placeholder="Password" />
                <InputGroup.Button>
                  <Icon icon="eye" />
                </InputGroup.Button>
              </InputGroup>
              <Button onClick={() => { login(); close(); }} className="w-100" appearance="primary" style={{ backgroundColor: '#2C3138', fontWeight: 'bold', letterSpacing: '0.6px' }}>LOGIN</Button>
            </div>
          </Drawer.Body>
          <Drawer.Footer>
            <Button onClick={close} appearance="subtle" style={{ backgroundColor: 'red', color: 'white', fontWeight: '500', fontSize: '12px', letterSpacing: '0.6px' }}>Cancel</Button>
          </Drawer.Footer>
        </Drawer>
        {
          /************************************************************************************************/
          /************************************************************************************************/
          /************************************* MENU DRAWER **********************************************/
          /************************************************************************************************/
          /************************************************************************************************/
        }
        <Drawer placement="left" show={menu} onHide={menuClose} size="xs" >
          <Drawer.Header>
            <Drawer.Title>
              <div className="d-flex">
                <Avatar circle src="https://avatars2.githubusercontent.com/u/12592949?s=460&v=4" />
                <div className="ml-10">
                  <h6 style={{ color: '#2C3138', fontWeight: 'bold' }}>Hi! Siddharth Kumar</h6>
                  <p style={{ color: '#2C3138', fontWeight: '500', fontSize: '13px' }}>18BCS0032</p>
                </div>
              </div>
            </Drawer.Title>
          </Drawer.Header>
          <Drawer.Body className="menu-drawer">
            <div className="d-flex align-items-center justify-content-between pt-10 pb-10 pl-10 pr-10" style={{ backgroundColor: '#2C3138', borderRadius: '10px' }}>
              <div className="">
                <p style={{ color: 'white', fontWeight: '500', fontSize: '11px' }}>My Wallet</p>
                <h6 style={{ color: 'white', fontWeight: 'bold', letterSpacing: '0.3px' }}>₹ 50.00</h6>
              </div>
              <img src="/imgs/wallet.png" alt="Wallet image" height="50px" width="60px" />
            </div>
            <ul className="mt-20">
              <li>
                <NavLink onClick={() => { menuClose(); }} to="/my-booking">
                  <div className="d-flex align-items-center">
                    <img src="/imgs/my-order.png" alt="my order" height="26px" width="26px" />
                    <p className="ml-10" style={{ color: '#2C3138', fontWeight: '700', fontSize: '15px' }}>My Wallet</p>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink onClick={() => { menuClose(); }} to="/get-free">
                  <div className="d-flex align-items-center">
                    <img src="/imgs/free-ride.png" alt="my order" height="26px" width="26px" />
                    <p className="ml-10" style={{ color: '#2C3138', fontWeight: '700', fontSize: '15px' }}>Free Ride</p>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink onClick={() => { menuClose(); }} to="/offers">
                  <div className="d-flex align-items-center">
                    <img src="/imgs/gift.png" alt="my order" height="26px" width="26px" />
                    <p className="ml-10" style={{ color: '#2C3138', fontWeight: '700', fontSize: '15px' }}>Offers</p>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink onClick={() => { menuClose(); }} to="/bus-hire">
                  <div className="d-flex align-items-center">
                    <img src="/imgs/bus-hire.png" alt="my order" height="26px" width="26px" />
                    <p className="ml-10" style={{ color: '#2C3138', fontWeight: '700', fontSize: '15px' }}>Bus Hire</p>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink onClick={() => { menuClose(); }} to="/about">
                  <div className="d-flex align-items-center">
                    <img src="/imgs/about-us.png" alt="my order" height="26px" width="26px" />
                    <p className="ml-10" style={{ color: '#2C3138', fontWeight: '700', fontSize: '15px' }}>About us</p>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink onClick={() => { menuClose(); }} to="/contact-us">
                  <div className="d-flex align-items-center">
                    <img src="/imgs/contact-us.png" alt="my order" height="26px" width="26px" />
                    <p className="ml-10" style={{ color: '#2C3138', fontWeight: '700', fontSize: '15px' }}>Contact Us</p>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink onClick={() => { menuClose(); }} to="/faq">
                  <div className="d-flex align-items-center">
                    <img src="/imgs/faq.png" alt="my order" height="26px" width="26px" />
                    <p className="ml-10" style={{ color: '#2C3138', fontWeight: '700', fontSize: '15px' }}>FAQ</p>
                  </div>
                </NavLink>
              </li>
              <li>
                <Button onClick={() => { menuClose(); logout(); }} className="w-100" appearance="link" style={{ textDecoration: 'none' }}>
                  <div className="d-flex align-items-center">
                    <Icon icon="sign-out" size="2x" style={{ color: 'rgba(0,0,0,0.4)' }} />
                    <p className="ml-10" style={{ color: '#2C3138', fontWeight: '700', fontSize: '15px' }}>Logout</p>
                  </div>
                </Button>
              </li>
            </ul>
          </Drawer.Body>
        </Drawer>
      </Router>
    </React.Fragment>
  );
}

export default App;
