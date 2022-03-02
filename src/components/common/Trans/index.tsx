import React, { FC, Fragment } from 'react';
import { useTranslation } from 'react-i18next';

interface IProps {
    WrapperComponent?: React.ElementType;
    defaultContent: string;
    className?: string;
    translationKey: string;
    section: string;
    [key: string]: any; //props of WrapperComponent
}

const Trans: FC<IProps> = (props: IProps) => {
    const { WrapperComponent, defaultContent, translationKey, section, className, ...otherProps } = props;
    const { t, i18n } = useTranslation();

    return (
        <Fragment>
            {WrapperComponent ? (
                <WrapperComponent {...className} {...otherProps}>
                    {i18n.exists(`${section}:${translationKey}`) ? t(`${section}:${translationKey}`) : defaultContent}
                </WrapperComponent>
            ) : i18n.exists(`${section}:${translationKey}`) ? (
                t(`${section}:${translationKey}`)
            ) : (
                defaultContent
            )}
        </Fragment>
    );
};

Trans.defaultProps = {
    WrapperComponent: 'span',
};
export default Trans;
