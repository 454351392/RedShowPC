import React, { Component } from 'react';
import style from './ULogin.module.css'     //引入局部css
import ZmRun from '../../../components/Zqx/ZmRun/ZmRun'
import Foot from '../../../components/Zqx/Foot/Foot'
import ULoginkuang from '../../../components/Zqx/ULoginkuang/ULoginkuang'


class ULogin extends Component {
    render() {
        return (
            <div>
                <div className={style.lbigbox}>
                    <div className={style.logininfo}><ZmRun></ZmRun></div>
                    <div className={style.logins}>
                        {/* <a href="/ulogin" className={style.kongbai}></a> */}
                        <div className={style.zhuti}>
                            <div className={style.kongbai}></div>
                            <div className={style.userlogin}>
                            <ULoginkuang></ULoginkuang>
                            </div>
                        </div>
                    </div>
                  <div className={style.lfoot}>
                  <Foot/>
                  </div>
                  
                   
                   
                </div>
               

            </div>
        );
    }
}

export default ULogin;