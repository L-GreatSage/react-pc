//工具类的 统一管理
//先把所有的工具函数导出的模块再此导入
//然后在统一导出

import {
  setToken,
  getToken,
  removeToken
} from './token'

import { http } from './http'
export {
  http,
  setToken,
  getToken,
  removeToken
}