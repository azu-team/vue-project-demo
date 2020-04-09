<template>
  <div id="login_wrapper" class="test">
    <div class="login_title">
      <img src="@/assets/img/u2.png" alt />
      <span>{{APP_NAME}}</span>
    </div>
    <div class="login_content">
      <div class="user_login">
        您好！
        <br />
        <span>欢迎进入{{APP_NAME}}:</span>
      </div>
      <div class="login_message">
        <div class="login_account">
          <el-input v-model="teacherNo" placeholder="请输入账号" size="small">
            <i slot="prefix" class="el-input__icon el-icon-user"></i>
          </el-input>
        </div>
        <div class="login_account">
          <el-input v-model="password" placeholder="请输入密码" show-password size="small">
            <i slot="prefix" class="iconfont iconmima"></i>
          </el-input>
        </div>
        <div class="login_account">
          <el-input
            v-model="checkNo"
            size="small"
            placeholder="请输入验证码"
            style="width: calc(100% - 106px);margin: 0;margin-right:10px;"
          >
            <i slot="prefix" class="el-input__icon el-icon-connection"></i>
          </el-input>
          <img
            :src="captchaPath"
            @click="getCaptcha()"
            alt
            style="height: 32px; width: 96px; border-radius: 4px;cursor:pointer;vertical-align:middle;"
          />
        </div>
        <div class="login_account">
          <div class="pass_word">
            <span class="getPassword">
              <el-checkbox v-model="isChecked">记住账号</el-checkbox>
            </span>
          </div>
        </div>
      </div>
      <div class="logining">
        <button @click="loginButton">登录</button>
      </div>
    </div>
    <footer>
      技术支持：{{companyInfo.companyName}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      支持热线：{{companyInfo.tel}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      QQ群：{{companyInfo.qq}}
    </footer>
  </div>
</template>
<script>
// import JSEncrypt from "jsencrypt";
import Cookie from "@/libs/cookie.js";
export default {
  data() {
    return {
      companyInfo: COMPANY_INFO,
      checkNo: "",
      APP_NAME,
      titleName: "",
      chooseNum: "教职工",
      userRole: "",
      isChecked: false,
      studentNo: "",
      phoneNo: "",
      shxym: "",
      teacherRoles: [],
      teacherNo: "",
      password: "",
      uuid: "",
      captchaPath: "",
      publicKey: "",
      theme: ""
    };
  },
  destroyed() {
    document.onkeydown = null;
  },
  created() {
      return;
    // 获取公钥
    this.$HTTP.api({
      root: APP_HTTP_ROOT_ADMIN,
      url: "/sys/gs",
      successCallback: res => {
        if (res.code == "0") {
          this.publicKey = res.publicKey;
        } else {
          this.$message.error(res.msg);
        }
      }
    });
    // 获取颜色主题
    this.$HTTP.api({
      root: APP_HTTP_ROOT_ADMIN,
      url: "/sys/config/getInfoByParamKey",
      emulateJSON: true,
      params: {
        key: "themeType"
      },
      successCallback: res => {
        if (res.code == "0") {
          this.theme = res.value; //主体内容
          sessionStorage.setItem("theme", res.value ? res.value : "1");
          this.$store.dispatch("changeTheme", res.value ? res.value : "1");
        } else {
          this.$message.error(res.msg);
        }
      }
    });
  },
  mounted() {
    /* ***********本地测试使用   start     ************ */
    let userObj = Cookie.getCookie("userInfo");
    if (userObj && userObj !== "undefined") {
      userObj = JSON.parse(userObj);
      if (userObj.userName) {
        this.teacherNo = userObj.userName;
        this.password = userObj.password;
        this.isChecked = true;
      }
    }
    /* ***************    end    ********************** */
    //回车登录
    let _this = this;
    document.onkeydown = function(e) {
      if (event.keyCode === 13 && _this.$route.path === "/login")
        _this.loginButton();
    };
    this.getCaptcha();
  },
  methods: {
    getUUID() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
        return (c === "x"
          ? (Math.random() * 16) | 0
          : "r&0x3" | "0x8"
        ).toString(16);
      });
    },
    getCaptcha() {
      this.uuid = this.getUUID();
      this.captchaPath = APP_HTTP_ROOT_ADMIN + `/captcha.jpg?uuid=${this.uuid}`;
    },
    //登录(学校编码和年度暂时都在前端配置)
    loginButton() {
        this.$router.push('pageHead')
      return;
      let encrypt = new JSEncrypt();
      encrypt.setPublicKey(this.publicKey);

      let params = {
        userName: encrypt.encrypt(this.teacherNo),
        password: encrypt.encrypt(this.password),
        xtd: 0,
        uuid: this.uuid,
        captcha: this.checkNo
      };
      this.$HTTP.api({
        root: APP_HTTP_ROOT_ADMIN,
        url: "/sys/login",
        params,
        timeout: 10000,
        successCallback: function(res) {
          if (res.code == 0) {
            let obj = {};
            if (this.isChecked) {
              obj = {
                userName: this.teacherNo,
                password: this.password
              };
            }
            Cookie.setCookie("userInfo", JSON.stringify(obj), Infinity);
            sessionStorage.setItem("token", res.token);
            localStorage.userNo = this.teacherNo; //水印
            localStorage.btnopen =
              res.isopen == "0" || res.isqx == "0" ? "0" : "1"; // isopen = 0 不在操作时间内, isqx = 0 没有权限 todo:这里需要加密处理一下(md5 useid 密钥 头名称)
            this.getMenu(); //获取菜单
          } else {
            this.$message({
              type: "error",
              message: res.msg
            });
            this.getCaptcha();
          }
        }.bind(this)
      });
    },
    getNearestUrl(arr) {
      if (arr.list) {
        return this.getNearestUrl(arr.list[0]);
      } else {
        return arr.url;
      }
    },
    //获取菜单
    getMenu() {
      this.$HTTP.api({
        root: APP_HTTP_ROOT_ADMIN,
        url: "/sys/menu/navs",
        timeout: 10000,
        method: "GET",
        successCallback: function(res) {
          if (res.code == 0) {
            window.localStorage.setItem("menuTrees", JSON.stringify(res.menu));
            this.$message({ message: "登录成功！", type: "success" });
            setTimeout(() => {
              this.$router.push({ path: "/head/Page/tour13/dt" });
            }, 300);
          } else {
            this.$message({
              type: "error",
              message: res.msg
            });
            this.getCaptcha();
          }
        }.bind(this)
      });
    }
  }
};
</script>
<style scoped lang="scss">
#login_wrapper {
  background: url(../../assets/img/bg1.png) no-repeat;
  height: 100vh;
  min-height: 500px;
  width: 100%;
  min-width: 1200px;
  overflow: auto;
  background-size: 100%;
  position: relative;
  .login_title {
    font-size: 24px;
    margin-left: 80px;
    margin-top: 30px;
    height: 50px;
    position: relative;
    img {
      width: 70px;
    }
    span {
      padding-left: 10px;
      padding-top: 30px;
      position: absolute;
    }
  }
  .login_content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 380px;
    width: 30%;
    background: #fff;
    border-radius: 5px;
    padding: 20px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: absolute;
    left: 80px;
    top: 20%;
    box-shadow: 2px 3px 2px rgba(0, 0, 0, 0.1);
    .user_login {
      font-size: 16px;
      font-weight: bold;
      padding: 0 0 0 20px;
      span {
        font-size: 12px;
        margin-top: 10px;
        display: inline-block;
      }
    }
    .user_list {
      font-size: 0;
      padding-bottom: 10px;
      li {
        display: inline-block;
        font-size: 14px;
        width: 25%;
        margin: 0 3%;
        img {
          margin-left: 24%;
          border: 1px solid #999;
          border-radius: 50%;
          padding: 10px;
          text-align: center;
          cursor: pointer;
          width: 50%;
        }
        img:hover {
          border: 1px solid #2fc8dd;
          border-radius: 50%;
        }
        .choose_user {
          border: 1px solid #2fc8dd;
          background: #2fc8dd;
          border-radius: 50%;
        }
        .login_role {
          display: block;
          text-align: center;
          color: #a2a6b2;
          font-weight: 600;
          margin-left: 17px;
        }
      }
    }
  }
  .logining {
    // margin: 20px 0 10px 0;
    padding: 0 0 0 36px;
    button {
      background: #27a8ea;
      border: 0;
      padding: 10px 40px;
      color: #fff;
      border-radius: 20px;
      cursor: pointer;
      width: 91%;
      font-size: 16px;
    }
  }
  .login_message {
    margin-left: 20px;
    padding-right: 50px;
    .login_account {
      margin-bottom: 12px;
      line-height: 2rem;
      input {
        padding: 5px 20px;
      }
      .pass_word {
        height: 40px;
        width: 81%;
        font-size: 14px;
        label {
          width: 50%;
          height: 40px;
          line-height: 40px;
          color: #333;
          display: inline-block;
        }
        /* .getPassword {
          // float: left;
          // height: 40px;
          // margin-top: -10px;
        } */
      }
      label {
        width: 50%;
        height: 40px;
        font-size: 13px;
        color: #333;
        display: block;
      }
      input[type="text"],
      input[type="password"] {
        height: 1.5rem;
        width: 89%;
        border: none;
        border-radius: 3px;
        background: #f7f8f9;
        font-size: 12px;
        padding-left: 5px;
        margin-bottom: 5px;
      }
      input[type="password"] {
        margin-bottom: 12px;
      }
    }

    .scue {
      line-height: 50px;
      font-size: 12px;
      margin-left: 5%;
      .click_here {
        color: #2a58ad;
        padding-left: 3px;
        cursor: pointer;
      }
    }
  }
}
footer {
  position: fixed;
  margin-bottom: 0;
  bottom: 0;
  height: 36px;
  background-color: rgba(250, 250, 250, 0.8);
  width: 100%;
  text-align: center;
  line-height: 36px;
  font-size: 14px;
}
@media screen and (min-width: 1401px) {
  #login_wrapper {
    .login_title {
      margin-top: 70px;
    }
    .login_content {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 480px;

      width: 30%;
      background: #fff;
      border-radius: 5px;
      padding: 20px;
      margin-bottom: 5px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      position: absolute;
      // min-height: 600px;
      left: 80px;
      .user_login {
        font-size: 24px;
        font-weight: bold;
        padding: 5px 0 0 20px;
        span {
          font-size: 16px;
          font-weight: 300;
        }
      }
      .user_list {
        font-size: 0;
        padding-bottom: 10px;
        li {
          display: inline-block;
          font-size: 14px;
          width: 30%;
          margin: 0 1%;
          img {
            margin-left: 24%;
            border: 1px solid #999;
            border-radius: 50%;
            padding: 10px;
            text-align: center;
            cursor: pointer;
            width: 50%;
          }
          img:hover {
            border: 1px solid #2fc8dd;
            border-radius: 50%;
          }
          .choose_user {
            border: 1px solid #2fc8dd;
            background: #2fc8dd;
            border-radius: 50%;
          }
          .login_role {
            display: block;
            text-align: center;
            color: #a2a6b2;
            font-weight: 600;
            margin-left: 17px;
          }
        }
      }
    }
    .login_message {
      margin-left: 36px;
      .login_account {
        line-height: 3.5rem;
        .pass_word {
          height: 40px;
          width: 81%;
          font-size: 14px;
          label {
            width: 50%;
            height: 40px;
            color: #333;
            display: inline-block;
          }
          .getPassword {
            float: left;
            height: 40px;
            margin-top: -10px;
          }
        }
        label {
          width: 50%;
          height: 40px;
          font-size: 13px;
          color: #333;
          display: block;
        }
        input[type="text"],
        input[type="password"] {
          height: 2.5rem;
          width: 89%;
          border: none;
          // border-radius: 10px;
          background: #f7f8f9;
          font-size: 18px;
          padding-left: 15px;
          margin-bottom: 20px;
        }
      }
      .scue {
        line-height: 50px;
        font-size: 12px;
        margin-left: 5%;
        .click_here {
          color: #2a58ad;
          padding-left: 3px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
