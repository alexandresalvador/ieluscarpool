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

    <div class="container3">
      <footer class="text-center text-white" style="background-color: #f1f1f1">
        <!-- Grid container -->
        <div class="container pt-4">
          <!-- Section: Social media -->
          <section class="mb-4">
            <!-- Facebook -->
            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
              ><i class="fab fa-facebook-f"></i
            ></a>

            <!-- Twitter -->
            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
              ><i class="fab fa-twitter"></i
            ></a>

            <!-- Google -->
            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
              ><i class="fab fa-google"></i
            ></a>

            <!-- Instagram -->
            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
              ><i class="fab fa-instagram"></i
            ></a>
          </section>
        </div>
        <div
          class="text-center text-dark p-3"
          style="background-color: rgba(0, 0, 0, 0.2)"
        >
          © 2022 Copyright:
          <a class="text-dark" href="http://www.ielusc.br">Bom Jesus/IELUSC</a>
        </div>
      </footer>
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


