<template>
  <div>
    <div class="container-fluid px-0">
      <div class="partials row align-items-center p-5">
        <div class="partials-text col">
          <div class="about">
            <h1>Contato</h1>
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
                >Qual a sua dúvida?</label
              >
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
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

<style scoped>
.partials {
  background: #ffe7c0;
}

h1 {
  color: #13407c;
}

</style>
