import { GetCategories } from "../../data/services/Categories/Categories";
import { Category } from "../interfaces/Categories";

const useCategoryModel = () => {
  const GetCategoriesModel = async (): Promise<Category[]> => { 
    try {
      const categories = await GetCategories();
      return categories;
    } catch (error) {
      console.error(error);
      throw error; 
    }
  };

  return {
    GetCategoriesModel,
  };
};

export default useCategoryModel;