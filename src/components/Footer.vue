<template>
     <footer class="contato" id="contato">
        <div class="social">
            <a href="https://faculdade.ielusc.br/"><i class='bi bi-house-door-fill'></i></a>
            <a href="https://www.instagram.com/faculdadeielusc/"><i class='bi bi-instagram' ></i></a>
            <a href="https://www.youtube.com/@BOMJESUSIELUSCJOINVILLE"><i class="bi bi-youtube"></i></a>
        </div>
        <div class="links">
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos de Uso</a>
            <a href="#">Denunciar Problema</a>
        </div>
        <div
          class="text-center text-dark p-3"
        >
          © 2023 Copyright:
          <a class="text-dark" href="http://www.ielusc.br">Bom Jesus/IELUSC</a>
        </div>
      </footer>
</template>
<script>

import Footer from "@/components/Footer.vue";
export default {
  name: "Footer",
  components: {
    Footer,
  },
};
</script>
<style scoped>

.contato{
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.social a{
    font-size: 27px;
    margin: 0.5rem;
    display: inline-block;
    margin-right: 10px;
}

.social a .bi{
  padding: 10px;
  color: black;

}

.links{
    margin: 1rem 0 1rem;
}

.links a{
    font-size: 1rem;
    font-weight: 500;
    color: var(--second-color);
    padding: 1rem;
}

.links a:hover{
    color: var(--main-color);
}

@media (max-width: 767px) {
  .social a {
    margin-bottom: 10px;
  }

  .links a{
    display: block;
    margin-bottom: 1px;
    padding: 0rem;
 }
}

</style>