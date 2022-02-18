import slice from './slice';

export const { reducer } = slice;

const actions = {
    ...slice.actions,
};

const {
    openGlobalFormDialog,
    closeGlobalFormDialog,
    clearGlobalFormDialog,
    openGlobalInfoDialog,
    closeGlobalInfoDialog,
    clearGlobalInfoDialog,
} = actions;

export type TypesActions = typeof slice.actions;
export type TypesState = ReturnType<typeof reducer>;

export {
    openGlobalFormDialog,
    closeGlobalFormDialog,
    clearGlobalFormDialog,
    openGlobalInfoDialog,
    closeGlobalInfoDialog,
    clearGlobalInfoDialog,
};

export default actions;
