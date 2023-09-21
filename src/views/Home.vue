<template>
  <div class="home">
    <login-component></login-component>
  </div>
</template>

  
  <script>
  import LoginComponent from '@/components/auth/LoginComponent.vue'
  
  export default {
    name: 'HomePage',
    components: {
      LoginComponent,
     
    }
  }
  </script>
  
  <style scoped>
  /* Estilos específicos para este componente */
  /*.home {
    text-align: center;
    padding: 20px;
  }*/

  
  </style>
  