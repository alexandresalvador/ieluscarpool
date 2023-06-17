<template>
    <div class="container">
        <div class="col d-flex justify-content-center py-10 p-3">
            <h6>
                Veja os pedidos e os oferecimentos de carona que ja foram cadastrados e comece a sua carona!
            </h6>
        </div>
        <div class="col position-relative">
            <div class="col-6 d-flex justify-content-center py-20">
                <div class="banner container-fluid px-0 py-5" id="banner">
                    <img src="../assets/bonja1.jpg" class="d-block w-100" id="imagem" alt="..." />
                </div>
                <div class="button-overlay">
                    <button class="btn btn-primary btn-lg" type="button" id="botao-oferecer">
                        <a href="/" class="btn text-white">Ver Oferecimentos de Carona</a>
                    </button>
                    <button class="btn btn-primary btn-lg" type="button" id="botao-buscar">
                        <a href="/" class="btn text-white">Ver Pedidos de  Carona</a>
                    </button>
                </div>
            </div>
        </div>
        <br />
    </div>
</template>

<script>
export default {
    name: "SearchCarpool",
    components: {},
}
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
    filter: blur(2px);
  }

  .button-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
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
    filter: blur(2px);
  }

  .button-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  #botao-oferecer {
    width: 100%;
  }

  #botao-buscar {
    width: 100%;
  }
}
</style>
