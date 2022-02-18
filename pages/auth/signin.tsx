import { LayoutWrapperInterface } from "@/models/interfaces/globalInterface";
import SignIn from "@/views/Auth/SignIn";
import { NextPage } from "next";
import React from "react";

const AuthSignInPage: NextPage<any> = () => {
  return <SignIn />;
};

AuthSignInPage.getInitialProps = async ({ store, query }) => {
  const layoutProps: LayoutWrapperInterface = {
    layout: "no-layout",
    fullHeight: true,
  };

  return { layoutProps };
};

export default AuthSignInPage;
