<template>
  <div class="container">
    <div class="container pt-3 bg-primary">
      <div class="row">
        <div class="col" id="imagem-cadastro">
          <a class="navbar-brand" href="">
            <img
              src="../assets/carpool5.jpg"
              width="600"
              height="500"
              class="d-inline-block align-text-top"
            />
          </a>
        </div>
        <div class="col bg-light">
          <div class="container2">
            <div class="about">
              <p>
                PARA LOGAR NO IELUSC CARPOOL USE O SEU E-MAIL DO IELUSC E CRIE
                UMA SENHA PARA PODER CRIAR A SUA CONTA!
              </p>
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label d-flex justify-self-start"
                    >EMAIL</label
                  >
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label"
                    >SENHA</label
                  >
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1"
                    >Ver Senha</label
                  >
                </div>

                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    REPITA A SENHA</label
                  >
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1"
                    >Ver Senha</label
                  >
                </div>

                <button type="submit" class="btn btn-primary">
                  Realizar Cadastro
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container3">
      <h1>este é o footer</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateAccount",
  components: {},
};
</script>

<style scoped>
.container {
  padding: 10px;
}

.container2 {
  padding: 30px;
}

.container3 {
  padding: 30px;
}

#imagem-cadastro {
  align-content: center;
}
</style>


