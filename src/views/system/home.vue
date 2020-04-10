<template>
  <div class="wrapper">
      <!-- <div> 首页部分 </div>
      <div>
          功能少就用区块显示，
          功能多就用树状节点
      </div> -->
      <el-button type="primary" size="small" @click="handleNav">
          <!-- <svg t="1586497869739" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1574" width="16" height="16"><path d="M388.7 542.88c-16.57 0-30-13.43-30-30s13.43-30 30-30c52.3 0 94.85-42.55 94.85-94.85v-67.81c0-40.96 15.84-79.58 44.6-108.74 28.76-29.16 67.16-45.53 108.12-46.1l3.43-0.05c16.57-0.22 30.18 13.02 30.41 29.58 0.23 16.57-13.02 30.18-29.58 30.41l-3.43 0.05c-51.58 0.71-93.55 43.25-93.55 94.84v67.81c0 85.4-69.47 154.86-154.85 154.86z" fill="#707070" p-id="1575"></path><path d="M640.12 860.42h-0.42l-3.43-0.05c-40.96-0.56-79.36-16.93-108.12-46.09s-44.6-67.78-44.6-108.74v-67.8c0-52.3-42.55-94.85-94.85-94.85-16.57 0-30-13.43-30-30s13.43-30 30-30c85.38 0 154.85 69.47 154.85 154.85v67.8c0 51.59 41.96 94.13 93.55 94.84l3.43 0.05c16.57 0.23 29.81 13.84 29.59 30.41-0.24 16.42-13.62 29.58-30 29.58z" fill="#707070" p-id="1576"></path><path d="M640.11 542.88H388.7c-16.57 0-30-13.43-30-30s13.43-30 30-30h251.42c16.57 0 30 13.43 30 30-0.01 16.57-13.44 30-30.01 30z" fill="#707070" p-id="1577"></path><path d="M343.89 638.95H137.78c-38.6 0-70-31.4-70-70V456.81c0-38.6 31.4-70 70-70h206.11c38.6 0 70 31.4 70 70v112.13c0 38.6-31.4 70.01-70 70.01zM137.78 446.81c-5.51 0-10 4.49-10 10v112.13c0 5.51 4.49 10 10 10h206.11c5.51 0 10-4.49 10-10V456.81c0-5.51-4.49-10-10-10H137.78zM830.16 316.96h-93.98c-69.51 0-126.07-56.55-126.07-126.07S666.66 64.83 736.18 64.83h93.98c69.51 0 126.07 56.55 126.07 126.07-0.01 69.5-56.56 126.06-126.07 126.06z m-93.98-192.13c-36.43 0-66.07 29.64-66.07 66.07s29.64 66.07 66.07 66.07h93.98c36.43 0 66.07-29.64 66.07-66.07s-29.64-66.07-66.07-66.07h-93.98zM830.16 638.95h-93.98c-69.51 0-126.07-56.55-126.07-126.07 0-69.51 56.55-126.07 126.07-126.07h93.98c69.51 0 126.07 56.55 126.07 126.07-0.01 69.51-56.56 126.07-126.07 126.07z m-93.98-192.14c-36.43 0-66.07 29.64-66.07 66.07 0 36.43 29.64 66.07 66.07 66.07h93.98c36.43 0 66.07-29.64 66.07-66.07 0-36.43-29.64-66.07-66.07-66.07h-93.98z" fill="#707070" p-id="1578"></path><path d="M830.16 959.17h-93.98c-69.51 0-126.07-56.55-126.07-126.07s56.55-126.07 126.07-126.07h93.98c69.51 0 126.07 56.55 126.07 126.07s-56.56 126.07-126.07 126.07z m-93.98-192.13c-36.43 0-66.07 29.64-66.07 66.07s29.64 66.07 66.07 66.07h93.98c36.43 0 66.07-29.64 66.07-66.07s-29.64-66.07-66.07-66.07h-93.98z" fill="#707070" p-id="1579"></path></svg> -->
          思维导图形式</el-button>
      <div>
          <el-table
            border
            class="table"
            sortable="custom"
            max-height="500"
            size="mini"
            :data="tableData"
            :span-method="objectSpanMethod"
            stripe>
                <el-table-column align="center" label-class-name="text color1"  type="index" label="序号" width="55" fixed="left"></el-table-column>
                <el-table-column align="center" label-class-name="text color2" label="一级任务" prop="level1" width="150px"  fixed="left"></el-table-column>
                <el-table-column align="center" label-class-name="text color2" label="二级任务" prop="level2" width="150px"  fixed="left"></el-table-column>
                <el-table-column align="center" label-class-name="text color2" label="项目类别" prop="category"></el-table-column>
                <el-table-column align="center" label-class-name="text color2" label="建设任务项目目标描述" prop="desc" width="180px"></el-table-column>
                <el-table-column align="center" label-class-name="text color2" label="核心指标" prop="core" width="260px">
                    <template slot-scope="scope">
                            <div>
                                <span v-html="scope.row.core"></span>&nbsp;
                                <el-tooltip content="Bottom center" placement="bottom" effect="light">
                                    <tooltip-table slot="content" :tableData="[scope.row]" />
                                    <i class="el-icon-info"></i>
                                </el-tooltip>
                                
                            </div>
                    </template>
                </el-table-column>
                <el-table-column align="center" label-class-name="text color3" label="初始状态（值）" prop="initial" width="150px"></el-table-column>
                <el-table-column align="center" label-class-name="text color3" label="最终状态设定/定性-量化" prop="last" width="200px"></el-table-column>
                <el-table-column align="center" label-class-name="text color4" label="分季度建设进度">
                    <el-table-column align="center" label-class-name="text color4" label="20年一" prop="2001"></el-table-column>
                    <el-table-column align="center" label-class-name="text color4" label="20年二" prop="2002"></el-table-column>
                    <el-table-column align="center" label-class-name="text color4" label="20年三" prop="2003"></el-table-column>
                    <el-table-column align="center" label-class-name="text color4" label="20年四" prop="2004"></el-table-column>
                    <el-table-column align="center" label-class-name="text color4" label="21年一" prop="2101"></el-table-column>
                    <el-table-column align="center" label-class-name="text color4" label="21年二" prop="2102"></el-table-column>
                    <el-table-column align="center" label-class-name="text color4" label="21年三" prop="2103"></el-table-column>
                    <el-table-column align="center" label-class-name="text color4" label="21年四" prop="2104"></el-table-column>
                    <el-table-column align="center" label-class-name="text color4" label="22年一" prop="2201"></el-table-column>
                    <el-table-column align="center" label-class-name="text color4" label="22年二" prop="2202"></el-table-column>
                    <el-table-column align="center" label-class-name="text color4" label="22年三" prop="2203"></el-table-column>
                    <el-table-column align="center" label-class-name="text color4" label="22年四" prop="2204"></el-table-column>
                </el-table-column>
                <el-table-column align="center" label-class-name="text color5" label="资金投入合计" >
                    <el-table-column align="center" label-class-name="text color5" label="金额" prop="zjje"></el-table-column>
                    <el-table-column align="center" label-class-name="text color5" label="比例(%)" prop="zjbl"></el-table-column>
                </el-table-column>
                <el-table-column align="center" label-class-name="text color5" label="其中本级财政投入" >
                    <el-table-column align="center" label-class-name="text color5" label="金额" prop="bjje"></el-table-column>
                    <el-table-column align="center" label-class-name="text color5" label="比例(%)" prop="bjbl"></el-table-column>
                </el-table-column>
                <el-table-column align="center" label-class-name="text color5" label="其中行业企业投入" >
                    <el-table-column align="center" label-class-name="text color5" label="金额" prop="hyje"></el-table-column>
                    <el-table-column align="center" label-class-name="text color5" label="比例(%)" prop="hybl"></el-table-column>
                </el-table-column>
                <el-table-column align="center" label-class-name="text color5" label="其中其他投入" >
                    <el-table-column align="center" label-class-name="text color5" label="金额" prop="qtje"></el-table-column>
                    <el-table-column align="center" label-class-name="text color5" label="比例(%)" prop="qtbl"></el-table-column>
                </el-table-column>
                <el-table-column align="center" label-class-name="text color6" label="当前进度" prop="progress"></el-table-column>
          </el-table>
      </div>
  </div>
