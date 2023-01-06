/* [AI] Ternary With Generics */

interface Person {
  name: string;
}

interface Student extends Person {
  name: string;
  age: number;
}

interface PostGraduadeStudent extends Person {
  age: number;
  projects: string[];
}

type StudenInfo<T extends any = Student> = T extends Student
  ? {
      data: T;
      grades: number[];
    }
  : string;

type Car = { engine: string };

export default function play25() {
  const info = {
    data: {
      name: "Lesya",
      age: 30,
    },
    grades: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  };

  /* Example 1 */
  // function logStudenInfo(info: StudenInfo) {
  //   console.log(info.data.name);
  //   console.log(info.data.age);
  // }

  /* Example 2 */
  function logStudenInfo(info: StudenInfo<Car>) {
    console.log(info);
    console.log(info);
  }

  logStudenInfo(info.data.name);
}


