// 1。判断token是否存在
//2.如果存在直接正常渲染
//3.如果不存在 重定向到登录页面

//高阶组件：把一个组件 当作另一个组件参数
//然后通过一定的判断 返回新的组件

import { getToken } from "@/utils"
import { Navigate } from "react-router-dom"

function AuthComponent ({ children }) {
  const isToken = getToken()
  if (isToken) {
    return <>{children}</>
  } else {
    //重定向
    return <Navigate to="/login"></Navigate>
  }
}

export {
  AuthComponent
}