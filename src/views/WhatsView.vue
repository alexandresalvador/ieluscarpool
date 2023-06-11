<template>
<div>
  <div class="container-fluid px-0">
  <div class="partials row align-items-center p-5">
      <div class="partials-img col-md-6 mb-4">
        <img src="../assets/img-2.png" alt="" />
      </div>
      <div class="partials-text col-md-6">
        <h1 class="d-flex justify-content-left fs-3">Como Funciona o Aplicativo ?</h1>
        <p class="fs-6">
        Ielusc Carpool é a melhor opção para que você não chegue atrasado á faculdade:
      </p>
        <p class="fs-5">
          Primeiro, é necessário que se crie uma conta ou apenas faça login, caso você já faça parte do aplicativo. Para criar, é muito simples:
          <br />
          Utilize seu e-mail do Ielusc, crie uma senha segura e clique em continuar.
          <br />
          Logo após a confirmação de que a sua conta foi criada, insira algumas informações pessoais e monte o seu perfil.
          <br />
          Pronto, simples e prático!
        </p>
      </div>
      <div class="d-none partials-img col-md-6">
        <img src="../assets/img-2.png" alt="" />
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>

.partials-img img {
  animation: animate 5s linear infinite;
  width: 50%;
}

@keyframes animate {
  0% {
    transform: translate(-11px, 0);
  }

  50% {
    transform: translate(-0px, 11px);
  }

  100% {
    transform: translate(-11px, 0);
  }
}

h1 {
  color: orange;
}

p {
  text-align: left;
  font-weight: 600;
}

</style>