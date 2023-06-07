<template>
  <div class="container-fluid px-0">
    <div class="home row align-items-center p-5">
      <div class="home-img col">
        <img src="../assets/carpool7.jpg" alt="" />
      </div>
      <div class="home-text col">
        <p class="fs-5">
          Para continuar no Ielusc Carpool, utilize a sua matrícula e senha já
          cadastradas, para poder fazer o login no aplicativo.
        </p>
        <form>
          <div class="col py-1 d-flex justify-content-center">
            <div class="col-12">
              <div class="row justify-content-center">
                <label for="email" class="form-label row">
                  <span class="fs-6">Email</span>
                  <div class="col-11">
                    <input
                      type="email"
                      class="form-control form-control-sm mt-1"
                      id="email"
                      placeholder="Xpto@email.com"
                      required
                    />
                    <div class="text-danger">
                      <small>Este email não é válido</small>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div class="col py-1 d-flex justify-content-center">
            <div class="col-12">
              <div class="row justify-content-center">
                <label for="password" class="form-label row">
                  <span class="fs-6">Senha</span>
                  <div class="col-11">
                    <input
                      :type="inputType"
                      minlength="8"
                      maxlength="16"
                      class="senha form-control form-control-sm mt-1"
                      id="password"
                      placeholder="Insira sua senha"
                      required
                    />
                    <div class="text-danger">
                      <small>Precisa conter entre 8 à 16 caracteres.</small>
                    </div>
                  </div>
                  <div class="col-1 d-flex align-items-start px-0 py-1">
                    <button type="button" class="btn btn-default p-0"></button>
                  </div>
                </label>
              </div>
              <section class="buttons" id="buttons">
                <a href="#" class="btn">Esqueci a senha</a>
              </section>
            </div>
          </div>
          <div class="col py-1 d-flex justify-content-center">
            <div class="col-12 d-flex justify-content-center">
              <section class="buttons" id="buttons">
                <router-link to="/account-home" class="btn">Entrar</router-link>
              </section>
            </div>
          </div>
          <div class="col py-1 d-flex justify-content-center">
            <div class="col-12 d-flex justify-content-center">
              <p>
                Ainda não criou uma conta?
                <router-link class="text-decoration-none" to="/criar-conta">
                  Criar conta
                </router-link>
              </p>
            </div>
          </div>
        </form>       
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  components: {},
};
</script>

<style scoped>
.home-img img {
  width: 100%;
}

h1 {
  color: #13407c;
}

p {
  font-weight: 600;
}

.buttons {
  padding: 10px;
}

.btn {
  padding: 7px 36px;
  border: 2px solid black;
  border-radius: 40px;
  color: black;
  font-weight: 500;
  margin: 10px;
}

.btn:hover {
  color: #fff;
  background: #13407c;
}
</style>


