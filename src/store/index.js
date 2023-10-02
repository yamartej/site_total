import { createStore, createLogger } from 'vuex';
import axios from 'axios';


const store = createStore({
    state: {
      // Define tu estado inicial aquí
      user: null, // Aquí puedes almacenar los datos del usuario
      token: null, // Aquí puedes almacenar el token de autenticación
    },
    mutations: {
      // Define tus mutaciones aquí
      setUser(state, user) {
        state.user = user;
      },
      setToken(state, token) {
        state.token = token;
      },
    },
    actions: {
      // Define tus acciones aquí
      /*async login({ commit }, { user, token }) {
        // Realiza la lógica de inicio de sesión aquí, como guardar el usuario y el token en el store
        commit('setUser', user);
        commit('setToken', token);
      },*/
      async login({ commit }, credentials) {
        try {
          // Realiza una solicitud de inicio de sesión a tu API
          const response = await axios.post('//127.0.0.1:8000/api/login', credentials);
          const { user, token } = response.data;

          // Actualiza el estado del usuario y el token utilizando mutaciones
          commit('setUser', user);
          commit('setToken', token);
      
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
    },
    modules: {
      // Define tus módulos aquí si es necesario
    },
    plugins: [createLogger()] // Esto es opcional y se usa para depuración
  });
  
  export default store;
  
