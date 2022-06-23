<template>
  <nav class="navbar bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="">
        <img
          src="../assets/LogoIC.png"
          alt=""
          width="200"
          height="100"
          class="d-inline-block align-text-top"
        />
      </a>
        <li class="nav">
          <a class="nav-link active" aria-current="page" href="#">
            <router-link to="/">Home</router-link>
          </a>
        </li>
        <li class="nav">
          <a class="nav-link active" aria-current="page" href="#">
            <router-link to="/como-funciona">Como Funciona</router-link>
          </a>
        </li>
        <li class="nav">
          <a class="nav-link active" aria-current="page" href="#">
            <router-link to="/sobre">Quem Somos</router-link>
          </a>
        </li>
        <li class="nav">
          <a class="nav-link active" aria-current="page" href="#">
            <router-link to="/parceiros">Parceiros</router-link>
          </a>
        </li>
        <li class="nav">
          <a class="nav-link active" aria-current="page" href="#">
            <router-link to="/contato">Contato</router-link>
          </a>
        </li>
        <button class="btn btn-outline-success me-2" type="button">
          <router-link to="/logar">Logar</router-link>
        </button>
        <button class="btn btn-sm btn-outline-secondary" type="button">
          <router-link to="/criar-conta">Criar Conta</router-link>
        </button>
    </div>
  </nav>

  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/como-funciona">Como Funciona</router-link> |
    <router-link to="/sobre">Quem Somos</router-link> |
    <router-link to="/parceiros">Parceiros</router-link> |
    <router-link to="/contato">Contato</router-link> |
    <router-link to="/logar">Logar</router-link> |
    <router-link to="/criar-conta">Criar Conta</router-link>
  </nav> -->
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