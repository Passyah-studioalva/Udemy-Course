/* [AI] INTERFACE NARROWING */

interface Person {
  kind: "business" | "academic" | "otherType";
  name: string;
  age: number;
}

interface BusinessPerson extends Person {
  kind: "business";
  salary: number;
}

interface AcademicPerson extends Person {
  kind: "academic";
  publications: string[];
}

type Human =
  | BusinessPerson
  | AcademicPerson
  | { kind: "otherType"; special: string };

export default function play13() {
  const person: Human = {
    kind: "business",
    name: "Passyah",
    age: 21,
    salary: 5000
  };

  function logPersonInfo(human: Human) {
    if (human.kind === "academic") {
      // console.log(human, "acedemic console");
    } else if (human.kind === "business") {
      // console.log(human, "business console");
    } else if (human.kind === "otherType") {
      // console.log(human, "other console");
    } else {
      // console.log(human, "else console");
    }
  }
  logPersonInfo(person);
}
