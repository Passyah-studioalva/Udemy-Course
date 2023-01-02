/* [AI] CUSTOM TYPES */

type Person = {
  name: string;
  age: number;
};

export default function play2() {
  const name: string = "Lesya";
  const age: number = 4;

  const person: Person = {
    name: "Passyah",
    age: 23,
  };

  function logPersonInfo(personName: string, personAge: number) {
    const info = `Name: ${personName}, age: ${personAge}`;
    // console.log(info)
    return info;
  }
  logPersonInfo(name, age);

  // ! NO RECOMENDED
  /* Example 1 */
  // function logPersonInfo2(person: any) {
  //   const info = `Name: ${person.name}, age: ${person.age}`;
  //   console.log(info);
  //   return info;
  // }

  // ! NO RECOMENDED
  /* Example 2 */
  // function logPersonInfo2(person: { name: string; age: number }) {
  //   const info = `Name: ${person.name}, age: ${person.age}`;
  //   console.log(info);
  //   return info;
  // }

  // * NO RECOMENDED
  /* Example 3 */
  function logPersonInfo2(person: Person) {
    const info = `Name: ${person.name}, age: ${person.age}`;
    // console.log(info)
    return info;
  }

  logPersonInfo2(person);
}
