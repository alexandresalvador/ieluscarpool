<template>
  <div class="container-fluid px-0">
    <div class="home row align-items-center p-5" id="home">
      <div class="home-text col">
        <span class="d-flex justify-content-left fs-4">Bem Vindo ao</span>
        <h1 class="d-flex justify-content-left">Ielusc Carpool!</h1>
        <p class="fs-3">
          A mais nova forma de se chegar em segurança até a faculdade Ielusc, onde alunos do mesmo campus podem dar
          caronas ou pegar caronas com outros alunos, por preços que cabem no seu bolso!
        </p>
        <section class="buttons" id="buttons">
          <a href="/logar" class="btn">Fazer Login</a>
          <a href="/criar-conta" class="btn">Fazer Cadastro</a>
        </section>
      </div>
      <div class="home-img col">
        <img src="../assets/img-woman.png" alt="">
      </div>
      <div class="d-none buttons row" id="buttons">
        <div class="col">
          <a href="/logar" class="btn">Fazer Login</a>
        </div>
      </div>
      <div class="d-none buttons row" id="buttons">
        <div class="col">
          <a href="/criar-conta" class="btn">Fazer Cadastro</a>
        </div>
      </div>
    </div>
    <br />

    <WhatsView />
    <br />

    <AboutView />
    <br />

    <PartnersView />
    <br />

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
div {
  /* padding: 50px 10%; */
}

.home {
  background: #E8CC9F;
  /* azul : #57C6FF fosco: #fcd8af; laranja: #F28A16; */
}

.home-img img {
  animation: animate 5s linear infinite;
  width: 50%;
}

@keyframes animate {
  0% {
    transform: translate(-11px, 0);
  }

  50% {
    transform: translate(-0px, -11px);
  }

  100% {
    transform: translate(-11px, 0);
  }
}

/* .home-text span {
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 600;
  color: black;
}

.home-text h1 {
  font-size: 3.2rem;
  color: #13407C;
  font-weight: bolder;
}

.home-text h2 {
  font-size: 1.8rem;
  font-weight: 600;
  color: black;
  text-transform: uppercase;
  margin: 0.5rem 0 1.4rem;
} */

h1 {
  color: #13407C;
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
  background: #13407C;
}
</style>
