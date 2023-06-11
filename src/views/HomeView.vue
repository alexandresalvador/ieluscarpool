<template>
  <div class="container-fluid px-0">
    <Navbar />
    <div class="home row align-items-center p-5" id="home">
      <div class="home-text col">    
        <span class="d-flex justify-content-left fs-4">Bem Vindo ao</span>
        <h1 class="d-flex justify-content-left">Ielusc Carpool!</h1>
        <p class="fs-3">
          A mais nova forma de se chegar em segurança até a faculdade Ielusc,
          onde alunos do mesmo campus podem dar caronas ou pegar caronas com
          outros alunos, por preços que cabem no seu bolso!
        </p>
        <section class="buttons" id="buttons">
          <a href="/logar" class="btn">Fazer Login</a>
          <a href="/criar-conta" class="btn">Fazer Cadastro</a>
        </section>
      </div>
      <div class="home-img col">
        <img src="../assets/img-woman.png" alt="" />
      </div>

      <div class="d-none buttons row" id="buttons">
        <div class="col">
          <a href="/logar" class="btn-lg">Fazer Login</a>
        </div>
      </div>
      <div class="d-none buttons row" id="buttons">
        <div class="col">
          <a href="/criar-conta" class="btn-lg">Fazer Cadastro</a>
        </div>
      </div>
    </div>
    <br />

    <WhatsView  id="como-funciona" />
    <br />

    <AboutView  id="sobre" />
    <br />

    <PartnersView  id="a-faculdade" />
    <br />

    <ContactView  id="o-contato" />
  </div>
</template>

<script>
// import TelaHome from "@/components/TelaHome.vue";
import WhatsView from "@/views/WhatsView.vue";
import AboutView from "@/views/AboutView.vue";
import PartnersView from "@/views/PartnersView.vue";
import ContactView from "@/views/ContactView.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "HomeView",
  components: {
    // TelaHome,
    WhatsView,
    AboutView,
    PartnersView,
    ContactView,
    Navbar,
  },
};
</script>

<style scoped>
.home {
  background: #ffe7c0;
  /* azul : #57C6FF fosco: #fcd8af; laranja: #F28A16; */
}

.home-img img {
  /* animation: animate 5s linear infinite; */
  width: 50%;
}

/* @keyframes animate {
  0% {
    transform: translate(-11px, 0);
  }

  50% {
    transform: translate(-0px, -11px);
  }

  100% {
    transform: translate(-11px, 0);
  }
} */

h1 {
  color: #13407c;
}

p {
  text-align: left;
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
.home-text {
  text-align: center;
}

.home-img {
  text-align: center;
  margin-top: 20px;
}

.buttons {
  text-align: center;
  margin-top: 20px;
}

/* Estilos para telas maiores (aqui definido para 768px) */
@media (max-width: 768px) {
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .home-text {
    width: 80%;
    margin: 0 auto;
  }

  .home-img {
    margin-top: 40px;
  }

  .buttons {
    margin-top: 40px;
  }
}

</style>
