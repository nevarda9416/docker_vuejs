<template>
  <div>
    <h1>
      {{ price }}
    </h1>
    <button @click="clicking()">Change value</button>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      price: 200
    }
  },
  methods: {
    clicking () {
      this.price = this.price + 10
    }
  }
}
</script>

<style scoped>

</style>
