<template>
  <div id="app">
    <NavbarLogado v-if="exibirNavbarLogado()" :naoEstaLogado="naoEstaLogado()" @sair="naoEstaLogado()"  /> 

    <Sidebar v-if="exibirSidebar()" :naoEstaLogado="naoEstaLogado()" @sair="naoEstaLogado()" />

    <router-view />
    <Footer /> 
    
  </div>
</template>

<script>
import NavbarLogado from "@/components/NavbarLogado.vue";
import Sidebar from "@/components/Sidebar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    NavbarLogado,
    Sidebar,
    Footer,
  },

  methods: {

      exibirNavbarLogado() {
        if (this.$route.name !== 'CreateAccount' && this.$route.name !== 'LoginView' && this.$route.name !== 'HomeView' && this.$route.name !== 'CreateProfile') {
          return true;
        } return false;
      }, 
      exibirSidebar() {
        if (this.$route.name !== 'CreateAccount' && this.$route.name !== 'LoginView' && this.$route.name !== 'HomeView'  && this.$route.name !== 'CreateProfile') {
          return true;
        } return false;
      }, 
      // logado() {
      //   return localStorage.getItem('usuariologado') !== null && this.$route.nome !== 'home';
      // },
      naoEstaLogado() {
        return localStorage.getItem('usuariologado') === null;
      },
  },
  onMounted() {
    this.exibirNavbarLogado();
    this.naoEstaLogado();
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
