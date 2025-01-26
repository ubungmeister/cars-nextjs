import React from 'react';
import {Car} from  "./Car"
import {filterData} from "../utils/carsValidation"
import {CarRange} from "@/types/EVTools"    

type  CarsProps = {
    cars:CarRange[]
}

export const CarList = ({cars}:CarsProps) => {
      const validCars = filterData(cars)
         return (
            <div className="car-list">
                {validCars.map((car:CarRange)=>{
                    return <Car key={car.name} car={car}/>
                })}
            </div>
        );
};

 