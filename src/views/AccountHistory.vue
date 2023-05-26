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
      <h4>HISTÓRICO DE CORRIDAS</h4>
      <br />
      <hr />
      <br />
      <div class="container">
        <div class="con2">
          <h1>0 Caronas Encontradas</h1>
        </div>
      </div>
    </div>
  </div>
</template>
    
    <script>
export default {
  name: "AccountHistory",
  components: {},
};
</script>
    
  <style scoped>
.con {
  margin-top: 30px;
  margin-bottom: 30px;
}

.con2 {
  height: 200px;
  width: 100%;
  background-color: rgb(200, 247, 247);
}
</style>
    