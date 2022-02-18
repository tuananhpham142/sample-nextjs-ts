import {
    FormTypeWithData,
    GlobalDialogFormDataType,
    GlobalDialogInfoDataType,
    InfoType,
} from '@/models/interfaces/globalDialogInterface';
import { createSlice } from '@reduxjs/toolkit';

interface AppFormState {
    // Form dialog
    initialFormData: GlobalDialogFormDataType;
    openFormDialog: boolean;
    formType: FormTypeWithData;
    // Info dialog
    infoType: InfoType;
    openInfoDialog: boolean;
    initialInfoData: GlobalDialogInfoDataType;
    isLoading: boolean;
}

const initialState: AppFormState = {
    initialFormData: {
        auth: null,
        search: null,
    },
    isLoading: false,
    openFormDialog: false,
    formType: 'auth',
    // Info Dialog
    infoType: 'settings',
    openInfoDialog: false,
    initialInfoData: null,
};

const appForm = createSlice({
    name: 'appForm',
    initialState: initialState,
    reducers: {
        openGlobalFormDialog: (state, action) => {
            const currentState = JSON.parse(JSON.stringify(state));
            const { formType, data }: { formType: FormTypeWithData; data: Partial<GlobalDialogFormDataType> } =
                action.payload;

            return {
                ...currentState,
                formType,
                initialFormData: {
                    ...state.initialFormData,
                    [formType]: data,
                },
                open: true,
            };
        },
        closeGlobalFormDialog: (state, action) => {
            const currentState = JSON.parse(JSON.stringify(state));
            return {
                ...currentState,
                ...initialState,
            };
        },
        clearGlobalFormDialog: (state, action) => {
            const currentState = JSON.parse(JSON.stringify(state));
            return {
                ...currentState,
                ...initialState,
            };
        },
        // Info dialog
        openGlobalInfoDialog: (state, action) => {
            const currentState = JSON.parse(JSON.stringify(state));
            const { infoType, data }: { infoType: InfoType; data: GlobalDialogInfoDataType } = action.payload;

            return {
                ...currentState,
                infoType,
                inintialInfoData: data,
                openInfoDialog: true,
            };
        },
        closeGlobalInfoDialog: (state, action) => {
            const currentState = JSON.parse(JSON.stringify(state));
            return {
                ...currentState,
                infoType: 'settings',
                openInfoDialog: false,
                inintialInfoData: undefined,
            };
        },
        clearGlobalInfoDialog: (state, action) => {
            const currentState = JSON.parse(JSON.stringify(state));
            return {
                ...currentState,
                infoType: 'settings',
                openInfoDialog: false,
                inintialInfoData: undefined,
            };
        },
    },
});

export default appForm;
