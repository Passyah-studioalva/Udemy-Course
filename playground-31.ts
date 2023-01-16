/* [AI] KeyOf */

interface Person {
  name: string;
  age: number;
  grades: number[];
}

type PersonKey = keyof Person;

export default function play31() {
  /* Example 1 */
  // const personKey : PersonKey = "grades"

  /* Example 2 */
  const personKey: keyof Person = "grades";
}
