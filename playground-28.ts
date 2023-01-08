/* [AI] Mapped Types */

interface Person {
  name: string;
}

type CustomArray<T> = {
  [index: number]: T;
};

// ! NO RECOMENDED
// type CustomObject = {
//   [key: string]: string | number | Person;
// };
// * RECOMENDED
type CustomObject<T = string | number | Person> = {
  [key: string]: T;
};

export default function play28() {
  const person: CustomObject = {
    age: 23,
    name: "Passyah",
    city: "Jakarta",
    person: {
      name: "Raffi",
    },
  };
}
