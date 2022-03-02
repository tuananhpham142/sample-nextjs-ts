import { cloneElement, FC, ReactElement } from 'react';
import { useSlotProps } from './SlotsProvider';

interface IProps {
    slot?: string;
    children: ReactElement;
}

const SlotWrapper: FC<IProps> = (props: IProps) => {
    props = useSlotProps(props, 'text');
    const { children, ...otherProps } = props;

    return cloneElement(children, {
        ...otherProps,
    });
};

export default SlotWrapper;
