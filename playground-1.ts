/* [AI] FUNCTION PARAMS */

export default function play1() {
  const name: string = "Passyah Raffi";
  const age: number = 30;

  function logPersonInfo(personName: string, personAge: number) {
    const info = `Name: ${personName}, age: ${personAge}`;
    // console.log(info);
    return info;
  }

  logPersonInfo(name, age);
}
