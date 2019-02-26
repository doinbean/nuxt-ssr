/**
 * Created by yuchen on 2019/2/25.
 */
import Vue from 'vue'
import http from '~/service/index'
Vue.prototype.$http = http
Vue.use(http)
