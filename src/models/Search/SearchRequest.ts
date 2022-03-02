import { SearchFilterModel } from './SearchModel';

export interface SearchRequest {
    filter: SearchFilterModel;
    page: number;
    perPage: number;
}
