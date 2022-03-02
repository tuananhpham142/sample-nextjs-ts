import { SlotProvider } from '@/components/common/Slots/SlotsProvider';
import { FC, ReactNode } from 'react';

interface IProps {
    children: ReactNode | ReactNode[];
    slotName: Array<'emoji' | 'media' | 'tagPeople' | 'checkin' | 'audience' | 'title'>;
}

const FeedActionContent: FC<IProps> = (props) => {
    const { slotName } = props;
    const slots = slotName.reduce((a, v) => ({ ...a, [v]: { id: v } }), {});

    return (
        <div className={'d-flex mt-4'}>
            <SlotProvider slots={slots}>{props.children}</SlotProvider>
        </div>
    );
};
export default FeedActionContent;
