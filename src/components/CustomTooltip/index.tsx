import { PlacementVariant } from '@/models/interfaces/globalInterface';
import { BACKGROUND_WHITE } from '@/styles/colorPalette';
import { Tooltip } from '@mui/material';
import { withStyles } from '@mui/styles';
import { FunctionComponent, ReactNode } from 'react';

interface CustomTooltipInterface {
    children: ReactNode;
    title: ReactNode | string;
    placement: PlacementVariant;
    titleContainerClass?: string;
}

export const HtmlTooltip = withStyles(() => ({
    tooltip: {
        boxShadow: '0px 0px 20px 0px rgb(0 0 0 / 15%)',
        maxWidth: 300,
        padding: '0.75rem 1rem',
        textAlign: 'center',
        backgroundColor: `${BACKGROUND_WHITE} !important`,
        borderRadius: 4,
    },
}))(Tooltip);

const CustomTooltip: FunctionComponent<CustomTooltipInterface> = (props: CustomTooltipInterface) => {
    const { children, title, placement, titleContainerClass } = props;

    return (
        <HtmlTooltip placement={placement} title={<div className={titleContainerClass}>{title}</div>}>
            <div>{children}</div>
        </HtmlTooltip>
    );
};

export default CustomTooltip;
