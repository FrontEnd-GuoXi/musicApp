<template>
  <div id="search_result">
    <div class="type-list">
      <h1></h1>
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'searchResult',
  data: () => {
    return {
      listData: {}
    }
  },
  props: ['searchInfo'],
  beforeCreate: function () {
    console.log('11')
    function test () {
      var z= '一个函'
      return z
    }
  },
  created: function () {

    console.log(this.searchInfo)
    if (this.searchInfo.resultShow) {
      this.getData()
    }
  },
  methods: {
    getData: function () {
      this.$store.dispatch('search', this.searchInfo.key).then((response) => {
        console.log(response)
        this.listData = response.body.data
      })
    }
  },
  watch: {
  }
}
</script>

<style lang="scss" scoped>

</style>
