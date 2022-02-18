export type MediaItem = {
    alt?: string;
    title?: string;
    thumbnail: string;
    type: 'video' | 'image';
    src: string;
    width?: string | number;
    height?: string | number;
    direction?: 'vertical' | 'horizontal';
};
export type VideoItem = {
    alt?: string;
    title?: string;
    thumbnail: string;
    type: 'video';
    src: string;
    width?: string | number;
    height?: string | number;
    direction?: 'vertical' | 'horizontal';
};
