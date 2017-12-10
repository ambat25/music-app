
<template>
  <div >
    <h2> Register </h2>
    <!-- <p > kj </p> -->
    <div>
      <input type="email" name='email' v-model='email' placeholder="email"><br>
      <input type="password" name='password' v-model='password' placeholder="password"><br>
      <input @click="register" type="submit" value="submit">
    </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
      email: 'ambat@live.com',
      password: '12345'
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
      // console.log('clicked')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
