import { BaseAxiosResponse } from '@/models/interfaces/globalInterface';
import { PlaceDetailRequest, PlaceListRequest } from '@/models/Places/PlaceRequest';
import { PlaceDetailItem } from '@/models/Places/PlaceResponse';
import { createAsyncThunk } from '@reduxjs/toolkit';
import services from './services';

const getPlaceDetail = createAsyncThunk<BaseAxiosResponse<PlaceDetailItem>, PlaceDetailRequest, {}>(
    'place/getDetail',
    async (payload: PlaceDetailRequest, { rejectWithValue }) => {
        try {
            const response = await services.getPlaceDetail(payload);
            return response;
        } catch (err: any) {
            return rejectWithValue({
                status: err.status,
                statusText: err.statusText,
                data: err.data,
            });
        }
    },
);

const getPlaceList = createAsyncThunk<BaseAxiosResponse<Array<PlaceDetailItem>>, PlaceListRequest, {}>(
    'place/getList',
    async (payload: PlaceListRequest, { rejectWithValue }) => {
        try {
            const response = await services.getPlaceList(payload);
            return response;
        } catch (err: any) {
            console.log(err);
            return rejectWithValue({
                status: err.status,
                statusText: err.statusText,
                data: err.data,
            });
        }
    },
);

export default { getPlaceDetail, getPlaceList };
