import { ClassNameMap } from "@mui/styles";
import { AxiosRequestConfig } from "axios";
import { ReactNode } from "react";
import {
  Control,
  DeepMap,
  FieldValues,
  Message,
  MultipleFieldErrors,
  Ref,
} from "react-hook-form";
import OptionTypeBase from "react-select";
import { Color, ComponentStatusVariant, Size } from "./theme";
// import { ComponentStatusVariant } from './theme';

export interface BaseResponse<T = any> {
  code: number;
  status: string;
  data: T;
  message: string;
  meta?: PaginationInterface;
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

export interface AxiosValidateError<T, E = any>
  extends AxiosRes<ErrorValidate<T, E>> {}

type PartialType<E, T = any> = {
  [P in keyof E]: T;
};

export type AddExtraType<Interface, Type> = {
  [I in keyof Interface]: Interface[I] | Type;
};

export type ErrorResponse = {
  // arg: BlogDetailRequest;
  requestId: string;
  rejectedWithValue: boolean;
  requestStatus: "rejected";
  aborted: boolean;
  condition: boolean;
};

export type MetaTags = {
  title: string;
  description: string;
  image: string;
  url: string;
  canonical?: string;
};

export type FieldArray<
  TFieldArrayValues extends FieldValues = FieldValues,
  TKeyName extends string = "id"
> = TFieldArrayValues & Record<TKeyName, string>;

export type UseFieldArrayOptions<
  TKeyName extends string = "id",
  TControl extends Control = Control
> = {
  name: string;
  keyName?: TKeyName;
  control?: TControl;
};

export type UseFieldArrayMethods<
  TFieldArrayValues extends FieldValues = FieldValues,
  TKeyName extends string = "id"
> = {
  swap: (indexA: number, indexB: number) => void;
  move: (indexA: number, indexB: number) => void;
  prepend: (
    value: Partial<TFieldArrayValues> | Partial<TFieldArrayValues>[],
    shouldFocus?: boolean
  ) => void;
  append: (
    value: Partial<TFieldArrayValues> | Partial<TFieldArrayValues>[],
    shouldFocus?: boolean
  ) => void;
  remove: (index?: number | number[]) => void;
  insert: (
    index: number,
    value: Partial<TFieldArrayValues> | Partial<TFieldArrayValues>[],
    shouldFocus?: boolean
  ) => void;
  fields: Partial<FieldArray<TFieldArrayValues, TKeyName>>[];
};
export interface ErrorResponseRTK {
  error: any;
  meta: any;
  payload: any;
  type: string;
}

export type FieldErrors<TFieldValues extends FieldValues = FieldValues> =
  DeepMap<TFieldValues, FieldError>;

export type FieldError = {
  type: string;
  ref?: Ref;
  types?: MultipleFieldErrors;
  message?: Message;
};

export interface CommentItem {
  id: string;
  name: string;
  email: string;
  content: string;
}
export interface MultiLanguageContent {
  value: string;
  lang: string;
}

export interface BaseAxiosResponse<T = any> {
  data: T;
  code: number;
  status: number;
  statusText: string;
  headers: any;
  config: AxiosRequestConfig;
  request?: any;
  pageInfo: PaginationInterface;
}

export interface SnackbarInterface {
  open?: boolean;
  message: string;
  type: ComponentStatusVariant;
}

export interface LayoutWrapperInterface {
  layout: "default" | "admin" | "no-layout" | "admin-profile";
  title?: string;
  subtitle?: string;
  icon?: string;
  wrapperContainer?: boolean;
  fullHeight?: boolean;
}

export type SuggestionFilter = {
  keyword: string;
};

export interface TypeSelectOption extends OptionTypeBase {
  renderOption?: ReactNode;
}

export type LanguageIconInterface = {
  title: string;
  value: string;
  icon: any;
};

export interface DefaultStrictSelectOption {
  label: any;
  value: any;
}

export type NotificationVariant =
  | "like"
  | "comment"
  | "page"
  | "plantrip"
  | "share"
  | "group"
  | "feed"
  | "notification"
  | undefined;

export type AcceptLanguageType = "vi" | "en" | "kr" | "jp" | "es" | "fr";

export type MultilanguageType = { value: string; lang: AcceptLanguageType };

export type PlacementVariant =
  | "bottom-end"
  | "bottom-start"
  | "bottom"
  | "left-end"
  | "left-start"
  | "left"
  | "right-end"
  | "right-start"
  | "right"
  | "top-end"
  | "top-start"
  | "top";

export interface ListGeneralFilter {
  perPage?: number | 10;
  page?: number | 1;
  selectField?: string | null;
  keyword?: string | null;
  status?: string | null;
}

export type ShadowSize = "none" | "xs" | "md" | "lg";
export interface CustomClasses<T extends string = string> {
  customClasses?: Partial<ClassNameMap<T>>;
}

export interface CustomIconProps {
  className?: string;
  color?: Color;
  hoverColor?: Color;
  size?: Size;
}
