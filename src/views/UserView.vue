<template>
  <div id="container">
      <user-login></user-login>
  </div>
</template>

<script>
import UserLogin from '@/components/User/UserLogin.vue'

export default {
    name: 'UserView',
    components: {
        UserLogin,
    },
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>

</style>