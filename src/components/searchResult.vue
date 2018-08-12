<template>
  <div id="search_result">
    <div class="music-list type-single">
      <h1>
        <img src="../assets/icon-music.png">
        <span>单曲</span>
      </h1>
      <ul>
        <li v-for="(item,index) in listData.song.itemlist" :key="index">
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </div>
    <div class="music-list type-album">
      <h1>
        <img src="../assets/icon-album.png">
        <span>专辑</span>
      </h1>
      <ul>
        <li v-for="(item,index) in listData.album.itemlist" :key="index">
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </div>
    <div class="music-list type-mv">
      <h1>
        <img src="../assets/icon-singer.png">
        <span>MV</span>
      </h1>
      <ul>
        <li v-for="(item,index) in listData.mv.itemlist" :key="index">
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </div>
    <div class="music-list type-singer">
      <h1>
        <img src="../assets/icon-mv.png">
        <span>歌手</span>
      </h1>
      <ul>
        <li v-for="(item,index) in listData.singer.itemlist" :key="index">
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'searchResult',
  data: () => {
    return {
      listData: {
        song: {itemlist: []},
        album: {itemlist: []},
        mv: {itemlist: []},
        singer: {itemlist: []}
      }
    }
  },
  props: {
    'searchInfo': String
  },
  created: function () {
    console.log(this.searchInfo + 'created')
    this.getData()
  },
  destroyed: function () {
    console.log('searchResult组件被销毁')
  },
  methods: {
    getData: function () {
      this.$store.dispatch('search', this.searchInfo).then((response) => {
        this.listData = response.body.data
      })
    }
  },
  watch: {
    searchInfo: function (newVal, oldVal) {
      console.log(this.searchInfo)
      this.getData()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/common.scss';

.music-list{
  display: flex;
  flex-direction: column;
  justify-content: center;
  @include font-dpr(14px);

  & > h1{
    background-color: #f3f2f2;
    padding: px2rem(7px,41.1px) px2rem(10px,41.1px);
    box-sizing: border-box;
  }

  & > ul {
    padding: px2rem(10px,41.1px);
    box-sizing: border-box;
  }

  & > h1 > img, & > h1 > span{
    display: inline-block;
    width: px2rem(28px,41.1px);
    height: px2rem(28px,41.1px);
    vertical-align: middle;
  }

  & > h1 > img{
    margin-right: px2rem(10px,41.1px);
  }

  & > h1 > span{
    line-height: px2rem(28px,41.1px);
  }

  & > ul > li {
    height: px2rem(35px,41.1px);
    border-bottom: 1px solid #dddddd;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding-left: px2rem(10px,41.1px);
  }
}

</style>
