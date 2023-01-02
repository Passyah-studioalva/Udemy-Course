/* [AI] OPTIONAL PARAMETERS */

class Person {
  name: string;
  age?: number; /* if age null optional here */

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

type PersonLoggerFn = (name: string, age?: number) => string;

export default function play6() {
  const name: string = "Lesya";
  const age: number = 4;

  const detail: Person = {
    name: "Passyah",
  };

  const logPersonInfo: PersonLoggerFn = (
    personName: string,
    personAge: number = 0 /* default value, put optional */
  ): string => {
    const info = `Name: ${personName}, age: ${personAge}`;
    // console.log(info);
    return info;
  };
  const log: string = logPersonInfo(name);

  function logPersonInfo2(person: Person) {
    const info = `Name: ${person.name}, age: ${person.age}`;
    // console.log(info);
    return info;
  }

  const person = new Person("Ray", 22);
  logPersonInfo2(person);
}
