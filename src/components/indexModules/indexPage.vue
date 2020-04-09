<template>
  <div>
    <div>页面整体布局</div>

    <div class="container">
      <div class="left">
        <menu-tree />
      </div>
      <div class="right">
        <keep-alive>
          <router-view />
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import {routerArr} from '@/router'
import menuTree from './menuTree'
export default {
    name:'indexPage',
    components:{menuTree},
    data(){
        return{
          routers:[],
        }
    },
    mounted(){
      let arr = routerArr[2].children[0].children[0]
      console.log(arr,'routerArr')
    },
    methods:{
        
    }
};
</script>

<style lang="scss" scoped>
.container{
  min-height: 300px;
  height: calc(100vh - 42px);
  display: flex;
  padding: 20px 40px 0;
  .left{
    width: 20%;
    height: 100%;
    overflow: auto;
    line-height: 1.4;
    font-size: 15px;
  }
  .right{
    width: 80%;
    height: 100%;
    overflow: auto;
  }
}
</style>