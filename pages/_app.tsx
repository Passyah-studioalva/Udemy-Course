/* Example 1 */
// import { AppProps } from "next/app";
// import { Layout } from "@components/common";

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <>
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//     </>
//   );
// }

// export default MyApp;

/* Example 2 */
// import { AppProps } from "next/app";

// const Layout = (props: any) => {
//   // 👈️ turns off type checking for props
//   return <div>{props.children}</div>;
// };

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <>
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//     </>
//   );
// }

// export default MyApp;

/* Example 3 */
import "@assets/main.css";
import { AppProps } from "next/app";
import { FunctionComponent, ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[];
};

const Noop: FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      {children}
    </>
  ) 
};

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: any } }) {
  const Layout = Component.Layout ?? Noop;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
