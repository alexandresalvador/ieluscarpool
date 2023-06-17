<template>
  <div>
    <div class="con">
      <h4>CARONAS FAVORITADAS</h4>
      <br />
      <hr />
      <br />
      <div class="container">
        <div class="con2">
          <h1>0 Caronas Favoritadas encontradas</h1>
        </div>
      </div>
    </div>
  </div>
</template>
    
<script>
import NavbarLog from "../components/NavbarLogado.vue";
export default {
  name: "AccountFavourites",
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
      font-size: 18px;
      display: flex;
      align-items: center;
      padding-right: 20px;
    }

      .con2 h1 {
      font-size: 24px;
      text-align: center;
    }
  }
</style>
    