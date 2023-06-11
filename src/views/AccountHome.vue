<template>
  <div>
    <NavbarLog />

    <Sidebar />
    <!-- <div :style="{ 'margin-left': sidebarWidth }">
      <router-view />
    </div> -->
    <div class="col d-flex justify-content-center py-2">
      <h6>Seja bem vindo, {visitante}, Chegue tranquilo(a) na faculdade!</h6>
    </div>
    <div class="row">
      <h5>Você está aqui:</h5>
      <div class="col d-flex justify-content-center py-20">
        <div class="col-9">
          <Geolocalizacao />
        </div>
      </div>
    </div>
    <hr>
    <br>
    <div class="carousel-inner">
      <div class="carousel-item active" id="imagem-wrapper">
        <img
          src="../assets/banner.png"
          class="d-block w-100"
          id="imagem"
          alt="..."
        />
      </div>
    </div>
    <div class="d-grid col-4 mx-auto">
      <div class="d-flex col p-2">
        <!-- /account-motorista -->
      <button class="btn btn-primary btn-lg" type="button">
        <a href="/account-motorista" class="btn text-white">Oferecer Carona</a>
      </button>
      <button class="btn btn-warning btn-lg" type="button">
        <a href="/account-caroneiro" class="btn text-white">Buscar Carona</a>
      </button>
      </div>
    </div>
    <br />

    <br />
  </div>
</template>

<script>
import NavbarLog from "../components/NavbarLogado.vue";
import Geolocalizacao from "../components/Geolocalizacao.vue";
import Sidebar from "../components/Sidebar.vue";
export default {
  name: "AccountHome",
  components: {
    NavbarLog,
    Geolocalizacao,
    Sidebar,
  },
};
</script>

<style scoped>
.form-check {
  padding: 20px;
}

#imagem-wrapper {
  height: 48vh;
  overflow: hidden;
  position: relative; 
}
#imagem {
  width: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

button {
  padding: 7px 36px;
  border: 2px solid white;
  border-radius: 10px;
  font-weight: 500;
  margin: 10px;
}

</style>
