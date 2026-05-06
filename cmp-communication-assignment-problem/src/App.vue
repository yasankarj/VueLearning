<template>
  <main class="app-layout">
    <active-user :username="user.name" :age="user.age" />
    <user-data @update-user="updateUser" />
  </main>
</template>

<script>
import ActiveUser from './components/ActiveUser.vue'
import UserData from './components/UserData.vue'

export default {
  name: 'App',
  components: {
    ActiveUser,
    UserData
  },
  data() {
    return {
      user: {
        name: 'Yasanka RJ',
        age: 31
      }
    }
  },
  methods: {
    updateUser(userData) {
      this.user.name = userData.name
      this.user.age = userData.age
    }
  }
}
</script>
