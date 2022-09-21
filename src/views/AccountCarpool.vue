<template>
  <div>
    <nav class="navbar bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/account-home">
          <img
            src="../assets/LogoIC.png"
            alt=""
            width="200"
            height="100"
            class="d-inline-block align-text-top"
          />
        </a>
        <li class="nav">
          <a class="nav-link active" aria-current="page">
            <h1>Olá, Visitante</h1>
          </a>
        </li>
      </div>
    </nav>
    <div class="con">
      <h4>SOLICITE UM PEDIDO OU PESQUISE POR UMA CARONA</h4>
      <br>
      <hr>
      <br>
      <div class="container">
        <div class="col">
          <h3>Solicitar Carona</h3>
          <form>
            <div class="form-row d-inline-block
                  align-text-top">
              <div class="col-25">
                <input type="text" class="form-control" placeholder="Bairro" />
              </div>
              <div class="col-20">
                <input type="text" class="form-control" placeholder="Rua" />
              </div>
              <div class="col-20">
                <input type="text" class="form-control" placeholder="Horário de embarque" />
              </div>
              <br>
              <button type="button" class="btn btn-primary">Pesquisar</button>
            </div>
          </form>
        </div>
        <br>
        <hr>
        <br>
      </div>
      <div class="col">
          <h3>Pesquisar Carona</h3>
          <form>
            <div class="form-row d-inline-block
                  align-text-top">
              <div class="col-25">
                <input type="text" class="form-control" placeholder="Bairro" />
              </div>
              <div class="col-20">
                <input type="text" class="form-control" placeholder="Rua" />
              </div>
              <div class="col-20">
                <input type="text" class="form-control" placeholder="Horário de embarque" />
              </div>
              <br>
              <button type="button" class="btn btn-primary">Pesquisar</button>
            </div>
          </form>
        </div>
    </div>
    <div class="con3">
      <footer>
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
  name: "AccountCarpool",
  components: {},
};
</script>
  
<style scoped>
.con {
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
  