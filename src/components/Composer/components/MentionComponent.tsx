import { SubMentionComponentProps } from '@draft-js-plugins/mention/lib/Mention';
import React, { FC } from 'react';

const MentionComponent: FC<SubMentionComponentProps> = (props: SubMentionComponentProps) => {
    return <span className='text-primary bg-hover-light-primary fw-bold hoverable'>{props.mention.name}</span>;
};
export default MentionComponent;
