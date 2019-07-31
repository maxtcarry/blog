<template>
<div class="footer">
Copyright © 2018 All Rights Reserved.
</div>
</template>

<script>
export default {
  name:'FOOTERHTML',
  props:["3"],
  data(){
    return {
      msg:''
    }
  },
}
</script>

<style scoped>
.footer{
  width: 100%;
  height: 48px;
  background: var(--font-color3);
  color: var(--bg-color3);
  line-height: 48px;
 text-align: center;
}
</style>
