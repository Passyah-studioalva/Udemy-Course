/* [AI] UNIONS NARROWING */

type RaceCar = {
  name: string;
  maxSpeed: 200;
  team: string;
};

type CityCar = {
  name: number;
  maxSpeed: 100;
  team: string;
};

type Car = RaceCar | CityCar;

export default function play11() {
  const car: RaceCar = {
    name: "Race Car",
    maxSpeed: 200,
    team: "ferari",
  };

  function logCarInfo(car: Car) {
    // console.log(car.name);

    switch (car.maxSpeed) {
      case 200:
        // console.log(`max speed ${car.maxSpeed}`);
        break;
      case 100:
        // console.log(car);
        break;
      default:
        // console.log(car);
    }
  }
  logCarInfo(car);
}
