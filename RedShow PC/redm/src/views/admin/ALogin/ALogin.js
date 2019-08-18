import React, { Component } from "react";
import axios from "../../../model/Axios";
import { Form, Icon, Input, Button, Checkbox, message } from "antd";
import "antd/dist/antd.css";

// import TopNav from  '../../../components/Zqx/TopNav/TopNav'

// import { } from 'antd';
import "./ALogin.css";

// const error = () => {
//
// };

class ALogin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log(values);
      if (!err) {
        console.log("Received values of form: ", values);

        axios
          .post("/admin/login", values)
          .then(res => {
            console.log(res);
            if (res.data.msg1 == "用户名不存在") {
              message.error("用户名不存在");
            } 
             if (res.data.msg1 == "密码错误") {
              message.error("密码错误");
            } 
             if (res.data.msg1 == "ok") {
              message.success("登录成功");
              this.props.history.push('/acenter')
              // window.location.href = "/acenter";
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        {/* <TopNav /> */}
        <div className="mylogin">
          <h2 className="glyqdlu">管理员登录</h2>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator("aname", {
                rules: [{ required: true, message: "请输入账号!" }]
              })(
                <Input
                  prefix={
                    <Icon type="username" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="账号"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("apsw", {
                rules: [{ required: true, message: "请输入密码!" }]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="密码"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>记住密码</Checkbox>)}
              <a className="login-form-forgot" href="###">
                忘记密码
              </a>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(ALogin);
export default WrappedNormalLoginForm;
