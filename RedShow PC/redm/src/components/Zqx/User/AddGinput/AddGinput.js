import React, { Component } from 'react';
import axios from '../../../../model/Axios'
import style from './AddGinput.module.css'     //引入局部css
import {
    Form,
    Modal,
    Input,
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

import 'antd/dist/antd.css';


const { TextArea } = Input;
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;



//图片上传函数----准备
function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}






class AddGinput extends Component {
    constructor(props){
        super(props);
        this.state = {
            confirmDirty: false,
            autoCompleteResult: [],
            flag1: false,
            flag2: false,
            loading: false,
            previewVisible: false,
            previewImage: '',           //上传多张图片有关
            imglist: [],
            fileList:[],
            gvideo:'',
            upic:'',
            utitle:''
    
        };
    }
    
componentDidMount(){
    axios.post('/user/userinfo')
    .then((res) => {
        console.log(res.data)
        this.setState({
            upic:res.data.pic,
            utitle:res.data.title
        })
   
    })
    .catch(function (error) { 
        console.log(error);
    })

}

    //提交
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {

            // console.log(values)
            if (!err) {
                // 如果上传本地图片（pic重新赋值---为服务器返回的图片地址）
                // 如果没有图片values.pic就不赋值了
                if(values.gvideo && values.gvideo.file){
                    values.gvideo = values.gvideo.fileList[0].response.imgsrc;
                }
                let formdata = values;
                formdata.imglist = this.state.imglist;
                formdata.upic=this.state.upic;
                formdata.utitle=this.state.utitle;
                console.log(formdata);
                axios.post('/user/addgoods', formdata)
                .then((res) => {
                    console.log(res.data)
                    if(res.data.msg5=='添加成功'){
                message.success('添加成功', 10);
                    }
                })
                .catch(function (error) { 
                    console.log(error);
                })

            }
        });
    };


    //上传图片or视频按钮切换
    onChange = e => {
        // console.log('radio checked', e.target.value);

        this.setState({
            value: e.target.value,
        });

        if (e.target.value == '图片') {
            this.setState({
                flag1: true,
                flag2: false
            })
        }
        if (e.target.value == '视频') {
            this.setState({
                flag1: false,
                flag2: true
            })
        }

    };




    //上传多张图片操作
    handleCancel = () => this.setState({ previewVisible: false });

    handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
        });
    };

    handleChange = ({ file, fileList }) => {
        console.log(file);
        let imglist = this.state.imglist;
        console.log(imglist);
        if(file.status == 'done'){
            let imgsrc = file.response.data[0];
            imglist.push(imgsrc);
        }
        this.setState({ imglist, fileList, gvideo:''})
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



        //图片上传------------------------多张
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );


        //上传----------------------------视频
        const props = {
            action: 'http://xueqian:2000/uploads/',
            listType: 'picture',
            name:'images',
            onChange:({file})=>{
                console.log(file.status);
                if(file.status == 'done'){
                    console.log(file.response);
                    this.setState({
                        gvideo:file.response.imgsrc,
                        imglist:[]
                    });
                }
            }
        };



        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>

                <Form.Item {...formItemLayout} className={style.rbottom} label="标题">
                    {getFieldDecorator('gtitle', {
                        rules: [
                            {
                                required: true,
                                message: '请输入标题',
                            },
                        ],
                    })(<Input placeholder="请输入标题" />)}
                </Form.Item>


                <Form.Item label="选择类型" hasFeedback>
                    {getFieldDecorator('gchooose', {
                        rules: [{ required: true, message: 'Please select your country!' }],
                    })(
                        <Select placeholder="请选择作品类型">
                            <Option value="时尚">时尚</Option>
                            <Option value="美妆">美妆</Option>
                            <Option value="美食">美食</Option>
                            <Option value="运动">运动</Option>
                            <Option value="影音">影音</Option>
                            <Option value="旅行">旅行</Option>
                            <Option value="居家">居家</Option>
                            <Option value="萌宠">萌宠</Option>
                            <Option value="数码">数码</Option>
                            <Option value="汉服">汉服</Option>
                            <Option value="其他">其他</Option>
                        </Select>,
                    )}
                </Form.Item>



                <Form.Item className={style.rbottom} label="上传作品">
                    {getFieldDecorator('gcx')(
                        <Radio.Group onChange={this.onChange} buttonStyle="solid" size="large">
                            <Radio.Button value='图片'>上传图片</Radio.Button>
                            <Radio.Button value='视频'>上传视频</Radio.Button>
                        </Radio.Group>
                    )}
                </Form.Item>

                 {/* ******************html*******************多张图片 */}
                <Form.Item className={this.state.flag1 ? style.mblock : style.mnone}  {...formItemLayout} label="本地图片">
                    {getFieldDecorator('gimgs')(
                        // name="images" ，images是后端的，一定要写
                        <div className="clearfix">
                            <Upload
                                name="myimgs"
                                multiple={true} 
                                action="http://xueqian:2000/uploadimgs/"
                                listType="picture-card"
                                fileList={fileList}
                                onPreview={this.handlePreview}
                                onChange={this.handleChange}
                            >
                                {fileList.length >= 8 ? null : uploadButton}
                            </Upload>
                            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                <img alt="example" style={{ width: '100%' }} src={previewImage} />
                            </Modal>
                        </div>)}
                </Form.Item>


                {/* <Form.Item className={this.state.flag2 ? style.mblock : style.mnone}  {...formItemLayout} label="链接地址">
                    {getFieldDecorator('pic')(<Input placeholder="图片请输链接地址" />)}
                </Form.Item> */}

                 
                  {/* ******************html*******************视频上传 */}
                <Form.Item className={this.state.flag2 ? style.mblock : style.mnone}  {...formItemLayout} label="本地上传视频">
                    {getFieldDecorator('gvideo')(<Upload {...props}>
                        <Button>
                            <Icon type="upload" /> Upload
                     </Button>
                    </Upload>)}
                </Form.Item>



                <Form.Item label="详情">
                    {getFieldDecorator('ginfo')(<TextArea
                        placeholder="请输详情"
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
                        添加
              </Button>
                </Form.Item>
            </Form>
        );
    }
}


const WrappedRegistrationForm = Form.create({ name: 'register' })(AddGinput);

// ReactDOM.render(<WrappedRegistrationForm />, mountNode);

export default WrappedRegistrationForm;