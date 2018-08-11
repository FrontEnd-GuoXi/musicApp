<template>
  <div id="app">
    <search></search>
  </div>
</template>

<script>
import search from './components/search.vue'

export default {
  name: 'App',
  components: {search}
}
</script>

<style lang="scss">
@import './style/flexible.debug.css';
@import './style/common.scss';
#app{
  box-sizing: border-box;
  //padding: px2rem(10px) px2rem(10px);
}

</style>
