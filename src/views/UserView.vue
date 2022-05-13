<template>
  <div id="container">
      <user-login></user-login>
      <user-register></user-register>
  </div>
</template>

<script>
import UserLogin from '@/components/User/UserLogin.vue'
import UserRegister from '@/components/User/UserRegister.vue'

export default {
    name: 'UserView',
    components: {
        UserLogin,
        UserRegister
    },
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>

</style>