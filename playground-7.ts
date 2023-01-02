/* [AI] NARROWING */

export default function play7() {
  // const names: string[] = ["Zay", "Adrian"];
  // const numbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const random = Math.random() > 0.5 ? "hello" : [1, 2];

  if (typeof random === "string") {
    const upper = random.toUpperCase();
    // console.log(upper)
  } else {
    // console.log(random);
  }
  // console.log(random.length);
}
