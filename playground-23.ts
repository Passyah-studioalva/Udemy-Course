/* [AI] Default Values Of Generics */

interface Person {
  name: string;
  age: number;
  city: string;
}

class BussinessPerson implements Person {
  name = "";
  age = 0;
  city = "";
  salary = 1000;
}

type Car = {
  brand: string;
  age: number;
  name: string;
  city: string;
};

class Logger<T extends Person = Car> {
  log(items: Array<T>, callback: (i: T) => void) {
    items.forEach((item) => {
      // debugger;
      callback(item);
    });
  }
}

export default function play23() {
  const logger = new Logger();
  const persons = [
    {
      name: "Passyah",
      age: 23,
      city: "Jakarta",
      salary: 0,
      brand: "",
    },
    {
      name: "Lesya",
      age: 4,
      city: "Bandung",
      salary: 0,
      brand: "",
    },
  ];

  logger.log(persons, (person) => {
    // console.log(person);
  });
}
