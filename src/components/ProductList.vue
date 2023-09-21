<template>
    <div>
      <h1>{{ titulo }}</h1>
      <ul>
        <li v-for="item in items" :key="item.id">{{ item.nombre }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        titulo: "Lista de elementos",
        items: [] // Aquí almacenarás los datos de tu API
      };
    },
    mounted() {
      // Aquí puedes hacer una solicitud a tu API y actualizar items
      // Por ejemplo: this.$axios.get('/api/tu-endpoint').then(response => this.items = response.data);
    }
  };
  </script>
  
  <style scoped>
  /* Estilos CSS para este componente */
  </style>
  