
import React, { Component } from 'react';
import style from './LoginInput2.module.css'     //引入局部css
class LoginInput2 extends Component {
    render() {
        return (
            <div>
                <div>
                    <input className={style.tphone} type="text" placeholder='手机号码'/>
                    <div className={style.yb}>
                        <button className={style.yzm}>获取动态密码</button>
                        <input className={[style.yzm2, style.tphone].join(' ')} type="text" placeholder='动态密码' />
                    </div>
                    <button className={[style.ydl, style.yzm].join(' ')}>登&nbsp;陆</button>


                </div>
            </div>
        );
    }
}

export default LoginInput2;