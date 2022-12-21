import { PER_PAGE } from '../../utils/constants';

export interface RentalParams {
  keywords: string;
  limit?: number;
  offset?: number;
}

export interface Rental {
  id: string;
  primaryImage: string;
  attributes: {
    name: string;
  };
}

export interface Meta {
  start_position: number;
  stop_position: number;
  total: number;
}

export interface RentalResults {
  data: Rental[];
  meta: Meta;
}

interface IncludedResults {
  attributes: {
    rental_id: number;
    primary: boolean;
    url: string;
  };
}

/** Finds the primaryImage and returns a resized version */
const getPrimaryImage = (rentalId: string, included: IncludedResults[]): string => {
  const url = included.find((res) => res.attributes.primary && res.attributes.rental_id === Number(rentalId))
    ?.attributes.url;

  if (!url) {
    return '';
  }

  const [first, second] = url.split('/upload/');

  return `${first}/upload/h_280,w_375,c_fill/${second}`;
};

export type RentalsQueryKey = [string, { keywords: string; offset: number }];

type Params = {
  queryKey: RentalsQueryKey;
};

const rentals = async (params: Params): Promise<RentalResults> => {
  const { keywords, offset } = params.queryKey[1];
  const response = await fetch(
    `https://search.outdoorsy.com/rentals?filter[keywords]=${keywords}&page[limit]=${PER_PAGE}&page[offset]=${offset}`
  );

  if (!response.ok) {
    throw new Error(`There was an error when searching for: ${keywords}.`);
  }

  const { data, included, meta } = await response.json();

  // Attach primaryImage to returned data to cache the results of the find and avoid doing this in components
  data.forEach((item: Rental) => {
    item.primaryImage = getPrimaryImage(item.id, included);
  });

  return { data, meta };
};

export default rentals;
