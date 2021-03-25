import React from 'react'
import { NavLink } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser';

const terms = [
    {
        'title': 'Your Account',
        'desc': 'If you use the website or app, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer or smartphone to prevent unauthorised access to your account. You agree to accept responsibility for all activities that occur under your account or password. You should take all necessary steps to ensure that the password is kept confidential and secure and should inform us immediately if you have any reason to believe that your password has become known to anyone else, or if the password is being, or is likely to be, used in an unauthorised manner. Please ensure that the details you provide us with are correct and complete and inform us immediately of any changes to the information that you provided when registering. You agree and acknowledge that you will use your account on the website to purchase products only for your personal use and not for business purposes. RailYatri and IntrCity reserves the right to refuse access to the website, terminate accounts, remove or edit content at any time without notice to you.',
    },
    {
        'title': 'Privacy Policy',
        'desc': 'This section shall be construed as the Privacy Policy of RailYatri and IntrCity with respect to handling and dealing of personal information or sensitive information of its Customers/Users as required under Rule 4 of the Information Technology (Reasonable security practices and procedures and sensitive personal data or information) Rules, 2011 (Hereinafter referred to as the “Rules”)<br/><br/> RailYatri and IntrCity does not collect or store any Sensitive Personal Data as defined under Rule 3 of the Rules, of its Users/Customers. All passwords are stored in an encrypted form.<br/><br/> By using the platforms, you agree and consent to RailYatri / IntrCity collecting and storing your personal data and information such as name, gender, age, address, location, e-mail addresses, landline and mobile phone numbers, dietary preferences, purchase history, transactional history etc. for the purposes of providing better services and targeted advertisement or for the provision of any lawful purpose connected with the functions or activities of platforms. We may also share your personal data with any third party, agents, affiliates etc and monetize the same also. If you object to your information being stored, transferred, used or processed by platforms or any third party, agents, affiliates etc, please do not use the website. RailYatri / IntrCity reserves the absolute right to not provide you any service or goods in case of your refusal to share your personal information. <br/><br/> You may contact us in order to correct any incorrect, inaccurate or deficient personal data or information collected by us in order to correct the same.<br/><br/> If you wish to withdraw your consent given to RailYatri / IntrCity to collect and store your personal data, you may write to us at feedback@railyatri.in  with respect to the same.<br/><br/>If you have any concerns or grievances with respect to your personal information please contact the Privacy Grievance Officer namely Swapnil Tripathi, feedback@railyatri.in, address: Amco Tower, Plot No A - 5, 6 & 7, Sector 9, Noida, Uttar Pradesh 201301.',
    },
    {
        'title': 'Access to Platforms',
        'desc': 'We will do our utmost to ensure that availability of the website and app will be uninterrupted and that transmissions will be error-free. However, due to the nature of the Internet, this cannot be guaranteed. Also, your access to the website or app may also be occasionally suspended or restricted to allow for repairs, maintenance, or the introduction of new facilities or services at any time without prior notice. We will attempt to limit the frequency and duration of any such suspension or restriction.',
    },
    {
        'title': ' Bus Ticket Bookings (Other than Intrcity Smartbus)',
        'desc': 'User agrees and understands that RailYatri is only a bus ticketing intermediary and does not own/operate bus services of its own. In order to provide a comprehensive choice of bus operators, departure times and prices to customers; RailYatri has tied up with different bus aggregators on a Principal to Principal basis (“Service Providers”).<br/><br/>User agrees and understands that RailYatri does not assume any liability with respect to the quality, punctuality, amenities, safety or cancellation of any bus related service which shall rest solely with the Bus Operator. RailYatri shall also not be liable for any act of theft, lost or stolen luggage/belongings of the User/Passenger while using the bus service. RailYatri shall not be responsible for any incidental, indirect, special or consequential loss or damage including loss of profit, business loss, revenue loss, goodwill loss or loss of anticipated savings incurred or suffered by any User/Passenger out of use of any service offered by RailYatri, whether such liability arises in tort, contracts, breach of warranty or otherwise.'
    },
    {
        'title': ' IntrCity SmartBus Ticket booking',
        'desc': 'User agrees and understands that INODRAILBUS provides a platform to the operator for the purpose of providing the services to the users.<br/><br/> The liability in relation to the use of Intrcity Smartbus service shall be limited to conditions as mentioned in Clause 3.'
    },
    {
        'title': 'Hotel Room Bookings',
        'desc': 'User agrees and understands that the User may be asked to furnish a copy of the Hotel Room booking receipt; (either in original, copy or SMS), Identity proof at the time of check-in. Failure to comply may result in denial of service.<br/><br/> In case, the hotel operator or aggregator changes the type/class of room due to any reason, Service Provider will refund the differential amount to the User upon being intimated within 48 hours of such intimation. However, such intimation must be made by the User immediately.'
    },
]

