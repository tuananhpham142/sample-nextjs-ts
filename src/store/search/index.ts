import slice from './slice';
import thunk from './thunk';

export const { reducer } = slice;

const actions = {
    ...slice.actions,
    ...thunk,
};
const { updateStateFilters, updateStateListings } = actions;

export type TypesActions = typeof slice.actions;
export type TypesState = ReturnType<typeof reducer>;

export { updateStateFilters, updateStateListings };

export default actions;
