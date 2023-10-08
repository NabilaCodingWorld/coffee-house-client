import React from 'react';

import cup1 from '../../assets/Rectangle 9.png'
import cup2 from '../../assets/Rectangle 10.png'
import cup3 from '../../assets/Rectangle 11.png'
import cup4 from '../../assets/Rectangle 12.png'
import cup5 from '../../assets/Rectangle 13.png'
import cup6 from '../../assets/Rectangle 14.png'
import cup7 from '../../assets/Rectangle 15.png'
import cup8 from '../../assets/Rectangle 16.png'

const TeaStall = () => {
    return (
        <div> <br />

            <center>
                <p>Follow Us Now</p>

                <h1 className='text-xl my-3'>Follow on Instagram</h1>
            </center>


            <div className='grid md:grid-cols-4 gap-5 my-10 md:mx-10'>
                <img src={cup1} alt="" />
                <img src={cup2} alt="" />
                <img src={cup3} alt="" />
                <img src={cup4} alt="" />
                <img src={cup5} alt="" />
                <img src={cup6} alt="" />
                <img src={cup7} alt="" />
                <img src={cup8} alt="" />
            </div>
        </div>
    );
};

export default TeaStall;