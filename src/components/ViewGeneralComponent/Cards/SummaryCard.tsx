import { FixedLengthArray } from '@/models/interfaces/customArray';
import { formatNumber } from '@/utils/number.utils';
import { Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { FunctionComponent } from 'react';

const useStyles = makeStyles<Theme, SummaryCardProps>((theme: Theme) => ({
    separator: {
        '& > div:not(:last-child)': {
            borderRight: '1px solid #EBECED',
        },
        '& > div': {
            padding: '0 10px 0 10px',
            margin: '0 !important',
        },
    },
}));
interface GeneralSummary {
    title: string;
    content: number;
}
interface SummaryCardProps {
    className?: string;
    borderColor?: string;
    separator?: boolean;
    data: FixedLengthArray<[GeneralSummary, GeneralSummary, GeneralSummary]>;
}
const SummaryCard: FunctionComponent<SummaryCardProps> = (props: SummaryCardProps) => {
    const { className, data, borderColor, separator } = props;
    const classes = useStyles(props);

    return (
        <div
            className={clsx(
                `d-flex flex-wrap border border-${
                    borderColor || 'warning'
                } rounded-8 py-3 w-100 justify-content-center align-items-center`,
                {
                    [classes.separator]: separator,
                },
            )}
        >
            {data.map((item: GeneralSummary) => (
                <div className={clsx('text-center mx-6', {})}>
                    <Typography variant='body1'>{item.title}</Typography>
                    <div className='d-flex align-items-center justify-content-center mt-2'>
                        <Typography variant='h6'>{formatNumber(item.content)}</Typography>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SummaryCard;
