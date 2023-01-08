/* [AI] Array Index Type */

interface Person {
  name: string;
}

/* Example 1 */
// type CustomArray = {
//   [index: number]: string;
// };
// ! Can only have 1 data type
/* Example 2 */
// type CustomArray<T = string> = {
//   [index: number]: T;
// };
// * Can be various types of data types
/* Example 3 */
type CustomArray<T> = {
  [index: number]: T;
};

export default function play27() {
  /* Example 1 */
  // const items: CustomArray = ["1", "2", "3"];
  // type Single = CustomArray[number];

  /* Example 2 */
  const items: CustomArray<string> = ["1", "2", "3"];
  const items2: CustomArray<number> = [1, 2, 3];
}
