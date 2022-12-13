//配置登录Mobx  基于mobx封装管理用户登录的store
import { makeAutoObservable } from "mobx"
import { http, setToken, getToken } from "@/utils"
//login module

class LoginStore {
  //定义数据
  token = getToken() || ''
  constructor() {
    //响应式
    makeAutoObservable(this)
  }

  //解构 数据
  getToken = async ({ mobile, code }) => {
    //调用登录接口
    const res = await http.post('http://geek.itheima.net/v1_0/authorizations', {
      mobile, code
    })
    //存入token
    console.log(res.data)
    this.token = res.data.token
    //存入ls 
    setToken(this.token)
  }
}


export default LoginStore