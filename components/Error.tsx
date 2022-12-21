import { FC } from 'react';

interface ErrorProps {
  searchTerm: string;
}

const Error: FC<ErrorProps> = ({ searchTerm }) => {
  return <p className="p-8 text-left">There was an error when searching for: {searchTerm}</p>;
};

Error.displayName = 'Error';

export default Error;
