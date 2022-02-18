import React, { FC } from 'react';

interface IProps {
    onClick: () => void;
}

const Toggle: FC<IProps> = (props) => {
    const { onClick } = props;
    return (
        <button
            id='kt_explore_toggle'
            className='btn btn-sm btn-white btn-active-primary shadow-sm position-fixed px-5 fw-bolder zindex-2 top-50 mt-10 end-0 transform-90 fs-6 rounded-top-0'
            title={`Explore`}
            data-bs-toggle='tooltip'
            data-bs-placement='right'
            data-bs-trigger='hover'
            onClick={onClick}
        >
            <span id='kt_explore_toggle_label'>Explore</span>
        </button>
    );
};
export default Toggle;
