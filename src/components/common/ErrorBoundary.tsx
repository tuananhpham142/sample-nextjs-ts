import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { ErrorDisclosure } from './ErrorDisclosure';

const defaultErrorHandler = (error: Error, info: { componentStack: string }) => {
    //TODO: using logg for FE separated or using API for logging
    // logger.error(error.message, error, info);
};

const FallbackComponent = () => (
    <div className='d-flex justify-content-center align-items-center h -100'>
        <ErrorDisclosure />
    </div>
);

export const ErrorBoundary = ({ children }: { children: any }) => {
    return (
        <ReactErrorBoundary FallbackComponent={FallbackComponent} onError={defaultErrorHandler}>
            {children}
        </ReactErrorBoundary>
    );
};
