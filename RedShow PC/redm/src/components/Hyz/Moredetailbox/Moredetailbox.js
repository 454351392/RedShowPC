
import React, { Component } from 'react';
import style from './Moredetailbox.module.css'

import Moredetail from  '../Moredetail/Moredetail'

class Moredetailbox extends Component {
    render() {
        return (
            <div className={style.box}>
                <div className={style.shang}>相关笔记</div>
                <div className={style.zhong}>
                       <div> <Moredetail /></div> 
                </div>
                <div className={style.xia}>
                  <a>查看更多</a>  
                </div>
            </div>
        );
    }
}

export default Moredetailbox;