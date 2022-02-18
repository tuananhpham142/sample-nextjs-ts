import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Fragment, FunctionComponent } from 'react';

const useStyles = makeStyles<Theme, ScrollToTopProps>((theme: Theme) => ({
    button: {
        display: 'flex',
        position: 'fixed',
        bottom: 30,
        right: 15,
        width: 30,
        height: 30,
        zIndex: 100,
        opacity: 0.3,
        backgroundColor: '#3699FF',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 0.5rem 1.5rem 0.5rem rgb(0 0 0 / 8%)',
        transition: 'all 0.5s ease',
        borderRadius: 4,
        cursor: 'pointer',
        '&:hover': {
            opacity: 1,
        },
    },
}));
interface ScrollToTopProps {
    className?: string;
}
const ScrollToTop: FunctionComponent<ScrollToTopProps> = (props: ScrollToTopProps) => {
    const { className } = props;
    const classes = useStyles(props);

    const smoothScrollTo = (endX: any, endY: any, duration: any) => {
        let startX = window.scrollX || window.pageXOffset,
            startY = window.scrollY || window.pageYOffset,
            distanceX = endX - startX,
            distanceY = endY - startY,
            startTime = new Date().getTime();

        // Easing function
        let easeInOutQuart = (time: any, from: any, distance: any, duration: any) => {
            if ((time /= duration / 2) < 1) return (distance / 2) * time * time * time * time + from;
            return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
        };

        let timer = window.setInterval(() => {
            let time = new Date().getTime() - startTime,
                newX = easeInOutQuart(time, startX, distanceX, duration),
                newY = easeInOutQuart(time, startY, distanceY, duration);
            if (time >= duration) {
                window.clearInterval(timer);
            }
            window.scrollTo(newX, newY);
        }, 1000 / 60); // 60 fps
    };
    const handleScrollTop = () => {
        if (window) {
            if ('scrollBehavior' in document.documentElement.style) {
                //Checks if browser supports scroll function
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth',
                });
            } else {
                smoothScrollTo(0, 0, 500); //polyfill below
            }
        }
    };

    return (
        <Fragment>
            <div id='backToTop' className={classes.button} onClick={handleScrollTop}>
                <KeyboardArrowUpIcon className='text-white'></KeyboardArrowUpIcon>
            </div>
        </Fragment>
    );
};

export default ScrollToTop;
