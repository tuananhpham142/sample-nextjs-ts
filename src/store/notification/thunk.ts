import { BaseAxiosResponse } from '@/models/interfaces/globalInterface';
import { PlaceListRequest } from '@/models/Places/PlaceRequest';
import { PlaceDetailItem } from '@/models/Places/PlaceResponse';
import { createAsyncThunk } from '@reduxjs/toolkit';
import services from './services';

const getNotifications = createAsyncThunk<BaseAxiosResponse<Array<PlaceDetailItem>>, PlaceListRequest, {}>(
    'notification/getNotifications',
    async (payload: PlaceListRequest, { rejectWithValue }) => {
        try {
            const response = await services.getNotifications(payload);
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
const markAsReadNotification = createAsyncThunk<BaseAxiosResponse<Array<PlaceDetailItem>>, PlaceListRequest, {}>(
    'notification/markAsReadNotification',
    async (payload: PlaceListRequest, { rejectWithValue }) => {
        try {
            const response = await services.markAsReadNotification(payload);
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
const markAllRead = createAsyncThunk<BaseAxiosResponse<Array<PlaceDetailItem>>, PlaceListRequest, {}>(
    'notification/markAllRead',
    async (payload: PlaceListRequest, { rejectWithValue }) => {
        try {
            const response = await services.markAllRead(payload);
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
const deleteNotification = createAsyncThunk<BaseAxiosResponse<Array<PlaceDetailItem>>, PlaceListRequest, {}>(
    'notification/deleteNotification',
    async (payload: PlaceListRequest, { rejectWithValue }) => {
        try {
            const response = await services.deleteNotification(payload);
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
const acceptNotification = createAsyncThunk<BaseAxiosResponse<Array<PlaceDetailItem>>, PlaceListRequest, {}>(
    'notification/acceptNotification',
    async (payload: PlaceListRequest, { rejectWithValue }) => {
        try {
            const response = await services.acceptNotification(payload);
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
const declineNotification = createAsyncThunk<BaseAxiosResponse<Array<PlaceDetailItem>>, PlaceListRequest, {}>(
    'otification/declineNotification',
    async (payload: PlaceListRequest, { rejectWithValue }) => {
        try {
            const response = await services.declineNotification(payload);
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

export default {
    getNotifications,
    markAsReadNotification,
    markAllRead,
    deleteNotification,
    acceptNotification,
    declineNotification,
};
