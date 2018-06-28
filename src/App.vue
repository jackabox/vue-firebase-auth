<template>
  <div id="app">
  
    <header>
      <p v-if="user">Logged in as: {{ user.uid }}</p>
      <button @click.prevent="logout" v-if="user">Logout</button>
    </header>

    <router-view />
  </div>
</template>

<script>
import { auth } from './firebase'

export default {
  name: 'App',

  data() {
    return {
      user: []
    }
  },

  created() {
    this.user = auth.currentUser
  },

  methods: {
    logout() {
      auth.doSignOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>

<style>

</style>
