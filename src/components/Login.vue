<template>
  <div class="login">
    <h3>Sign In</h3>

    <form @submit.prevent="login" method="POST">
      <input type="text" placeholder="me@me.com" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <button type="submit">Sign In</button>
    </form>

    <p>Don't have an account? <router-link to="/register">Create one now</router-link></p>
  </div>
</template>

<script>
import { auth } from '../firebase'

export default {
  name: 'Login',

  data() {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    login() {
      auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(response => {
          console.log(response.user)

          this.$router.replace('dashboard')
        })
        .catch(error => {})
    }
  }
}
</script>

<style scoped>

</style>
