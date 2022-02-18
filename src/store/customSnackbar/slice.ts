import { SnackbarInterface } from '@/models/interfaces/globalInterface';
import { createSlice } from '@reduxjs/toolkit';
interface SnackbarState extends SnackbarInterface {}

const initialState: SnackbarState = {
    open: false,
    message: '',
    type: 'info',
};

const store = createSlice({
    name: 'moduleName',
    initialState: initialState,
    reducers: {
        showSnackbar: (state, action) => {
            const currentState = JSON.parse(JSON.stringify(state));
            const { message, type }: SnackbarState = action.payload;
            return {
                ...currentState,
                message,
                type,
                open: true,
            };
        },
        hideSnackbar: (state, action) => {
            const currentState = JSON.parse(JSON.stringify(state));
            return {
                ...currentState,
                ...initialState,
            };
        },
        clearSnackbar: (state, action) => {
            const currentState = JSON.parse(JSON.stringify(state));
            return {
                ...currentState,
                ...initialState,
            };
        },
    },
});

export default store;
