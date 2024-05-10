import axios from "axios";
import { EFetch } from "../../../domain/interfaces";
import { ResponseData } from "../../../domain/interfaces/responseData-interface";

export const GetProducts = async (categoryId: string): Promise<ResponseData> => {
  try {
    const headers = { "content-type": "application/json" };
    const response = await axios.get<ResponseData>( 
      `${EFetch.API_URL}/sites/MLA/search?category=${categoryId}&limit=5`,
      { headers }
    );
    return response.data; 
  } catch (error) {
    console.error(error);
    throw error; 
  }
};                                  