<template>
  <div>
    <div class="con">
      <h4>HISTÓRICO DE CORRIDAS</h4>
      <br />
      <hr />
      <br />
      <div class="container">
        <div class="con2">
          <h1>0 Caronas Encontradas</h1>
        </div>
      </div>
    </div>
  </div>
</template>
    
<script>
import NavbarLog from "../components/NavbarLogado.vue";
export default {
  name: "AccountHistory",
  components: {
    NavbarLog
  },
};
</script>
    
  <style scoped>
.con {
  margin-top: 30px;
  margin-bottom: 30px;
}

.con2 {
  height: 200px;
  width: 100%;
  background-color: rgb(200, 247, 247);
}

  @media (max-width: 768px) {

  .con2 {
      height: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-right: 20px;
    }

    .con2 h1 {
      font-size: 26px;
      text-align: center;
    }
}
</style>
    