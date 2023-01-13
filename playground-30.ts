/* [AI] Infer keyword*/

interface Person {
  name: string;
}
/* Example 1 */
// type ReturnType<T> = T extends () => string ? string : number

// export default function play30() {

//   function logger(name:string) {
//     return "Hello  World";
//   }

//   const loggerReturn : ReturnType<typeof logger> = 20
// }

/* Example 2 */
type ReturnType<T> = T extends () => infer R ? R : number;

export default function play30() {
  function logger() {
    return true;
  }

  const loggerReturn: ReturnType<typeof logger> = true;
}
