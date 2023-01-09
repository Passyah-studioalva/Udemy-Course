/* [AI] Typeof */

interface Person {
  name: string;
}

export default function play29() {
  /* Example 1 */
  // function logger(name: string) {
  //   return "Hello  World";
  // }
  
  /* Example 2 */
  function logger(...args: any[]) {
    return "Hello  World";
  }

  /* Example 1 */
  // const kindaLogger: typeof logger = (a) => "Hi guys!";

  /* Example 2 */
  const kindaLogger: typeof logger = (name: string, age: number) => "Hi guys!";

  const person = {
    name: "Passyah",
    age: 23,
  };

  const person2: typeof person = {
    name: "Lesya",
    age: 4,
  };

  kindaLogger("", 20);
}
