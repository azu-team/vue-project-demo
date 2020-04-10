<template>
  <div class="test-container">

      <div class="left">
        <menu-tree></menu-tree>
      </div>
      <div class="right">

      </div>
  </div>
</template>

<script>
import menuTree from "@/components/indexModules/menuTree";
export default {
  name: "test",
  components: { menuTree }
};
</script>

<style lang="scss" scoped>
.test-container{
    // height: 100%;
    .left{
        display: inline-block;
        width: 15%;
    }
    .right{
        display: inline-block;
        width: 85;
    }
}
</style>