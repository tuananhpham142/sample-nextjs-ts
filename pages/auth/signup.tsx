import { LayoutWrapperInterface } from "@/models/interfaces/globalInterface";
import SignUp from "@/views/Auth/SignUp";
import { NextPage } from "next";
import React, { Fragment } from "react";

const AuthSignUpPage: NextPage<any> = () => {
  return (
    <Fragment>
      <SignUp />
    </Fragment>
  );
};

AuthSignUpPage.getInitialProps = async ({ store, query }) => {
  const layoutProps: LayoutWrapperInterface = {
    layout: "no-layout",
  };
  return { layoutProps };
};

export default AuthSignUpPage;
