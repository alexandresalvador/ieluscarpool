<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TelaHome msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TelaHome from '@/components/TelaHome.vue'

export default {
  name: 'HomeView',
  components: {
    TelaHome
  }
}
</script>
