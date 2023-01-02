/* [AI] GENERIC OBJECT TYPES */

export default function play16() {
  // ! Example any very dangers NO RECOMENDED
  // function printInfo(someObject: { [key: string]: any }) {
  //   console.log(someObject);
  //   someObject.age.toLocaleUpperCase();();
  // }

  // * RECOMENDED
  function printInfo(someObject: { [key: string]: string | number | boolean }) {
    // console.log(someObject);
  }

  printInfo({
    name: "Passyah",
    age: 23,
    isMarried: true,
  });
}
