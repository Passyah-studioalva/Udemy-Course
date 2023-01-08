/* [AI] Get Single Type */

interface Person {
  name: string
}

/* Example 1 */
// type SingleType<T> = T extends any[] ? T[number] : T
/* Example 2 */
// type SingleType<T> = T extends any[] ? T[number] : Person
/* Example 3 */
type SingleType<T> = T extends any[] ? T[number] : unknown

export default function play26() {
  type Type1 = SingleType<string[]>
  type Type2 = SingleType<number[]>
  type Type3 = SingleType<Person>

  type Type4 = string[][number]
}
