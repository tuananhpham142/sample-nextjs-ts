import { ComponentBackgroundVariant } from '@/models/interfaces/theme';
import { Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import moment, { Moment } from 'moment';
import { Fragment, FunctionComponent, useEffect, useState } from 'react';

const useStyles = makeStyles<Theme, CustomCounterProps>((theme: Theme) => ({
    number: {
        fontSize: '48px',
        lineHeight: 1,
        [theme.breakpoints.down('sm')]: {
            fontSize: '25px !important',
        },
    },
    text: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px !important',
        },
    },
}));

interface CustomCounterProps {
    className?: string;
    date: string | Moment;
    color?: ComponentBackgroundVariant;
}

const CustomCounter: FunctionComponent<CustomCounterProps> = (props: CustomCounterProps) => {
    const { date, color } = props;
    const classes = useStyles(props);

    const [time, setTime] = useState({
        months: 0,
        days: 0,
        hours: 0,
        mins: 0,
        secs: 0,
    });
    const counters = [
        {
            text: 'tháng',
            key: 'months',
        },
        {
            text: 'ngày',
            key: 'days',
        },
        {
            text: 'giờ',
            key: 'hours',
        },
        {
            text: 'phút',
            key: 'mins',
        },
        {
            text: 'giây',
            key: 'secs',
        },
    ];

    useEffect(() => {
        const countDown = setInterval(() => {
            const eventTime = moment(date);
            const currentTime = moment();
            const diff = eventTime.diff(currentTime);

            const duration = moment.duration(diff);
            // Time Out check
            if (duration.asSeconds() <= 0) {
                clearInterval(countDown);
                setTime({ months: 0, days: 0, hours: 0, mins: 0, secs: 0 });
            }

            const months = duration.months() > 0 ? duration.months() : 0;
            const days = duration.days() > 0 ? duration.days() : 0;
            const hours = duration.hours() > 0 ? duration.hours() : 0;
            const minutes = duration.minutes() > 0 ? duration.minutes() : 0;
            const seconds = duration.seconds() > 0 ? duration.seconds() : 0;
            setTime({
                months,
                days,
                hours,
                mins: minutes,
                secs: seconds,
            });
        }, 1000);
        return () => {
            if (countDown) clearInterval(countDown);
        };
    }, []);
    return (
        <Fragment>
            <div className='countdown-wrapper d-flex align-items-center flex-wrap gap-1 gap-sm-5'>
                {counters.map((item, index) => {
                    return (
                        <Fragment key={index}>
                            <div className='countdown-item d-flex flex-column align-items-center'>
                                <Typography
                                    className={clsx(
                                        'font-bold mb-3 fs-0 lh-1',
                                        {
                                            [`text-${color}`]: true,
                                        },
                                        classes.number,
                                    )}
                                >
                                    {/* @ts-ignore */}
                                    {time[item.key] < 10 ? `0${time[item.key]}` : time[item.key]}
                                </Typography>
                                <span
                                    className={clsx('text-uppercase fs-5', {
                                        [`text-${color}`]: true,
                                    }, classes.text)}
                                >
                                    {item.text}
                                </span>
                            </div>
                            {index !== counters.length - 1 && (
                                <div className={clsx(classes.number, { [`text-${color} mb-10`]: true })}>:</div>
                            )}
                        </Fragment>
                    );
                })}
            </div>
        </Fragment>
    );
};

export default CustomCounter;
