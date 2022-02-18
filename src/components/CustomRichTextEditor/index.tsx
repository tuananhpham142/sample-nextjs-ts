import axios from '@/api/axios';
import AlignCenter from '@/assets/media/svg/icons/Text/Align-center.svg';
import AlignJustify from '@/assets/media/svg/icons/Text/Align-justify.svg';
import AlignLeft from '@/assets/media/svg/icons/Text/Align-left.svg';
import AlignRight from '@/assets/media/svg/icons/Text/Align-right.svg';
import Bold from '@/assets/media/svg/icons/Text/Bold.svg';
import Itallic from '@/assets/media/svg/icons/Text/Itallic.svg';
import Strikethrough from '@/assets/media/svg/icons/Text/Strikethrough.svg';
import Underline from '@/assets/media/svg/icons/Text/Underline.svg';
import { AxiosErrorCustom, FieldErrors } from '@/models/interfaces/globalInterface';
import { TEXT_PRIMARY_COLOR } from '@/styles/colorPalette';
import { FormHelperText, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { ContentState, convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { get } from 'lodash';
import { Fragment, FunctionComponent, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { Control, Controller, RegisterOptions } from 'react-hook-form';
const useStyles = makeStyles<Theme, CustomRichTextEditorProps>((theme: Theme) => ({
    editorWrapper: {
        // marginTop: '1rem',
    },
    editor: {
        // border: '1px solid #f1f1f1',
        // height: 250,
        // padding: '1rem',
        // overflow: 'scroll',
    },
    editorLinkPopup: {
        height: 'auto',
    },
    editorImagePopup: {
        // left: '-100%',
    },
}));

interface CustomRichTextEditorProps {
    classname: string;
    defaultValue: string;
    onChange: (value: string) => void;
    errors: FieldErrors;
    name: string;
    control: Control<any>;
    isLoading?: boolean;
    disabled?: boolean;
    autoFocus?: boolean;
    rules?: Exclude<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
}
const CustomRichTextEditor: FunctionComponent<CustomRichTextEditorProps> = (props: CustomRichTextEditorProps) => {
    const { onChange, defaultValue, classname, name, errors, control, autoFocus, rules, disabled } = props;
    const classes = useStyles(props);

    const blocksFromHtml = htmlToDraft(defaultValue);

    const { contentBlocks, entityMap } = blocksFromHtml;
    const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
    const [editorState, setEditorState] = useState<EditorState>(EditorState.createWithContent(contentState));
    const [errorMessage, setErrorMessage] = useState<string>('');

    const onEditorStateChange = (event: any) => {
        // editorRef.focus();
        setEditorState(event);
    };

    const handleBlur = () => {
        onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    };

    const uploadImageCallBack = (file: any) => {
        if (file.size > 10000000) {
            setErrorMessage('Your image is way too big..., we only accept image that smaller than 10Mbs');
        } else {
            let data = new FormData();
            data.append('file', file);
            data.append('prefix', 'content');
            data.append('folder', 'blog');

            axios
                .post('/upload-image-s3', data)
                .then((response) => {
                    console.log(response);
                    // setAvatar(response.data.thumbnails);
                })
                .catch((error) => {
                    const result: AxiosErrorCustom<{ errors: string[] }> = error;
                    setErrorMessage(
                        //@ts-ignore
                        result?.response
                            ? result?.response?.data?.message
                            : 'Something happened in our end. Please try again in some mins...',
                    );
                });
        }
    };

    return (
        <Fragment>
            <Controller
                control={control}
                name={name}
                rules={rules}
                render={({ field }) => (
                    <Editor
                        wrapperStyle={{ background: 'white' }}
                        editorStyle={{
                            padding: 12,
                            color: TEXT_PRIMARY_COLOR,
                            fontSize: 15,
                        }}
                        localization={{
                            locale: 'en',
                        }}
                        //@ts-ignore
                        onBlur={handleBlur}
                        editorState={editorState}
                        onEditorStateChange={onEditorStateChange}
                        wrapperClassName={classes.editorWrapper}
                        editorClassName={clsx({
                            [classes.editor]: true,
                            [`${classname}`]: true,
                        })}
                        toolbar={{
                            options: ['inline', 'fontSize', 'fontFamily', 'list', 'textAlign', 'link', 'image'],
                            inline: {
                                inDropdown: false,
                                options: ['bold', 'italic', 'underline', 'strikethrough'],
                                bold: {
                                    className: undefined,
                                    icon: Bold,
                                },
                                italic: {
                                    icon: Itallic,
                                },
                                underline: {
                                    className: undefined,
                                    icon: Underline,
                                },
                                strikethrough: {
                                    className: undefined,
                                    icon: Strikethrough,
                                },
                            },
                            fontSize: {
                                options: [
                                    8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 48, 60,
                                    72,
                                ],
                            },
                            textAlign: {
                                inDropdown: true,
                                options: ['left', 'center', 'right', 'justify'],
                                left: { icon: AlignLeft },
                                center: { icon: AlignCenter },
                                right: { icon: AlignRight },
                                justify: { icon: AlignJustify },
                            },
                            list: {
                                inDropdown: true,
                                options: ['unordered', 'ordered'],
                            },
                            fontFamily: {
                                options: ['Poppins'],
                            },
                            link: {
                                popupClassName: classes.editorLinkPopup,
                            },
                            image: {
                                uploadCallback: uploadImageCallBack,
                                alt: {
                                    present: false,
                                    mandatory: false,
                                },
                                urlEnabled: false,
                                uploadEnabled: true,
                                inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                                defaultSize: {
                                    height: 'auto',
                                    width: 'auto',
                                },
                            },
                        }}
                    />
                )}
            />
            {get(errors, name) && (
                <FormHelperText id='my-helper-text' className={classes.helperText}>
                    {get(errors, name).message}
                </FormHelperText>
            )}
        </Fragment>
    );
};
CustomRichTextEditor.defaultProps = {
    classname: '',
};

export default CustomRichTextEditor;
