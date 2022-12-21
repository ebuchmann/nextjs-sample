import { ChangeEvent, FC, useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import rentals, { RentalResults, RentalsQueryKey } from '../pages/api/rentals';
import Result from './Result';
import useDebounce from '../utils/useDebounce';
import NoResults from './NoResults';
import Loading from './Loading';
import Error from './Error';
import Pagination from './Pagination';
import { PER_PAGE } from '../utils/constants';

const Search: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [offset, setOffset] = useState<number>(0);
  const debouncedValue = useDebounce(searchValue);

  useEffect(() => {
    setOffset(0);
  }, [debouncedValue]);

  const results = useQuery<RentalResults, Error, RentalResults, RentalsQueryKey>(
    [
      'search',
      {
        keywords: debouncedValue,
        offset,
      },
    ],
    rentals,
    {
      enabled: debouncedValue.trim().length > 0,
    }
  );

  const renderResults = () => {
    if (results.isLoading) {
      return Array(PER_PAGE)
        .fill(null)
        .map((_, index) => <Loading key={index} />);
    } else if (results.isError) {
      return <Error searchTerm={debouncedValue} />;
    } else if (results.data?.data.length !== 0) {
      return (
        <>
          {results.data?.data.map((result) => (
            <Result key={result.id} {...result} />
          ))}
          {results.data?.meta && <Pagination {...results.data.meta} setOffset={setOffset} />}
        </>
      );
    }

    return <NoResults searchTerm={debouncedValue} />;
  };

  return (
    <>
      <input
        data-testid="input"
        className="border-gray-400 w-full p-4 search"
        type="search"
        placeholder="Search"
        value={searchValue}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchValue(event.target.value)}
      />
      {renderResults()}
    </>
  );
};

Search.displayName = 'Search';

export default Search;
