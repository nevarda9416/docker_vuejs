<template>
  <div id="app">
    <DashBoard/>
  </div>
</template>
<style>
@import './assets/styles/global.css';
</style>
<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css'
import DashBoard from "@/pages/Dashboard.vue"

export default {
  name: 'App',
  components: {
    DashBoard,
  },
  data() {
    return {}
  }
}
</script>