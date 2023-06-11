<template>
  <div class="container-fluid px-0">
    <div class="home row align-items-center p-5">
      <div class="home-img col">
        <img src="../assets/cartoonCar.png" alt="" />
      </div>
      <div class="home-text col">
        <div class="col d-flex justify-content-center py-1">
          <div class="col-8">
            <p class="fs-6">
              Para participar do Ielusc Carpool, utilize a sua matrícula da Faculdade Ielusc e crie uma senha , logo após configure o seu perfil.
            </p>
          </div>
        </div>
        <form>
      <!-- <div class="col py-1 d-flex justify-content-center">
        <div class="col-6">
          <div class="row justify-content-center">
            <label for="username" class="form-label row">
              <span class="fs-6">Nome de usuário: </span>
              <div class="col">
                <input
                  type="text"
                  class="form-control form-control-sm mt-1"
                  id="username"
                  placeholder="Insira um username"
                  required
                  minlength="5"
                  v-model="$v.username.$model"
                  :class="{ error: $v.username.$error, success: !$v.username.$error }"
                />
                <div v-if="$v.username.$error" class="text-danger">
                  <small>Deve conter ao menos 5 caracteres</small>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div> -->

          <div class="col d-flex justify-content-center py-1">
            <div class="col-6">
              <div class="row justify-content-center">
                <label for="email" class="form-label row">
                  <span class="fs-6">Insira o seu Email da Faculdade: </span>
                  <div class="col">
                    <input
                      type="email"
                      class="form-control form-control-sm mt-1"
                      id="email"
                      placeholder="xxxxxxxx@ielusc.br"
                      required
                       v-model="$v.email.$model"
                    :class="{ error: $v.email.$error, success: !$v.email.$error }"
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
                  <span class="fs-6">Insira uma senha: </span>
                  <div class="col">
                    <input
                      type="password"
                      minlength="10"
                      maxlength="16"
                      class="senhaI form-control form-control-sm mt-1"
                      id="senhaI"
                      placeholder="**********"
                      required
                      v-model="$v.password.$model"
                    :class="{ error: $v.password.$error, success: !$v.password.$error }"
                    />
                    <div v-if="$v.password.$error" class="text-danger">
                      <small>Precisa conter entre 10 à 16 caracteres.</small>
                    </div>
                  </div>
                  <div class="col-1 d-flex align-items-start px-0 py-1">
                    <button @click="mostrarOcultarSenha" type="button" class="btn btn-default p-0">
                       <i v-if="isPassword" class="bi bi-eye-fill fs-4"></i>
                       <i v-else class="bi bi-eye-slash-fill fs-4"></i>
                    </button>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div class="col py-1 d-flex justify-content-center">
        <div class="col-6">
          <div class="row justify-content-center">
            <label for="confirmarsenha" class="form-label row">
              <span class="fs-6">Confimar senha</span>
              <div class="col">
                <input
                  type="password"
                  minlength="10"
                  maxlength="16"
                  class="confirmar-senha form-control form-control-sm mt-1"
                  id="confirmar-senha"
                  placeholder="**********"
                  required
                  v-model="$v.password_confirm.$model"
                  :class="{
                    error: $v.password_confirm.$error,
                    success: !$v.password_confirm.$error,
                  }"
                />
                <div v-if="$v.password_confirm.$error" class="text-danger">
                  <small>As senhas não coincidem</small>
                </div>
              </div>
              <div class="col-1 d-flex align-items-start px-0 py-1">
                <button @click="mostrarOcultarSenha2" type="button" class="btn btn-default p-0">
                  <i v-if="isPassword" class="bi bi-eye-fill fs-4"></i>
                  <i v-else class="bi bi-eye-slash-fill fs-4"></i>
                </button>
              </div>
            </label>
          </div>
        </div>
      </div>

          <div class="col py-1 d-flex justify-content-center">
            <div class="col-12 d-flex justify-content-center">
              <section  :disabled="$v.$invalid" class="buttons" type="submit" id="buttons">
                <router-link to="/criar-perfil" class="btn2 btn">Criar Conta</router-link>
              </section>
            </div>
          </div>
          <div class="col py-1 d-flex justify-content-center">
            <div class="col-12 d-flex justify-content-center">
              <p>
                Possui uma conta?
                <router-link class="text-decoration-none" to="/logar">
                  Fazer Login
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
import CreateProfile from './CreateProfile.vue';
import {
  required,
  minLength,
  maxLength,
  email,
  sameAs,
} from 'vuelidate/lib/validators';

export default {
  name: "CreateAccount",
  components: { CreateProfile },
  data() {
    return {
      // username: '',
      email: '',
      password: '',
      password_confirm: '',
      inputType: 'password',
    };
  },
  validations: {
    // username: {
    //   required,
    //   minLength: minLength(5),
    // },
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(10),
      maxLength: maxLength(16),
    },
    password_confirm: {
      required,
      minLength: minLength(10),
      maxLength: maxLength(16),
      sameAs: sameAs('password'),
    },
  },
  computed: {
    isPassword() {
      return this.inputType === 'password';
    },
  },
  methods: {
    save() {
      const data = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
      api
        .post('/usuario', data)
        .then((response) => {
          const { _id } = response.data;
          const userLogged = {
            id: _id,
            username: response.data.username,
          };
          localStorage.removeItem('userLogged');
          localStorage.setItem('userLogged', JSON.stringify(userLogged));
          console.log('User successfully registered');
          this.$router.push({ path: `/perfil/${_id}` });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    mostrarOcultarSenha: function() {
      let senha = document.getElementById("senhaI");
      if (senha.type == "password") {
        senha.type = "text";
      } else {
        senha.type = "password";
      }
    },
    mostrarOcultarSenha2: function() {
      let senha = document.getElementById("confirmar-senha");
      if (senha.type == "password") {
        senha.type = "text";
      } else {
        senha.type = "password";
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

.error {
  border: 1px solid red;
}
</style>


