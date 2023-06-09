import React, { FC } from 'react';

import CountriesList from '../components/CountriesList';
import SearchCountries from '../components/SearchCountries';

interface ICountriesProps {
  showFavorite?: boolean;
}
const Countries: FC<ICountriesProps> = ({ showFavorite }) => {
  return (
    <div className="countries">
      <SearchCountries />
      <CountriesList showFavorite={showFavorite} countPerPage={10} />
    </div>
  );
};

export default Countries;
