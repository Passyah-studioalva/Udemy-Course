/* [AI] DECLARATION MERGING */

interface Person {
  kind: "business" | "academic" | "otherType";
  name: string;
  age: number;
}

interface Person {
  prop1: string;
  prop2: number;
}

export default function play14() {
  const person: Person = {
    prop1: "",
    prop2: 2,
    name: "",
    kind: "academic",
    age: 23,
  };

  // console.log(person);
}
