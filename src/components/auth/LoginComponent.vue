<template>
    <div class="hold-transition login-page home">
      <div class="login-box">
        <div class="card">
          
          <div class="card-body login-card-body">
            <p class="login-box-msg font-size-header"><b>Total</b>PLUS</p>
            
            <div class="input-group mb-3">
              <input type="email" class="form-control" placeholder="Email" v-model="email">
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input type="password" class="form-control" placeholder="Password" v-model="password">
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-5">
                <div class="icheck-primary font-size-secondary-text">
                  <input type="checkbox" id="remember">
                  <label for="remember">
                    Remember Me
                  </label>
                </div>
              </div>
              <div class="col-7">
                <button @click="iniciarSesion" class="btn btn-block button-primary">Iniciar Sesión</button>
              </div>
            </div>
            <div class="social-auth-links text-center mb-3">
            </div>
            <p class="mb-1 font-size-secondary-text">
              <a href="forgot-password.html">I forgot my password</a>
            </p>
            <p class="mb-0 font-size-secondary-text">
              <a href="register.html" class="text-center">Register a new membership</a>
            </p>
          </div>
        </div>
      </div>
    </div>
</template>  
  <script>
  import axios from 'axios';
  import Swal from 'sweetalert2';
  export default {
  name: 'LoginComponent',
  methods: {
    async iniciarSesion() {
      try {
        const respuesta = await axios.post('http://127.0.0.1:8000/api/login', {
          email: this.email,
          password: this.password
        });

        // Aquí puedes manejar la respuesta de la API
        console.log(respuesta.data); // Esto es solo un ejemplo, puedes realizar otras acciones según tu lógica
        this.$router.push({ name: 'Dashboard' });

      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        const mensajeDeError = error.response.data.error;
        Swal.fire('Error de inicio de sesión', mensajeDeError, 'error');
        
        
      }
    }
  },
  
  data() {
    return {
      email: '',
      password: ''
    };
  }
}
  </script>
  
  <style scoped>
  /* Estilos específicos para el encabezado */
  
  </style>