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

    <WhatsView />

    <div class="container3">
      <h1>este é o footer</h1>
    </div>
  </div>
</template>

<script>
import TelaHome from "@/components/TelaHome.vue";
import WhatsView from "@/views/WhatsView.vue";

export default {
  name: "HomeView",
  components: {
    TelaHome,
    WhatsView
  },
};
</script>

<style scoped>

.container3 {
  padding: 90px;
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
