import axios from 'axios';
import { GetProducts } from '../../../src/data/services/Products/Products';
import { EFetch } from '../../../src/domain/interfaces';

jest.mock('axios');

const mockProductsResponse = {
};

describe('GetProducts', () => {
  it('fetches products successfully', async () => {
    const categoryId = 'mockCategoryId';
    axios.get.mockResolvedValue({ data: mockProductsResponse });

    const products = await GetProducts(categoryId);
    expect(products).toEqual(mockProductsResponse);
    expect(axios.get).toHaveBeenCalledWith(
      `${EFetch.API_URL}/sites/MLA/search?category=${categoryId}&limit=5`,
      { headers: { 'content-type': 'application/json' } }
    );
  });

  it('throws an error if the request fails', async () => {
    const categoryId = 'mockCategoryId';
    axios.get.mockRejectedValue(new Error('Failed to fetch products'));

    await expect(GetProducts(categoryId)).rejects.toThrow();
    expect(axios.get).toHaveBeenCalledWith(
      `${EFetch.API_URL}/sites/MLA/search?category=${categoryId}&limit=5`,
      { headers: { 'content-type': 'application/json' } }
    );
  });
});