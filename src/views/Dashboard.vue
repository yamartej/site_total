<template>

    <div class="wrapper">
      
        <HeaderComponent/>
      <!-- Menú lateral -->
      <aside class="main-sidebar sidebar-dark-primary elevation-4" >
        <!-- Logo -->
        <router-link to="/dashboard" class="brand-link">
          <img src="@/assets/logo.png" alt="Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
          <span class="brand-text font-weight-light">TotalPLUS</span>
        </router-link>
  
        <!-- Menú -->
        <div class="sidebar">
          <!-- Coloca aquí tus elementos de menú -->
          <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
            <li class="nav-item">
              <router-link to="/dashboard" class="nav-link">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>Dashboard</p>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/ventas" class="nav-link">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>Ventas</p>
              </router-link>
            </li>
            <!-- Agrega más elementos de menú aquí -->
            
          </ul>
        </div>
      </aside>
  
      <!-- Contenido principal -->
      <div class="content-wrapper">
        <!-- Aquí coloca el contenido principal del panel de control -->
      </div>
    </div>
  </template>
  
  <script>
  import HeaderComponent from '@/components/common/HeaderComponent';
  export default {
    name: 'DashboardPage',
    components: {
        HeaderComponent,
        
    },
    // Resto de las opciones del componente
  }
  </script>
  
  <style scoped>
  /* Estilos específicos para este componente */
  
  </style>
  