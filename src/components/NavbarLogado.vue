<template>
  <div>
    <nav
      class="navbar d-flex justify-content-center align-items-center bg-light"
    >
      <div class="col-6 col-lg-2 logo d-flex justify-content-lg-center">
        <a href="" class="logo"><img src="../assets/LogoIC01.png" alt="" /></a>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="bi bi-menu" id="menu-icon"></div>
      <ul class="nav-bar m-0">
        <ul
          class="dropdown-menu dropdown-menu-dark border border-0 p-0 mt-lg-1"
        >
          <!-- <li>
            <router-link
              :to="`/account-profile/${idNome()}`"
              class="nav-link sair text-white"
            >
              Meu Perfil
            </router-link>
          </li> -->
          <!-- <li>
            <router-link
              @click.native="sair()"
              to="/"
              class="nav-link sair text-white"
            >
              Deslogar
            </router-link>
          </li> -->
        </ul>
      </ul>
    </nav>
  </div>
</template>
  
  <script>
//   import Navbar from "@/components/Navbar.vue";
export default {
  name: "NavbarLogado",
  props: {
    naoEstaLogado: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      mostrar: this.naoEstaLogado,
    };
  },
  methods: {
    borda() {
      if (this.$route.name === "perfil") {
        return "borda";
      }
      return "";
    },

    nome() {
      let valor = window.localStorage.getItem("usuario-logado");

      valor = JSON.parse(valor);
      valor = valor.nome;
      return valor;
    },

    idNome() {
      let valor = window.localStorage.getItem("usuario-logado");

      valor = JSON.parse(valor);
      valor = valor.idNome;
      return valor;
    },

    sair() {
      localStorage.removeItem("usuario-logado");

      this.mostrar = this.$emit("sair");
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
    background: rgba(40, 40, 40, 0.9);
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
  .btn-outline-primary {
    color: white;
    border-color: white;
  }
  .nav-item {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }
  .router-link-active:not(.link-logo) {
    color: white !important;
  }
  .dropdown-menu {
    background: #3b3b3b !important;
    border: none;
  }
}
</style>