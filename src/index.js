import React from 'react'
import ReactDOM from 'react-dom/client'
//导入index文件
import './index.scss'
//导入antd文件 教的是要导入 反而出错 不导入还不出错
//import 'antd/dist/antd.min.css'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)