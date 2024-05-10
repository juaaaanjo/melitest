import { GetCategories } from "../../src/data/services/Categories/Categories";
import useCategoryModel from "../../src/domain/models/CategoriesModel";

jest.mock('../../src/data/services/Categories/Categories');

describe('useCategoryModel', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns categories successfully', async () => {
    const mockCategories = [{ id: '1', name: 'Category 1' }, { id: '2', name: 'Category 2' }];
    GetCategories.mockResolvedValue(mockCategories);

    const { GetCategoriesModel } = useCategoryModel();
    const categories = await GetCategoriesModel();

    expect(categories).toEqual(mockCategories);
    expect(GetCategories).toHaveBeenCalled();
  });

  it('throws an error if fetching categories fails', async () => {
    const errorMessage = 'Failed to fetch categories';
    GetCategories.mockRejectedValue(new Error(errorMessage));

    const { GetCategoriesModel } = useCategoryModel();

    await expect(GetCategoriesModel()).rejects.toThrow(errorMessage);
    expect(GetCategories).toHaveBeenCalled();
  });
});