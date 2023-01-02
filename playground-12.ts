/* [AI] TYPE CASTING */

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

type Car = RaceCar | CityCar;

export default function play12() {
  const car: RaceCar = {
    name: "Race Car",
    maxSpeed: 200,
    team: "ferari",
  };

  function logCarInfo(car: Car) {
    /* Example syntax 1.1 */
    // console.log((car as RaceCar).team);
    /* Example syntax 1.2 */
    // console.log((<RaceCar>car).team);
    /* Example syntax 2.1 */
    // console.log((car as CityCar).space);
    /* Example syntax 2.2 */
    // console.log((<CityCar>car).space);

    switch (car.maxSpeed) {
      case 200:
        // console.log(car.team);
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
