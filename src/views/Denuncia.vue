<template>
  <div>
    <NavbarLog />

    <div class="container-fluid px-0">
      <div class="partials row align-items-center p-5">
        <div class="partials-text col">
          <div class="about">
            <h3>O que você quer denunciar?</h3>
            <br />
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label d-flex justify-content-left "
                >Informe seu endereço de e-mail: </label
              >
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="xxxxxxxx@ielusc.br"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label d-flex justify-content-left "
                >Informe a sua denúncia: </label
              >
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Escreva aqui a sua denúncia..."
                rows="3"
              ></textarea>
            </div>
            <button type="button" class="btn btn-primary">Enviar</button>
          </div>
        </div>
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