import { SearchFormData } from '../types/SearchFormData';

const getSearchData = (form: HTMLFormElement): SearchFormData => {
  return new FormData(form) as unknown as SearchFormData;
};

export const search = (form: HTMLFormElement): void => {
  const searchData = getSearchData(form);
  console.log(searchData);
};
