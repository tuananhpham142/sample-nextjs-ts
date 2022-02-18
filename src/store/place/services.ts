import axios from '@/api/axios';
import { BaseAxiosResponse } from '@/models/interfaces/globalInterface';
import { PlaceDetailRequest, PlaceListRequest } from '@/models/Places/PlaceRequest';
import { PlaceDetailItem } from '@/models/Places/PlaceResponse';

const getPlaceDetail = async (
    body: PlaceDetailRequest,
): Promise<BaseAxiosResponse<PlaceDetailItem>> =>
    axios.post<BaseAxiosResponse<PlaceDetailItem>>('place/getDetails', body).then(res => res.data);

const getPlaceList = async (
    body: PlaceListRequest,
): Promise<BaseAxiosResponse<Array<PlaceDetailItem>>> =>
    axios
        .post<BaseAxiosResponse<Array<PlaceDetailItem>>>('place/get-by-page', body)
        .then(res => res.data);

export default { getPlaceDetail, getPlaceList };
