import React from 'react';
import img from '../../assets/6.jpeg';
import pic1 from '../../assets/1.png'
import pic2 from '../../assets/2.png'
import pic3 from '../../assets/3.png'
import pic4 from '../../assets/4.png'


const Banner = () => {
    return (
        <div>
            <div className="hero h-[500px]" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-2xl font-bold" style={{fontFamily: 'cursive'}}>Would you like a Cup of Delicious Coffee?</h1>
                        <p className="mb-5">t's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                        <button className="btn bg-[#E3B577]">Learn More</button>
                    </div>
                </div>
            </div>

            <div className='bg-slate-300 grid md:grid-cols-4 gap-5 md:pl-24 py-10'>

                <div>
                    <img src={pic1} alt="" />
                    <h1 className='my-3 text-xl font-bold'>Awesome Aroma</h1>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>

                <div>
                    <img  src={pic2} alt="" />
                    <h1  className='my-3 text-xl font-bold'>High Quality</h1>
                    <p>We served the coffee to you maintaining the best quality</p>
                </div>

                <div>
                    <img src={pic3} alt="" />
                    <h1  className='my-3 text-xl font-bold'>Pure Grades</h1>
                    <p>The coffee is made of the green coffee beans which you will love</p>
                </div>

                <div>
                    <img  src={pic4} alt="" />
                    <h1 className='my-3 text-xl font-bold'>Proper Roasting</h1>
                    <p>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>

            </div>
        </div>
    );
};

export default Banner;
