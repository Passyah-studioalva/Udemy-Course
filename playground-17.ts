/* [AI] UNKNOW TYPE */

export default function play17() {
  function printInfo(someObject: { [key: string]: unknown }) {
    if (typeof someObject.age === "string") {
      someObject.age.toLocaleUpperCase();
    }
  }

  printInfo({
    name: "Passyah",
    age: 23,
    isMarried: true,
  });
}
