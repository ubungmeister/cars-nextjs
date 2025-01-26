import React from 'react';
import { CarList } from './components/CarList';

const data = async() => {
    const res = await fetch('http://localhost:3000/api/cars');
    const data = await res.json();
    return data;
}

const page = async() => {

    try{
        const cars = await data();
        return (
            <div>
            <CarList cars={cars}/>
            </div>
        );
    }catch(error){
        console.log(error);
        return <div>Failed to load</div>
    }
};
export default page;