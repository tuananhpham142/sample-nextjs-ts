import { PaginationInterface } from '@/models/interfaces/globalInterface';
import { createSlice } from '@reduxjs/toolkit';

interface State {
    isLoading: boolean;
    filters: any;
    listings: Array<any>;
    pagination: PaginationInterface;
}

const initialState: State = {
    isLoading: false,
    listings: [],
    filters: null,
    pagination: {
        currentPage: 1,
        hasNextPage: true,
        hasPreviousPage: false,
        lastPage: 10,
        nextPage: 2,
        previousPage: 1,
        length: 10,
    },
};

const search = createSlice({
    name: 'search',
    initialState: initialState,
    reducers: {
        updateStateFilters: (state, action) => {
            const currentState = JSON.parse(JSON.stringify(state));
            return {
                ...currentState,
                filters: {
                    ...currentState.filters,
                    ...action.payload,
                },
            };
        },
        updateStateListings: (state, action) => {
            const currentState = JSON.parse(JSON.stringify(state));
            return {
                ...currentState,
                listings: action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        //Get list places
        //Get detail place
    },
});

export default search;
