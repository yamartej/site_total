import store from '@/store';


const authMiddleware = async (to, from, next) => {
  if (to.matched.some(route => route.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      next({ name: 'Home' });
    } else {
      try {
        // Antes de verificar el token, intenta renovarlo si es necesario
        const response1 = await store.dispatch('verifyAndRefreshToken');
        console.log("response1= ", response1)
        
        const response = await store.dispatch('verifyToken'); // Asumiendo que tienes una acción llamada 'verifyToken'
        console.log("Esta es la respuesta de la peticion: ", response);
        if (response === 200) {
          next(); // Si la verificación del token es exitosa, permite el acceso
        } else {
          next({ name: 'Home' });
        }
        
      } catch (error) {
        console.error('Error al verificar el token:', error);
        next({ name: 'Home' });
      }
    }
  } else {
    next();
  }
};

export default authMiddleware;
