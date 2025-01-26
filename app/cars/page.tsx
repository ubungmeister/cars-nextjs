import React from 'react';
import { CarList } from './components/CarList';
 
const data = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL  
    const res = await fetch(`${baseUrl}/api/cars`);
    if (!res.ok) throw new Error('Failed to fetch data');
    const data = await res.json();
    return data;
};
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