<template>
  <div id="app">
    <HEADERHTML ></HEADERHTML>
    <!-- <MAINHTML ></MAINHTML> -->
    <router-view></router-view>
    <FOOTERHTML ></FOOTERHTML>

  </div>
</template>

<script>
import HEADERHTML from "@/components/common/headers"
import FOOTERHTML from "@/components/common/footers"
export default {
  name: 'App',
      data(){
        return {
        }
      },
  components:{
    HEADERHTML,
    FOOTERHTML
  }
}
</script>

<style scoped>
@font-face{
    font-family: 'panda';
    src : url('../src/assets/font/手写honaji.ttf');
}
#app {
  font-family: panda, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--font-color1);
  min-width: 1200px;


}

</style>
