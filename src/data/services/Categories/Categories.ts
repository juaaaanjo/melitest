import axios from "axios";
import { EFetch } from "../../../domain/interfaces";
import { Category } from "../../../domain/interfaces/Categories";

export const GetCategories = async (): Promise<Category> => {
  try {
    const headers = { "content-type": "application/json" };
    const response = await axios.get<Category>(
      `${EFetch.API_URL}/sites/MLA/categories`,
      {
        headers,
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw(error)
  }
};
