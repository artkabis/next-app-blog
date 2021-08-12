import "../styles/globals.css";
import App from "next/app";
import { createGlobalStyle } from "styled-components";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
import { Provider } from "react-redux";
import { useStore } from "../store";

config.autoAddCss = false;
const GlobalStyles = createGlobalStyle`
    ${dom.css()}
    // Insert any other global styles you want here
`;

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  console.log("store >> ", store);
  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <Component {...pageProps} />;
      </Provider>
    </>
  );
}

export default MyApp;

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
/*
MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  console.log("_app > appProps >> ", appProps);

  return { ...appProps };
};
*/
