import { Fragment, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';

const withTooltip = (WrappedComponent: any) => (props: any) => {
    useEffect(() => {
        ReactTooltip.rebuild();
    });
    return (
        <Fragment>
            <ReactTooltip place='top' id='motorhome__tooltip' effect='solid' html={true} />
            <WrappedComponent {...props} data-for='motorhome__tooltip' data-html={true} />
        </Fragment>
    );
};
export default withTooltip;
