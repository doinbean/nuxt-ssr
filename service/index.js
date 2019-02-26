/**
 * Created by yuchen on 2019/2/20.
 */
import axios from 'axios'
import qs from 'qs'
import config from './config'
import {API, API_URL} from './api'

if (process.server){
  config.baseURL = `http://${process.env.HOST || 'localhost'} : ${process.env.PORT || 3000}`
}

const service = axios.create(config)

// POST 传参序列化
service.interceptors.request.use(
  config => {
    if (config.method === 'post') config.data = qs.stringfy(config.data)
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 返回结果处理
service.interceptors.response.use(
  res => {
    return res.data
  },
  error => {
    return Promise.reject(error)
  }
)


const get = (url) => {
  let temp = API[url]
  let URL = `${API_URL}${temp}`
  return service({
    method: 'get',
    url:URL
  })

}

const post = (url, params, showLoading) => {
  let temp = API[url]
  let URL = `${API_URL}${temp}`
  axios.post(URL, params, {
    showLoading: showLoading
  })
}

export default {
 get
}
