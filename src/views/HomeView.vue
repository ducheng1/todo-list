<template>
  <div class="home">
    <van-calendar v-model:show="show" @confirm="onConfirm" />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>
