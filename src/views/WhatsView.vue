<template>
<div>
  <div class="container-fluid px-0">
  <div class="partials row align-items-center p-5">
      <div class="partials-img col">
        <img src="../assets/img-2.png" alt="" />
      </div>
      <div class="partials-text col">
        <h1 class="d-flex justify-content-left fs-3">Como Funciona o Aplicativo ?</h1>
        <p class="fs-6">
        Ielusc Carpool é a melhor opção para que voce nao chegue atrasado á faculdade:
      </p>
        <p class="fs-5">
          Primeiro, é necessário que se crie uma conta, ou apena logar, caso você ja faça parte do aplicativo, para criar é muito simples: <br>
          Utilize seu email do Ielusc, crie uma senha segura e clique em continuar; <br>
          Logo após a confirmação de que a sua conta foi criada, coloque algumas informaçoes pessoais e monte o seu perfil. <br>
          Pronto, simples e prático!
        </p>
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
    transform: translate(-0px, -11px);
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