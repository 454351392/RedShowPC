import React, { Component } from 'react';
import {Upload,Icon} from "antd";
import { Form, Select, Input, Button } from 'antd';

const { Option } = Select;

class Addnews extends React.Component {
    constructor(props){
        super(props);
        console.log(111111)
    }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };



  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
        <Form.Item label="新闻类型">
          {getFieldDecorator('新闻类型', {
            rules: [{ required: true, message: 'Please input your note!' }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="上传标题图片" extra="">
          {getFieldDecorator('上传标题图片', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
          })(
            <Upload name="logo" action="http://xueqian:47/uploads/" listType="picture">
              <Button>
                <Icon type="upload" /> 点击上传
              </Button>
            </Upload>,
          )}
        </Form.Item>
        <Form.Item label="上传新闻图片" extra="">
          {getFieldDecorator('上传新闻图片', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
          })(
            <Upload name="newspic" action="http://xueqian:47/uploads" listType="picture">
              <Button>
                <Icon type="upload" /> 点击上传
              </Button>
            </Upload>,
          )}
        </Form.Item>
        <Form.Item label="标题">
          {getFieldDecorator('标题', {
            rules: [{ required: true, message: 'Please input your note!' }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="新闻概要1">
          {getFieldDecorator('新闻概要1', {
            rules: [{ required: true, message: 'Please input your note!' }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="新闻概要2">
          {getFieldDecorator('新闻概要2', {
            rules: [{ required: true, message: 'Please input your note!' }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="新闻概要3">
          {getFieldDecorator('新闻概要3', {
            rules: [{ required: true, message: 'Please input your note!' }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="新闻概要4">
          {getFieldDecorator('新闻概要4', {
            rules: [{ required: true, message: 'Please input your note!' }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="新闻详情">
          {getFieldDecorator('新闻详情', {
            rules: [{ required: true, message: 'Please input your note!' }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="要点1">
          {getFieldDecorator('要点1', {
            rules: [{ required: true, message: 'Please input your note!' }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="要点2">
          {getFieldDecorator('要点2', {
            rules: [{ required: true, message: 'Please input your note!' }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="要点3">
          {getFieldDecorator('要点3', {
            rules: [{ required: true, message: 'Please input your note!' }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="要点4">
          {getFieldDecorator('要点4', {
            rules: [{ required: true, message: 'Please input your note!' }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="要点5">
          {getFieldDecorator('要点5', {
            rules: [{ required: true, message: 'Please input your note!' }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="小时">
          {getFieldDecorator('小时', {
            rules: [{ required: true, message: 'Please input your note!' }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="点击量">
          {getFieldDecorator('点击量', {
            rules: [{ required: true, message: 'Please input your note!' }],
          })(<Input />)}
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedApp = Form.create({ name: 'coordinated' })(Addnews);


export default WrappedApp;