const Terms = () => {
    return (
        <React.Fragment>
            <div className="container-fluid pt-10 pb-10 bg-white shadow-sm" style={{ zIndex: '10', position: 'fixed', left: '0px', right: '0px', top: '0px' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 ml-0 pl-0">
                            <NavLink to="/" style={{ textDecoration: 'none' }}>
                                <div className="d-flex align-items-center">
                                    <img src="/imgs/vitlogo.png" height="60px" width="60px" alt="" />
                                    <p className="ml-20" style={{ fontSize: '23px', color: '#2C3138', fontWeight: '600' }}>VitCity <span style={{ color: 'green' }}>SmartCity</span></p>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-90">
                <h4 className="text-center" style={{ color: '#2C3138', fontWeight: 'bold' }}>Terms and Conditions</h4>
                <hr />
                <p className="mt-30" style={{ color: 'rgba(0,0,0,0.5)', fontSize: '13px', fontWeight: '500' }}>
                    ‘Terms and Conditions of Use’ and ‘Terms and Conditions of Sale’<br /><br />
                    Welcome to RailYatri.in and VitCity.com<br /><br />
                    Stelling Technologies Private Limited and IndoRailBus Travel Private Limited provides access to the RailYatri.in & VitCity.com website along with RailYatri & VitCity smartphone app (the "website" or “app”) to You, subject to the conditions set out on this page. Together website and apps are termed as platforms.<br /><br />
                    Please read these conditions carefully before using the website and app. By using the RailYatri and VitCity platforms, you signify your agreement to be bound by these conditions.<br /><br />
                    The Terms and Conditions of Use is a legal contract between you being, an individual or corporate customer, user, or beneficiary of this service, and Stelling Technologies Private Limited (RailYatri) and IndoRailBus Travel Private Limited (VitCity), both having its registered office at Amco Towers, A -5,6,7, Amaltash Marg, A Block, Sector 9, Noida, Uttar Pradesh 201301 (RailYatri).<br /><br />
                    The Terms and Conditions of Sale is a legal bipartite contract between You being, an individual or corporate customer, user, or beneficiary of this service, and the Service Provider/Vendor in question only and excludes RailYatri / InterCity.<br /><br />
                    In addition, when you use any current or future RailYatri.in service, you may also be subject to such additional terms, guidelines and conditions applicable to that RailYatri / VitCity Service. If these Conditions of Use are inconsistent with such additional Terms, the additional Terms shall  prevail over these term and conditions.<br /><br />
                    Mere browsing or Use of the website in any manner will be subject to the terms and conditions provided herein. If terms and conditions are not acceptable to You, You are advised not to use this site. These Terms & Conditions are subject to modification by the Company without any prior intimation and approval from You. of platforms will mean you accept those changes. The contents of platforms and its allied sites, such as text, graphics, images, information obtained from platforms and its allied sites' licensors and other material ("Content") contained on platforms and its allied sites is for informational purposes only. The Content is not intended to be a substitute for professional travel or train-related advice.<br /><br />
                    These "Terms and Conditions of Use/Sale" constitute an electronic record within the meaning of the applicable law. This electronic record is generated by a computer system and does not require any physical or digital signatures.<br /><br />
                </p>
                {
                    terms.map((data) => {
                        return <div className="mt-30">
                            <p style={{ color: 'black', fontSize: '15px', fontWeight: 'bold' }}>{(terms.indexOf(data) + 1) + ". " + ReactHtmlParser(data.title)}</p>
                            <p style={{ color: 'rgba(0,0,0,0.5)', fontSize: '14px', fontWeight: '600' }}>{ReactHtmlParser(data.desc)}</p>
                        </div>
                    })
                }
            </div>
        </React.Fragment>
    )
}

export default Terms
