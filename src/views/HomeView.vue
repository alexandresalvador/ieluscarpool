<template>
  <div class="con pt-3">
    <!-- <div
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
    </div> -->
    <section class="home" id="home">
        <div class="home-text">
            <span>Bem Vindo ao</span>
            <h1>Ielusc Carpool!</h1>
            <h3>A mais nova forma de se chegar em
              segurança até a faculdade Ielusc, onde alunos do mesmo campus podem dar
              caronas ou pegar caronas com outros alunos, por preços que cabem no seu bolso!</h3>
            <section class="buttons" id="buttons">
                <a href="/logar" class="btn">Fazer Login</a>
                <a href="/criar-conta" class="btn">Fazer Cadastro</a>
            </section>
        </div>
        <div class="home-img">
            <img src="../assets/img-3.png" alt="">

        </div>
    </section>


    <!-- <button class="btn btn-outline-success me-2" type="button">
          <router-link to="/logar">Logar</router-link>
        </button>
        <button class="btn btn-sm btn-outline-secondary" type="button">
          <router-link to="/criar-conta">Criar Conta</router-link>
        </button> -->
    <br />
    <!-- <div class="row">
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
    </div> -->


    <WhatsView />

    <br />

    <AboutView />
    <br />

    <PartnersView />
    <br />

    <hr />
    
    <ContactView />
  </div>
</template>

<script>
import TelaHome from "@/components/TelaHome.vue";
import WhatsView from "@/views/WhatsView.vue";
import AboutView from "@/views/AboutView.vue";
import PartnersView from "@/views/PartnersView.vue";
import ContactView from "@/views/ContactView.vue";

export default {
  name: "HomeView",
  components: {
    TelaHome,
    WhatsView,
    AboutView,
    PartnersView,
    ContactView,
  },
};
</script>

<style scoped>

/* #imagem-wrapper {
  height: 50vh;
  overflow: hidden;
  position: relative; /* Para fazer que a imagem com position-absolute respeite a sua posição consoante este selector, ou evitar que saia do mesmo */
/* }
#imagem {
  width: 600px;
  /* código abaixo centra a imagem ao centro 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
} */

section{
    padding: 50px 10%;
}

.home{
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background: #E8CC9F;
    /* azul : #57C6FF fosco: #fcd8af; laranja: #F28A16; */
    gap: 1rem;
}

.home-text{
    flex: 1 1 17rem;
}

.home-img{
    flex: 1 1 17rem;
}

.home-img img{
    animation: animate 5s linear infinite;
}

@keyframes animate{
    0%{
        transform: translate(-11px, 0);
    }

    50%{
        transform: translate(-0px, -11px);
    }

    100%{
        transform: translate(-11px, 0);
    }
}

.home-text span{
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 600;
    color: black;
}

.home-text h1{
    font-size: 3.2rem;
    color: #13407C;
    font-weight: bolder;
}

.home-text h2{
    font-size: 1.8rem;
    font-weight: 600;
    color: black;
    text-transform: uppercase;
    margin: 0.5rem 0 1.4rem;
}

.buttons {
  padding: 10px;
}

.btn{
    padding: 7px 36px;
    border: 2px solid black;
    border-radius: 40px;
    color: black;
    font-weight: 500;
    margin: 10px;
}

.btn:hover{
    color: #fff;
    background: #13407C;
}



</style>
