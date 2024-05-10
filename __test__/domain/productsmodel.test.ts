import { GetProducts } from "../../src/data/services/Products/Products";
import useProductModel from "../../src/domain/models/ProductsModel";

jest.mock('../../src/data/services/Products/Products');

describe('useProductModel', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns products successfully', async () => {
    const mockCategoryId = 'mockCategoryId';
    const mockProducts = { /* mock product data */ };
    GetProducts.mockResolvedValue(mockProducts);

    const { GetProductsModel } = useProductModel();
    const products = await GetProductsModel(mockCategoryId);

    expect(products).toEqual(mockProducts);
    expect(GetProducts).toHaveBeenCalledWith(mockCategoryId);
  });

  it('throws an error if fetching products fails', async () => {
    const mockCategoryId = 'mockCategoryId';
    const errorMessage = 'Failed to fetch products';
    GetProducts.mockRejectedValue(new Error(errorMessage));

    const { GetProductsModel } = useProductModel();

    await expect(GetProductsModel(mockCategoryId)).rejects.toThrow(errorMessage);
    expect(GetProducts).toHaveBeenCalledWith(mockCategoryId);
  });
});