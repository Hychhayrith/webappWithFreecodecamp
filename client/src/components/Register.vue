<template>
    <v-layout column>
      <v-flex xs6 offset-xs3>
        <panel title="Register">
          <form 
            name="KIT-Funny-Video-Register"
            autocomplete="off">
            <v-text-field
              type="email"
              label="Emal"
              v-model="email">
            </v-text-field>
            <br>
            <v-text-field
              label="Password"
              type="password"
              v-model="password"
              autocomplete="new-password">
            </v-text-field>
            <br>
          </form>

          <br>

          <div class="error" v-html="error"></div>

          <br>

          <v-btn
            dark 
            class="green lighten-2"
            @click="register">
            Register
          </v-btn>
        </panel>
      </v-flex>
    </v-layout>
 </template> 

<script>
import AuthenticationService from '@/services/AuthenticationService.js'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({name: 'songs'})
        console.log(response.data)
      }catch(error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error{
  color: red;
}
</style>
