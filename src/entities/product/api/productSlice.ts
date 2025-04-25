import { ReturnData, QueryParams, ProductItem, baseApi } from "@shared/api"

export const productsApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        getProducts: builder.query<ReturnData<ProductItem>, QueryParams>({
            query: (params) => ({
              url: params.category,
              params: {
                  _page: params.page ?? "1",
                  _limit: params.per_page ?? "8" ,
                  _sort: params.sort?.by ?? "price",
                  _order: params.sort?.method ?? "asc",
                  name_like: params.search ?? "",
              }
            }),
            transformResponse: (response: ProductItem[], meta, arg) => {
                const totalCount = meta?.response?.headers.get("X-Total-Count");
                const pages = totalCount ? Math.ceil(+totalCount / (arg.per_page ?? 8)) : 0;
                return {
                  items: response,
                  pages
                };
              },
        }),
    }),
  })
export const { useGetProductsQuery } = productsApi