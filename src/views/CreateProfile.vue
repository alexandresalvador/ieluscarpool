<template>
  <div class="container-fluid px-5">
    <br>
    <h5>Ielusc Carpool | Criação de Perfil</h5>
    <hr />

    <div>
      <h6>Coloque suas informações pessoais:</h6>
      <br />

      <div class="row mb-4">
        <div>
          <div class="row mb-3">
            <br />
            <div class="col">
              <div class="row mb-3" id="foto-perfil">
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
                <button class="btn btn-light" id="button-foto">
                  Colocar Foto de Perfil
                </button>
              </div>
            </div>
            <div class="col">
              <div class="row mb-3">
                <label for="nome"
                  ><span class="d-flex justify-content-between">
                    <b>Nome Completo: </b>
                    <small v-if="alerta01()" class="text-danger">
                      Obrigatório!</small
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
            <div class="col">
              <div class="row mb-3">
                <label for="curso"
                  ><span class="d-flex justify-content-between">
                    <b>Curso: </b>
                    <small v-if="alerta02()" class="text-danger">
                      Obrigatório!</small
                    >
                  </span>
                  <input
                    v-model="perfil.curso"
                    type="text"
                    class="form-control"
                    placeholder="Curso"
                    required
                  />
                </label>
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col">
              <div class="row mb-3">
                <label for="data_inicio"
                  ><span class="d-flex justify-content-between">
                    <b>Data de inicio: </b>
                    <small v-if="alerta03()" class="text-danger">
                      Obrigatório!</small
                    >
                  </span>
                  <input
                    v-model="perfil.data_inicio"
                    type="date"
                    class="form-control"
                    placeholder=""
                    required
                  />
                </label>
              </div>
            </div>
            <div class="col">
              <div class="row mb-3">
                <label for="data_termino"
                  ><span class="d-flex justify-content-between">
                    <b>Data de término: </b>
                    <small v-if="alerta04()" class="text-danger">
                      Obrigatório!</small
                    >
                  </span>
                  <input
                    v-model="perfil.data_termino"
                    type="date"
                    class="form-control"
                    placeholder=""
                    required
                  />
                </label>
              </div>
            </div>
            <div class="col">
              <div class="row mb-3">
                <label for="dtnasc"
                  ><span class="d-flex justify-content-between">
                    <b>Data de Nascimento: </b>
                    <small v-if="alerta05()" class="text-danger">
                      Obrigatório!</small
                    >
                  </span>
                  <input
                    v-model="perfil.dtnasc"
                    type="date"
                    class="form-control"
                    placeholder="Data de Nascimento"
                    required
                  />
                </label>
              </div>
            </div>
            <div class="col">
              <div class="row mb-3">
                <label for="telefone"
                  ><span class="d-flex justify-content-between">
                    <b>Tel. Fixo/Celular</b>
                    <small v-if="alerta06()" class="text-danger">
                      Obrigatório!</small
                    >
                  </span>
                  <input
                    v-model="perfil.telefone"
                    type="text"
                    class="form-control"
                    placeholder="47 99999-9999"
                    required
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="row mb-4">
          <h6>Endereço</h6>
          <br>
          <br>
          <div class="col">
            <div class="row mb-3">
              <label for="rua"
                ><span class="d-flex justify-content-between">
                  <b>Rua: </b>
                  <small v-if="alerta07()" class="text-danger">
                    Obrigatório!</small
                  >
                </span>
                <input
                  @input="desabilitar"
                  v-model="perfil.rua"
                  type="text"
                  class="form-control"
                  placeholder="Rua"
                  required
                />
              </label>
            </div>
          </div>
          <div class="col-1">
            <div class="row mb-3">
              <label for="numero"
                ><span class="d-flex justify-content-between">
                  <b>Número: </b>
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Número"
                />
              </label>
            </div>
          </div>
          <div class="col">
            <div class="row mb-3">
              <label for="complemento"
                ><span class="d-flex justify-content-between">
                  <b>Complemento: </b>
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Complemento"
                />
              </label>
            </div>
          </div>
          <div class="col">
            <div class="row mb-3">
              <label for="bairro"
                ><span class="d-flex justify-content-between">
                  <b>Bairro: </b>
                  <small v-if="alerta08()" class="text-danger">
                    Obrigatório!</small
                  >
                </span>
                <input
                  v-model="perfil.bairro"
                  type="text"
                  class="form-control"
                  placeholder="Bairro"
                  required
                />
              </label>
            </div>
          </div>
          <div class="col">
            <div class="row mb-3">
              <label for="cidade"
                ><span class="d-flex justify-content-between">
                  <b>Cidade: </b>
                  <small v-if="alerta09()" class="text-danger">
                    Obrigatório!</small
                  >
                </span>
                <input
                  v-model="perfil.cidade"
                  type="text"
                  class="form-control"
                  placeholder="Cidade"
                  required
                />
              </label>
            </div>
          </div>
          <div class="col-2">
            <div class="row mb-3">
              <label for="estado"
                ><span class="d-flex justify-content-between">
                  <b>Estado: </b>
                  <small v-if="alerta10()" class="text-danger">
                    Obrigatório!</small
                  >
                </span>
                <input
                  v-model="perfil.estado"
                  type="text"
                  class="form-control"
                  placeholder="Estado"
                  required
                />
              </label>
            </div>
          </div>
          <div class="col">
            <div class="row mb-3">
              <label for="email"
                ><span class="d-flex justify-content-between">
                  <b>CEP: </b>
                  <small v-if="alerta11()" class="text-danger">
                    Obrigatório!</small
                  >
                </span>
                <input
                  v-model="perfil.cep"
                  type="text"
                  class="form-control"
                  placeholder="CEP"
                  required
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row mb-4">
        <div class="col">
          <button id="cancelar" type="button" class="btn btn-secondary">
            <router-link class="text-light text-decoration-none" to="/criar-conta">
              Cancelar
            </router-link>
          </button>
        </div>
        <div class="col">
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
          <button
            v-else
            @click="cadastrar()"
            type="button"
            class="btn btn-primary border border-secondary text-light"
          >
            Salvar
          </button>
        </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "CriarPerfil",
  components: {},
  data() {
    return {
      perfil: {
        nome: "",
        curso: "",
        data_inicio: "",
        data_termino: "",
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
        data_inicio: this.data_inicio,
        data_termino: this.data_termino,
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
        this.perfil.data_inicio === "" ||
        this.perfil.data_termino === "" ||
        this.perfil.dtnasc === "" ||
        this.perfil.telefone === "" ||
        this.perfil.rua === "" ||
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
      return this.perfil.data_inicio === "";
    },
    alerta04() {
      return this.perfil.data_termino === "";
    },
    alerta05() {
      return this.perfil.dtnasc === "";
    },
    alerta06() {
      return this.perfil.telefone === "";
    },
    alerta07() {
      return this.perfil.rua === "";
    },
    alerta08() {
      return this.perfil.bairro === "";
    },
    alerta09() {
      return this.perfil.cidade === "";
    },
    alerta10() {
      return this.perfil.estado === "";
    },
    alerta11() {
      return this.perfil.cep === "";
    },
  },
};
</script>
  
  
<style scoped>

#foto-perfil {
  
 background-color: rgb(255, 115, 0); 
 border-radius: 10px;
}


</style>