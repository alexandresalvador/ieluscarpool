<template>
  <div id="app">
    <!-- <Navbar v-if="exibirNavbar()" /> -->
    <!-- :notLogged="deslogado()" @logout="deslogado()"  -->

    <Sidebar v-if="logado()" />

    <router-view />
    <Footer /> 
    
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/sidebar/Sidebar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Sidebar,
    Footer,
  },

  methods: {
    exibirNavbar() {
      if (this.$route.name !== 'criarConta' && this.$route.name !== 'login') {
        return true;
      } return false;
    }, 
    logado() {
      return localStorage.getItem('userLogged') !== null && this.$route.name !== 'home';
    },
    deslogado() {
      return localStorage.getItem('userLogged') === null;
    },
  },
  onMounted() {
    this.exibirNavbar();
    this.deslogado();
    this.logado();
  },
};
</script>

<style>
#app {

  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
  
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0d0d0e;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
