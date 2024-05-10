import { GetProducts } from "../../data/services/Products/Products";
import { ResponseData } from "../interfaces/responseData-interface";

const useProductModel = () => {
  const GetProductsModel = async (categoryId: string): Promise<ResponseData> => { 
    try {
      const products = await GetProducts(categoryId);
      return products;
    } catch (error) {
      console.error(error);
      throw error; 
    }
  };

  return {
    GetProductsModel,
  };
};

export default useProductModel;
