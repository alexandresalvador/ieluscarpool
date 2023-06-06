<template>
  <div>
    <nav class="navbar fixed-top d-flex justify-content-between px-5 align-items-center bg-light">
      <a href="#" class="logo"><img src="../assets/LogoIC01.png" alt="" /></a>
      <div class="bi bi-menu" id="menu-icon"></div>

      <ul class="nav-bar m-0">
        <li><a href="#" class="text-decoration-none">Home</a></li>
        <li><a href="#como-funciona" class="text-decoration-none">Como Funciona</a></li>      
        <li><a href="#sobre" class="text-decoration-none">Objetivo</a></li>
        <li><a href="#a-faculdade" class="text-decoration-none">A Faculdade</a></li>
        <li><a href="#o-contato" class="text-decoration-none">Contato</a></li>
      </ul>
    </nav>

    <nav class="navbar d-flex justify-content-center align-items-center bg-light">
      <a href="#" class="logo"><img src="../assets/LogoIC01.png" alt="" /></a>
      <div class="bi bi-menu" id="menu-icon"></div>

      <ul class="nav-bar m-0">
        <li><a href="#" class="text-decoration-none">Home</a></li>
        <li><a href="#como-funciona" class="text-decoration-none">Como Funciona</a></li>
        <li><a href="#sobre" class="text-decoration-none">Objetivo</a></li>
        <li><a href="#a-faculdade" class="text-decoration-none">A Faculdade</a></li>
        <li><a href="#o-contato" class="text-decoration-none">Contato</a></li>
      </ul>
    </nav>
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
/* header {
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  ;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  box-shadow: 0 4px 41px rgb(14 55 54 / 14%);
  padding: 10px 10%;
  transition: 0.2s;
} */

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  width: 150px;
}

.nav-bar {
  display: flex;
  list-style: none;
  /* margin-top: -30px;
  margin-left: 50%;
  padding: 2px; */
}

.nav-bar a {
  font-size: 1rem;
  padding: 11px 20px;
  color: black;
  font-weight: 600;
  text-transform: uppercase;
}

.nav-bar a:hover {
  color: orange;
}

#menu-icon {
  font-size: 24px;
  cursor: pointer;
  z-index: 1001;
  display: none;
}
</style>