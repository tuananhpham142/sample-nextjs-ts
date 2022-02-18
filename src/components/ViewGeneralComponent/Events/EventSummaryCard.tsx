import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Fragment, FunctionComponent, useEffect } from 'react';

const useStyles = makeStyles<Theme, EventSummaryCardProps>((theme: Theme) => ({
    root: {
        marginTop: theme.spacing(3),
        borderRadius: '0',
        boxShadow: 'none',
    },
}));

interface EventSummaryCardProps {
    className?: string;
}
const EventSummaryCard: FunctionComponent<EventSummaryCardProps> = (props: EventSummaryCardProps) => {
    const { className } = props;
    const classes = useStyles(props);

    useEffect(() => {}, []);

    return <Fragment></Fragment>;
};

export default EventSummaryCard;
