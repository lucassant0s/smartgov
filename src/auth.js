export const isAuthenticated = () => {
  return localStorage.getItem('tokenSmartGov');
};

export const getToken = () => {
  return localStorage.getItem('tokenSmartGov');
};

export const login = token => {
  localStorage.setItem('tokenSmartGov', token);
};

export const logout = () => {
  localStorage.removeItem('tokenSmartGov');
};
