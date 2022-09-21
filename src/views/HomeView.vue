<template>
  <div class="container-fluid pt-3" >
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active" id="imagem-wrapper">
          <img src="../assets/carpool1.jpg" class="d-block w-100" id="imagem" alt="..." />
        </div>
        <div class="carousel-item" id="imagem-wrapper">
          <img src="../assets/carpool2.jpg" class="d-block w-100" id="imagem" alt="..." />
        </div>
        <div class="carousel-item" id="imagem-wrapper">
          <img src="../assets/carpool3.jpg" class="d-block w-100" id="imagem" alt="..." />
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

    <hr>
    <AboutView />
    <hr>
    <PartnersView />
    <hr>
    <ContactView />
    

    <div class="con3">
        <footer
        >
          <div
            class="text-center text-dark p-3"
            style="background-color: rgba(0, 0, 0, 0.2)"
          >
            © 2022 Copyright:
            <a class="text-dark" href="http://www.ielusc.br"
              >Bom Jesus/IELUSC</a
            >
          </div>
        </footer>
      </div>
  </div>
</template>

<script>
import TelaHome from "@/components/TelaHome.vue";
import AboutView from "@/views/AboutView.vue";
import PartnersView from "@/views/PartnersView.vue";
import ContactView from "@/views/ContactView.vue";

export default {
  name: "HomeView",
  components: {
    TelaHome,
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
