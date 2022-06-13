<template>
  <div>
    <header>
      <nav class="navbar navbar-light bg-primary mb-5">
        <div class="container-fluid">
          <a class="navbar-brand text-light" href="#">IelusCarpool</a>
          <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">Como Funciona</router-link> |
            <router-link to="/about">Quem Somos</router-link> |
            <router-link to="/about">Contato</router-link> |
            <router-link to="/about">Logar</router-link> |
            <router-link to="/about">Criar Conta</router-link>
          </nav>
          <router-view />
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "Navbar",
  components: {
    Navbar,
  },
};
</script>

<style scoped>
</style>