import axios from '@/api/axios';
import { BaseAxiosResponse } from '@/models/interfaces/globalInterface';

const getNotifications = async (body: any): Promise<BaseAxiosResponse<any>> =>
    axios.get<BaseAxiosResponse<any>>('notification/getNotifications', body).then((res) => res.data);
const markAsReadNotification = async (body: any): Promise<BaseAxiosResponse<any>> =>
    axios.post<BaseAxiosResponse<any>>('notification/markAsReadNotification', body).then((res) => res.data);
const markAllRead = async (body: any): Promise<BaseAxiosResponse<any>> =>
    axios.post<BaseAxiosResponse<any>>('notification/markAllRead', body).then((res) => res.data);
const deleteNotification = async (body: any): Promise<BaseAxiosResponse<any>> =>
    axios.post<BaseAxiosResponse<any>>('notification/deleteNotification', body).then((res) => res.data);
const acceptNotification = async (body: any): Promise<BaseAxiosResponse<any>> =>
    axios.post<BaseAxiosResponse<any>>('notification/acceptNotification', body).then((res) => res.data);
const declineNotification = async (body: any): Promise<BaseAxiosResponse<any>> =>
    axios.post<BaseAxiosResponse<any>>('notification/declineNotification', body).then((res) => res.data);

export default {
    getNotifications,
    markAsReadNotification,
    markAllRead,
    deleteNotification,
    acceptNotification,
    declineNotification,
};
