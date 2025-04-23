import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface FoodItem {
    id: number
    name: string
    price: number
    calories: string
    expirationDate: string
}
export interface ClothingItem {
    id: number
    name: string
    price: number
    size: string
    material: string
}
export interface ElectronicItem {
    id: number
    name: string
    price: number
    brand: string
    warrantyYears: number
}

type ReturnData<T> = {
    items: T[]
    pages: number
}
type ServerResponse<T> = {
  first: number;
  prev: number | null;
  next: number | null;
  last: number;
  pages: number;
  items: number;
  data: T[];
}

interface QueryParams {
  page: number
  per_page: number
  sort: string
  search: string
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001',
  }),
  endpoints: (builder) => ({
    getFood: builder.query<ReturnData<FoodItem>, QueryParams>({
      query: (params) => ({
        url: "/food",
        params: {
            _page: params.page ?? "1",
            _per_page: params.per_page ?? "8" ,
            _sort: params.sort ?? "price",
            name_like: params.search ?? "",
        }
      }),
      transformResponse: (response: ServerResponse<FoodItem>) => ({
        items: [...response.data], pages: response.pages
      })
    }),
    getClothing: builder.query<ReturnData<ClothingItem>, QueryParams>({
        query: (params) => ({
          url: "/clothing",
          params: {
              _page: params.page ?? "1",
              _per_page: params.per_page ?? "8" ,
              _sort: params.sort ?? "price",
              name_like: params.search ?? "",
          }
        }),
        transformResponse: (response: ServerResponse<ClothingItem>) => ({
          items: [...response.data], pages: response.pages
        })
    }),
    getElectronics: builder.query<ReturnData<ElectronicItem>, QueryParams>({
        query: (params) => ({
          url: "/electronics",
          params: {
              _page: params.page ?? "1",
              _per_page: params.per_page ?? "8" ,
              _sort: params.sort ?? "price",
              name_like: params.search ?? "",
          }
        }),
        transformResponse: (response: ServerResponse<ElectronicItem>) => ({
          items: [...response.data], pages: response.pages
        })
    }),
  }),
});

export const { useGetFoodQuery, useGetClothingQuery, useGetElectronicsQuery } = api;