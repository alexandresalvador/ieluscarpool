<template>
  <div class="container-fluid pt-3">
    <div
      id="carouselExampleControls"
      class="carousel slide border border-warning"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active" id="imagem-wrapper">
          <img
            src="../assets/img01.jpg"
            class="d-block w-100"
            id="imagem"
            alt="..."
          />
        </div>
        <div class="carousel-item" id="imagem-wrapper">
          <img
            src="../assets/bonja2.jpg"
            class="d-block w-100"
            id="imagem"
            alt="..."
          />
        </div>
        <div class="carousel-item" id="imagem-wrapper">
          <img
            src="../assets/bonja1.jpg"
            class="d-block w-100"
            id="imagem"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Antes</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Depois</span>
      </button>
    </div>

    <hr />
    <br />
    <div class="row">
      <div class="col d-flex justify-content-center" id="img">
        <a class="navbar-brand">
          <img
            src="../assets/bonja3.jpg"
            width="100%"
            height="90%"
            class="d-inline-block align-text-top border border-primary border border-4 shadow p-3 mb-5 bg-white rounded"
          />
        </a>
      </div>
      <div class="col d-flex align-items-center">
        <div class="container2">
          <div class="about">
            <p class="text-justify fs-1">
              <b> OLÁ ALUNO DA FACULDADE IELUSC, SEJA BEM-VINDO! </b>
            </p>
            <h6 class="text-justify fs-5">
              Este é o Ielusc Carpool, a mais nova forma de se chegar em
              segurança até a faculdade, onde alunos do mesmo campus podem dar
              caronas ou pegar caronas com outros alunos, por preços baixos.
            </h6>
          </div>
        </div>
      </div>
    </div>

    <br />
    <WhatsView />

    <br />

    <AboutView />
    <br />

    <PartnersView />
    <br />

    <hr />
    
    <ContactView />

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
import TelaHome from "@/components/TelaHome.vue";
import WhatsView from "@/views/WhatsView.vue";
import AboutView from "@/views/AboutView.vue";
import PartnersView from "@/views/PartnersView.vue";
import ContactView from "@/views/ContactView.vue";

export default {
  name: "HomeView",
  components: {
    TelaHome,
    WhatsView,
    AboutView,
    PartnersView,
    ContactView,
  },
};
</script>

<style scoped>
.con3 {
  padding: 20px;
}

#imagem-wrapper {
  height: 50vh;
  overflow: hidden;
  position: relative; /* Para fazer que a imagem com position-absolute respeite a sua posição consoante este selector, ou evitar que saia do mesmo */
}
#imagem {
  width: 600px;
  /* código abaixo centra a imagem ao centro */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>
