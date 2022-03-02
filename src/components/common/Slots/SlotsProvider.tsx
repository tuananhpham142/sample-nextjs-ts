import { createContext, FC, ReactElement, ReactNode, useContext, useMemo } from 'react';

interface SlotProps {
    slot?: string;
}

interface SlotProviderProps {
    slots?: any;
    children: ReactElement | ReactNode;
}

let SlotContext = createContext<any>(null);

export function useSlotProps<T>(props: T, defaultSlot?: string): T {
    let slot = (props as SlotProps).slot || defaultSlot;
    //@ts-ignore
    let { [slot]: slotProps = {} } = useContext(SlotContext) || {};
    return Object.assign(slotProps, props);
}

export const SlotProvider: FC<SlotProviderProps> = (props: SlotProviderProps) => {
    let parentSlots = useContext(SlotContext) || {};
    let { slots = {}, children } = props;

    // Merge props for each slot from parent context and props
    let value = useMemo(
        () =>
            Object.keys(parentSlots)
                .concat(Object.keys(slots))
                .reduce(
                    (o, p) => ({
                        ...o,
                        [p]: Object.assign(parentSlots[p] || {}, slots[p] || {}),
                    }),
                    {},
                ),
        [parentSlots, slots],
    );

    return <SlotContext.Provider value={value}>{children}</SlotContext.Provider>;
};
