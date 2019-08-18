import React, { Component } from 'react';
import style from './ZmRun.module.css'     //引入局部css
import { Icon } from 'antd';
import 'antd/dist/antd.css';

class ZmRun extends Component {
    constructor(props) {
        super(props)
        this.state={
            t1:'依《网络安全法》相关要求，即日起蘑菇街会员登陆需绑定手机。为保障您的账户安全及正常使用，如您尚未绑定，请尽快完成绑定，感谢您的理解和支持!'
        }
        
    }

    componentDidMount() {
        console.log(this.state.t1)
        setInterval(() => {
        //获取到第一个字符串
        var start = this.state.t1.substring(0, 1)
        //获取到后面所有字符串
        var end = this.state.t1.substring(1)
        //重新拼接得到新的字符串
        let t1=this.state.t1;
        t1= end + start;
        this.setState({
            t1:t1
        })

    }, 500)
      }
 
  

    render() {
        return (
            <div>
                <span className={style.zrun}><Icon type="sound" />&nbsp;&nbsp;&nbsp;{this.state.t1}</span>
            </div>
        );
    }
}

export default ZmRun;