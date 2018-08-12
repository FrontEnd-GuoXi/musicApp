<template>
<div class="search-component">
    <div id="search">
      <form ref="searchForm" class="search-wrap">
          <input type="text" name="sreach" class="input-search" autocomplete="off"
                 placeholder="搜索 歌曲/专辑/歌手" @focus="prepareSearch" v-model="key"/>
      </form>
      <div class="cancel-wrap" :class="{ 'cancel-show':cancel }" @click="cancelSearch">
          <span>取消</span>
      </div>
    </div>
    <template>
        <hot v-if="hotShow"></hot>
        <search-result v-else-if="resultShow" :search-info="key"></search-result>
    </template>
</div>
</template>

<script type="text/ecmascript-6">
import hot from './hot.vue'
import searchResult from './searchResult.vue'

export default {
  name: 'search',
  components: {hot, searchResult},
  data: () => {
    return {
      key: '',
      cancel: false,
      hotShow: false,
      resultShow: false,
      searchData: null,
      searchHistory: []
    }
  },
  methods: {
    prepareSearch: function () {
      this.cancel = true
      if (this.key.trim() === '') {
        this.hotShow = true
      }
    },
    cancelSearch: function () {
      this.cancel = false
      this.key = ''
      this.hotShow = false
      this.resultShow = false
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
      this.resultShow = true
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
   @include font-dpr(14px);
}
.search-wrap{
  width: $s-width;
  height: $s-height;
}
.input-search{
  width: $s-width;
  height: $s-height;
  @include input-padding;
  cursor: pointer;
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
