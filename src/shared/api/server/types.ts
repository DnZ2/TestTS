export type ProductItem = (FoodItem | ClothingItem | ElectronicItem);

export type ReturnData<T> = {
  items: T[]
  pages: number
}
export type ServerResponse<T> = {
  first: number;
  prev: number | null;
  next: number | null;
  last: number;
  pages: number;
  items: number;
  data: T[];
}

export type ServerRoutes = "electronics" | "food" | "clothing"

export interface QueryParams {
  category: ServerRoutes
  page?: string
  per_page?: number
  sort?: {
    by: string
    method: string
  }
  search?: string
}

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