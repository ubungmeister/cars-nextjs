/**
 * Interface representing the range and efficiency of a car under various conditions.
 */
export interface CarRange {
  /**
   * Name of the car unique
   */
  name: string;

  /**
   * Numbers between 1 and 0 meaning percentage of efficiency
   */
  partOfYear: {
    /**
     * Efficiency of the car in summer in percent
     */
    summer: number;

    /**
     * Efficiency of the car in autumn and spring in percent
     */
    autumn: number;

    /**
     * Efficiency of the car in winter in percent
     */
    winter: number;
  };

  /**
   * Numbers between 1 and 0 meaning percentage of efficiency on different place
   */
  typeOfRoad: {
    /**
     * Efficiency of the car in city in percent
     */
    city: number;

    /**
     * Efficiency of the car outside city in percent
     */
    outsideCity: number;

    /**
     * Efficiency of the car on highway in percent
     */
    highway: number;
  };

  /**
   * Numbers between 1 and 0 meaning percentage of efficiency on different driving style
   */
  drivingStyle: {
    /**
     * Efficiency of the car when driver is driving like a snail
     */
    snail: number;

    /**
     * Efficiency of the car when driver is a normal law abiding citizen
     */
    normal: number;

    /**
     * Efficiency of the car when driver is driving like a maniac
     */
    aggressive: number;
  };

  /**
   * Full range of the car in km
   */
  fullRange: number;

  /**
   * Consumption of the car when heating is on on MAX in KM
   */
  heatingConsumption: number;

  /**
   * Consumption of the car when cooling is on on MAX in KM
   */
  coolingConsumption: number;

  /**
   * Image source location
   */
  imgSrc: string;
}
