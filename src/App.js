
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from '@/pages/Layout'
import { Button } from 'antd'
//@ 是别名的配置
import Login from '@/pages/Login'
import { AuthComponent } from './component/AuthComponent'

function App () {
  return (
    //路由配置
    <BrowserRouter>
      <div className="App">
        <Button type="primary">Primary</Button>
        <Routes>
          {/* 创建路由path 和组件的对应关系 */}
          {/* Layout需要鉴权处理 */}
          {/* 这里的Layout不一定能写死 要根据是否登录进行判断 */}
          <Route path='/' element={
            <AuthComponent>
              <Layout></Layout>
            </AuthComponent>
          }></Route>
          {/* 这个 */}
          <Route path='/login' element={<Login></Login>}></Route>
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App
