import { FC } from 'react';
import { Meta } from '../pages/api/rentals';
import { PER_PAGE } from '../utils/constants';

const getOffset = (num: number): number => {
  return (num - 1) * PER_PAGE;
};

interface PaginationProps extends Meta {
  setOffset: (num: number) => void;
}

const Pagination: FC<PaginationProps> = ({ total, setOffset }) => {
  if (!total) return null;

  const numberOfPages = Math.ceil(total / PER_PAGE);
  const pages = [...Array(numberOfPages).keys()].map((index) => index + 1);

  return (
    <nav aria-label="pagination">
      <ul className="flex">
        {pages.map((pageNumber) => (
          <li key={pageNumber}>
            <button
              className="p-4"
              aria-label={`Go to page ${pageNumber}`}
              onClick={() => setOffset(getOffset(pageNumber))}
            >
              {pageNumber}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.displayName = 'Pagination';

export default Pagination;
