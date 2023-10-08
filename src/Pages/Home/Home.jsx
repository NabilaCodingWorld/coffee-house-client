import React, { useState } from 'react';
import Banner from './Banner';
import TeaStall from './TeaStall';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const loadedCoffee = useLoaderData();

    const [cafin, setCafin] = useState(loadedCoffee);

    return (
        <div>
            <Banner></Banner>
            <div className='grid md:grid-cols-2 gap-10 mx-10 my-20'>
            {
                cafin.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} cafin={cafin} setCafin={setCafin} ></CoffeeCard>)
            }
        </div>
            <TeaStall></TeaStall>
        </div>
    );
};

export default Home;