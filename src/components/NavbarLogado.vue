<template>
    <div>
      <nav class="navbar d-flex justify-content-center align-items-center bg-light">
        <a href="/account-home" class="logo"><img src="../assets/LogoIC01.png" alt="" /></a>
        <div class="bi bi-menu" id="menu-icon"></div>
        <!-- <li class="nav">
          <a class="nav-link active" aria-current="page">
            <h1>Olá, {Visitante}</h1>
          </a>
        </li> -->
        <ul class="nav-bar m-0">
          <li><a href="/account-home" class="text-decoration-none">Home</a></li>
          <li><a href="#" class="text-decoration-none">Novidades</a></li>
          <li><a href="/account-denuncia" class="text-decoration-none">Denunciar</a></li>
          <li><a href="#sair" class="text-decoration-none">Sair</a></li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
//   import Navbar from "@/components/Navbar.vue";
  export default {
    name: "NavbarLogado",
    components: {
      
    },
  };
  </script>
  
  <style scoped> 
  .logo {
    display: flex;
    align-items: center;
  }
  
  .logo img {
    width: 150px;
  }
  
  .nav-bar {
    display: flex;
    list-style: none;
    /* margin-top: -30px;
    margin-left: 50%;
    padding: 2px; */
  }
  
  .nav-bar a {
    font-size: 1rem;
    padding: 11px 20px;
    color: black;
    font-weight: 600;
    text-transform: uppercase;
  }
  
  .nav-bar a:hover {
    color: orange;
  }
  
  #menu-icon {
    font-size: 24px;
    cursor: pointer;
    z-index: 1001;
    display: none;
  }
  </style>