<template>
  <section class="container">
    <div>
      <app-logo/>
      <!--<h1 class="title">-->
        <!--nuxt-->
      <!--</h1>-->
      <!--<h2 class="subtitle">-->
        <!--Nuxt.js project-->
      <!--</h2>-->
      <!--<div class="links">-->
        <!--<a-->
          <!--href="https://nuxtjs.org/"-->
          <!--target="_blank"-->
          <!--class="button&#45;&#45;green">Documentation</a>-->
        <!--<a-->
          <!--href="https://github.com/nuxt/nuxt.js"-->
          <!--target="_blank"-->
          <!--class="button&#45;&#45;grey">GitHub</a>-->
      <!--</div>-->
      <div>
        <i class="el-icon-edit"></i>
        <i class="el-icon-share"></i>
        <i class="el-icon-delete"></i>
      </div>
      <div>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </div>
      <div>
        <el-radio-group v-model="radio">
          <el-radio :label="3">备选项</el-radio>
          <el-radio :label="6">备选项</el-radio>
          <el-radio :label="9">备选项</el-radio>
        </el-radio-group>
      </div>
      <div class="test">
        <div class="demo">测试less</div>
        <div class="error-info">测试公共less</div>
      </div>
      <div><nuxt-link to="/sub">go 路由/sub</nuxt-link></div>
      <div><nuxt-link to="/sub/other">路由/sub/index</nuxt-link></div>
      <div>以下为测试mock数据</div>
      <ul>
        <li v-for="(item,index) in testList" :key="index">
          {{item.address}}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  data () {
    return {
        testList:{},
        radio:6
    }
  },
  mounted () {
    this.$http.get('mockTest').then( res =>{
        this.testList = res.data.projects
    })
  },
  components: {
    AppLogo
  }
}
</script>

<style lang="less" scoped rel="stylesheet/less">
.test{
  .demo{
    color: red;
  }
}
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

