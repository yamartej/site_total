export default {
  isLoggedIn: (state) => {
    return state.user !== null; // Devuelve true si hay un usuario, de lo contrario, devuelve false
  },
  token(state) {
    return state.token
  },
  tokenExpiration(state) {
    return state.expiration
  },
  tokenRefresh(state) {
    return state.tokenRefresh
  },
}