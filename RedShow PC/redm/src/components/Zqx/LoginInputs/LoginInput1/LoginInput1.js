import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'           // this.props.history.push('/ucenter');跳转不起使用，导出时还需要改
import axios from '../../../../model/Axios'
import style from './LoginInput1.css'     //引入局部css
import { Form, Icon, Input, Button, Checkbox, Modal, message } from 'antd';
import 'antd/dist/antd.css'


class LoginInput1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log(values)
            if (!err) {
                console.log('Received values of form: ', values);
                axios.post('/user/ulogins', values)
                    .then((res) => {
                        console.log(res.data)
                        if (res.data.msg1 == '密码错误') {
                            Modal.error({
                                title: '提示',
                                content: '对不起，密码错误',
                            });
                        }
                        if (res.data.msg1 == '该用户不存在') {
                            Modal.error({
                                title: '提示',
                                content: '对不起，该用户不存在',
                            });
                        }
                        if (res.data.msg1 == '登陆成功') {
                            message.success('恭喜您，登陆成功');
                            this.props.history.push('/ucenter');
                            // window.location.href='/'
                        }

                    })
                    .catch(function (error) {
                        console.log(error);
                    })

            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <div className={style.form1}>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: '请输入用户名!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="用户名/邮箱/手机号"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码' }],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="密码"
                                />,
                            )}
                        </Form.Item>

                        <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(<Checkbox>Remember me</Checkbox>)}
                            <a className="login-form-forgot" href="">
                                忘记密码
              </a>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登陆
              </Button>
                            <a className='mya' href="">没有账号？注册一个呗！</a>
                        </Form.Item>
                    </Form>
                </div>
            </div>

        );
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(LoginInput1);   //替换成自己的类名

// ReactDOM.render(<WrappedNormalLoginForm />, mountNode);


export default withRouter(WrappedNormalLoginForm) ;     //上面将自己的类名交给WrappedNormalLoginForm，所以导出WrappedNormalLoginForm