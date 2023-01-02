/* [AI] EXTENDING INTERFACE */

/* 
interfaces can extend each other.
which allows copy the members of one interface into another.
which gives more flexibility in how separate interfaces into reusable components.
*/

interface Person {
  name: string;
  age: number;
}

interface BusinessPerson extends Person {
  salary: number;
}

interface AcademicPerson extends Person {
  publications: string[];
}

export default function play8() {
  const person: AcademicPerson = {
    name: "Alesha",
    age: 4,
    publications: ["Academic", "Thesis"],
  };
  const person2: BusinessPerson = {
    name: "Alesha",
    age: 4,
    salary: 1000,
  };

  function logPerson(person: Person) {
    // console.log(person);
  }

  logPerson(person2);
  logPerson(person);
}
