//统一处理
//导出一个统一的方法

import React from "react"
import LoginStore from "./login.Store"
class RootStore {
  constructor() {
    this.loginStore = new LoginStore()

    //...
  }
}

//实例化跟
//导出useStore contexr

const rootStore = new RootStore()

const context = React.createContext(rootStore)

const useStore = () => React.useContext(context)

export { useStore }