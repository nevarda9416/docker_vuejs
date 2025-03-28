<template>
  <div class="hello">
    <Header/>
    <div class="container mrgnbtm">
      <div class="row">
        <div class="col-md-8">
          <CreateUser @createUser="userCreate($event)"/>
        </div>
        <div class="col-md-4">
          <DisplayBoard :numberOfUsers="numberOfUsers" @getAllUsers="getAllUsers()"/>
        </div>
      </div>
    </div>
    <div class="row mrgnbtm">
      <Users v-if="users.length > 0" :users="users"></Users>
    </div>
  </div>
</template>
<script>
import Header from "@/layouts/Header.vue";
import CreateUser from "@/components/CreateUser.vue";
import {getAllUsers, createUser} from "@/services/UserService";
import DisplayBoard from "@/components/DisplayBoard.vue";
import Users from "@/components/Users.vue";

export default {
  name: 'DashBoard',
  components: {
    Users,
    DisplayBoard,
    CreateUser,
    Header,
  },
  data() {
    return {
      users: [],
      numberOfUsers: 0,
    }
  },
  methods: {
    getAllUsers() {
      getAllUsers().then((response) => {
        this.users = response
        this.numberOfUsers = this.users.length
      })
    },
    userCreate(data) {
      createUser(data).then(() => {
        this.getAllUsers();
      })
    }
  },
  mounted() {
    this.getAllUsers();
  }
}
</script>