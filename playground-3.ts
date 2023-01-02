/* [AI] INTERFACE VS TYPES */

//* TS recommend to use Interfaces over types when possible

// TODO Type aliases
// TODO To describe function types
// ! NO RECOMENDED
// type Person = {
//   name: string;
//   age: number;
// };

// * EXAMPLE RECOMENDED INLINE TYPES
type Data = string;

// TODO Describe data structures in more natural way
// TODO Describing objects
// TODO Sgipment, Orders,
// * RECOMENDED
interface Person {
  name: string;
  age: number;
}

export default function play3() {
  // * EXAMPLE RECOMENDED INLINE TYPES
  // const name: Data = "Lesya";
  const name: string = "Lesya";
  const age: number = 4;

  const person: Person = {
    name: "Passyah",
    age: 23,
  };

  function logPersonInfo(personName: string, personAge: number) {
    const info = `Name: ${personName}, age: ${personAge}`;
    // console.log(info);
    return info;
  }
  logPersonInfo(name, age);

  function logPersonInfo2(person: Person) {
    const info = `Name: ${person.name}, age: ${person.age}`;
    // console.log(info);
    return info;
  }
  logPersonInfo2(person);
}
