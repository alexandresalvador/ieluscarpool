<template>
  <div class="con">
    <div class="container">
      <div class="container pt-3">
        <div class="row">
          <div class="col" id="imagem-cadastro">
            <a class="navbar-brand">
              <img
                src="../assets/cartoonCar.png"
                width="100%"
            height="90%"
            class="d-inline-block align-text-top"
              />
            </a>
          </div>
          <div class="col bg-light">
            <div class="con2">
              <div class="about">
                <p class="h6">
                  PARA PARTICIPAR DO IELUSC CARPOOL, UTILIZE O SEU E-MAIL DO IELUSC E CRIE
                  UMA SENHA PARA PODER CRIAR A SUA CONTA!
                </p>
                <form>
                  <div class="mb-3">
                    <label
                      for="exampleInputEmail1"
                      class="form-label d-flex justify-self-start"
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
                    <p class="h6" for="exampleCheck1" > Ver Senha </p>
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
                    <p class="h6" for="exampleCheck1" > Ver Senha </p>
                  </div>

                  <button type="submit" class="btn btn-primary">
                    <a class="nav-link active" aria-current="page" href="#">
                       <router-link to="/criar-perfil">Continuar</router-link>
                   </a>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CreateProfile from './CreateProfile.vue';

export default {
  name: "CreateAccount",
  components: { CreateProfile },
};
</script>

<style scoped>
  
.con {
  margin-top: 30px;
  margin-bottom: 40px;
}

.con2 {
  margin-top: 40px;
  margin-bottom: 40px;
}

#imagem-cadastro {
  align-content: center;
}
</style>


