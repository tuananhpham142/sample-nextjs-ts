import React from 'react';

export interface ErrorDisclosureProps {
    title?: string;
    subtitle?: string;
}
export const ErrorDisclosure: React.FC<ErrorDisclosureProps> = ({ title, subtitle }) => {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <h1 className='text-center text-primary fw-bold'>{title || `It’s not you, it’s us.`}</h1>
            <h6 className='text-center text-muted fw-bold'>
                {subtitle || `Something’s not working properly. Please try again in few minutes.`}
            </h6>
        </div>
    );
};
