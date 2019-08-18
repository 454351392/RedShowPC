
import React, { Component } from 'react';
import style from './Comment.module.css'
import { Icon } from 'antd';

class Comment extends Component {
    render() {
        return (
            <div className={style.box}>
                <div className={style.zhong}>
                  <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3923012461,709726096&fm=26&gp=0.jpg"  alt="头像" />
                    <div>
                      <h3>一叶子</h3>
                      <span>2019:15:05</span>
                    </div>       
                </div>
               <div className={style.xia}>
               <p>  评论:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx结束</p> 
               <p> 作者回复xxxxxxxx</p>
               </div>
               <div className={style.likes}><Icon type="like" /> 18  回复 </div>
            </div>
        );
    }
}

export default Comment;