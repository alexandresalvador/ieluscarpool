<template>
  <div>
    <div class="container-fluid px-0">
      <div class="partials row align-items-center p-5">
        <div class="partials-text col-md-6 mb-3">
          <h1 class="d-flex justify-content-left fs-3">
            Objetivo do Aplicativo
          </h1>
          <p class="fs-6">
            Ielusc Carpool tem a proposta de solucionar o problema da falta de vagas de estacionamento da faculdade.
          </p>
          <p class="fs-5">
            O objetivo do Ielusc Carpool é ajudar um aluno ou um funcionário a
            conseguir encontrar uma carona solidária, de casa até o Campus da
            Faculdade Ielusc, ou vice-versa. <br />
            Este projeto por enquanto abrange apenas o Campus da Faculdade
            Ielusc do Centro e o do Saguaçu.
          </p>
        </div>
        <div class="partials-img col-md-6">
          <img src="../assets/img-3.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.partials {
  background: #ffe7c0;
}

.partials-img img {
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

h1 {
  color: #13407c;
}

p {
  text-align: left;
  font-weight: 600;
}

</style>