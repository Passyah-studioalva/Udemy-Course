import { AppProps } from "next/app";

const Layout = (props: any) => {
  // 👈️ turns off type checking for props
  return <div>{props.children}</div>;
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
