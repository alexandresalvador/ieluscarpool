<template>
  <div class="container">
    <h5>Ielusc Carpool | Criação de Perfil</h5>
    <hr />
    <div>
      <div class="row mb-3">
        <h6>Foto de Perfil</h6>
        <hr />
      </div>
      <div class="row">
        <div class="col">
          <div class="row mb-3">
            <div class="col">
              <div class="d-flex justify-content-center align-items-center">
                <img
                  src="../assets/foto-perfil.png"
                  alt=""
                  width="80"
                  height="80"
                  class="d-inline-block align-text-top"
                />
              </div>
            </div>
            <button class="btn btn-light border border-primary"> Escolher Foto</button>
          </div>
        </div>
      </div>
    </div>
    <div>

      <div class="row mb-4">
        <h6>Coloque suas informações pessoais:</h6>
        <hr />
        <div class="col-3">
          <div class="row mb-3">
            <label for="razao"
              ><span class="d-flex justify-content-between">
                <b>Nome Completo: </b>
                <small v-if="alerta01()" class="text-danger">
                  Campo obrigatório!</small
                >
              </span>
              <input
                v-model="perfil.nome"
                type="text"
                class="form-control"
                placeholder="Nome Completo"
                required
              />
            </label>
          </div>
        </div>
        <div class="col-3">
          <div class="row mb-3">
            <label for="curso"
              ><span class="d-flex justify-content-between">
                <b>Curso: </b>
                <small v-if="alerta02()" class="text-danger">
                  Campo obrigatório!</small
                >
              </span>
              <input
                v-model="perfil.curso"
                type="text"
                class="form-control"
                placeholder="curso"
                required
              />
            </label>
          </div>
        </div>
        <div class="col-3">
          <div class="row mb-3">
            <label for="anoinicio"
              ><span class="d-flex justify-content-between">
                <b>Ano de inicio: </b>
                <small v-if="alerta03()" class="text-danger">
                  Campo obrigatório!</small
                >
              </span>
              <input
                v-model="perfil.anoinicio"
                type="number"
                class="form-control"
                placeholder="Ano de inicio"
                required
              />
            </label>
          </div>
        </div>
        <div class="col-3">
          <div class="row mb-3">
            <label for="anotermino"
              ><span class="d-flex justify-content-between">
                <b>Ano de término: </b>
                <small v-if="alerta04()" class="text-danger">
                  Campo obrigatório!</small
                >
              </span>
              <input
                v-model="perfil.anotermino"
                type="text"
                class="form-control"
                placeholder="Ano de termino"
                required
              />
            </label>
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-3">
          <div class="row mb-3">
            <label for="dtnasc"
              ><span class="d-flex justify-content-between">
                <b>Data de Nascimento: </b>
                <small v-if="alerta05()" class="text-danger">
                  Campo obrigatório!</small
                >
              </span>
              <input
                v-model="perfil.dtnasc"
                type="text"
                class="form-control"
                placeholder="Data de Nascimento"
                required
              />
            </label>
          </div>
        </div>
        <div class="col-3">
          <div class="row mb-3">
            <label for="telefone"
              ><span class="d-flex justify-content-between">
                <b>Tel. Fixo/Celular</b>
                <small v-if="alerta06()" class="text-danger">
                  Campo obrigatório!</small
                >
              </span>
              <input
                v-model="perfil.telefone"
                type="number"
                class="form-control"
                placeholder="47 99999-9999"
                required
              />
            </label>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="row mb-3">
        <h6>Endereço</h6>
        <hr />
        <div class="col-3">
          <div class="row mb-3">
            <label for="rua"
              ><span class="d-flex justify-content-between">
                <b>Rua: </b>
                <small v-if="alerta06()" class="text-danger">
                  Campo obrigatório!</small
                >
              </span>
              <input
                @input="desabilitar"
                v-model="perfil.rua"
                type="text"
                class="form-control"
                placeholder="rua"
                required
              />
            </label>
          </div>
        </div>
        <div class="col-3">
          <div class="row mb-3">
            <label for="numero"
              ><span class="d-flex justify-content-between">
                <b>Número: </b>
                <small v-if="alerta07()" class="text-danger">
                  Campo obrigatório!</small
                >
              </span>
              <input
                v-model="perfil.numero"
                type="text"
                class="form-control"
                placeholder="numero"
                required
              />
            </label>
          </div>
        </div>
        <div class="col-3">
          <div class="row mb-3">
            <label for="complemento"
              ><span class="d-flex justify-content-between">
                <b>Complemento: </b>
                <small v-if="alerta08()" class="text-danger">
                  Campo obrigatório!</small
                >
              </span>
              <input
                v-model="perfil.complemento"
                type="text"
                class="form-control"
                placeholder="complemento"
                required
              />
            </label>
          </div>
        </div>
        <div class="col-3">
          <div class="row mb-3">
            <label for="bairro"
              ><span class="d-flex justify-content-between">
                <b>Bairro: </b>
                <small v-if="alerta09()" class="text-danger">
                  Campo obrigatório!</small
                >
              </span>
              <input
                v-model="perfil.bairro"
                type="text"
                class="form-control"
                placeholder="bairro"
                required
              />
            </label>
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-3">
          <div class="row mb-3">
            <label for="cidade"
              ><span class="d-flex justify-content-between">
                <b>Cidade: </b>
                <small v-if="alerta10()" class="text-danger">
                  Campo obrigatório!</small
                >
              </span>
              <input
                v-model="perfil.cidade"
                type="text"
                class="form-control"
                placeholder="cidade"
                required
              />
            </label>
          </div>
        </div>
        <div class="col-3">
          <div class="row mb-3">
            <label for="estado"
              ><span class="d-flex justify-content-between">
                <b>Estado: </b>
                <small v-if="alerta11()" class="text-danger">
                  Campo obrigatório!</small
                >
              </span>
              <input
                v-model="perfil.estado"
                type="text"
                class="form-control"
                placeholder="estado"
                required
              />
            </label>
          </div>
        </div>
        <div class="col-3">
          <div class="row mb-3">
            <label for="email"
              ><span class="d-flex justify-content-between">
                <b>CEP: </b>
                <small v-if="alerta12()" class="text-danger">
                  Campo obrigatório!</small
                >
              </span>
              <input
                v-model="perfil.cep"
                type="number"
                class="form-control"
                placeholder="CEP"
                required
              />
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-content-evenly">
      <div class="">
        <div class="col-5">
          <button id="cancelar" type="button" class="btn btn-secondary">
            <router-link class="text-light text-decoration-none" to="/">
              Cancelar
            </router-link>
          </button>
        </div>
        <div>
          <button
            v-if="desabilitar()"
            type="button"
            disabled
            class="btn btn-light border border-primary"
          >
            <router-link class="text-primary text-decoration-none" to="/"
              >Salvar
            </router-link>
          </button>
          <!-- <button
            v-else
            @click="cadastrar()"
            type="button"
            class="btn btn-light border border-primary text-primary"
          >
            Salvar
          </button> -->
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
//   import supabase from '../services/index';
export default {
  name: "CriarPerfil",
  components: {

  },
  data() {
    return {
      perfil: {
        nome: "",
        curso: "",
        anoinicio: "",
        anotermino: "",
        dtnasc: "",
        telefone: "",
        rua: "",
        numero: "",
        complemento: "",
        bairro: "",
        cidade: "",
        estado: "",
        cep: "",
      },
    };
  },
  methods: {
    cadastrarperfil() {
      const cadastroEst = {
        nome: this.nome,
        curso: this.curso,
        anoinicio: this.anoinicio,
        anotermino: this.anotermino,
        dtnasc: this.dtnasc,
        telefone: this.telefone,
        rua: this.rua,
        numero: this.numero,
        complemento: this.complemento,
        bairro: this.bairro,
        cidade: this.cidade,
        estado: this.estado,
        cep: this.cep,
      };
      this.salvaCadastro(cadastroEst);
      this.$router.push("/");
    },
    async salvaCadastro(camposCadastro) {
      const { data, error } = await supabase
        .from("perfil")
        .insert([camposCadastro]);
      this.success(data);
      this.error(error);
    },
    success(data) {
      console.log("informações: ", data);
    },
    error(error) {
      if (error) {
        console.log("error", error);
      }
    },
    desabilitar() {
      return (
        this.perfil.nome === "" ||
        this.perfil.curso === "" ||
        this.perfil.anoinicio === "" ||
        this.perfil.anotermino === "" ||
        this.perfil.dtnasc === "" ||
        this.perfil.telefone === "" ||
        this.perfil.rua === "" ||
        this.perfil.numero === "" ||
        this.perfil.complemento === "" ||
        this.perfil.bairro === "" ||
        this.perfil.cidade === "" ||
        this.perfil.estado === "" ||
        this.perfil.cep === ""
      );
    },
    alerta01() {
      return this.perfil.nome === "";
    },
    alerta02() {
      return this.perfil.curso === "";
    },
    alerta03() {
      return this.perfil.anoinicio === "";
    },
    alerta04() {
      return this.perfil.anotermino === "";
    },
    alerta05() {
      return this.perfil.dtnasc === "";
    },
    alerta06() {
      return this.perfil.telefone === "";
    },
    alerta07() {
      return this.perfil.email === "";
    },
    alerta08() {
      return this.perfil.rua === "";
    },
    alerta09() {
      return this.perfil.numero === "";
    },
    alerta10() {
      return this.perfil.complemento === "";
    },
    alerta11() {
      return this.perfil.bairro === "";
    },
    alerta12() {
      return this.perfil.cidade === "";
    },
  },
};
</script>
  
  
  <style scoped>
</style>