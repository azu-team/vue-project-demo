<template>
<div class="wrapper">
  <el-table border class="table" size="mini" :data="tableData" stripe>
    <el-table-column
      align="center"
      label-class-name="text color7"
      label="观测点解释"
      prop="gcd"
      width="260px"
    ></el-table-column>
    <el-table-column align="center" label-class-name="text color7" label="数据来源" prop="sjly" width="120px"></el-table-column>
    <el-table-column align="center" label-class-name="text color7" label="计量单位" prop="unit"></el-table-column>
  </el-table>
</div>
</template>

<script>
export default {
  name: "tooltipTable",
  props: {
    tableData: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.wrapper{
    .table::v-deep {
      // border: solid 1px #ccc;
      .text {
        color: #ffffff;
      }
      .color7 {
          font-weight: bold;
        background: #0188fb;
      }
    }

}
</style>