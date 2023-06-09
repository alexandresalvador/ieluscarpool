<template>
  <div class="container-fluid px-0">
    <div class="home row align-items-center p-5">
      <div class="home-img col">
        <img src="../assets/carpool7.jpg" alt="" />
      </div>
      <div class="home-text col">
        <div class="col d-flex justify-content-center py-1">
          <div class="col-8">
            <p class="fs-5">
              Para continuar no Ielusc Carpool, utilize a sua matrícula e senha
              já cadastradas, para poder fazer o login no aplicativo.
            </p>
          </div>
        </div>
        <form>
          <div class="col d-flex justify-content-center py-1">
            <div class="col-6">
              <div class="row justify-content-center">
                <label for="email" class="form-label row">
                  <span class="fs-6">Email</span>
                  <div class="col">
                    <input
                      type="email"
                      class="form-control form-control-sm mt-1"
                      id="email"
                      placeholder="Xpto@email.com"
                      required
                      v-model="$v.email.$model"
                      :class="{
                        error: $v.email.$error,
                        success: !$v.email.$error,
                      }"
                    />
                    <div v-if="$v.email.$error" class="text-danger">
                      <small>Este email não é válido</small>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div class="col py-1 d-flex justify-content-center">
            <div class="col-6">
              <div class="row justify-content-center">
                <label for="password" class="form-label row">
                  <span class="fs-6">Senha</span>
                  <div class="col">
                    <input
                      :type="inputType"
                      minlength="10"
                      maxlength="16"
                      class="senha form-control form-control-sm mt-1"
                      id="password"
                      placeholder="Insira sua senha"
                      required
                      v-model="$v.password.$model"
                      :class="{
                        error: $v.password.$error,
                        success: !$v.password.$error,
                      }"
                    />
                    <div v-if="$v.password.$error" class="text-danger">
                      <small>Precisa conter entre 10 à 16 caracteres.</small>
                    </div>
                  </div>
                  <div class="col-1 d-flex align-items-start px-0 py-1">
                    <button
                      @click="mostrarSenha"
                      type="button"
                      class="btn btn-default p-0"
                    >
                      <i v-if="isPassword" class="bi bi-eye-fill fs-4"></i>
                      <i v-else class="bi bi-eye-slash-fill fs-4"></i>
                    </button>
                  </div>
                </label>
              </div>
              <section class="buttons" id="buttons">
                <a href="#" class="btn2 btn">Esqueci a senha</a>
              </section>
            </div>
          </div>
          <div class="col py-1 d-flex justify-content-center">
            <div class="col-12 d-flex justify-content-center">
              <section
                :disabled="$v.$invalid"
                class="buttons"
                type="submit"
                id="buttons"
              >
                <router-link to="/account-home" class="btn2 btn"
                  >Entrar</router-link
                >
              </section>
            </div>
          </div>
          <div class="col py-1 d-flex justify-content-center">
            <div class="col-12 d-flex justify-content-center">
              <p>
                Ainda não criou uma conta?
                <router-link class="text-decoration-none" to="/criar-conta">
                  Criar conta
                </router-link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  email,
} from "vuelidate/lib/validators";
export default {
  name: "LoginView",
  components: {},
  data() {
    return {
      email: "",
      password: "",
      inputType: "password",
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(10),
      maxLength: maxLength(16),
    },
  },
  computed: {
    isPassword() {
      return this.inputType === "password";
    },
  },
  methods: {
    signIn() {
      const data = {
        email: this.email,
        password: this.password,
      };
      api
        .post("/login", data)
        .then((response) => {
          const { _id } = response.data;
          if (data.password === response.data.password) {
            const userLogged = {
              id: _id,
              username: response.data.username,
            };
            localStorage.removeItem("userLogged");
            localStorage.setItem("userLogged", JSON.stringify(userLogged));
            console.log("Usuário logado com sucesso!");
            this.$router.push({ path: `/perfil/${_id}` });
          } else {
            alert("A senha está Incorreta!");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    mostrarSenha() {
      if (this.isPassword) {
        this.inputType = "text";
      } else {
        this.inputType = "password";
      }
    },
  },
};
</script>

<style scoped>
.home-img img {
  width: 100%;
}

p {
  font-weight: 500;
  padding: 7px;
}

.buttons {
  padding: 7px;
}

.btn2 {
  padding: 7px 36px;
  border: 2px solid black;
  border-radius: 40px;
  color: black;
  font-weight: 500;
  margin: 10px;
}

.btn:hover {
  color: #fff;
  background: #13407c;
}
</style>


