const dataArr = [
    { id: "root", isroot: true, topic: "南京金陵高等职业技术学校" },

    {
      id: "sub1",
      parentid: "root",
      topic: "落实德树人根本任务，提高学生综合素质",
    },
    { id: "sub11", parentid: "sub1", topic: "完善德育工作体系" },
    { id: "sub12", parentid: "sub1", topic: "全面提升学生职业素养教育" },
    { id: "sub13", parentid: "sub1", topic: "加强创新创业教育" },

    {id:'sub111',parentid:'sub11',topic:'“三全育人”制度数',expanded:false},
    {id:'sub112',parentid:'sub11',topic:'思想政治理论课教师占比',expanded:false},
    {id:'sub113',parentid:'sub11',topic:'德育特色案例',expanded:false},
    {id:'sub114',parentid:'sub11',topic:'学生社团参与率',expanded:false},

    {id:'sub115',parentid:'sub12',topic:'大国工匠、劳动模范等进校园频次',expanded:false},
    {id:'sub116',parentid:'sub12',topic:'体质测评合格率',expanded:false},

    {id:'sub117',parentid:'sub13',topic:'优秀创业成功典型',expanded:false},
    {id:'sub118',parentid:'sub13',topic:'省级以上创新创业大赛获奖数',expanded:false},

    // “三全育人”制度数
    {id:'sub1113',parentid:'sub111',topic:'初始状态'},
    {id:'sub1114',parentid:'sub111',topic:'最终状态设定'},
    {
        id:'sub1111',parentid:'sub111',topic:createJDTable(),
    },
    {
        id:'sub1112',parentid:'sub111',topic:createZJTable(),
    },
    // 思想政治理论课教师占比
    {id:'sub1121',parentid:'sub112',topic:'初始状态'},
    {id:'sub1122',parentid:'sub112',topic:'最终状态设定'},
    {id:'sub1123',parentid:'sub112',topic:createJDTable(),},
    {id:'sub1124',parentid:'sub112',topic:createZJTable(),},
    // 德育特色案例
    {id:'sub1131',parentid:'sub113',topic:'初始状态'},
    {id:'sub1132',parentid:'sub113',topic:'最终状态设定'},
    {id:'sub1133',parentid:'sub113',topic:createJDTable(),},
    {id:'sub1134',parentid:'sub113',topic:createZJTable(),},
    // 学生社团参与率
    {id:'sub1141',parentid:'sub114',topic:'初始状态'},
    {id:'sub1142',parentid:'sub114',topic:'最终状态设定'},
    {id:'sub1143',parentid:'sub114',topic:createJDTable(),},
    {id:'sub1144',parentid:'sub114',topic:createZJTable(),},

    // 大国工匠、劳动模范等进校园频次
    {id:'sub1151',parentid:'sub115',topic:'初始状态'},
    {id:'sub1152',parentid:'sub115',topic:'最终状态设定'},
    {id:'sub1153',parentid:'sub115',topic:createJDTable(),},
    {id:'sub1154',parentid:'sub115',topic:createZJTable(),},
    // 体质测评合格率
    {id:'sub1161',parentid:'sub116',topic:'初始状态'},
    {id:'sub1162',parentid:'sub116',topic:'最终状态设定'},
    {id:'sub1163',parentid:'sub116',topic:createJDTable(),},
    {id:'sub1164',parentid:'sub116',topic:createZJTable(),},

    // 优秀创业成功典型
    {id:'sub1171',parentid:'sub117',topic:'初始状态'},
    {id:'sub1172',parentid:'sub117',topic:'最终状态设定'},
    {id:'sub1173',parentid:'sub117',topic:createJDTable(),},
    {id:'sub1174',parentid:'sub117',topic:createZJTable(),},
    // 省级以上创新创业大赛获奖数
    {id:'sub1181',parentid:'sub118',topic:'初始状态'},
    {id:'sub1182',parentid:'sub118',topic:'最终状态设定'},
    {id:'sub1183',parentid:'sub118',topic:createJDTable(),},
    {id:'sub1184',parentid:'sub118',topic:createZJTable(),},

]
function createJDTable(data){

    return `<table class="table" style="color:#333;text-align: center;width: 720px;text-align: center;border-width: 1px;border-color: #666666;border-collapse: collapse;">
                <thead>
                    <tr>
                        <th style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #dedede;vertical-align:middle;" colspan="12">分季度建设进度</th>
                    </tr>
                    <tr>
                        <th style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #dedede;vertical-align:middle;" width='60px'>20年一</th>
                        <th style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #dedede;vertical-align:middle;" width='60px'>20年二</th>
                        <th style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #dedede;vertical-align:middle;" width='60px'>20年三</th>
                        <th style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #dedede;vertical-align:middle;" width='60px'>20年四</th>
                        <th style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #dedede;vertical-align:middle;" width='60px'>21年一</th>
                        <th style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #dedede;vertical-align:middle;" width='60px'>21年二</th>
                        <th style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #dedede;vertical-align:middle;" width='60px'>21年三</th>
                        <th style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #dedede;vertical-align:middle;" width='60px'>21年四</th>
                        <th style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #dedede;vertical-align:middle;" width='60px'>22年一</th>
                        <th style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #dedede;vertical-align:middle;" width='60px'>22年二</th>
                        <th style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #dedede;vertical-align:middle;" width='60px'>22年三</th>
                        <th style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #dedede;vertical-align:middle;" width='60px'>22年四</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #ffffff;vertical-align:middle;">0</td>
                        <td style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #ffffff;vertical-align:middle;"> </td>
                        <td style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #ffffff;vertical-align:middle;"> </td>
                        <td style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #ffffff;vertical-align:middle;"> </td>
                        <td style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #ffffff;vertical-align:middle;"> </td>
                        <td style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #ffffff;vertical-align:middle;"> </td>
                        <td style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #ffffff;vertical-align:middle;"> </td>
                        <td style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #ffffff;vertical-align:middle;"> </td>
                        <td style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #ffffff;vertical-align:middle;"> </td>
                        <td style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #ffffff;vertical-align:middle;"> </td>
                        <td style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #ffffff;vertical-align:middle;"> </td>
                        <td style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #ffffff;vertical-align:middle;"> </td>
                    </tr>
                </tbody>
            </table>`
}
function createZJTable(data){
    return `<table  class="table" style="color:#333;text-align: center;width: 560px;text-align: center;border-width: 1px;border-color: #666666;border-collapse: collapse;">
                <thead>
                    <tr>
                        <th style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #dedede;vertical-align:middle;" colspan="2">资金投入合计</th>
                        <th style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #dedede;vertical-align:middle;" colspan="2">其中本级财政投入</th>
                        <th style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #dedede;vertical-align:middle;" colspan="2">其中行业企业投入</th>
                        <th style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #dedede;vertical-align:middle;" colspan="2">其中其他投入</th>
                    </tr>
                    <tr>
                        <th style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #dedede;vertical-align:middle;" width='70px'>金额</th>
                        <th style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #dedede;vertical-align:middle;" width='70px'>比例(%)</th>
                        <th style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #dedede;vertical-align:middle;" width='70px'>金额</th>
                        <th style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #dedede;vertical-align:middle;" width='70px'>比例(%)</th>
                        <th style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #dedede;vertical-align:middle;" width='70px'>金额</th>
                        <th style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #dedede;vertical-align:middle;" width='70px'>比例(%)</th>
                        <th style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #dedede;vertical-align:middle;" width='70px'>金额</th>
                        <th style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #dedede;vertical-align:middle;" width='70px'>比例(%)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #ffffff;vertical-align:middle;">0 </td>
                        <td style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #ffffff;vertical-align:middle;"> </td>
                        <td style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #ffffff;vertical-align:middle;"> </td>
                        <td style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #ffffff;vertical-align:middle;"> </td>
                        <td style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #ffffff;vertical-align:middle;"> </td>
                        <td style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #ffffff;vertical-align:middle;"> </td>
                        <td style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #ffffff;vertical-align:middle;"> </td>
                        <td style="border-width: 1px;border-style: solid;border-color: #666666;background-color: #ffffff;vertical-align:middle;"> </td>
                    </tr>
                </tbody>
            </table>`
}
export {
    dataArr
}