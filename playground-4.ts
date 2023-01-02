/* [AI] FUNCTION TYPES */

interface Person {
  name: string;
  age: number;
}

// ! No Recomended
/* Example Interface 1 */
// interface PersonLoggerFn {
//   logPersonInfo(): string;
// }

// ! No Recomended
/* Example Interface 2 */
// interface PersonLoggerFn {
//   (name: string, age: number): string;
// }

// * Recomended Inline Types Arrow Function
/* Example Types */
type PersonLoggerFn = (name: string, age: number) => string;

export default function play4() {
  const name: string = "Lesya";
  const age: number = 4;

  const person: Person = {
    name: "Passyah",
    age: 23,
  };

  // ! No Recomended
  /* Example 1 */
  // function logPersonInfo(personName: string, personAge: number): string {
  //   const info = `Name: ${personName}, age: ${personAge}`;
  // console.log(info);
  //   return info;
  // }

  // * Recomended
  /* Example 2 */
  // TODO Arrow function
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
  logPersonInfo2(person);
}
