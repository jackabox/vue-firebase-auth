<template>
  <div class="login">
    <h3>Register</h3>

    <form @submit.prevent="register" method="POST">
      <input type="text" placeholder="me@me.com" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <button type="submit">Sign Up</button>
    </form>

    <p>Or <router-link to="/login">Login</router-link></p>
  </div>
</template>

<script>
import { auth } from '../firebase'

export default {
  name: 'Register',

  data() {
    return {
      email: '',
      username: '',
      password: ''
    }
  },

  methods: {
    register() {
      auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(result => {
          alert('User Registered')

          this.$router.replace('dashboard')
        })
        .catch(error => {
          alert(error)
        })
    }
  }
}
</script>

<style scoped>

</style>
