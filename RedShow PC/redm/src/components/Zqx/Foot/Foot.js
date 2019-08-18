import React, { Component } from 'react';
import style from './Foot.module.css'     //引入局部css
class Foot extends Component {
    render() {
        return (
            <div>
               <div className={style.myf}>
                   <div className={style.f1}>
                       <a href="#">注册协议</a>
                       <a href="#">隐私协议</a>
                       <a href="#">侵权投诉指引</a>
                   </div>
                   <div className={style.ftop}>侵权投诉指引侵权投诉指引侵权投诉指引侵权投诉指引侵权投诉指引侵权投诉指引侵权投诉指引侵权投诉指引侵权投诉指引侵权投诉指引侵权投诉指引侵权投诉指引</div>
                   <div className={style.ftop}>注册协议注册协议注册协议注册协议注册协议注册协议注册协议注册协议注册协议注册协议注册协议注册协议注册协议注册协议注册协议注册协议注册协议注册协议注册协议注册协议注</div>
                   <div className={style.ftop}>侵权投诉指引侵权投诉指引侵权投诉指引侵权投诉指引侵权投诉指引侵权投诉指引侵权投诉指引侵权投诉指引侵权投诉指引侵权投诉指引侵权投诉指引侵权投诉指引侵权</div>
               </div>
            </div>
        );
    }
}

export default Foot;