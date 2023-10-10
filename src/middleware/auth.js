import store from '@/store';


const authMiddleware = async (to, from, next) => {
  // Verifica si la ruta requiere autenticación
  if (to.matched.some(route => route.meta.requiresAuth)) {
    // Verifica si el usuario está autenticado
    if (!store.getters.isLoggedIn) {
      // Si el usuario no está autenticado, redirige al inicio de sesión
      next({ name: 'Home' });
    } else {
      // Si el usuario está autenticado, intenta verificar el token
      try {
        // Realiza una solicitud al servidor para verificar el token
        const response = await store.dispatch('verifyToken'); // Asumiendo que tienes una acción llamada 'verifyToken'
        console.log("Esta es la respuesta de la peticion: ", response);
        next(); // Si la verificación del token es exitosa, permite el acceso
      } catch (error) {
        console.error('Error al verificar el token:', error);
        // Si la verificación del token falla, redirige al inicio de sesión
        next({ name: 'Home' });
      }
    }
  } else {
    // Si la ruta no requiere autenticación, permite el acceso
    next();
  }
};

export default authMiddleware;
