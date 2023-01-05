/* [AI] Generic Extends */

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

class Logger<T extends Person> {
  log(items: Array<T>, callback: (i: T) => void) {
    items.forEach((item) => {
      // debugger;
      callback(item);
    });
  }
}

export default function play22() {
  const logger = new Logger<BussinessPerson>();
  const persons = [
    {
      name: "Passyah",
      age: 23,
      city: "Jakarta",
      salary: 0,
    },
    {
      name: "Lesya",
      age: 4,
      city: "Bandung",
      salary: 0,
    },
  ];

  logger.log(persons, (item) => {
    // console.log(item);
  });
}
