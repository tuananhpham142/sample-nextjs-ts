import { CustomIconProps } from '@/models/interfaces/globalInterface';
import { SvgIcon } from '@mui/material';
import clsx from 'clsx';
import React, { FC } from 'react';

const BookmarkIcon: FC<CustomIconProps> = (props: CustomIconProps) => {
    const { className } = props;
    return (
        <SvgIcon
            className={clsx(
                `text-${props.color} text-hover-${props.hoverColor} fs-${props.size} justify-content-center align-items-center`,
                className,
            )}
        >
            <svg
                className='icon icon-tabler icon-tabler-bookmark'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                stroke-width='1'
                stroke='currentColor'
                fill='none'
                stroke-linecap='round'
                stroke-linejoin='round'
            >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2' />
            </svg>
        </SvgIcon>
    );
};
export default BookmarkIcon;
