import React, { Fragment } from 'react';

const withAdminActions = (WrappedComponent: any) => (props: any) => {
    return (
        <Fragment>
            <WrappedComponent {...props} />
        </Fragment>
    );
};
export default withAdminActions;
