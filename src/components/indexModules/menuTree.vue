<template>
  <div class="wrapper">
    <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <!-- <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu> -->
      <el-menu-item :index="route.path" v-for="(route,index) in routers" :key="index" >
        <i class="el-icon-menu"></i>
        <span slot="title">{{route.name}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import {routerArr} from '@/router'
export default {
  name: "menuTree",
  data() {
    return {
        routers:[],
    };
  },
  mounted(){
      let arr = routerArr[2].children[0].children
      console.log(arr,'arr')
      this.routers = arr.map(item=>{
          return{
              ...item,
              
          }
      })
  },
  methods: {
    handleClickRoute(){

    },
    // indexPath 从根级到触发选项级的路径数组
    handleSelect(index, indexPath) {
      if(this.$route.name == index){
        return;
      }
      this.$router.push(index)
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
  .el-menu-vertical-demo::v-deep {
    height: 100%;
    li {
      line-height: 56px;
    }
  }
}
</style>