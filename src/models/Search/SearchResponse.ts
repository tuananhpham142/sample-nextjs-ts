import { AccommodationTypeModel } from './SearchModel';
export interface SearchResponse {
    data: Array<any>;
}

export interface DestinationSuggestion {
    id: string;
    name: string;
    icon: string;
    type: AccommodationTypeModel;
    totalResult?: number;
}
