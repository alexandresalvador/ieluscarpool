<template>
    <ul class="nav flex-column position-absolute">
      <li class="nav-item li-icons d-flex justify-content-center">
        <button
          class="navbar-toggler p-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebar"
          aria-controls="sidebar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="bi bi-list text-danger fs-5"></i>
        </button>
      </li>
      <li class="nav-item li-icons d-flex justify-content-center">
        <router-link :to="`/account-profile/${id()}`" title="Meu perfil">
          <i class="bi bi-person-fill text-danger fs-5"></i>
        </router-link>
      </li>
      <li class="nav-item li-icons d-flex justify-content-center">
        <router-link to="/account-carpool" title="Procurar caronas">
          <i class="bi bi-gift-fill text-danger fs-5"></i>
        </router-link>
      </li>
      <li class="nav-item li-icons d-flex justify-content-center">
        <router-link to="/account-history" title="Meu Histórico">
          <i class="bi bi-box2-heart-fill text-danger fs-5"></i>
        </router-link>
      </li>
      <li class="nav-item li-icons d-flex justify-content-center">
        <router-link to="/account-favourites" title="Meus favoritos">
          <i class="bi bi-heart-fill text-danger fs-5"></i>
        </router-link>
      </li>
      <li class="nav-item li-icons d-flex justify-content-center">
        <router-link to="/account-chat" title="Meu Chat">
          <i class="bi bi-chat-dots-fill text-danger fs-5"></i>
        </router-link>
      </li>
      <ul id="sidebar" class="collapse p-0 position-absolute start-100">
        <li class="nav-item li-close d-flex justify-content-end">
          <button
            type="button"
            class="btn-close bg-danger"
            data-bs-toggle="collapse"
            data-bs-target="#sidebar"
            aria-controls="sidebar"
            aria-expanded="false"
            aria-label="Toggle navigation">
          </button>
        </li>
        <li class="nav-item li-text d-flex">
          <router-link :to="`/account-profile/${id()}`" class="text-decoration-none text-danger">
            Meu perfil
          </router-link>
        </li>
        <li class="nav-item li-text d-flex">
          <router-link to="/account-carpool" class="text-decoration-none text-danger">
            Pesquisar caronas
          </router-link>
        </li>
        <li class="nav-item li-text d-flex">
          <router-link to="/account-history" class="text-decoration-none text-danger">
            Meu Histórico
          </router-link>
        </li>
        <li class="nav-item li-text d-flex">
          <router-link to="/account-favourites" class="text-decoration-none text-danger">
            Meus favoritos
          </router-link>
        </li>
        <li class="nav-item li-text d-flex">
          <router-link to="/account-chat" class="text-decoration-none text-danger">
            Meu chat
          </router-link>
        </li>
      </ul>
    </ul>
  </template>
  
  <script>
  export default {
    name: 'SidebarPages',
    methods: {
      id() {
        let value = window.localStorage.getItem('userLogged');
        value = JSON.parse(value);
        value = value.id;
        return value;
      },
    },
  };
  </script>
  
  <style scoped>
  ul {
    background: rgba(40, 40, 40, 0.9);
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













<!-- <script>
import SidebarLink from './sidebarlink.vue'
import { collapsed, toggleSidebar, sidebarWidth } from "./state"

export default{
    props: {},
    components: { SidebarLink},
    setup() {
        return { collapsed, toggleSidebar, sidebarWidth }
    }
}
</script>

<template>
    <div class="sidebar" :style="{ width: sidebarWidth}">
        <h1>
            <span v-if="collapsed">
                <div>V</div>
                <div>S</div>
            </span>
            <span v-else>Vue Sidebar</span>
        </h1>

        <SidebarLink to="/" icon="fas fa-home"> Exemplo 1</SidebarLink>
        <SidebarLink to="/" icon="fas fa-columns"> Exemplo 2</SidebarLink>
        <SidebarLink to="/" icon="fas fa-chart-bar"> Exemplo 3</SidebarLink>
        <SidebarLink to="/" icon="fas fa-fa-users"> Exemplo 4</SidebarLink>
        <SidebarLink to="/" icon="fas fa-image"> Exemplo 5</SidebarLink>


        <span
        class="collapse-icon" 
        :class="{ 'rotate-180' : collapsed }"
        @click="toggleSidebar"
        >
            <i class="fas fa-angle-double-left"></i>    
        </span>
    </div>
</template>

<style>

:root {
    --sidebar-bg-color: #2f855a;
    --sidebar-item-hover: #38a169;
    --sidebar-item-active: #276749;
}

</style>

<style scoped>
.sidebar {
    color: white;
    background-color: var(--sidebar-bg-color);

    float: left;
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0.5em;
    transition: 0.3s ease;
    display: flex;
    flex-direction: column;
}

.collapse-icon {
    position: absolute;
    bottom: 0;
    padding: 0.75em;

    color: rgba(255, 255, 255, 0.7);

    transition: 0.2s linear;
}

.rotate-180 {
    transform: rotate(180deg);
    transition: 0.2s linear;
}

</style> -->