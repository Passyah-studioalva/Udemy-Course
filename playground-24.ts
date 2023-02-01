/* [AI] Generics Types With Extends */

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

/* Example 1 */
type StudenInfo<T extends Student = Student> = {
  data: T;
  grades: number[];
};

/* Example 2 */
// type StudenInfo = {
//   data: Student;
//   grades: number[];
// };

export default function play24() {
  const info = {
    data: {
      name: "Lesya",
      age: 30,
    },
    grades: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    projects: ["Udemy", "Vue"],
  };

  function logStudenInfo(info: StudenInfo<PostGraduadeStudent>) {
    // console.log(info.data.name);
    // console.log(info.data.age);
    // console.log(info.data.projects);
  }

  // logStudenInfo(info);
}
