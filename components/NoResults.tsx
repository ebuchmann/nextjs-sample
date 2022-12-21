import { FC } from 'react';

interface NoResultsProps {
  searchTerm: string;
}

const NoResults: FC<NoResultsProps> = ({ searchTerm }) => {
  return <p className="p-8 text-left">No results found for {searchTerm}.</p>;
};

NoResults.displayName = 'NoResults';

export default NoResults;
