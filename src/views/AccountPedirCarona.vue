<template>
  <div>
    <div class="con">
      <h4>Peça uma carona a outro usuario criando uma solicitação:</h4>
      <br>
      <hr>
      <br>

      <div class="container bg-light mt-4 py-1">
        <form @submit.prevent="salvarPedido()">
          <div class="row py-2 justify-content-center">
            <label for="titulo" class="col-11 form-label">
              <span class="fs-6">Título</span>
              <input type="text" class="form-control form-control-sm mt-1" id="titulo"
                placeholder="Insira um título para o seu pedido de carona" required minlength="3" v-model="$v.titulo.$model"
                :class="{ error: $v.titulo.$error, success: !$v.titulo.$error }" />
              <div v-if="$v.titulo.$error" class="text-danger">
                <small>Deve conter ao menos 3 caracteres</small>
              </div>
            </label>
          </div>

          <div class="row justify-content-center">
            <label for="descricao" class="col-11 form-label">
              <span class="fs-6">Descrição : (opcional)</span>
              <textarea class="form-control form-control-sm mt-1" id="descricao"
                placeholder="Insira uma pequena descrição de seu pedido de carona" rows="4">
                </textarea>
            </label>
          </div>

          <div class="row pt-2 justify-content-center">
            <label for="categoria" class="col-11 form-label">
              <span class="fs-6">Hora desejada :</span>
              <select class="form-select form-select-sm" required aria-label="categoria" v-model="$v.categoria.$model"
                :class="{ error: $v.categoria.$error, success: !$v.categoria.$error }">
                <option value="">Selecione</option>
                <option value="18:00">18:00</option>
                <option value="18:30">18:30</option>
                <option value="19:00">19:00</option>
                <option value="19:30">19:30</option>
                <option value="20:00">20:00</option>
                <option value="20:30">20:30</option>
                <option value="21:00">21:00</option>
                <option value="21:30">21:30</option>
                <option value="22:00">22:00</option>
                <option value="22:30">22:30</option>
                <option value="Outro horário">Outro horário (Personalizado)</option>
              </select>
              <div v-if="$v.categoria.$error" class="text-danger">
                <small>Categoria requerida</small>
              </div>
            </label>
          </div>

          <div class="row pt-2 justify-content-center">
              <label for="categoria" class="col-11 form-label">
                <span class="fs-6">Bairro :</span>
                <select class="form-select form-select-sm" required aria-label="categoria" v-model="$v.categoria.$model"
                  :class="{ error: $v.categoria.$error, success: !$v.categoria.$error }">
                  <option value="">Selecione</option>
                  <option value="18:00">18:00</option>
                  <option value="18:30">18:30</option>
                  <option value="19:00">19:00</option>
                  <option value="19:30">19:30</option>
                  <option value="20:00">20:00</option>
                  <option value="20:30">20:30</option>
                  <option value="21:00">21:00</option>
                  <option value="21:30">21:30</option>
                  <option value="22:00">22:00</option>
                  <option value="22:30">22:30</option>
                  <option value="Outro horário">Outro horário (Personalizado)</option>
                </select>
                <div v-if="$v.categoria.$error" class="text-danger">
                  <small>Categoria requerida</small>
                </div>
              </label>
            </div>


          <div class="row py-2 justify-content-center">
            <div class="col-11 d-flex justify-content-between">
              <button @click="clear" type="button" class="btn btn-sm btn-secondary">Cancelar</button>
              <button :disabled="$v.$invalid" type="submit" class="btn btn-sm btn-primary">
                Pedir
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
    
<script>
// import api from '@/api';
import {
  required,
  minLength,
} from "vuelidate/lib/validators";

export default {
  name: "AccountPedirCarona",
  components: {
  },
  data() {
    return {
      titulo: '',
      descricao: '',
      categoria: '',
      statusAnuncio: 'ativo',
      tipo: 'pedido',
      usuario: '',
    };
  },
  validations: {
    titulo: {
      required,
      minLength: minLength(3),
    },
    categoria: {
      required,
    },
  },
  methods: {
    getusuariologado() {
      let userStorage = localStorage.getItem('usuariologado');
      userStorage = JSON.parse(userStorage);
      this.user = userStorage.id;
    },
    salvarPedido() {
      const data = {
        title: this.titulo,
        description: this.descricao,
        category: this.categoria,
        type: this.type,
        status: this.status,
        usuario: this.usuario,
      };
      api
        .post('/anuncio', data)
        .then(() => {
          console.log('O seu Anúncio foi salvo');
          this.$router.push({ path: '/meus-pedidos-carona' });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    clear() {
      this.titulo = '';
      this.descricao = '';
      this.categoria = '';
    },
  },

  mounted() {
    this.getusuariologado();
  },
};
</script>

<style scoped>
.error {
  border: 1px solid red;
}


</style>
    