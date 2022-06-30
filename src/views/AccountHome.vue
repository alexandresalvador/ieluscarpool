<template>
  <div>
    <nav class="navbar bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="">
          <img
            src="../assets/LogoIC.png"
            alt=""
            width="200"
            height="100"
            class="d-inline-block align-text-top"
          />
        </a>
        <li class="nav">
          <a class="nav-link active" aria-current="page" href="#">
            <h1>Bem-Vindo Visitante</h1>
          </a>
        </li>
      </div>
    </nav>
    <div class="col">
      <h1>CARONAS</h1>
    </div>
    <div class="col">
      <h3>Pesquisar Carona</h3>
      <form>
        <div class="form-row">
          <div class="col-7">
            <input type="text" class="form-control" placeholder="Bairro" />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Rua" />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="numero" />
          </div>
        </div>
      </form>
    </div>
    <div class="col">
      <h3>Ver Solicitações de Carona</h3>
            <form>
        <div class="form-row">
          <div class="col-7">
            <input type="text" class="form-control" placeholder="Bairro" />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Rua" />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="numero" />
          </div>
        </div>
      </form>
    </div>

    <div class="container3">
      <h6>footer</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountHome",
  components: {},
};
</script>

<style scoped>
</style>
