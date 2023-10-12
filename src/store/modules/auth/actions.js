import axios from 'axios'


export default {
  async login({ commit }, credentials) {
    try {
      // Realiza una solicitud de inicio de sesión a tu API
      const response = await axios.post('//127.0.0.1:8000/api/login', credentials);
      console.log("response====", response)
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

  async verifyToken({ commit, getters }) {
    try {
      const tuTokenDeAcceso = getters.token;
      console.log("Token de acceso:", tuTokenDeAcceso);
      const response = await axios.get('//127.0.0.1:8000/api/verify-token', {
          headers: {
              'Authorization': `Bearer ${tuTokenDeAcceso}` // Reemplaza "tuTokenDeAcceso" con el token real
          }
      });
  
      //console.log("response=", response);
      if (response.status === 200) {
        console.log("status=",'200')
        commit('setIsLoggedIn', true);
      } else {
        console.log("status=",'401')
        // Si el token es válido en el servidor, actualiza el estado isLoggedIn
        commit('setIsLoggedIn', false);
      }
  
      return response.status; 
    } catch (error) {
      console.error('Error al verificar el token:', error.response.status);
      // Maneja el error según tus necesidades
      if (error.response.status === 401) {
        console.log("status=",'401')
        commit('setIsLoggedIn', false);
        return error.response.status; 
      }
    }
  },
  async verifyAndRefreshToken({ commit, getters}) {
    try {
      const token = getters.token;
      const expiration = getters.tokenExpiration;
      const expirationTimestamp = new Date(expiration).getTime() / 1000;
      const currentTime = Math.floor(Date.now() / 1000);

      console.log("token=", token)
      console.log("expiration=", expiration)
      console.log("expirationTimestamp=", expirationTimestamp)
      console.log("currentTime=", currentTime)
      console.log("Resta=", expirationTimestamp - currentTime)

      if (expirationTimestamp - currentTime < 120) {
        console.log("Entro")
        // Si el token está a menos de 2 minutos de expirar, solicita una renovación
        //const response = await axios.post('//127.0.0.1:8000/api/refresh-token', { token });
        
        const response = await axios.get('//127.0.0.1:8000/api/refresh-token', {
            headers: {
                'Authorization': `Bearer ${token}` // Reemplaza "tuTokenDeAcceso" con el token real
            }
        });
        

        console.log("Respuesta de refresh=", response)

        commit('setToken', response.data.token);
        commit('setTokenExpiration', response.data.expiration);
        commit('setIsLoggedIn', true);
      }
    } catch (error) {
      console.error('Error al verificar o renovar el token:', error);
      // Maneja el error según tus necesidades
    }
  },
}
