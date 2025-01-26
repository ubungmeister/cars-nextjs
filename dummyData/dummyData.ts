import { CarRange } from "../types/EVTools";

export const evRangeData: CarRange[] = [
  {
    name: "Tesla Model 3",
    partOfYear: {
      summer: 1,
      autumn: 0.9,
      winter: 0.8,
    },
    typeOfRoad: {
      city: 1,
      outsideCity: 0.75,
      highway: 0.45,
    },
    drivingStyle: {
      snail: 1,
      normal: 0.9,
      aggressive: 0.35,
    },
    fullRange: 500,
    heatingConsumption: 50,
    coolingConsumption: 50,
    imgSrc: "/cars/Tesla.jpeg",
  },
  {
    name: "Nissan Leaf",
    partOfYear: {
      summer: 1,
      autumn: 0.83,
      winter: 0.7,
    },
    typeOfRoad: {
      city: 1,
      outsideCity: 0.73,
      highway: 0.32,
    },
    drivingStyle: {
      snail: 1,
      normal: 0.8,
      aggressive: 0.21,
    },
    fullRange: 300,
    heatingConsumption: 30,
    coolingConsumption: 30,
    imgSrc: "/cars/Nissan.jpg",
  },
  {
    name: "BMW i3",
    partOfYear: {
      summer: 1,
      autumn: 0.85,
      winter: 0.75,
    },
    typeOfRoad: {
      city: 1,
      outsideCity: 0.8,
      highway: 0.4,
    },
    drivingStyle: {
      snail: 1,
      normal: 0.85,
      aggressive: 0.3,
    },
    fullRange: 400,
    heatingConsumption: 40,
    coolingConsumption: 40,
    imgSrc: "/cars/BMW.jpg",
  },
  {
    name: "Renault Zoe",
    partOfYear: {
      summer: 1,
      autumn: 0.9,
      winter: 0.8,
    },
    typeOfRoad: {
      city: 1,
      outsideCity: 0.75,
      highway: 0.25,
    },
    drivingStyle: {
      snail: 1,
      normal: 0.7,
      aggressive: 0.2,
    },
    fullRange: 350,
    heatingConsumption: 35,
    coolingConsumption: 35,
    imgSrc: "/cars/Renault.webp",
  },
  {
    name: "Volkswagen ID.3",
    partOfYear: {
      summer: 1,
      autumn: 0.9,
      winter: 0.8,
    },
    typeOfRoad: {
      city: 1,
      outsideCity: 0.8,
      highway: 0.4,
    },
    drivingStyle: {
      snail: 1,
      normal: 0.85,
      aggressive: 0.3,
    },
    fullRange: 450,
    heatingConsumption: 45,
    coolingConsumption: 45,
    imgSrc: "/cars/VW.webp",
  },
  {
    //@ts-expect-error intentionaly broken data
    name: ["false"],
    partOfYear: {
      //@ts-expect-error intentionaly broken data
      summer: false,
      //@ts-expect-error intentionaly broken data
      autumn: "nein",
      //@ts-expect-error intentionaly broken data
      winter: "urgh",
    },
    typeOfRoad: {
      //@ts-expect-error intentionaly broken data
      city: "ddd",
      //@ts-expect-error intentionaly broken data
      outsideCity: false,
      //@ts-expect-error intentionaly broken data
      highway: {},
    },
    drivingStyle: {
      //@ts-expect-error intentionaly broken data
      snail: "12",
      //@ts-expect-error intentionaly broken data
      normal: [],
      //@ts-expect-error intentionaly broken data
      aggressive: "aaa",
    },
    fullRange: 450,
    heatingConsumption: 45,
    coolingConsumption: 45,
    imgSrc: "/cars/Flinstone.jpg",
  },
];