</template>

<script>
const sm2 = require('sm-crypto').sm2;
let keypair = sm2.generateKeyPairHex();
import {tableData} from '../systemUtil/dataList.js'
import tooltipTable from '../systemUtil/tooltipTable'
export default {
    name:'home',
    components:{tooltipTable},
    data(){
        return{
            tableData:tableData,
            headerClassObj:{
                0:'#FFFF00',

            }
        }
    },
    mounted(){
        let msgString = '加密字符串'
        let encryptData = sm2.doEncrypt(msgString, keypair.publicKey);
        console.log(encryptData)
        let decryptData = sm2.doDecrypt(encryptData, keypair.privateKey);
        console.log(decryptData)
    },
    methods:{
        handleNav(){
            this.$router.push('gcd')
        },
        headerClass({row, rowIndex,columnIndex}){
            
        },
        objectSpanMethod({ row, column, rowIndex, columnIndex }){
            if(columnIndex == 1 ){
                return{
                    rowspan:row.l1,
                    colspan:row.l1 == 0? 0 : 1
                }
            }else if(columnIndex == 2){
                return{
                    rowspan:row.l2,
                    colspan:row.l2 == 0? 0 : 1
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.wrapper{
    height: 100%;
    padding: 10px;
    overflow: auto;
    .table::v-deep{
        .cell{
            white-space: pre-line;
            font-size: 14px;
        }
        .text{
            font-weight: bold;
            color: #000000;
        }
        .color1{
            background: #FFFF00;
        }
        .color2{
            background: #98FA1C;
        }
        .color3{
            background: #ED41FD;
        }
        .color4{
            background: #FF9900;
        }
        .color5{
            background: #6BDCFD;
        }
        .color6{
            background: #F20000;
        }
        .color7{
            background: #0188FB;
        }
    }
}
</style>