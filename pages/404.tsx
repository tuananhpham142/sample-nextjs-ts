import { NextPage } from 'next';
import React, { Fragment } from 'react';

//Import SCSS
const Error404: NextPage<any> = (layout: 'no-layout') => {
    return (
        <Fragment>
            <h1>404 not found</h1>
        </Fragment>
    );
};
// export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(async ({ store, query }) => {
//     return {
//         props: {
//             layoutProps: {
//                 layout: 'no-layout',
//             },
//         },
//     };
// });

export default Error404;
