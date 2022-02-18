import "@/assets/scss/index.scss";
import withSnackbar from "@/hocs/withSnackbar";
// import { InitClient } from '@/layouts/MainLayout/InitClient';
import { LayoutWrapperInterface } from "@/models/interfaces/globalInterface";
import { persistor, wrapper } from "@/store/redux";
import "@/styles/Airbnb/index.scss";
import "@/styles/styles.css";
import { LayoutProvider } from "@/_metronic/layout/core";
import { MasterInit } from "@/_metronic/layout/MasterInit";
import { MasterLayout } from "@/_metronic/layout/MasterLayout";
import { ThemeProvider } from "@mui/material/styles";
import { AppProps } from "next/app";
import { Fragment, useEffect } from "react";
import "react-dates/lib/css/_datepicker.css";
import { I18nextProvider } from "react-i18next";
import { PersistGate } from "redux-persist/integration/react";
import theme from "src/theme";
import i18n from "../src/translations";

interface LayoutProps extends LayoutWrapperInterface {}
interface MyAppProps extends AppProps {
  user?: any;
}

const App = (props: MyAppProps) => {
  const { Component, pageProps } = props;
  const componentProps = pageProps?.pageProps || {};
  const layoutProps: LayoutProps = pageProps?.layoutProps || {};

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        {/* <CssBaseline /> */}
        {/* <Provider store={store}> */}
        <PersistGate
          loading={<Component {...componentProps} />}
          persistor={persistor}
        >
          <I18nextProvider i18n={i18n}>
            {/* <LayoutWrapper {...layoutProps}> */}
            <LayoutProvider>
              <MasterLayout {...layoutProps}>
                <Component {...componentProps} />
              </MasterLayout>
              <MasterInit />
            </LayoutProvider>
            {/* </LayoutWrapper> */}
          </I18nextProvider>
        </PersistGate>
      </ThemeProvider>
      {/* </Provider> */}
    </Fragment>
  );
};

App.getInitialProps = async ({ Component, ctx }: any) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return {
    pageProps,
  };
};
export default wrapper.withRedux(withSnackbar(App));
