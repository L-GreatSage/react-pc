
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from '@/pages/Layout'
import { Button } from 'antd'
//@ 是别名的配置
import Login from '@/pages/Login'

function App () {
  return (
    //路由配置
    <BrowserRouter>
      <div className="App">
        <Button type="primary">Primary</Button>
        <Routes>
          {/* 创建路由path 和组件的对应关系 */}
          <Route path='/' element={<Layout></Layout>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App
