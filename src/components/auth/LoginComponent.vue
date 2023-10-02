<template>
    <div class="hold-transition login-page home">
      <div class="login-box">
        <div class="card">
          
          <div class="card-body login-card-body">
            <p class="login-box-msg font-size-header"><b>Total</b>PLUS</p>
            <div class="input-group mb-3">
              <input type="email" class="form-control" placeholder="Email" v-model="form.email">
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input type="password" class="form-control" placeholder="Password" v-model="form.password">
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
                <button @click="iniciarSesion" class="btn btn-block button-primary">
                  <span v-if="isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  Iniciar Sesión</button>
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
  import Swal from 'sweetalert2';
  export default {
  name: 'LoginComponent',
  methods: {
    async iniciarSesion() {
      try {
        
        this.isLoading = true;
        //const respuesta = this.$store.dispatch('login', this.form);
        this.loginResponse = await this.$store.dispatch('login', this.form);
        //this.$store.dispatch('login', this.form);
        //console.log("respuesta=", respuesta.message)

           
        this.$router.push({ name: 'Dashboard' });
        this.isLoading = false;

      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        const mensajeDeError = error.response.data.error;
        Swal.fire('Error de inicio de sesión', mensajeDeError, 'error');
        this.isLoading = false;
        
      }
    }
  },
  
  data() {
    return {
      isLoading: false, // Inicialmente, no hay carga
      form: {
        email: '',
        password: ''
      },
      
    };
  }
}
  </script>
  
  <style scoped>
  /* Estilos específicos para el encabezado */
  
  </style>