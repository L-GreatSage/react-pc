import { Form, Icon, Input, Button, Checkbox, Card, message } from 'antd'
import logo from '@/assets/logo.png'
import './index.scss'
import { useStore } from '@/store'
//导入的页面跳转函数
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const { loginStore } = useStore()
  const navigate = useNavigate()

  //直接将所有的参数给到value 校验成功执行这个
  async function onFinish (values) {
    console.log(values)
    //todo登录
    await loginStore.getToken({
      mobile: values.username,
      code: values.password
    })
    //页面跳转函数
    navigate('/', { replace: true })
    //message调用
    message.success("登录成功！")

  }

  //校验失败执行这个
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className="login">
      {/* 登录样式的卡片 */}
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        <Form
          //配合失去焦点验证 要在Form中都声明一下
          validateTrigger={['onBlur', 'onChange']}
          initialValues={{
            remember: true,
            username: '13811111111',
            password: '246810'

          }}
          //绑定点击事件 全都是指定 固定的
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="username"
            //此项的校验规则数组 支持多项
            rules={[
              {
                required: true,
                message: '请输入手机号!',
                //在什么时机下启动这个验证规则
                validateTrigger: 'onBlur'  //onBlur是失去焦点的意思
              },
              //添加了一个正则表达式 直接可以验证是否正确的电话号码
              {
                pattern: /^1[3-9]\d{9}$/, //正则表达式
                message: '请输入正确的手机号' //提示
              }
            ]}>
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item
            name="password"
            //校验规则
            rules={[
              {
                required: true,
                message: '请输入密码!',
              },
              //密码校验逻辑
              {
                len: 6,
                message: '验证码6个字符',
                validateTrigger: 'onBlur'
              }
            ]}>
            <Input size="large" placeholder="请输入验证码" />
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
          >
            <Checkbox className="login-checkbox-label">
              我已阅读并同意「用户协议」和「隐私条款」
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login

//每个组件 配合着index.js和index.scss构成组件 分别处理逻辑和样式