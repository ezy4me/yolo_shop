<template>
  <div class="wrapper">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>

</template>
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {

  components: {
    Header,
    Footer,
  },
  data() {
    return {

    }
  },

}
</script>
<style lang="scss">


#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.wrapper {
  min-height: 100%;
  overflow: hidden;
}


</style>
