/* [AI] Custom Generic Type */

/* Example 1 */
// class Logger {
//   log(items: Array<string>, callback: any) {
//     items.forEach((item) => {
//       // debugger;
//       callback(item);
//     });
//   }
// }

/* Example 2 */
class Logger<T> {
  log(items: Array<T>, callback: (i: T) => void) {
    items.forEach((item) => {
      // debugger;
      callback(item);
    });
  }
}

interface Person {
  name: string;
  age: number;
}

export default function play21() {
  // * STRING
  /* Example 1 */
  // const logger = new Logger();
  /* Example 2 */
  const logger = new Logger<string>();
  const cars = ["audi", "mitsubitsi", "toyota"];
  // debugger;

  // /* Example 1 */
  // logger.log(cars, (car: any) => {
  // debugger;
  //   console.log(car);
  // });

  // /* Example 2 */
  logger.log(cars, (car) => {
    // debugger;
    // console.log(car.toUpperCase());
  });

  // -------------------------------------------------------------
  // * NUMBERS
  const logger2 = new Logger<number>();
  const numbers = [1, 2, 3, 4, 5, 6];

  logger2.log(numbers, (num) => {
    // console.log(num);
  });

  // * OBJECT
  const logger3 = new Logger<Person>();
  const persons = [{
    name: "Passyah",
    age: 23
  },
  {
    name: "Lesya",
    age: 4
  }]

  logger3.log(persons, (item) => {
    // console.log(item);
  });
}
