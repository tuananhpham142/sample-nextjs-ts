import { HashtagProps } from '@draft-js-plugins/hashtag';
import React, { FC } from 'react';

const HashtagComponent: FC<HashtagProps> = (props: HashtagProps) => {
    return <span className='text-primary bg-hover-light-primary hoverable'>{props.children}</span>;
};
export default HashtagComponent;
