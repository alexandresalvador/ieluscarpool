<template>
  <div>
    <NavbarLog />

    <div class="container pt-3">
      <div class="about">
        <h1>Fazer Denúncias</h1>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"
            >Endereço de e-mail</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label"
            >Qual a sua denúncia?</label
          >
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button>Enviar</button>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarLog from "../components/NavbarLogado.vue";
export default {
  name: "Denuncia",
  components: {
    NavbarLog
  },
};
</script>