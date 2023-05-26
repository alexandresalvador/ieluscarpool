<template>
  <div>
    <nav class="navbar bg-light">
      <div class="container-fluid">
        <a class="navbar-brand">
          <img
            src="../assets/LogoIC.png"
            alt=""
            width="160"
            height="80"
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
    <div class="container">
      <h1>Home - Ielusc Carpool</h1>
      <h6>Seja bem vindo visitante</h6>
      <hr />
      <br />
    </div>
    <div class="container">
      <button class="btn btn-outline-success me-2" type="button">
        <router-link to="/account-carpool">Pesquisar Caronas</router-link>
      </button>
      <button class="btn btn-outline-success me-2" type="button">
        <router-link to="/account-profile">Ver meu Perfil</router-link>
      </button>
      <button class="btn btn-outline-success me-2" type="button">
        <router-link to="/account-favourites">Ver meus Favoritos</router-link>
      </button>
      <button class="btn btn-outline-success me-2" type="button">
        <router-link to="/account-history">Ver últimas caronas</router-link>
      </button>
      <button class="btn btn-outline-success me-2" type="button">
        <router-link to="/account-chat">Ver Chat</router-link>
      </button>
    </div>
    <br />
    <div class="col d-flex align-items-center">
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label class="form-check-label" for="flexRadioDefault1">
          Conta Motorista
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          checked
        />
        <label class="form-check-label" for="flexRadioDefault2">
          Conta caroneiro
        </label>
      </div>
    </div>

    <Sidebar />
    <div :style="{ 'margin-left': sidebarWidth }">
      <router-view />
    </div>


    <hr />
    <div
      id="carouselExampleControls"
      class="carousel slide border border-warning"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active" id="imagem-wrapper">
          <img
            src="../assets/img01.jpg"
            class="d-block w-100"
            id="imagem"
            alt="..."
          />
        </div>
        <div class="carousel-item" id="imagem-wrapper">
          <img
            src="../assets/bonja2.jpg"
            class="d-block w-100"
            id="imagem"
            alt="..."
          />
        </div>
        <div class="carousel-item" id="imagem-wrapper">
          <img
            src="../assets/bonja1.jpg"
            class="d-block w-100"
            id="imagem"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Antes</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Depois</span>
      </button>
    </div>
    <br />
    <hr />
    <br />
    <div class="row">
      <div class="col d-flex justify-content-center" id="img">
        <a class="navbar-brand">
          <img
            src="../assets/bonja3.jpg"
            width="100%"
            height="90%"
            class="d-inline-block align-text-top border border-primary border border-4 shadow p-3 mb-5 bg-white rounded"
          />
        </a>
      </div>
      <div class="col d-flex align-items-center">
        <div class="container2">
          <div class="about">
            <p class="text-justify fs-1">
              <b> OLÁ ALUNO DA FACULDADE IELUSC, SEJA BEM-VINDO! </b>
            </p>
            <h6 class="text-justify fs-5">
              Este é o Ielusc Carpool, a mais nova forma de se chegar em
              segurança até a faculdade, onde alunos do mesmo campus podem dar
              caronas ou pegar caronas com outros alunos, por preços baixos.
            </h6>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div class="container pt-3">
      <div class="about">
        <h1>Fazer Denúncias</h1>
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
            >Qual a sua denúncia?</label
          >
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button>Enviar</button>
      </div>
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

.form-check {
  padding: 20px;
}

#imagem-wrapper {
  height: 50vh;
  overflow: hidden;
  position: relative; /* Para fazer que a imagem com position-absolute respeite a sua posição consoante este selector, ou evitar que saia do mesmo */
}
#imagem {
  width: 600px;
  /* código abaixo centra a imagem ao centro */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>
