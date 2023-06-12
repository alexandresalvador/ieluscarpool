<template>
  <div>
    <div class="container-fluid px-5">
      <br />
      <h5>Ielusc Carpool | Meu Perfil</h5>
      <div>
        <br />
        <div class="container">
          <h6>Minhas Informações Pessoais: </h6>
          <hr>
          <br>
          <div class="row d-flex justify-content-center">
            <div class="col-md-8">
              <img src="../assets/foto-perfil2.png" alt="Foto de Perfil" />
              <div class="justify-content-right">
              <h5>{{ perfil.nome }}</h5>
              <p>Data de Nascimento: {{ perfil.data_nasc }}</p>
              <p>Curso: {{ perfil.curso }}</p>
              <p>Telefone: {{ perfil.telefone }}</p>
              <p>Data de Início: {{ perfil.data_inicio }}</p>
              <p>Data de Término: {{ perfil.data_termino }}</p>
            </div>
            </div>
            <hr />
            <div class="col-md-8">
              <h5>Mais Informações: </h5>
              <p>Rua: {{ perfil.rua }}</p>
              <p>Bairro: {{ perfil.bairro }}</p>
              <p>Cidade: {{ perfil.cidade }}</p>
              <p>Estado: {{ perfil.estado }}</p>
            </div>
          </div>
          <router-link
            to="/account-editar-perfil"
            class="nav-link editar-perfil"
          >
            <button type="button" class="btn btn-sm btn-outline-primary">
              Editar Perfil
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "AccountProfile",
  components: {},
  data() {
    return {
      perfil: {
        nome: "",
        curso: "",
        data_inicio: "",
        data_termino: "",
        data_nasc: "",
        telefone: "",
        rua: "",
        bairro: "",
        cidade: "",
        estado: "",
      },
    };
  },
};

</script>

<style scoped>

.container {
  max-width: 1960px;
  margin: 0 auto;
}

.container h5 {
  margin-top: 0;
}

.container hr {
  margin-top: 1rem;
}

.container img {
  max-width: 20%;
}

.container p {
  margin-bottom: 0.5rem;
}

.editar-perfil {
  display: inline-block;
  margin-top: 1rem;
}

@media (max-width: 767px) {
  .container {
    padding-left: 15px;
    padding-right: 15px;
  }

  .container h6 {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  .container hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .container img {
    margin-bottom: 1rem;
  }

  .container p {
    margin-bottom: 0.75rem;
  }

  .editar-perfil {
    display: block;
    margin-top: 1rem;
    text-align: center;
  }
}

</style>