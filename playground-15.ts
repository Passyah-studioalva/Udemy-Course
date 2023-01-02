/* [AI] NEVER USAGE */

type RaceCar = {
  name: string;
  maxSpeed: 200;
  team: string;
};

type CityCar = {
  name: number;
  maxSpeed: 100;
  space: string;
};

type SUVCar = {
  name: string;
  maxSpeed: 95;
  isCarbonFree: boolean;
};

type Car = RaceCar | CityCar | SUVCar;

export default function play15() {
  const car: SUVCar = {
    name: "Race Car",
    maxSpeed: 95,
    isCarbonFree: true,
  };

  function logCarInfo(car: Car) {
    switch (car.maxSpeed) {
      case 200:
        // console.log(car.team);
        break;
      case 100:
        // console.log(car);
        break;
      case 95:
        // console.log(car.isCarbonFree);
        break;
      default:
        const _never: never = car;
        return _never;
    }
  }
  logCarInfo(car);
}
