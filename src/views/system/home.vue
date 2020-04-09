<template>
  <div class="wrapper">
      <div> 首页部分 </div>
      <div>
          功能少就用区块显示，
          功能多就用树状节点
      </div>
      <div>
          <el-table
            border
            class="table"
            sortable="custom"
            max-height="600"
            size="mini"
            :data="tableData"
            :span-method="objectSpanMethod"
            stripe>
                <el-table-column align="center"   type="index" label="序号" width="55"></el-table-column>
                <el-table-column align="center"   label="一级任务" prop="level1" width="150px"></el-table-column>
                <el-table-column align="center"  label="二级任务" prop="level2" width="150px"></el-table-column>
                <el-table-column align="center"  label="项目类别" prop="category"></el-table-column>
                <el-table-column align="center"  label="建设任务项目目标描述" prop="desc" width="180px"></el-table-column>
                <el-table-column align="center"  label="核心指标" prop="core" width="260px"></el-table-column>
                <el-table-column align="center"  label="初始状态（值）" prop="initial" width="150px"></el-table-column>
                <el-table-column align="center"  label="最终状态设定/定性-量化" prop="last" width="200px"></el-table-column>
                <el-table-column align="center"  label="分季度建设进度">
                    <el-table-column align="center"  label="20年一" prop="2001"></el-table-column>
                    <el-table-column align="center"  label="20年二" prop="2002"></el-table-column>
                    <el-table-column align="center"  label="20年三" prop="2003"></el-table-column>
                    <el-table-column align="center"  label="20年四" prop="2004"></el-table-column>
                    <el-table-column align="center"  label="21年一" prop="2101"></el-table-column>
                    <el-table-column align="center"  label="21年二" prop="2102"></el-table-column>
                    <el-table-column align="center"  label="21年三" prop="2103"></el-table-column>
                    <el-table-column align="center"  label="21年四" prop="2104"></el-table-column>
                    <el-table-column align="center"  label="22年一" prop="2201"></el-table-column>
                    <el-table-column align="center"  label="22年二" prop="2202"></el-table-column>
                    <el-table-column align="center"  label="22年三" prop="2203"></el-table-column>
                    <el-table-column align="center"  label="22年四" prop="2204"></el-table-column>
                </el-table-column>
                <el-table-column align="center"  label="资金投入合计" >
                    <el-table-column align="center"  label="金额" prop="zjje"></el-table-column>
                    <el-table-column align="center"  label="比例(%)" prop="zjbl"></el-table-column>
                </el-table-column>
                <el-table-column align="center"  label="其中本级财政投入" >
                    <el-table-column align="center"  label="金额" prop="bjje"></el-table-column>
                    <el-table-column align="center"  label="比例(%)" prop="bjbl"></el-table-column>
                </el-table-column>
                <el-table-column align="center"  label="其中行业企业投入" >
                    <el-table-column align="center"  label="金额" prop="hyje"></el-table-column>
                    <el-table-column align="center"  label="比例(%)" prop="hybl"></el-table-column>
                </el-table-column>
                <el-table-column align="center"  label="其中其他投入" >
                    <el-table-column align="center"  label="金额" prop="qtje"></el-table-column>
                    <el-table-column align="center"  label="比例(%)" prop="qtbl"></el-table-column>
                </el-table-column>

                <el-table-column align="center"  label="当前进度" prop="progress"></el-table-column>
                <el-table-column align="center"  label="观测点解释" prop="gcd" width="200px"></el-table-column>
                <el-table-column align="center"  label="数据来源" prop="sjly"></el-table-column>
                <el-table-column align="center"  label="计量单位" prop="unit"></el-table-column>
          </el-table>
      </div>
  </div>
</template>

<script>
const sm2 = require('sm-crypto').sm2;
let keypair = sm2.generateKeyPairHex();
import {tableData} from '../systemUtil/dataList.js'
export default {
    name:'home',
    data(){
        return{
            tableData:tableData
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
    overflow: auto;
    .table::v-deep .cell{
        white-space: pre-line;
        font-size: 14px;
    }
}
</style>