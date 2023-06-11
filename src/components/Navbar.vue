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

.logo {
  display: flex;
  align-items: center;
  flex: 1;
}

.logo img {
  width: 150px;
}

.nav-bar {
  display: none;
  flex-direction: column;
  margin-top: 20px;
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

.nav-bar li {
  text-align: center;
  margin-bottom: 10px;
}

.nav-bar li a {
  display: block;
}

#menu-icon {
  cursor: pointer;
  z-index: 1001;
  display: none;
  font-size: 1.5rem;
}

/* arrumar toggle */

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    padding: 10px;
  }

  #menu-icon {
    display: block;
    cursor: pointer;
  }

  .nav-bar {
    display: none;
    flex-direction: column;
    margin-top: 20px;
  }

  .nav-bar li {
    text-align: center;
    margin-bottom: 10px;
  }

  .nav-bar li a {
    display: block;
  }

}

</style>