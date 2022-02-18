import { BORDER_RADIUS_DEFAULT } from './border';
import { BACKGROUND_WHITE } from './colorPalette';

const FONT_SIZE_BASE = 1; // 1rem ~ 12px

export const SIZE_TEXT_BODY_1 = `${1.05 * FONT_SIZE_BASE}rem`; // 13px
export const SIZE_TEXT_BODY_2 = `${1.05 * FONT_SIZE_BASE}rem`; // 13px
export const SIZE_TEXT_SUBTITLE_1 = `${1.09 * FONT_SIZE_BASE}rem`; // 14.04px
export const SIZE_TEXT_SUBTITLE_2 = `${1.09 * FONT_SIZE_BASE}rem`; // 14.04px
export const SIZE_TEXT_CONTENT = `${1.05 * FONT_SIZE_BASE}rem`; // 13px
export const SIZE_TEXT_CAPTION = `${0.775 * FONT_SIZE_BASE}rem`; // 10.4px

export const SIZE_TEXT_H1 = `${2.8 * FONT_SIZE_BASE}rem`; // 36px
export const SIZE_TEXT_H2 = `${2.16 * FONT_SIZE_BASE}rem`; // 28px
export const SIZE_TEXT_H3 = `${1.85 * FONT_SIZE_BASE}rem`; // 24px
export const SIZE_TEXT_H4 = `${1.55 * FONT_SIZE_BASE}rem`; // 20px
export const SIZE_TEXT_H5 = `${1.25 * FONT_SIZE_BASE}rem`; // 16.25px
export const SIZE_TEXT_H6 = `${1.175 * FONT_SIZE_BASE}rem`; // 15.275px

// $font-sizes: (
//     1: $h1-font-size,
//     // 22.75px
//     2: $h2-font-size,
//     // 19.50px
//     3: $h3-font-size,
//     // 17.55px
//     4: $h4-font-size,
//     // 16.25px
//     5: $h5-font-size,
//     // 14.95px
//     6: $h6-font-size,
//     // 13.95px
//     7: $font-size-base * 0.95,
//     // 12.35px
//     8: $font-size-base * 0.85,
//     // 11.05px
//     9: $font-size-base * 0.75,
//     // 9.75px
//     10: $font-size-base * 0.5,
//     // 6.50px
//     base: $font-size-base,
//     // 13px
//     fluid: 100%,
//     // 100%
//     2x: $font-size-base * 2,
//     // 26px
//     2qx: $font-size-base * 2.25,
//     // 29.25px
//     2hx: $font-size-base * 2.5,
//     // 32.5px
//     2tx: $font-size-base * 2.75,
//     // 35.75px
//     3x: $font-size-base * 3,
//     // 39px
//     3qx: $font-size-base * 3.25,
//     // 42.25px
//     3hx: $font-size-base * 3.5,
//     // 45.5px
//     3tx: $font-size-base * 3.75,
//     // 48.75px
//     4x: $font-size-base * 4,
//     // 52px
//     4qx: $font-size-base * 4.25,
//     // 55.25px
//     4hx: $font-size-base * 4.5,
//     // 58.5px
//     4tx: $font-size-base * 4.75,
//     // 61.75px
//     5x: $font-size-base * 5,
//     // 65px
//     5qx: $font-size-base * 5.25,
//     // 68.25px
//     5hx: $font-size-base * 5.5,
//     // 71.5px
//     5tx: $font-size-base * 5.75 // 74.75px,
// ) !default;

export const BOLD = 500;
export const BOLDER = 600;
export const BOLDEST = 700;
export const NORMAL = 400;
export const LIGHT = 300;

// export const SHADOW_CARD = {
//   shadowColor: SHADOW_COLOR,
//   shadowOffset: {
//     width: 0,
//     height: 2
//   },
//   shadowOpacity: 0.15,
//   shadowRadius: 2.62,
//   elevation: 4
// };
export const SHADOW_DEFAULT = '2px 2px 25px rgba(0, 0, 0, 0.15)';

export const SHADOW_NEUMORPHISM = {
    background: BACKGROUND_WHITE,
    boxShadow: 'inset 5px 5px 9px #d9dfe4, inset -5px -5px 9px #ffffff',
    borderRadius: BORDER_RADIUS_DEFAULT,
};

export const SHADOW_NEUMORPHISM_UP = {
    background: BACKGROUND_WHITE,
    boxShadow: '5px 5px 9px #d9dfe4, -5px -5px 9px #ffffff',
    borderRadius: BORDER_RADIUS_DEFAULT,
};

export const BORDER = '1px solid #E1E3DF';

export const FONT_FAMILY =
    '-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Nunito,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"';
export const HEADER_HEIGHT = 60;
