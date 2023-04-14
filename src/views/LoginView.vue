<template>
  <div class="con">
    <div class="container">
      <div class="container pt-3">
        <div class="row">
          <div class="col" id="imagem-cadastro">
            <a class="navbar-brand">
              <img
                src="../assets/carpool7.jpg"
                width="100%"
            height="90%"
            class="d-inline-block align-text-top border border-warning border border-4 shadow p-3 mb-5 bg-white rounded"
              />
            </a>
          </div>
          <div class="col bg-light">
            <div class="con2">
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
                  <a class="nav-link active" aria-current="page" href="#">
                    <router-link to="/account-home">Entrar</router-link>
                  </a>
                </form>
              </div>
            </div>
            <label class="form-check-label" for="exampleCheck1"
              >ESQUECI A SENHA</label
            >
          </div>
        </div>
      </div>

      <div class="con3">
        <footer>
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
  </div>
</template>

<script>
export default {
  name: "CreateAccount",
  components: {},
};
</script>

<style scoped>
.con {
  margin-top: 40px;
  margin-bottom: 40px;
}

.con2 {
  margin-top: 40px;
  margin-bottom: 40px;
}

.con3 {
  padding: 10px;
}

#imagem-cadastro {
  align-content: center;
}
</style>


