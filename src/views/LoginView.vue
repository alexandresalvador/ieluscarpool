<template>
  <div class="container-fluid px-0 p-1">
    <div class="home row align-items-center p-5">
      <div class="home-img col">
        <img src="../assets/carpool7.jpg" alt="" />
      </div>
      <div class="home-text col">
        <form>
          <div class="col d-flex justify-content-center ">
            <div class="col-10">
              <label for="email" class="form-label">
                <div class="d-flex justify-content-center ">
                  <span class="fs-6">Email: </span>
                  <div v-if="$v.email.$error" class="text-danger">
                    <small class="p-2">Este email não é válido</small>
                  </div>
                </div>
                <input
                  type="email"
                  class="form-control form-control mt-1 mb-3"
                  id="email"
                  placeholder="xxxxxxxx@ielusc.br"
                  required
                  v-model="$v.email.$model"
                  :class="{
                    error: $v.email.$error,
                    success: !$v.email.$error,
                  }"
                />
              </label>
            </div>
          </div>

          <div class="col d-flex justify-content-center ">
            <div class="col-10">
              <label for="password" class="form-label">
                <div class="d-flex justify-content-center ml-1 ">
                  <span class="fs-6">Senha: </span>
                  <div v-if="$v.password.$error" class="text-danger">
                    <small class="p-2">Esta senha não é válida.</small>
                  </div>
                </div>
                <input
                  :type="inputType"
                  minlength="10"
                  maxlength="16"
                  class="senha form-control form-control mt-1 mb-3"
                  id="passwordI"
                  placeholder="Insira sua senha"
                  required
                  v-model="$v.password.$model"
                  :class="{
                    error: $v.password.$error,
                    success: !$v.password.$error,
                  }"
                />
                <button
                  @click="mostrarOcultarSenha"
                  type="button"
                  class="btn btn-default p-0 "
                >
                  <i v-if="isPassword" class="bi bi-eye-fill fs-4"></i>
                  <i v-else class="bi bi-eye-slash-fill fs-4"></i>
                </button>
              </label>
            </div>
          </div>

          <div class="col d-flex justify-content-center">
            <div class="col-10 col-md-6 d-flex justify-content-center">
              <router-link class="text-decoration-none" to="">
                 Esqueci a senha 
              </router-link>
            </div>
          </div>
          <div class="col py-1 d-flex justify-content-center">
            <div class="col-10 col-md-6 d-flex justify-content-center">
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
          <div class="col d-flex justify-content-center">
            <div class="col-10 col-md-6 d-flex justify-content-center">
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
    mostrarOcultarSenha: function() {
      // if (this.isPassword) {
      //   this.inputType = "text";
      // } else {
      //   this.inputType = "password";
      // }
      let senha = document.getElementById("passwordI");
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

@media (max-width: 767px) {
  .home {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .home-img {
    order: -1;
    margin-bottom: 20px;
  }

  .form-label {
    text-align: center;
  }

  .buttons {
    text-align: center;
  }

  .buttons .btn2 {
    width: 100%;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .home {
    align-items: center;
    text-align: center;
  }

  .home-img {
    order: -1;
    margin-bottom: 20px;
  }

  .form-label {
    text-align: center;
  }

  .buttons {
    text-align: center;
  }

  .buttons .btn2 {
    width: 100%;
  }
}
</style>


