interface TUserData {
  userName: string;
  avatarUrl: string;
}

export const getUserData = (user: unknown): TUserData | string => {
  if (typeof user !== 'string') return 'fail';
  const userData = localStorage.getItem(user);

  return userData;
};
