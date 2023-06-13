<template>
  <div>
    <div class="con">
      <h4>Ofereça uma carona a outro usuario criando uma solicitação:</h4>
      <br>
      <hr>
      <br>
      <div class="col">
          <h3>Oferecer</h3>
          <form>
            <div class="form-row d-inline-block
                  align-text-top">
              <div class="col-25">
                <input type="text" class="form-control" placeholder="Bairro" />
              </div>
              <div class="col-20">
                <input type="text" class="form-control" placeholder="Rua" />
              </div>
              <div class="col-20">
                <input type="text" class="form-control" placeholder="Horário de embarque" />
              </div>
              <br>
              <button type="button" class="btn btn-primary">Pesquisar</button>
            </div>
          </form>
        </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "AccountOferecerCarona",
  components: {
  },
};
</script>
  
<style scoped>
.con {
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
  