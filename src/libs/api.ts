import PocketBase from "pocketbase";
import EnvironmentConfig from "./env";

export enum Collections {
  Products = "products",
  Categories = "categories",
  Users = "users",
  Orders = "orders",
  Transactions = "transactions",
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

  async getPaginatedList(
    collection: Collections,
    page: number = 1,
    perPage: number = 50,
    filter?: string
  ): Promise<any> {
    try {
      const options = this.buildOptions(undefined, filter);
      const resultList = await this.pb
        .collection(collection)
        .getList(page, perPage, options);
      return resultList;
    } catch (error) {
      console.error("Error fetching paginated list:", error);
      throw error;
    }
  }

  async getFullList(collection: Collections, sort?: string): Promise<any> {
    try {
      const options = this.buildOptions(sort);
      const records = await this.pb.collection(collection).getFullList(options);
      return records;
    } catch (error) {
      console.error("Error fetching full list:", error);
      throw error;
    }
  }

  async getFirstListItem(
    collection: Collections,
    filter: string
  ): Promise<any> {
    try {
      const record = await this.pb
        .collection(collection)
        .getFirstListItem(filter);
      return record;
    } catch (error) {
      console.error("Error fetching first list item:", error);
      throw error;
    }
  }

  async getOne(
    collection: Collections,
    recordId: string,
    options?: { sort?: string; filter?: string; expand?: string }
  ): Promise<any> {
    try {
      const requestOptions = this.buildOptions(
        options?.sort,
        options?.filter,
        options?.expand
      );
      const record = await this.pb
        .collection(collection)
        .getOne(recordId, requestOptions);
      return record;
    } catch (error) {
      console.error("Error fetching single record:", error);
      throw error;
    }
  }

  async createRecord(collection: Collections, data: any): Promise<any> {
    try {
      const record = await this.pb.collection(collection).create(data);
      return record;
    } catch (error) {
      console.error("Error creating record:", error);
      throw error;
    }
  }

  async updateRecord(
    collection: Collections,
    recordId: string,
    data: any
  ): Promise<any> {
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

  async deleteRecord(
    collection: Collections,
    recordId: string
  ): Promise<any> {
    try {
      const record = await this.pb
        .collection(collection)
        .delete(recordId);
      return record;
    } catch (error) {
      console.error("Error creating record:", error);
      throw error;
    }
  }
}

export default Api;
