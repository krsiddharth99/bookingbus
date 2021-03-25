import React from 'react'
import { useHistory } from 'react-router-dom'
import { Panel, Input, InputGroup, Icon, Alert } from 'rsuite'

const referal = [
    {
        'imgUrl': '/imgs/referal/1.png',
        'description': 'Share your referral code with your friends',
    },
    {
        'imgUrl': '/imgs/referal/2.png',
        'description': 'Your friend downloads the app and gets a free ride on VitCity SmartBus',
    },
    {
        'imgUrl': '/imgs/referal/3.png',
        'description': 'Your friend completes the ride and you get a free IntrCity SmartBus ride. Enjoy your ride!',
    },
    {
        'imgUrl': '/imgs/referal/4.png',
        'description': 'Share more to get more free rides on IntrCity SmartBus on 30+ routes across India',
    },
];

const terms = [
    {
        "data": 'Only signed in users who have verified their phone number through OTP will be eligible for free rides'
    },
    {
        "data": 'Free ride is valid only on IntrCity SmartBus'
    },
    {
        "data": 'The maximum discount for one free ride is ₹200'
    },
    {
        "data": 'There is no limit for the number of free rides you can avail through sharing'
    },
    {
        "data": 'Free ride will only be available when you refer a new user'
    },
]
const style = {
    borderRadius: '40px',
    height: '45px',
    backgroundColor: 'rgba(46, 204, 113,0.1)',
    color: 'black',
    fontWeight: '600',
    cursor: 'pointer',
}
function copyText() {
    var copyText = document.getElementById("coupon");
    copyText.select();
    // copyText.setSelectionRange(0, 99999);
    document.execCommand('copy');
    Alert.success('Successfully copied the coupon code');
}

const GetFree = () => {
    const history = useHistory();
    return (
        <React.Fragment>
            <div className="container" style={{ paddingLeft: '25%', paddingRight: '25%' }}>
                <div style={{ height: '450px', backgroundImage: 'url("/imgs/refer-bg.png")', backgroundSize: '100% 100%' }}>
                    <img onClick={() => { history.push("/bus-ticket"); }} style={{ cursor: 'pointer' }} className="mt-20 ml-20" src="/imgs/referal/back.png" height="15px" width="15px" alt="back" />
                    <img className="d-flex justify-content-center align-items-center" style={{ marginLeft: '180px' }} src="/imgs/vitlogo.png" height="100px" width="100px" alt="" />
                    <div className="mt-30 d-flex align-items-center" style={{ marginLeft: '150px' }}>
                        <Icon icon="map-marker" size="2x" style={{ color: 'white' }} />
                        <p className="ml-10" style={{ color: 'white', fontSize: '20px' }}><span style={{ fontFamily: 'Dancing Script !important' }}>VitCity</span> SmartBus</p>
                    </div>
                </div>
                <p className="text-center mt-20 mb-20 text-secondary" style={{ fontWeight: '600', fontSize: '14px' }}>Share your referral code with your friends & enjoy SmartBus rides absolutely free</p>
                <InputGroup onClick={copyText} inside style={style}>
                    <Input type="text" id="coupon" style={style} defaultValue="FREERIDE" value="FREERIDE" placeholder="FREERIDE" />
                    <InputGroup.Addon style={{ borderRadius: '40px', marginRight: '10px', height: '40px', width: '40px' }}>
                        <Icon icon="copy-o" size="1x" style={{ color: 'black', fontSize: '20px' }} />
                    </InputGroup.Addon>
                </InputGroup>
                <Panel className="mt-10" header="How to use it?" collapsible bordered>
                    {
                        referal.map((data) => {
                            return <div className="d-flex align-items-center mt-20">
                                <img src={data.imgUrl} height="90px" width="90px" alt="1" />
                                <p className="ml-30" style={{ color: 'black', fontWeight: '600', fontSize: '14px' }}>{data.description}</p>
                            </div>
                        })
                    }
                    <h5 className="mt-30" style={{ fontWeight: 'bold' }}>Terms & Conditions</h5>
                    <ul className="ml-30" style={{ listStyleType: 'disc' }}>
                        {
                            terms.map((d) => {
                                return <li className="mt-10" style={{ color: 'rgba(0,0,0,0.5)', fontWeight: "600" }}>{d.data}</li>
                            })
                        }
                    </ul>
                </Panel>
            </div>
        </React.Fragment>
    )
}

export default GetFree
