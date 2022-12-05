<template>
  <Header titulo="Qatar 2022"/>
  <router-view></router-view>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
  },
  data() {
    return {
      
    }
  }
}
</script>

<style>

</style>
