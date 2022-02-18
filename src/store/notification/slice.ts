import { ErrorResponseRTK } from '@/models/interfaces/globalInterface';
import { createSlice } from '@reduxjs/toolkit';
import thunk from './thunk';

interface State {
    isLoading: boolean;
    notifications: Array<any> | undefined;
    errorResponse: ErrorResponseRTK | null;
}

const initialStatePlace: State = {
    isLoading: false,
    notifications: [],
    errorResponse: null,
};

const auth = createSlice({
    name: 'place',
    initialState: initialStatePlace,
    reducers: {
        updateStateNotifications: (state, action) => {
            const currentState: State = JSON.parse(JSON.stringify(state));
            return {
                ...currentState,
                notifications: action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        //Get notifications
        builder.addCase(thunk.getNotifications.pending, (state, action) => {
            return {
                ...state,
                isLoading: true,
                errorResponse: null,
            };
        });
        builder.addCase(thunk.getNotifications.fulfilled, (state, action) => {
            return {
                ...state,
                isLoading: false,
                notifications: action.payload.data,
            };
        });
        builder.addCase(thunk.getNotifications.rejected, (state, action) => {
            return { ...state };
        });
        //Mark a notification as read
        builder.addCase(thunk.markAsReadNotification.pending, (state, action) => {
            return {
                ...state,
                isLoading: true,
                errorResponse: null,
            };
        });
        builder.addCase(thunk.markAsReadNotification.fulfilled, (state, action) => {
            return {
                ...state,
                isLoading: false,
                notifications: action.payload.data,
            };
        });
        builder.addCase(thunk.markAsReadNotification.rejected, (state, action) => {
            return { ...state };
        });
        //Mark all notification read
        builder.addCase(thunk.markAllRead.pending, (state, action) => {
            return {
                ...state,
                isLoading: true,
                errorResponse: null,
            };
        });
        builder.addCase(thunk.markAllRead.fulfilled, (state, action) => {
            return {
                ...state,
                isLoading: false,
                notifications: action.payload.data,
            };
        });
        builder.addCase(thunk.markAllRead.rejected, (state, action) => {
            return { ...state };
        });
        //Delete notifications
        builder.addCase(thunk.deleteNotification.pending, (state, action) => {
            return {
                ...state,
                isLoading: true,
                errorResponse: null,
            };
        });
        builder.addCase(thunk.deleteNotification.fulfilled, (state, action) => {
            return {
                ...state,
                isLoading: false,
                notifications: action.payload.data,
            };
        });
        builder.addCase(thunk.deleteNotification.rejected, (state, action) => {
            return { ...state };
        });
        //Accept notification
        builder.addCase(thunk.acceptNotification.pending, (state, action) => {
            return {
                ...state,
                isLoading: true,
                errorResponse: null,
            };
        });
        builder.addCase(thunk.acceptNotification.fulfilled, (state, action) => {
            return {
                ...state,
                isLoading: false,
                notifications: action.payload.data,
            };
        });
        builder.addCase(thunk.acceptNotification.rejected, (state, action) => {
            return { ...state };
        });
        //Decline notification
        builder.addCase(thunk.declineNotification.pending, (state, action) => {
            return {
                ...state,
                isLoading: true,
                errorResponse: null,
            };
        });
        builder.addCase(thunk.declineNotification.fulfilled, (state, action) => {
            return {
                ...state,
                isLoading: false,
                notifications: action.payload.data,
            };
        });
        builder.addCase(thunk.declineNotification.rejected, (state, action) => {
            return { ...state };
        });
    },
});

export default auth;
