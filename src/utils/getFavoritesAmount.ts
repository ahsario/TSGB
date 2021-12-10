export const getFavoritesAmount = (key: unknown): number | string => {
  if (typeof key !== 'string') return 'fail';

  return localStorage.getItem(key);
};
