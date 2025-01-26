import React from 'react';
import {CarRange} from '@/types/EVTools'
import Image from 'next/image';

type CarProps = {
    car: CarRange
}

export const Car = ({car}: CarProps) => {
    return (
        <div className="car-container">
            <div className="w-[300px] h-[200px] mx-auto">
            <Image src={car.imgSrc} alt={car.name} width={300} height={200}/>
            </div>
            <h2 className="text-center text-[18px] italic">{car.name}</h2>
            <div className="car-section ">
            <p className="font-semibold">Part of the year</p>
            <p>Summer: {car.partOfYear.summer}</p>
            <p>Autumn city: {car.partOfYear.autumn}</p>
            <p>Winter: {car.partOfYear.winter}</p>
            </div>
            <div className="car-section ">
            <p className="font-semibold">Type of the Road</p>
            <p>City: {car.typeOfRoad.city}</p>
            <p>Outide city: {car.typeOfRoad.outsideCity}</p>
            <p>Highway: {car.typeOfRoad.highway}</p>
            </div>
            <div className="car-section ">
            <p className="font-semibold">Driving style</p>
            <p>Normal: {car.drivingStyle.normal}</p>
            <p>Snail city: {car.drivingStyle.snail}</p>
            <p>Aggressive: {car.drivingStyle.aggressive}</p>
            </div>
            <div className="car-section mb-4">
            <p className="font-semibold">Additional info:</p>
            <p>Full range: {car.fullRange}</p>
            <p>Heating: {car.heatingConsumption}</p>
            <p>Cooling: {car.coolingConsumption}</p>
            </div>
        </div>
    );
};

 