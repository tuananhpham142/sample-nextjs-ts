import slice from './slice';

export const { reducer } = slice;

const actions = {
    ...slice.actions,
};

const { showSnackbar, hideSnackbar, clearSnackbar } = actions;

export type TypesActions = typeof slice.actions;
export type TypesState = ReturnType<typeof reducer>;

export { showSnackbar, hideSnackbar, clearSnackbar };

export default actions;
