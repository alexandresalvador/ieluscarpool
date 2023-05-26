<template>
   <div class="con3">
      <footer>
        <div
          class="text-center text-dark p-3"
          style="background-color: rgba(0, 0, 0, 0.2)"
        >
          © 2023 Copyright:
          <a class="text-dark" href="http://www.ielusc.br">Bom Jesus/IELUSC</a>
        </div>
      </footer>
    </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
export default {
  name: "Footer",
  components: {
    Footer,
  },
};
</script>
<style scoped>

.con3 {
  padding: 20px;
}

</style>