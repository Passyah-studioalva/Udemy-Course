/* [AI] UNIONS */

/* 
Union types are used when a value can be more than a single type.
*/

type RaceCar = {
  series: string;
  maxSpeed: number;
};

type CityCar = {
  series: number;
  space: string;
};

type Car = RaceCar | CityCar;

export default function play10() {
  const details: Car = {
    series: 124489,
    maxSpeed: 1600,
    space: "6 passengers",
  };

  function logCarInfo(car: Car) {
    // console.log(car);
  }
  logCarInfo(details);
}
