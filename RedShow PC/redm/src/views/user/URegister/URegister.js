import React, { Component } from 'react';
import TopNavu from '../../../components/Zqx/TopNavu/TopNavu'
import RegInput from '../../../components/Zqx/RegInput/RegInput'
import style from './URegister.module.css'     //引入局部css

class URegister extends Component {
    render() {
        return (
            <div>  
              <div className={style.ureg}>
              <TopNavu />
              <div className={style.urkuang}>
               <h4 className={style.zhucezi}>立即注册</h4>
               <div className={style.rzhuce}>
                   <RegInput></RegInput>
               </div>
              </div>
            </div>
              </div>
            
        );
    }
}

export default URegister;