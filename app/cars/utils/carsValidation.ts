import {z} from 'zod'
import {CarRange} from '@/types/EVTools'

const carSchema = z.object({
    name: z.string(),
    partOfYear: z.object({
        summer: z.number(),
        autumn: z.number(),
        winter: z.number(),
      }),
    typeOfRoad: z.object({
        city: z.number(),
        outsideCity: z.number(),
        highway: z.number(),
      }),
    drivingStyle: z.object({
        snail: z.number(),
        normal: z.number(),
        aggressive: z.number(),
      }),
    fullRange: z.number(),
    heatingConsumption: z.number(),   
    coolingConsumption: z.number(),
    imgSrc: z.string(),
})

export const filterData =(data:CarRange[])=>{
    const result = data.filter((car)=>{
        const validCar = carSchema.safeParse(car)
        return validCar.success
    })
    return result
}