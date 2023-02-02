import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    /* Example 1 */
    // <div className="app-component">
    //   <Component {...pageProps} />
    // </div>

    /* Example 2 */
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
