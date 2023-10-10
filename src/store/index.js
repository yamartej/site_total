import { createStore, createLogger } from 'vuex';
import axios from 'axios';

const store = createStore({
    state: {
      // Define tu estado inicial aquí
      user: null, // Aquí puedes almacenar los datos del usuario
      token: null, // Aquí puedes almacenar el token de autenticación
      expiration: null,
      isLoggedIn: false,
    },
    getters: {
      isLoggedIn: (state) => {
        console.log("isLoggedIn_getters==", state);
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
      // ... otros getters
    },
    mutations: {
      // Define tus mutaciones aquí
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
        console.log("setIsLoggedIn_state==", state);
        console.log("setIsLoggedIn_value==", value);
        state.isLoggedIn = value; // Esta mutación actualizará el estado de isLoggedIn
      },
    },
    actions: {
      async login({ commit }, credentials) {
        try {
          // Realiza una solicitud de inicio de sesión a tu API
          const response = await axios.post('//127.0.0.1:8000/api/login', credentials);
          const { user, token, expiration, isLoggedIn } = response.data;
          // Actualiza el estado del usuario y el token utilizando mutaciones
          commit('setUser', user);
          commit('setToken', token);
          commit('setTokenExpiration', expiration);
          commit('setIsLoggedIn', isLoggedIn);
      
          // Retorna los datos del usuario para que puedas utilizarlos en tu componente
          return user;
        } catch (error) {
          console.error('Error al realizar el inicio de sesión:', error);
          throw error; // Asegúrate de propagar el error para manejarlo en tu componente
        }
      },
      
      
      async logout({ commit }) {
        // Realiza la lógica de cierre de sesión aquí, como eliminar el usuario y el token del store
        commit('setUser', null);
        commit('setToken', null);
      },

      async verifyToken({ commit }) {
        try {
          console.log("Cero")
          const tuTokenDeAcceso = store.getters.token
          console.log("Cero Token= ",tuTokenDeAcceso)
          // Realiza una solicitud al servidor para verificar el token
         // const response = await axios.get('//127.0.0.1:8000/api/verify-token'); // Cambia la URL según tu endpoint de verificación de token
          const response = await axios.get('//127.0.0.1:8000/api/verify-token', {
            headers: {
                'Authorization': `Bearer ${tuTokenDeAcceso}` // Reemplaza "tuTokenDeAcceso" con el token real
            }
          });
          console.log("Uno");

          // Verifica el contenido de la respuesta para detectar si el token es inválido
          if (response.data.message === 'Unauthenticated') {
            console.log("Dos");
            // Si el token no es válido en el servidor, actualiza el estado isLoggedIn a false
            commit('setIsLoggedIn', true);
          } else {
            console.log("Tres");
            // Si el token es válido en el servidor, actualiza el estado isLoggedIn
            commit('setIsLoggedIn', false);
          }
        } catch (error) {
          console.error('Error al verificar el token:', error);
          // Maneja el error según tus necesidades
        }
      },
      
    },
    modules: {
      // Define tus módulos aquí si es necesario
    },
    plugins: [createLogger()] // Esto es opcional y se usa para depuración
  });
  
  export default store;
  
