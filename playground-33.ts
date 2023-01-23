/* [AI] Infering Return Type Of Promise */

export default async function play33() {
  type Greeting = { message: string };

  type InferHelloProps<T> = T extends () => Promise<{ props: infer Props }>
    ? Props
    : never;

  const getHelloProps = async function () {
    const greeting = { message: "Hi Guys" };
    return {
      props: {
        greeting,
        data: {
          cars: ["car1", "car2"],
        },
      },
    };
  };

  /* Example 1 */
  // const data = await getHelloProps();
  // debugger;

  /* Exanoke 2 */
  // function sayHello(args: any) {
  //   console.log(args.props.greeting);
  // }

  /* Exanoke 2 */
  function sayHello(props: InferHelloProps<typeof getHelloProps>) {
    // console.log(props.data.cars);
    // console.log(props.greeting);
  }
  const data = await getHelloProps();
  sayHello(data.props);
}
