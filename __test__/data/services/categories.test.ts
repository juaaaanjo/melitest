import axios from 'axios';
import { GetCategories } from '../../../src/data/services/Categories/Categories';

jest.mock('axios');

const mockCategories = [
  {
    id: "MLA5725",
    name: "Accesorios para Vehículos"
  },
  {
    id: "MLA1512",
    name: "Agro"
  },

];

describe('GetCategories', () => {
  it('fetches categories successfully', async () => {
    axios.get.mockResolvedValue({ data: mockCategories });

    const categories = await GetCategories();
    expect(categories).toEqual(mockCategories);
  });

  it('throws an error if the request fails', async () => {
    axios.get.mockRejectedValue(new Error('Failed to fetch categories'));

    await expect(GetCategories()).rejects.toThrow();
  });
});