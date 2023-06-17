<template>
  <div>
    <nav class="navbar d-flex justify-content-center align-items-center bg-light">
      <div class="col-6 col-lg-2 logo d-flex justify-content-lg-center">
        <a href="/" class="logo">
          <img src="../assets/LogoIC01.png" />
        </a>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <ul class="nav-bar m-0 collapse navbar-collapse" id="navbarNav">
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
}

.logo img {
  width: 150px;
}

.nav-bar {
  display: flex;
  list-style: none;
  align-items: center;
  padding: 2px;
  justify-content: center;
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

@media (max-width: 768px) {
  .navbar-toggler {
    display: flex;
    align-self: end;
    border: none;
  }

  .navbar-toggler:focus {
    box-shadow: none;
  }

  .navbar-collapse {
    position: absolute;
    background: #ffffff;
    top: 100%;
    right: 4rem;
    margin: 0px;
    height: auto;
    z-index: 1000;
    flex-direction: column;
  }

  .navbar-light .navbar-collapse .nav-link {
    color: white;
  }

  .nav-link:hover:not(.login) {
    color: white !important;
  }

  .nav-item {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }
}
</style>
