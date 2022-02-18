import React, { Fragment } from "react";

interface WithDarkThemeInterface {
  loading: boolean;
}

const withDarkTheme =
  (WrappedComponent: any) => (props: WithDarkThemeInterface) => {
    const { loading } = props;
    return (
      <Fragment>
        {loading ? <CustomLoadingAnimation /> : <WrappedComponent {...props} />}
      </Fragment>
    );
  };
export default withDarkTheme;
