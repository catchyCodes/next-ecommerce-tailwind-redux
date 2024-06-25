import PocketBase from "pocketbase";
import EnvironmentConfig from "./env";
import { CallEffect, PutEffect, SelectEffect } from "redux-saga/effects";
import { ProductsState } from "@/redux/products/reducer";

export enum Collections {
  Products = "products",
  Categories = "categories",
  Users = "users",
  Orders = "orders",
  Transactions = "transactions",
}

export interface ApiResponse {
  [key: string]: any;
  // Add other properties if there are some common ones, otherwise this is flexible enough
}

export type LoadDataSagaReturnType = Generator<
SelectEffect | CallEffect<ApiResponse> | PutEffect<{ type: string; payload?: any; error?: any }>,
void,
ProductsState | ApiResponse
>

export interface ReduceState {
  collection:Collections,
    items: object[];
    page: number;
    perPage: number;
    totalItems: number;
    sort?: string;
    filter?: string;
    expand?: string;
  }

export interface AllParams {
  collection: Collections;
  page?: number;
  perPage?: number;
  sort?: string;
  filter?: string;
  expand?: string;
}
interface GetFirstFilterParams extends AllParams {
  filter: string;
}
interface GetOneParams extends AllParams {
  recordId: string;
}
interface PutPostParams extends GetOneParams {
data : any  
}

class Api {
  private pb: PocketBase;
  private env = new EnvironmentConfig();

  static Collections = Collections;

  constructor() {
    this.pb = new PocketBase(this.env.getUrls().apiUrl);
  }

  private buildOptions(
    sort?: string,
    filter?: string,
    expand?: string
  ): { [key: string]: string } {
    const options: { [key: string]: string } = {};
    if (sort) {
      options.sort = sort;
    }
    if (filter) {
      options.filter = filter;
    }
    if (expand) {
      options.expand = expand;
    }
    return options;
  }

  async getPaginatedList({
    collection,
    page = 1,
    perPage = 50,
    sort,
    filter,
    expand,
  }: AllParams): Promise<ApiResponse>{
    try {
      const options = this.buildOptions(sort, filter, expand);
      const resultList: ApiResponse = await this.pb
        .collection(collection)
        .getList(page, perPage, options);
      return resultList;
    } catch (error) {
      console.error("Error fetching paginated list:", error);
      throw error;
    }
  }

  async getFullList({ collection, sort }: AllParams): Promise<ApiResponse> {
    try {
      const options = this.buildOptions(sort);
      const records = await this.pb.collection(collection).getFullList(options);
      return records;
    } catch (error) {
      console.error("Error fetching full list:", error);
      throw error;
    }
  }

  async getFirstListItem({
    collection,
    sort,
    filter,
    expand,
  }: GetFirstFilterParams): Promise<ApiResponse> {
    try {
      const options = this.buildOptions(sort, undefined, expand);
      const record = await this.pb
        .collection(collection)
        .getFirstListItem(filter, options);
      return record;
    } catch (error) {
      console.error("Error fetching first list item:", error);
      throw error;
    }
  }

  async getOne({
    collection,
    recordId,
    sort,
    filter,
    expand,
  }: GetOneParams): Promise<ApiResponse> {
    try {
      const options = this.buildOptions(
        sort,
        filter,
        expand
      );
      const record = await this.pb
        .collection(collection)
        .getOne(recordId, options);
      return record;
    } catch (error) {
      console.error("Error fetching single record:", error);
      throw error;
    }
  }

  async createRecord({collection, data}:PutPostParams): Promise<ApiResponse> {
    try {
      const record = await this.pb.collection(collection).create(data);
      return record;
    } catch (error) {
      console.error("Error creating record:", error);
      throw error;
    }
  }

  async updateRecord({
    collection,
    recordId,
    data,
  }:PutPostParams): Promise<ApiResponse> {
    try {
      const record = await this.pb
        .collection(collection)
        .update(recordId, data);
      return record;
    } catch (error) {
      console.error("Error creating record:", error);
      throw error;
    }
  }

  async deleteRecord({collection, recordId}:GetOneParams):  Promise<boolean> {
    try {
      const record = await this.pb.collection(collection).delete(recordId);
      return record;
    } catch (error) {
      console.error("Error creating record:", error);
      throw error;
    }
  }
}

export default Api;
