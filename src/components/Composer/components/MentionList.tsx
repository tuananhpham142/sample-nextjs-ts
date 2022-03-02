import { EntryComponentProps } from '@draft-js-plugins/mention/lib/MentionSuggestions/Entry/Entry';
import React, { FunctionComponent } from 'react';

export const MentionList: FunctionComponent<EntryComponentProps> = (props: EntryComponentProps) => {
    const {
        mention,
        theme,
        searchValue, // eslint-disable-line @typescript-eslint/no-unused-vars
        isFocused, // eslint-disable-line @typescript-eslint/no-unused-vars
        ...parentProps
    } = props;
    return (
        <div {...parentProps}>
            <div className='d-flex align-items-center bg-hover-light-primary p-1'>
                <div className='symbol symbol-circle symbol-45px me-5'>
                    <img src={mention.avatar} alt='' />
                </div>
                <div className='d-flex justify-content-start flex-column'>
                    <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                        {mention.name}
                    </a>
                    <span className='text-muted fw-bold text-muted d-block fs-7'>{mention.title}</span>
                </div>
            </div>
        </div>
    );
};
