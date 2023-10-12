export default {
  setUser(state, user) {
    state.user = user;
  },
  setToken(state, token) {
    state.token = token;
  },
  setTokenExpiration(state, expiration) {
    state.expiration = expiration;
  },
  setIsLoggedIn(state, value) {
    state.isLoggedIn = value; // Esta mutación actualizará el estado de isLoggedIn
  },
};
