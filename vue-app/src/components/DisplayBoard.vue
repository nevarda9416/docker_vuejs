<template>
  <div class="display-board">
    <h4>Users Created</h4>
    <div class="number">
      {{ numberOfUsers }}
    </div>
    <div class="btn">
      <button @click="getAllUsers" type="button" class="btn btn-primary">Get all users</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DisplayBoard',
  props: ['numberOfUsers'],
  methods: {
    getAllUsers() {
      this.$emit("getAllUsers");
    }
  }
}
</script>