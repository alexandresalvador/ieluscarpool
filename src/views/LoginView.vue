<template>
  <div class="container">
    <div class="container pt-3 bg-primary">
      <div class="row">
        <div class="col" id="imagem-cadastro">
          <a class="navbar-brand" href="">
            <img
              src="../assets/carpool4.jpg"
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
                PARA CONTINUAR NO IELUSCARPOOL, USE A SUA MATRICULA E SENHA JÁ
                CADASTRADOS PARA PODER ACESSAR A SUA CONTA!
              </p>
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label"
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
                    >VER SENHA</label
                  >
                </div>
                <button type="submit" class="btn btn-primary">
                  ENTRAR
                </button>
              </form>
            </div>
          </div>
          <label class="form-check-label" for="exampleCheck1"
            >ESQUECI A SENHA</label>
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


