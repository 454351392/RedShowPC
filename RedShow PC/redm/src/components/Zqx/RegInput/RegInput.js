import React, { Component } from 'react';
import axios from '../../../model/Axios'
import style from './RegInput.module.css'     //引入局部css
import {
    Form,
    Modal,
    Input,
    DatePicker,
    Tooltip,
    Radio,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
    Upload,
    message
} from 'antd';

import 'antd/dist/antd.css'


const { TextArea } = Input;
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
const { MonthPicker, RangePicker } = DatePicker;


//图片上传函数----准备
function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  
  function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }
  





class RegInput extends Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
        flag1:false,
        flag2:false,
        loading: false,
    
    };

    //提交
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {

            // console.log(values)
            if (!err) {
                console.log('Received values of form: ', values);
                //如果上传本地图片（pic重新赋值---为服务器返回的图片地址）
                //如果没有图片values.pic就不赋值了
                if(values.pic && values.pic.file){
                    values.pic = values.pic.fileList[0].response.imgsrc;
                }
                axios.post('/user/regs', values)
                .then((res) => {
                    console.log(res.data)
                    if(res.data.msg=='username_is_already'){
                        Modal.warning({
                            title: '提示',
                            content: '该用户名已存在',
                          });
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })

            }
        });
    };

    //确认密码
    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };
    //密码
    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('psw1')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };
    //确认密码
    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };

//头像按钮切换
    onChange = e => {
        // console.log('radio checked', e.target.value);
   
        this.setState({
          value: e.target.value,
        });

        if(e.target.value=='a'){
            this.setState({
                flag1:true,
                flag2:false
            })
         }
         if(e.target.value=='b'){
            this.setState({
                flag1:false,
                flag2:true
            })
         }

      };
    
      //图片上传
      handleChange = info => {
         if( !this.state.flag2) return false;       //本地图片上传取消验证
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {                 //服务器返回的图片名字
            console.log(info.file.response);
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, imageUrl =>{
            this.setState({
                imageUrl,
                loading: false,
              })
          }
          );
        }
      };


    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
 
        // //出生年月
        // const config = {
        //     rules: [{ type: 'object', required: true, message: 'Please select time!' }],
        // };

        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>,
        );

        const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));


        //图片上传
        const uploadButton = (
            <div>
              <Icon type={this.state.loading ? 'loading' : 'plus'} />
              <div className="ant-upload-text">Upload</div>
            </div>
          );
          const { imageUrl } = this.state;



        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
             
                <Form.Item {...formItemLayout} className={style.rbottom} label="用户名">
                    {getFieldDecorator('username', {
                        rules: [
                            {
                                required: true,
                                message: '请输入用户名',
                            },
                        ],
                    })(<Input placeholder="请输入用户名" />)}
                </Form.Item>
                <Form.Item className={style.rbottom} label="密码" hasFeedback>
                    {getFieldDecorator('psw1', {
                        rules: [
                            {
                                required: true,
                                message: '请输入密码!',
                            },
                            {
                                validator: this.validateToNextPassword,
                            },
                        ],
                    })(<Input.Password />)}
                </Form.Item>
                <Form.Item className={style.rbottom} label="确认密码" hasFeedback>
                    {getFieldDecorator('confirm', {
                        rules: [
                            {
                                required: true,
                                message: '请输入确认密码!',
                            },
                            {
                                validator: this.compareToFirstPassword,
                            },
                        ],
                    })(<Input.Password onBlur={this.handleConfirmBlur} />)}
                </Form.Item>

                <Form.Item className={style.rbottom} label="性别">
                    {getFieldDecorator('sex')(
                        <Radio.Group>
                            <Radio value="男">男</Radio>
                            <Radio value="女">女</Radio>
                        </Radio.Group>,
                    )}
                </Form.Item>


                <Form.Item className={style.rbottom} label="电话号码">
                    {getFieldDecorator('tel')(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
                </Form.Item>


                <Form.Item className={style.rbottom} label="出生年月">
                    {getFieldDecorator('birth')(<DatePicker />)}
                </Form.Item>


                <Form.Item className={style.rbottom} label="上传头像">
                    {getFieldDecorator('radio-button')(
                      <Radio.Group onChange={this.onChange}  buttonStyle="solid" size="large">
                      <Radio.Button value='a'>上传网络图片</Radio.Button>
                      <Radio.Button value='b'>上传本地图片</Radio.Button>
                    </Radio.Group>
                    )}
                </Form.Item>

                <Form.Item className={this.state.flag1?style.mblock:style.mnone}  {...formItemLayout} label="链接地址">
                    {getFieldDecorator('pic')(<Input placeholder="图片请输链接地址" />)}
                </Form.Item>
                  
                <Form.Item className={this.state.flag2?style.mblock:style.mnone}  {...formItemLayout} label="本地图片">
                    {getFieldDecorator('pic')(
                        // name="images" ，images是后端的，一定要写
                        <Upload
                        name="images"                       
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action="http://xueqian:2000/uploads/"
                        beforeUpload={beforeUpload}
                        onChange={this.handleChange}
                      >
                        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                      </Upload>)}
                </Form.Item>

           

               
           



                <Form.Item label="简介">
                    {getFieldDecorator('title')(<TextArea
                        placeholder="请输入简介"
                        autosize={{ minRows: 2, maxRows: 6 }}
                    />)}
                </Form.Item>


                <Form.Item {...tailFormItemLayout}>
                    {getFieldDecorator('agreement', {
                        valuePropName: 'checked',
                    })(
                        <Checkbox>
                            我已经阅读并同意此 <a href="">协议</a>
                        </Checkbox>,
                    )}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        注册
              </Button>
                </Form.Item>
            </Form>
        );
    }
}


const WrappedRegistrationForm = Form.create({ name: 'register' })(RegInput);

// ReactDOM.render(<WrappedRegistrationForm />, mountNode);

export default WrappedRegistrationForm;