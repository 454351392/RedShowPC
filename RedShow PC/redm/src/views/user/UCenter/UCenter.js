import React, { Component } from 'react';
import TopNavu from '../../../components/Zqx/TopNavu/TopNavu'
import SideNav from '../../../components/Zqx/User/SideNav/SideNav'
import {renderRoutes} from 'react-router-config';   //子路由相关配置
import style from './UCenter.module.css'     //引入局部css

class UCenter extends Component {
    constructor(props){
     super(props)
    }
    render() {
        return (
            <div>
                <div>
               < TopNavu></TopNavu> 
                 <SideNav></SideNav>
                 <div className={style.ucenter}>
                 {renderRoutes(this.props.route.children)}
                 </div>
                </div>
            </div>
        );
    }
}

export default UCenter;