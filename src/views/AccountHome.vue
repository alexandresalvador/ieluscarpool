<template>
  <div>
    <nav class="navbar bg-light">
      <div class="container-fluid">
        <a class="navbar-brand">
          <img
            src="../assets/LogoIC.png"
            alt=""
            width="200"
            height="100"
            class="d-inline-block align-text-top"
          />
        </a>
        <li class="nav">
          <a class="nav-link active" aria-current="page">
            <h1>Olá, Visitante</h1>
          </a>
        </li>
      </div>
    </nav>
    <div class="container">
      <h1>Home - Ielusc Carpool</h1>
      <h6>Seja bem vindo visitante</h6>
    </div>
    <div class="container">
      <button class="btn btn-outline-success me-2" type="button">
        <router-link to="/account-carpool">Pesquisar Caronas</router-link>
      </button>
      <button class="btn btn-outline-success me-2" type="button">
        <router-link to="#">Ver meu Perfil</router-link>
      </button>
      <button class="btn btn-outline-success me-2" type="button">
        <router-link to="#">Ver meus Favoritos</router-link>
      </button>
      <button class="btn btn-outline-success me-2" type="button">
        <router-link to="#">Ver últimas caronas</router-link>
      </button>
      <button class="btn btn-outline-success me-2" type="button">
        <router-link to="/account-chat">Ver Chat</router-link>
      </button>
    </div>

    <br />
    <hr />
    <br />

    <div class="con3">
      <footer>
        <div
          class="text-center text-dark p-3"
          style="background-color: rgba(0, 0, 0, 0.2)"
        >
          © 2022 Copyright:
          <a class="text-dark" href="http://www.ielusc.br">Bom Jesus/IELUSC</a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountHome",
  components: {},
};
</script>

<style scoped>
</style>
