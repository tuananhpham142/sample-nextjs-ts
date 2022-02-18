import { ErrorResponseRTK } from '@/models/interfaces/globalInterface';
import { PlaceListRequest } from '@/models/Places/PlaceRequest';
import { PlaceDetailItem } from '@/models/Places/PlaceResponse';
import { createSlice } from '@reduxjs/toolkit';
import thunk from './thunk';

interface State {
    isLoading: boolean;
    places: Array<PlaceDetailItem> | [];
    place: PlaceDetailItem | null;
    errorResponse: ErrorResponseRTK | null;
    filters: PlaceListRequest;
}

const initialStatePlace: State = {
    isLoading: false,
    places: [],
    place: null,
    errorResponse: null,
    filters: {
        FieldName: '',
        Key: '',
        Orderby: 'desc',
        PageNumber: 1,
        Status: 0,
        PageSize: 10,
        PlaceTypes: [],
        Types: [],
    },
};

const auth = createSlice({
    name: 'place',
    initialState: initialStatePlace,
    reducers: {
        updateStatePlaces: (state, action) => {
            const currentState = JSON.parse(JSON.stringify(state));
            return {
                ...currentState,
                places: action.payload,
            };
        },
        updateStatePlace: (state, action) => {
            const currentState = JSON.parse(JSON.stringify(state));
            return {
                ...currentState,
                place: action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        //Get list places
        builder.addCase(thunk.getPlaceList.pending, (state, action) => {
            return {
                ...state,
                isLoading: true,
                errorResponse: null,
            };
        });
        builder.addCase(thunk.getPlaceList.fulfilled, (state, action) => {
            return {
                ...state,
                isLoading: false,
                places: action.payload?.data || [],
            };
        });
        builder.addCase(thunk.getPlaceList.rejected, (state, action) => {
            return { ...state };
        });

        //Get detail place
        builder.addCase(thunk.getPlaceDetail.pending, (state, action) => {
            return {
                ...state,
                isLoading: true,
                errorResponse: null,
            };
        });
        builder.addCase(thunk.getPlaceDetail.fulfilled, (state, action) => {
            return {
                ...state,
                isLoading: false,
                place: action.payload?.data || null,
            };
        });
        builder.addCase(thunk.getPlaceDetail.rejected, (state, action) => {
            return {
                ...state,
            };
        });
    },
});

export default auth;
