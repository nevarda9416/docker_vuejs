<template>
  <div class="container">
    <h2>Users</h2>
    <table class="table table-bordered">
      <thead>
      <tr>
        <th>User ID</th>
        <th>First name</th>
        <th>Last name</th>
        <th>Email</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>{{ user.email }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "Users",
  props: ["users"],
}
</script>