import React, { Fragment } from "react";

interface WithLoadingInterface {
  loading: boolean;
}

const withLoading =
  (WrappedComponent: any) => (props: WithLoadingInterface) => {
    const { loading } = props;
    return (
      <Fragment>
        {loading ? <CustomLoadingAnimation /> : <WrappedComponent {...props} />}
      </Fragment>
    );
  };
export default withLoading;
