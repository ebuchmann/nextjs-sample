import { FC } from 'react';
import { Rental } from '../pages/api/rentals';
import Image from 'next/image';

const Result: FC<Rental> = ({ id, attributes: { name }, primaryImage }) => {
  return (
    <div data-testid={`result-${id}`} className="md:flex rounded-xl p-4">
      <div>
        <Image className="w-48 rounded-md mx-auto" alt={name} src={primaryImage} width={100} height={100} />
      </div>
      <div className="pt-6 md:p-8 text-left md:text-left space-y-4 items-center flex">
        <p className="text-lg font-medium w-full md:text-left sm:text-center">{name}</p>
      </div>
    </div>
  );
};

Result.displayName = 'Result';

export default Result;
