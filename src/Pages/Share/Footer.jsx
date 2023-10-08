import React from 'react';
import footer from '../../assets/10.png'
import icon from '../../assets/logo1.png'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div> <br />
            <div className="hero " style={{ backgroundImage: `url(${footer})` }}>

                <div className="hero-content  text-neutral-content">

                    <dir>
                        <center>
                            <img className='w-10' src={icon} alt="" />
                            <h1 className='text-2xl text-black my-5'>Espresso Emporium</h1>
                            <p className='text-black'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>

                            <div className='flex gap-5 my-5'>
                                <FaFacebook className='text-blue-700 h-6 w-6'></FaFacebook>
                                <FaTwitter className='text-blue-700 h-6 w-6'></FaTwitter>
                                <FaInstagram className='text-blue-700 h-6 w-6'></FaInstagram>
                                <FaLinkedin className='text-blue-700 h-6 w-6'></FaLinkedin>
                            </div>

                        </center>
                    </dir>

                   
                </div>
            </div>

        </div>
    );
};

export default Footer;