import React from 'react';
import { MentionBlotClassName } from '../constant';

interface ComposerMentionProps {
    id: number;
    text: string;
}
export const ComposerMention = ({ id, text }: ComposerMentionProps) => {
    return (
        <a data-type='mention' data-id={id} className={MentionBlotClassName} color='accent.base'>
            <span>{text}</span>
        </a>
    );
};
