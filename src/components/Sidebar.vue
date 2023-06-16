<template>
  <ul class="nav flex-column position-absolute">
    <li class="nav-item li-icons d-flex justify-content-center">
      <router-link to="/account-home" title="Editar meu Perfil">
        <i class="bi bi-house text-white fs-4"></i>
      </router-link>
    </li>
    <li class="nav-item li-icons d-flex justify-content-center">
      <!-- :to="`/account-profile/${xpto()}`" -->
      <router-link to="/account-profile" title="Editar meu Perfil">
        <i class="bi bi-person text-white fs-4"></i>
      </router-link>
    </li>
    <li class="nav-item li-icons d-flex justify-content-center">
      <router-link to="/account-denuncia" title="Denunciar">
        <i class="bi bi-flag text-white fs-6"></i>
      </router-link>
    </li>
    <li class="nav-item li-icons d-flex justify-content-center">
      <router-link to="/account-history" title="Ver Meu Histórico">
        <i class="bi bi-clock-history text-white fs-6"></i>
      </router-link>
    </li>
    <li class="nav-item li-icons d-flex justify-content-center">
      <router-link to="/account-favourites" title="Ver Meus favoritos">
        <i class="bi bi-heart text-white fs-5"></i>
      </router-link>
    </li>
    <ul id="sidebar" class="collapse p-0 position-absolute start-100">
      <li class="nav-item li-close d-flex justify-content-end">
        <button type="button" class="btn-close bg-white" data-bs-toggle="collapse" data-bs-target="#sidebar"
          aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation">
        </button>
      </li>
      <li class="nav-item li-text d-flex">
        <!-- :to="`/account-profile/${xpto()}`" -->
        <router-link to="/account-profile" class="text-decoration-none text-white">
          Editar meu Perfil
        </router-link>
      </li>
      <li class="nav-item li-text d-flex">
        <router-link to="/account-home" class="text-decoration-none text-white">
          Filtrar por bairro
        </router-link>
      </li>
      <li class="nav-item li-text d-flex">
        <router-link to="/account-history" class="text-decoration-none text-white">
          Ver Meu Histórico
        </router-link>
      </li>
      <li class="nav-item li-text d-flex">
        <router-link to="/account-favourites" class="text-decoration-none text-white">
          Ver Meus Favoritos
        </router-link>
      </li>
    </ul>
  </ul>
</template>

<script>
export default {
  name: 'Sidebar',
  methods: {
    // xpto() {
    //   let value = window.localStorage.getItem('userLogged');
    //   value = JSON.parse(value);
    //   value = value.xpto;
    //   return value;
    // },
  },
};
</script>

<style scoped>
ul {
  background: #F28A16;
  /* background: rgba(247, 241, 241, 0.9); */
}

ul {
  z-index: 1000;
}

.li-icons {
  padding: 1rem 0.75rem;
}

.li-text {
  padding: 1.19rem 0.75rem;
}

.li-close {
  padding: 0.95rem 0.75rem;
}

.navbar-toggler:focus {
  box-shadow: none;
}

#sidebar {
  width: 11rem;
}
</style>

