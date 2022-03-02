import { Moment } from 'moment';
export type StayingFor = 'WEEK' | 'WEEKEND' | 'MONTH' | 'DAY' | 'PLAN' | 'FLEXIBLE';
export type SearchFilterModel = {
    keyword: string;
    startDate: string | Moment;
    endDate: string | Moment;
    location?: {
        id: string;
        type: 'LISTING' | 'WARD' | 'CITY' | 'DISTRICT' | 'COUNTRY' | 'STREET' | undefined;
        name: string;
        owner?: string;
        latitude: string;
        longitude: string;
    };
    stayingFor?: StayingFor;
    startingWithin?: Array<{ startTime: string | Moment; endTime: string | Moment }>;
    external?: ExternalSearchFilterModel;
    sorting?: {
        direction: 'asc' | 'desc';
        type: 'PRICE' | 'RATING' | 'BOOKING' | 'REVIEW';
    };
};

export type AccommodationTypeModel =
    | 'HOMESTAY'
    | 'HOTEL'
    | 'MOTORHOME'
    | 'RESORT'
    | 'FARM'
    | 'CABIN'
    | 'TREEHOUSE'
    | 'LUXURY'
    | 'DOMES'
    | 'CAMPERS'
    | 'BOATS';

export type ExternalSearchFilterModel = {
    accommodationType: AccommodationTypeModel;
    typeOfPlace: 'ENTIRE_PLACE' | 'PRIVATE_ROOM' | 'HOTEL_ROOM' | 'SHARED_ROOM';
    adults: number;
    childs: number;
    infants: number;
    pets: number;
    bathrooms: number;
    bedrooms: number;
    beds: number;
    amenities: Array<{ id: string; name: string }>;
    facilities: Array<{ id: string; name: string }>;
    cancelationPolicy: 'FLEXIBLE' | 'STRICT';
    instantBooking: Boolean;
    rating: {
        min: number;
        max: number;
    };
    price: {
        min: number;
        max: number;
    };
    allowSmoking: boolean;
    smokeDetector: boolean;
    preferLanguage: string;
    wifiPocket: boolean;
    options: Object;
};

export type MotorHomeOption = {
    withDriver: boolean;
};

export type CamperOptions = {
    sleepingBag: number;
    tourGuide: boolean;
};
