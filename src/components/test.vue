<template>
  <div id="search">
      <div class="div1">

      </div>
      <div class="div2"></div>
  </div>
</template>

<script type="text/ecmascript-6">
/* eslint-disable */
export default {
      name:'test',
        data: () => {
          return {

          };
      }
  }
</script>

<style lang="scss" scoped>
@import '../style/common.scss';

$s-height:100%;
$s-width:100%;

#search{
   width: 100%;
}
.div1{
    height: px2rem(60px);
    background-color: #dddddd;
    box-sizing: border-box;
    border: 1px solid black;

}
.div2{
    height: px2rem(150px);
    background-color: #dddddd;
}

</style>
