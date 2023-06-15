<template>
  <div class="container">
    <!-- <div :style="{ 'margin-left': sidebarWidth }">
      <router-view />
    </div> -->
    <div class="col d-flex justify-content-center py-10 p-3">
      <h6>
        Seja bem vindo, {{ username() }}! <br />
        Chegue tranquilo(a) na faculdade!
      </h6>
    </div>
    <div class="col position-relative">
      <div class="col-6 d-flex justify-content-center py-20">
        <div class="banner container-fluid px-0 py-5" id="banner">
          <img src="../assets/banner.png" class="d-block w-100" id="imagem" alt="..." />
        </div>
        <div class="button-overlay">
          <button class="btn btn-primary btn-lg" type="button">
            <a href="/account-motorista" class="btn text-white">Oferecer Carona</a>
          </button>
          <button class="btn btn-primary btn-lg" type="button">
            <a href="/account-caroneiro" class="btn text-white">Buscar Carona</a>
          </button>
        </div>
      </div>
    </div>

    <br />
    <div class="row">
      <h5>Você está aqui:</h5>
      <div class="col d-flex justify-content-center py-20">
        <div class="col-9">
          <Geolocalizacao />
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
// import NavbarLog from "../components/NavbarLogado.vue";
import Geolocalizacao from "../components/Geolocalizacao.vue";
// import Sidebar from "../components/Sidebar.vue";
export default {
  name: "AccountHome",
  components: {
    Geolocalizacao,
  },
  methods: {
     username() {
      let value = window.localStorage.getItem('usuario-logado');
      value = JSON.parse(value);
      value = value.nome;
      return value;
    },
  }
};
</script>

<style scoped>
button {
  padding: 7px 36px;
  border: 2px solid white;
  border-radius: 10px;
  font-weight: 500;
  margin: 10px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}



@media (max-width: 767px) {

  .col-6,
  .col-4,
  .col-9 {
    width: 100% !important;
  }

  #imagem {
    width: 100%;
    height: auto;
  }

  .banner {
    filter: blur(5px);
  }

  .button-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
}
</style>
