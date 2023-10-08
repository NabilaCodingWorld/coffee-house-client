import React from 'react';
import img from '../../assets/15.jpg'
import { Link } from 'react-router-dom';
import icon from '../../assets/logo1.png'

const Share = () => {

    const navOption = <>

     <Link to="/"><li><a className='hover:text-white'>Home</a></li></Link>

     <Link to = "/addCoffee"><li><a className='hover:text-white'>Add Coffee</a></li></Link>

     {/* <Link to = "/coffeeShop"><li><a className='hover:text-white'>Coffee Shop</a></li></Link> */}

    </>

    return (
        <div>

            <div className="hero" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">

                        <div className="navbar bg-transparent">
                            <div className="flex-1">
                                <a className="btn btn-ghost normal-case text-xl">
                                    <img className='w-10' src={icon} alt="" />
                                </a>
                            </div>
                            <div className="flex-none">
                                <ul className="menu menu-horizontal px-1">
                                    {navOption}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Share;