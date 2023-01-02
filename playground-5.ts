/* [AI] CLASS TYPES */

class Person {
  // ! NO RECOMENDED
  /* Example 1 */
  // name: string = "";
  // age: number = 0;

  //  * RECOMENDED
  /* Example 2 */
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

type PersonLoggerFn = (name: string, age: number) => string;

export default function play5() {
  const name: string = "Lesya";
  const age: number = 4;

  // const person: Person = {
  //   name: "Passyah",
  //   age: 23,
  // };

  const logPersonInfo: PersonLoggerFn = (
    personName: string,
    personAge: number
  ): string => {
    const info = `Name: ${personName}, age: ${personAge}`;
    // console.log(info);
    return info;
  };
  const log: string = logPersonInfo(name, age);

  function logPersonInfo2(person: Person) {
    const info = `Name: ${person.name}, age: ${person.age}`;
    // console.log(info);
    return info;
  }

  /* Example 1 */
  // logPersonInfo2(new Person("Jacko", 22));

  /* Example 2 */
  const person = new Person("Ray", 22);
  logPersonInfo2(person);
}
