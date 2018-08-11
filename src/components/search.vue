<template>
<div class="search-component">
    <div id="search">
      <form ref="searchForm" class="search-wrap">
          <input type="text" name="sreach" class="input-search" autocomplete="off"
                 placeholder="搜索 歌曲/专辑/歌手" @focus="cancelMethod" v-model="key"/>
      </form>
      <div class="cancel-wrap" :class="{ 'cancel-show':cancel }" @click="hideMethod">
          <span>取消</span>
      </div>
    </div>
    <template>
        <hot v-if="hotShow"></hot>
    </template>
</div>
</template>

<script type="text/ecmascript-6">
import hot from './hot.vue'

export default {
  name: 'search',
  components: {hot},
  data: () => {
    return {
      key: '',
      cancel: false,
      hotShow: false,
      searchData: null,
      searchHistory: []
    }
  },
  methods: {
    cancelMethod: function () {
      this.cancel = true
      if (this.key.trim() === '') {
        this.hotShow = true
      }
    },
    hideMethod: function () {
      this.cancel = false
      this.key = ''
      this.hotShow = false
    },
    searchSubmit: function (key) {
      if (key.trim() === '') {
        if (this.cancel) {
          this.hotShow = true
        }
        return
      } else {
        this.hotShow = false
      }
      this.$store.dispatch('search', key).then((Response) => {
        console.log(Response.body.data)
        this.searchData = Response.body.data
      })
    }
  },
  watch: {
    key: function (newVal, oldVal) {
      this.searchSubmit(newVal)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/common.scss';

$s-height:100%;
$s-width:100%;

#search{
   width: 100%;
   height:px2rem(120px);
   display: flex;
   flex-direction: row;
   flex-wrap: nowrap;
   overflow: hidden;
   box-sizing: border-box;
   padding: px2rem(20px);
}
.search-wrap{
  width: $s-width;
  height: $s-height;
}
.input-search{
  width: $s-width;
  height: $s-height;
  @include input-padding;
}
.cancel-wrap{
  height: 100%;
  overflow: hidden;
  width: 0;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  white-space:nowrap;
  transition:width 0.5s;
}
.cancel-show{
  width:4em;
}

</style>
