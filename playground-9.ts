/* [AI] EXTENDING TYPES */

type Car = {
  name: string;
};

type RaceCar = {
  speed: number;
} & Car & { acceleration: string };

export default function play9() {
  const car: RaceCar = {
    name: "My Car",
    speed: 100,
    acceleration: "Km",
  };

  function logCar(car: Car) {
    // console.log(car);
  }
  logCar(car);
}
