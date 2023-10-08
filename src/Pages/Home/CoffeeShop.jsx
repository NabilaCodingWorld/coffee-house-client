import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';
import { useLoaderData } from 'react-router-dom';

const CoffeeShop = () => {

    const loadedCoffee = useLoaderData();

    const [cafin, setCafin] = useState(loadedCoffee);

    return (
        <div className='grid md:grid-cols-2 gap-10 mx-10 my-20'>
            {
                cafin.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} cafin={cafin} setCafin={setCafin} ></CoffeeCard>)
            }
        </div>
    );
};

export default CoffeeShop;