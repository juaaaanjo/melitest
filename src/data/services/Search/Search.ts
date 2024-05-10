import axios from "axios";
import { EFetch } from "../../../domain/interfaces";
import { ResponseData } from "../../../domain/interfaces/responseData-interface";

export const GetBySearch = async (search_param: string): Promise<ResponseData> => {
  try {

    console.log('searchParam', search_param)
    const headers = { "content-type": "application/json" };
    const response = await axios.get<ResponseData>(
      `${EFetch.API_URL}/sites/MLA/search?q=${search_param}`,
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
