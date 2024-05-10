import axios from 'axios';

import { EFetch } from '../../../src/domain/interfaces';
import { GetBySearch } from '../../../src/data/services/Search/Search';

jest.mock('axios');

const mockSearchResponse = {
};

describe('GetBySearch', () => {
  it('fetches data successfully based on search parameter', async () => {
    const searchParam = 'mockSearchParam';
    axios.get.mockResolvedValue({ data: mockSearchResponse });

    const searchData = await GetBySearch(searchParam);
    expect(searchData).toEqual(mockSearchResponse);
    expect(axios.get).toHaveBeenCalledWith(
      `${EFetch.API_URL}/sites/MLA/search?q=${searchParam}`,
      { headers: { 'content-type': 'application/json' } }
    );
  });

  it('throws an error if the request fails', async () => {
    const searchParam = 'mockSearchParam';
    axios.get.mockRejectedValue(new Error('Failed to fetch search data'));

    await expect(GetBySearch(searchParam)).rejects.toThrow();
    expect(axios.get).toHaveBeenCalledWith(
      `${EFetch.API_URL}/sites/MLA/search?q=${searchParam}`,
      { headers: { 'content-type': 'application/json' } }
    );
  });
});