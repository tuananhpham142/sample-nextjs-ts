import slice from './slice';
import thunk from './thunk';

export const { reducer } = slice;

const actions = {
    ...slice.actions,
    ...thunk,
};
const {
    getNotifications,
    markAsReadNotification,
    markAllRead,
    deleteNotification,
    acceptNotification,
    declineNotification,
} = actions;

export type TypesActions = typeof slice.actions;
export type TypesState = ReturnType<typeof reducer>;

export {
    getNotifications,
    markAsReadNotification,
    markAllRead,
    deleteNotification,
    acceptNotification,
    declineNotification,
};

export default actions;
