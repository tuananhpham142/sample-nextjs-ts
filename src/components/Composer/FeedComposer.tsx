// import { THEME_COLOR_DANGER } from '@/styles/colorPalette';
import HashtagComponent from '@/components/Composer/components/HashtagComponent';
import MentionComponent from '@/components/Composer/components/MentionComponent';
import { MentionList } from '@/components/Composer/components/MentionList';
import HaloButton from '@/components/HaloButton';
import OverlaySymbol from '@/components/ViewGeneralComponent/OverlaySymbol';
import useLayoutEffectWithPrevDeps from '@/hooks/useLayoutEffectWithPrevDeps';
import { urlExtractor } from '@/utils/string.utils';
import Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';
import createEmojiPlugin from '@draft-js-plugins/emoji';
import '@draft-js-plugins/emoji/lib/plugin.css';
import createHashtagPlugin from '@draft-js-plugins/hashtag';
import createLinkifyPlugin from '@draft-js-plugins/linkify';
import createMentionPlugin, { defaultSuggestionsFilter, MentionData } from '@draft-js-plugins/mention';
import clsx from 'clsx';
import { convertToRaw } from 'draft-js';
import dynamic from 'next/dynamic';
import React, { FC, Fragment, useCallback, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import HaloMediaUpload from '../HaloMediaUpload';

const SelectAudience = dynamic(() => import('./components/SelectAudience'), {
    ssr: false,
});
const SlotWrapper = dynamic(() => import('@/components/common/Slots/SlotWrapper'), {
    ssr: false,
});
const FeedActionBar = dynamic(() => import('./components/FeedActionBar'), {
    ssr: false,
});
const FeedActionContent = dynamic(() => import('./components/FeedActionContent'), {
    ssr: false,
});
const PlaceCheckin = dynamic(() => import('./components/PlaceCheckin'), {
    ssr: false,
});
const TagPeople = dynamic(() => import('./components/TagPeople'), {
    ssr: false,
});

interface IProps {
    text: string;
    listAction: Array<'emoji' | 'media' | 'tagPeople' | 'checkin' | 'audience'>;
}

const FeedComposer: FC<IProps> = (props: IProps) => {
    const { text, listAction } = props;
    const editorRef = useRef();
    const { t } = useTranslation();
    const [suggestions, setSuggestions] = useState<Array<MentionData>>([]);
    const [editorState, setEditorState] = useState(() => createEditorStateWithText(text));
    const [open, setOpen] = useState<boolean>(false);
    const [opening, setOpening] = useState<'editor' | 'emoji' | 'media' | 'tagPeople' | 'checkin' | 'audience'>(
        'editor',
    );
    const [metaValue, setMetaValue] = useState<{ img: string; title: string; description: string } | null>(null);

    // Hashtag;
    const hashtagPlugin = createHashtagPlugin({
        hashtagComponent: HashtagComponent,
    });
    // Emoji
    const emojiPlugin = createEmojiPlugin({
        theme: {
            emojiSelectButton: 'border-0 bg-transparent p-0',
        },
        selectButtonContent: (
            <OverlaySymbol
                symbolSize={30}
                hasTooltip
                tooltipTitle={'Emoji'}
                icon={'flaticon-paper-plane'}
                variant='circle'
                size={'1x'}
                color={'light-warning'}
            />
        ),
        useNativeArt: true,
    });
    const { EmojiSuggestions, EmojiSelect } = emojiPlugin;
    // Mention
    const mentionPlugin = createMentionPlugin({
        entityMutability: 'IMMUTABLE',
        mentionPrefix: '@',
        supportWhitespace: true,
        mentionComponent: MentionComponent,
        popperOptions: {
            placement: 'auto',
            strategy: 'absolute',
        },
    });
    //
    const linkifyPlugin = createLinkifyPlugin({
        component(props) {
            // eslint-disable-next-line no-alert, jsx-a11y/anchor-has-content
            return <a {...props} className='hoverable' onClick={() => alert('Clicked on Link!')} />;
        },
        // customExtractLinks: (text: string) => {
        //     const url =
        //     return null
        // }
    });

    const { MentionSuggestions, plugins } = useMemo(() => {
        // eslint-disable-next-line no-shadow
        const { MentionSuggestions } = mentionPlugin;
        // eslint-disable-next-line no-shadow
        const plugins = [mentionPlugin, hashtagPlugin, emojiPlugin, linkifyPlugin];
        return { plugins, MentionSuggestions };
    }, []);

    const focus = useCallback(() => {
        //@ts-ignore
        editorRef?.current?.focus();
    }, [editorRef]);

    const onOpenChange = useCallback((_open: boolean) => {
        setOpen(_open);
    }, []);

    const onSearchChange = useCallback(({ value }: { value: string }) => {
        setSuggestions(defaultSuggestionsFilter(value, []));
    }, []);

    const handleOpen = useCallback((key: 'editor' | 'emoji' | 'media' | 'tagPeople' | 'checkin' | 'audience') => {
        setOpening(key);
    }, []);

    // const getPageTitle = () => {
    //     return t(`${'selected'}`);
    // };

    useLayoutEffectWithPrevDeps(() => {
        const rawContent = convertToRaw(editorState.getCurrentContent())
            .blocks.map((block) => (!block.text.trim() && '\n') || block.text)
            .join('\n');
        const handler = setTimeout(() => {
            const url = urlExtractor(rawContent, 'FIRST');
            console.log(url);
            if (url) {
                // const metaTags = await dataScrapingApi(url);
                // setMetaValue(metaTags);
            }
            setMetaValue(null);
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [editorState]);

    return (
        <Fragment>
            {opening !== 'editor' && (
                <HaloButton
                    id='somebutton'
                    height={100}
                    size='md'
                    onClick={() => {
                        setOpening('editor');
                    }}
                    circle={false}
                    variant={'contained'}
                    color={'primary'}
                    title={'Back'}
                />
            )}
            <div
                className={clsx('card card-custom mt-8 shadow-md p-4', {
                    ['d-none']: opening !== 'editor',
                })}
                style={{ minHeight: 200, cursor: 'text' }}
                onClick={focus}
            >
                <Editor
                    defaultKeyBindings
                    defaultKeyCommands
                    editorState={editorState}
                    onChange={(newEditorState) => {
                        setEditorState(newEditorState);
                    }}
                    plugins={plugins}
                    ref={(editor: any) => (editorRef.current = editor)}
                />
                <EmojiSuggestions />

                <MentionSuggestions
                    open={open}
                    onOpenChange={onOpenChange}
                    suggestions={suggestions}
                    onSearchChange={onSearchChange}
                    onAddMention={() => {
                        // get the mention object selected
                    }}
                    entryComponent={MentionList}
                    renderEmptyPopup
                    popoverContainer={({ children }) => (
                        <div className='mt-8 shadow-md p-4'>
                            {suggestions.length > 0 ? (
                                children
                            ) : (
                                <div className='fs-7 text-muted fw-bold text-center'>There are no people here...</div>
                            )}
                        </div>
                    )}
                />
            </div>
            <FeedActionContent slotName={listAction}>
                {/* <SlotWrapper slot='title'>
                    <SectionTitle title={getPageTitle} containerClass='mb-4' alignment='center' />
                </SlotWrapper> */}
                {opening === 'media' && listAction.includes('media') && (
                    <SlotWrapper slot='media'>
                        <HaloMediaUpload hasBorder={false} noPadding shape='square' shadow={'md'} className='mt-4' />
                    </SlotWrapper>
                )}
                {opening === 'tagPeople' && listAction.includes('tagPeople') && (
                    <SlotWrapper slot='tagPeople'>
                        <TagPeople />
                    </SlotWrapper>
                )}
                {opening === 'checkin' && listAction.includes('checkin') && (
                    <SlotWrapper slot='checkin'>
                        <PlaceCheckin />
                    </SlotWrapper>
                )}
                {opening === 'audience' && listAction.includes('audience') && (
                    <SlotWrapper slot='audience'>
                        <SelectAudience />
                    </SlotWrapper>
                )}
            </FeedActionContent>
            <FeedActionBar slotName={listAction}>
                <SlotWrapper slot='emoji'>
                    <EmojiSelect />
                </SlotWrapper>
                <SlotWrapper slot='media'>
                    <OverlaySymbol
                        className='ms-2'
                        onClick={() => handleOpen('media')}
                        symbolSize={30}
                        hasTooltip
                        tooltipTitle={'Media Upload'}
                        title={'M'}
                        variant='circle'
                        size={'1x'}
                        color={'success'}
                    />
                </SlotWrapper>
                <SlotWrapper slot='tagPeople'>
                    <OverlaySymbol
                        className='ms-2'
                        onClick={() => handleOpen('tagPeople')}
                        symbolSize={30}
                        hasTooltip
                        tooltipTitle={'Tag People'}
                        title={'T'}
                        variant='circle'
                        size={'1x'}
                        color={'primary'}
                    />
                </SlotWrapper>
                <SlotWrapper slot='checkin'>
                    <OverlaySymbol
                        className='ms-2'
                        onClick={() => handleOpen('checkin')}
                        symbolSize={30}
                        hasTooltip
                        tooltipTitle={'Check in'}
                        title={'C'}
                        variant='circle'
                        size={'1x'}
                        color={'danger'}
                    />
                </SlotWrapper>
                <SlotWrapper slot='audience'>
                    <OverlaySymbol
                        className='ms-2'
                        onClick={() => handleOpen('audience')}
                        symbolSize={30}
                        hasTooltip
                        tooltipTitle={'Select audience'}
                        title={'A'}
                        variant='circle'
                        size={'1x'}
                        color={'info'}
                    />
                </SlotWrapper>
            </FeedActionBar>
        </Fragment>
    );
};
export default FeedComposer;
