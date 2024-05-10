import { GetBySearch } from "../../src/data/services/Search/Search";
import useSearchModel from "../../src/domain/models/SearchModel";

jest.mock('../../src/data/services/Search/Search');

describe('useSearchModel', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns search results successfully', async () => {
    const mockSearchParam = 'mockSearchParam';
    const mockSearchResults = { /* mock search data */ };
    GetBySearch.mockResolvedValue(mockSearchResults);

    const { GetBySearchModel } = useSearchModel();
    const searchResults = await GetBySearchModel(mockSearchParam);

    expect(searchResults).toEqual(mockSearchResults);
    expect(GetBySearch).toHaveBeenCalledWith(mockSearchParam);
  });

  it('throws an error if fetching search results fails', async () => {
    const mockSearchParam = 'mockSearchParam';
    const errorMessage = 'Failed to fetch search results';
    GetBySearch.mockRejectedValue(new Error(errorMessage));

    const { GetBySearchModel } = useSearchModel();

    await expect(GetBySearchModel(mockSearchParam)).rejects.toThrow(errorMessage);
    expect(GetBySearch).toHaveBeenCalledWith(mockSearchParam);
  });
});