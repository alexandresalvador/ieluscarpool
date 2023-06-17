<template>
  <div>
    <nav class="navbar d-flex justify-content-center align-items-center bg-light">
      <div class="col-6 col-lg-2 logo d-flex justify-content-lg-center">
        <a href="/account-home" class="logo">
          <img src="../assets/LogoIC01.png"/>
        </a>
      </div>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link :to="`/account-profile/${idNome}`" class="nav-link">
              Meu Perfil
            </router-link>
          </li>
          <li class="nav-item">
            <router-link @click.native="sair" to="/" class="nav-link">
              Deslogar
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavbarLogado",
  props: {
    naoEstaLogado: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    idNome() {
      const valor = JSON.parse(localStorage.getItem("usuariologado"));
      return valor ? valor.idNome : "";
    },
  },
  methods: {
    sair() {
      localStorage.removeItem("usuariologado");
      this.$emit("sair");
    },
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
  .navbar-nav {
    position: absolute;
    background: #F28A16;
    top: 100%;
    right: 4rem;
    margin: 0px;
    height: auto;
    z-index: 1000;
  }
  .navbar-light .navbar-nav .nav-link {
    color: white;
  }
  .nav-link:hover:not(.login) {
    color: white !important;
  }
  .nav-item {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }
  /* .router-link-active:not(.link-logo) {
    color: white !important;
  }
  .dropdown-menu {
    background: #f5ecec !important;
    border: none;
  } */
}
</style>