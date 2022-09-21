<template>
  <div id="app">
    <Navbar v-if="exibir()" />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: 'App',
  components: {
    Navbar,
  },
  methods: {
    exibir() {
      if (this.$route.name === 'CriarConta') {
        return false;
      } if (this.$route.name === 'Tela de Login') {
        return false;
      }if (this.$route.name === 'Home logado') {
        return false;
      }if (this.$route.name === 'Chat logado') {
        return false;
      }if (this.$route.name === 'Caronas logado') {
        return false;
      } return true;
    },
  },
  onMounted() {
    this.exibir();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
