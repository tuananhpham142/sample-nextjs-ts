import { Color, Size } from '@/models/interfaces/theme';
import { SvgIcon } from '@mui/material';
import clsx from 'clsx';
import React, { FC } from 'react';

interface IProps {
    className?: string;
    color: Color;
    size: Size;
}

const LoginIcon: FC<IProps> = (props: IProps) => {
    return (
        <SvgIcon
            className={clsx(
                `text-${props.color} text-hover-${props.color} fs-${props.size} justify-content-center align-items-center`,
            )}
        >
            <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                stroke='currentColor'
                fill='none'
                stroke-linecap='round'
                stroke-linejoin='round'
            >
                <g stroke='currentColor' stroke-width='0' fill='none' fillRule='evenodd'>
                    <polygon points='0 0 24 0 24 24 0 24'></polygon>
                    <path
                        d='M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z'
                        fill='currentColor'
                        fillRule='nonzero'
                        opacity='0.3'
                    ></path>
                    <path
                        d='M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z'
                        fill='currentColor'
                        fillRule='nonzero'
                    ></path>
                </g>
            </svg>
        </SvgIcon>
    );
};
export default LoginIcon;
