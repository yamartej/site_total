<template>
  <div>    
    <!-- Barra de navegación superior -->
    <nav class="main-header navbar navbar-expand navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" href="#" role="button">
            <font-awesome-icon :icon="['fas', 'bars']" />
          </a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <a href="index3.html" class="nav-link" @click="logout">Home</a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <a href="#" class="nav-link">Contact</a>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" data-widget="navbar-search" href="#" role="button">
            <font-awesome-icon :icon="['fas', 'fa-search']" />
          </a>
          <!--<div class="navbar-search-block">
            <form class="form-inline">
              <div class="input-group input-group-sm">
                <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
                <div class="input-group-append">
                  <button class="btn btn-navbar" type="submit">
                    <font-awesome-icon :icon="['fas', 'fa-search']" />
                  </button>
                  <button class="btn btn-navbar" type="button" data-widget="navbar-search">
                    <font-awesome-icon :icon="['fas', 'fa-times']" />
                  </button>
                </div>
              </div>
            </form>
          </div>-->
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" data-toggle="dropdown" href="#">
            <font-awesome-icon :icon="['fas', 'comment']" />
            <span class="badge badge-danger navbar-badge">3</span>
          </a>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <a href="#" class="dropdown-item">
              <div class="media">
                <img src="dist/img/user1-128x128.jpg" alt="User Avatar" class="img-size-50 mr-3 img-circle">
                <div class="media-body">
                  <h3 class="dropdown-item-title">
                    Brad Diesel
                    <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
                  </h3>
                  <p class="text-sm">Call me whenever you can...</p>
                  <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                </div>
              </div>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <div class="media">
                <img src="dist/img/user8-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3">
                <div class="media-body">
                  <h3 class="dropdown-item-title">
                    John Pierce
                    <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
                  </h3>
                  <p class="text-sm">I got your message bro</p>
                  <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                </div>
              </div>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <div class="media">
                <img src="dist/img/user3-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3">
                <div class="media-body">
                  <h3 class="dropdown-item-title">
                    Nora Silvester
                    <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
                  </h3>
                  <p class="text-sm">The subject goes here</p>
                  <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                </div>
              </div>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" data-toggle="dropdown" href="#">
            <font-awesome-icon :icon="['fas', 'fa-bell']" />
            <span class="badge badge-warning navbar-badge">15</span>
          </a>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <span class="dropdown-item dropdown-header">15 Notifications</span>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <font-awesome-icon :icon="['fas', 'fa-envelope']" />
              <span class="float-right text-muted text-sm">3 mins</span>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <font-awesome-icon :icon="['fas', 'fa-user']" /> 8 friend requests
              <span class="float-right text-muted text-sm">12 hours</span>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <font-awesome-icon :icon="['fas', 'fa-file']" /> 3 new reports
              <span class="float-right text-muted text-sm">2 days</span>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-widget="fullscreen" href="#" role="button">
            <font-awesome-icon :icon="['fas', 'fa-expand-arrows-alt']" />
          </a>
        </li>
        <li class="nav-item">
          <!--<button onclick="logout">Salir</button>-->
          <a class="nav-link" data-widget="control-sidebar" data-slide="true" @click="logout" href="#" role="button">
            <font-awesome-icon :icon="['fas', 'door-closed']" />
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Cookies from 'js-cookie';
export default {
  name: 'HeaderComponent',
  methods:{
    async logout() {
      console.log("entro1")

      const token = Cookies.get('auth_token');

      console.log("token", token)
      
      this.$store.dispatch('logout', null);
      this.$router.push({ name: 'Home' });
      
    },
  }
  
}
</script>

<style scoped>
/* Estilos específicos para el encabezado */
</style>