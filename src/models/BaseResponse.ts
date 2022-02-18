import { AxiosRequestConfig } from 'axios';
import { BaseAxiosResponse } from './interfaces/globalInterface';

export interface BaseResponse<T = any> {
    Code: number;
    Detail: number;
    Data: T;
    Message: string;
}

export interface TransformerInclude<T> {
    data: T;
}

export type IsArray<E, T> = E extends any[] ? T[] : T;

export interface TypeSelect {
    id: number;
    value: string;
}

export interface ErrorValidate<E = any, T = Array<any>> {
    errors: PartialType<E, T>;
    error: string;
    exception: string;
}

export interface AxiosErrorCustom<T = any> extends Error {
    config: AxiosRequestConfig;
    code?: string;
    request?: any;
    response?: AxiosRes<T>;
    isAxiosError?: boolean;
}

/**
 * Pagination from response
 */
export interface PaginationInterface {
    currentPage: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    lastPage: number;
    length: number;
    nextPage: number;
    previousPage: number;
}

export interface AxiosRes<T> extends BaseAxiosResponse<BaseResponse<T>> {}

export interface AxiosValidateError<T, E = any> extends AxiosRes<ErrorValidate<T, E>> {}

type PartialType<E, T = any> = {
    [P in keyof E]: T;
};

export type AddExtraType<Interface, Type> = {
    [I in keyof Interface]: Interface[I] | Type;
};

export type ErrorResponse = {
    requestId: string;
    rejectedWithValue: boolean;
    requestStatus: 'rejected';
    aborted: boolean;
    condition: boolean;
};
