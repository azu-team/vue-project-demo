<template>
  <div>
    <el-button type="primary" size="small" @click="handleNav">表格形式</el-button>
    <div id="jsmind_container"></div>
    <table class="table">
      <thead>
        <tr>
          <th rowspan="2" width="150px">初始状态</th>
          <th rowspan="2" width="150px">最终状态设定</th>
          <th colspan="12">分季度建设进度</th>
          <th colspan="2">资金投入合计</th>
          <th colspan="2">其中本级财政投入</th>
          <th colspan="2">其中行业企业投入</th>
          <th colspan="2">其中其他投入</th>
          <th rowspan="2" width="120px">当前进度</th>
          <th rowspan="2" width="120px">观测点解释</th>
          <th rowspan="2" width="120px">数据来源</th>
          <th rowspan="2" width="120px">计量单位</th>
        </tr>
        <tr>
          <th width="60px">20年一</th>
          <th width="60px">20年二</th>
          <th width="60px">20年三</th>
          <th width="60px">20年四</th>
          <th width="60px">21年一</th>
          <th width="60px">21年二</th>
          <th width="60px">21年三</th>
          <th width="60px">21年四</th>
          <th width="60px">22年一</th>
          <th width="60px">22年二</th>
          <th width="60px">22年三</th>
          <th width="60px">22年四</th>
          <th width="70px">金额</th>
          <th width="70px">比例(%)</th>
          <th width="70px">金额</th>
          <th width="70px">比例(%)</th>
          <th width="70px">金额</th>
          <th width="70px">比例(%)</th>
          <th width="70px">金额</th>
          <th width="70px">比例(%)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>201</td>
          <td>202</td>
          <td>203</td>
          <td>204</td>
          <td>211</td>
          <td>212</td>
          <td>213</td>
          <td>214</td>
          <td>221</td>
          <td>222</td>
          <td>223</td>
          <td>224</td>
          <td>金额</td>
          <td>比例</td>
          <td>金额</td>
          <td>比例</td>
          <td>金额</td>
          <td>比例</td>
          <td>金额</td>
          <td>比例</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import menuTree from '@/components/indexModules/menuTree'
import jsMind from "@/libs/jsmind/jsmind.js";
import draggable from "@/libs/jsmind/jsmind.draggable.js";
import { dataArr } from "../systemUtil/jsmindData";
export default {
  name: "gcd",
  // components:{menuTree},
  data() {
    return {};
  },
  mounted() {
    this.calcHeight();
    draggable(window, jsMind);
    var options = {
      // options 将在下一章中详细介绍
      container: "jsmind_container", // [必选] 容器的ID，或者为容器的对象
      editable: false, // [可选] 是否启用编辑
      theme: "orange" // [可选] 主题
    };
    var mind = {
      meta: {
        version: "0.2"
      },
      format: "node_array",
      data: dataArr
    };
    var jm = new jsMind(options);
    jm.show(mind);
  },
  methods: {
    handleNav() {
      this.$router.push("home");
    },
    calcHeight() {
      let innderHeight = window.innerHeight - 100;
      document.querySelector(
        "#jsmind_container"
      ).style = `height:${innderHeight}px`;
    }
  }
};
</script>

<style lang='scss' scoped>
@import "../../libs/jsmind/jsmind.css";
.gcd-wrapper {
  width: 20%;
}
#jsmind_container {
  width: 98%;
  height: 300px;
  border: solid 1px #ccc;
  /*background:#f4f4f4;*/
  background: #f4f4f4;
}
.table {
  display: none;
  text-align: center;
  width: 1500px;
  border-width: 1px;
  border-color: #666666;
  border-collapse: collapse;
  th {
    border-width: 1px;
    padding: 8px;
    border-style: solid;
    border-color: #666666;
    background-color: #dedede;
    vertical-align: middle;
  }
  td {
    border-width: 1px;
    padding: 8px;
    border-style: solid;
    border-color: #666666;
    background-color: #ffffff;
    vertical-align: middle;
  }
}
</style>