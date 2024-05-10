import { GetBySearch } from "../../data/services/Search/Search";
import { ResponseData } from "../interfaces/responseData-interface";

const useSearchModel = () => {
  const GetBySearchModel = async (search_param: string): Promise<ResponseData> => { 
    try {
      const search = await GetBySearch(search_param);
      return search;
    } catch (error) {
      console.error(error);
      throw error; 
    }
  };

  return {
    GetBySearchModel,
  };
};

export default useSearchModel;
