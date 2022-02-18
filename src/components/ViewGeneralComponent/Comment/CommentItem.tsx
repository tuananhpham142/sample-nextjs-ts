import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Fragment, FunctionComponent, useEffect } from 'react';

const useStyles = makeStyles<Theme, CommentItemProps>((theme: Theme) => ({
    root: {
        marginTop: theme.spacing(3),
        borderRadius: '0',
        boxShadow: 'none',
    },
}));

interface CommentItemProps {
    className?: string;
}
const CommentItem: FunctionComponent<CommentItemProps> = (props: CommentItemProps) => {
    const { className } = props;
    const classes = useStyles(props);

    useEffect(() => {}, []);

    return <Fragment></Fragment>;
};

export default CommentItem;
