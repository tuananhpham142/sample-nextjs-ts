export const MentionBlotClassName = 'mentionBlot';
export const ImageBlotClassName = 'imageBlot';

export const MENTION_SYMBOL = '@';
export const SLASH_SYMBOL = '/';

export const SYMBOL_REGEXP = {
    [SLASH_SYMBOL]: /([\s\n]\/[\w\s]*)$/,
    [MENTION_SYMBOL]: /(([\s\n]@(\w+\s?\w*))\W{0})$/,
};
export const MENTION_REGEXP = SYMBOL_REGEXP[MENTION_SYMBOL];
export const SLASH_MENU_REGEXP = SYMBOL_REGEXP[SLASH_SYMBOL];

export const UNNECESSARY_HTML_AFTER_EMBED = [
    '<p data-reactroot=""><br></p>',
    '<p data-reactroot><br></p>',
    '<p><br></p>',
];

export const UNNECESSARY_HTML = ['﻿'];
