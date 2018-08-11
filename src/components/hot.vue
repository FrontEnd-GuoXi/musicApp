<template>
    <div class="recommend-list-wrap">
      <ul class="recommend-list">
        <li v-for="(item,index) in hotKey" :key="index">
          <span>{{ index+1 }}</span>
          <span>{{ item.k }}</span>
          <span>{{ item.n }}</span>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'recommand',
  data: () => {
    return {
      hotData: {}
    }
  },
  created: function () {
    if (JSON.stringify(this.hotData) === '{}' || !this.hotData) {
      this.$store.dispatch('getHotKey').then((Response) => {
        this.hotData = Response.body.data
      })
    }
  },
  destroyed: function () {
    console.log('组件被销毁')
  },
  computed: {
    hotKey: function () {
      let hotKey = null
      if (JSON.stringify(this.hotData) !== '{}') {
        if (this.hotData.hotkey.length > 11) {
          hotKey = this.hotData.hotkey.slice(0, 10)
        }
      }
      return hotKey || []
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/common.scss';

.recommend-list{
    padding: 0 px2rem(20px);

    &>li{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: px2rem(80px);

      &>span{ width: 50%; }
      &>span:first-child{ width: 10%; }
      &>span:last-child{ width: 40%; text-align: right; }
    }
}
</style>
