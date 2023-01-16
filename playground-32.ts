/* [AI] Multiple Generic Params */

interface Person {
  name: string;
  age: number;
  grades: number[];
}

/* Example 1 */
// type Logger = (param1: string, param2: number) => string;
/* Example 2 */
// type Logger<FristParams, SecondParams, ThreeParams, ReturnParams> = (
//   param1: FristParams,
//   param2: SecondParams,
//   param3: ThreeParams
// ) => ReturnParams;
/* Example 3 */
type Logger<
  FristParams = string,
  SecondParams = number,
  ThreeParams = number[],
  ReturnParams = string
> = (
  param1: FristParams,
  param2: SecondParams,
  param3: ThreeParams
) => ReturnParams;

export default function play32() {
  const supperLogger: Logger<string, number, number[], string> = (
    name,
    age,
    grades
  ) => {
    return "Hello World!";
  };

  const logger: Logger = (brand, age) => {
    return brand + age;
  };
}
