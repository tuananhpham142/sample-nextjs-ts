import slice from './slice';
import thunk from './thunk';

export const { reducer } = slice;

const actions = {
    ...slice.actions,
    ...thunk,
};
const { getPlaceDetail, getPlaceList, updateStatePlaces, updateStatePlace } = actions;

export type TypesActions = typeof slice.actions;
export type TypesState = ReturnType<typeof reducer>;

export { getPlaceDetail, getPlaceList, updateStatePlaces, updateStatePlace };

export default actions;
