import React, { Component } from 'react';
import style from './ULoginkuang.module.css'     //引入局部css
import LoginInput1 from '../../../components/Zqx/LoginInputs/LoginInput1/LoginInput1'
import LoginInput2 from '../../../components/Zqx/LoginInputs/LoginInput2/LoginInput2'

class ULoginkuang extends Component {
    constructor(props) {
        super(props)
        this.state = {
            falg:1,
            flag1: true,
            flag2: false
        }
        this.img1 = this.img1.bind(this);
        this.img2 = this.img2.bind(this);
        this.dianji=this.dianji.bind(this);
    }
    img1() {
        this.setState({
            flag1: false,
            flag2: true
        })
    }
    img2() {
        this.setState({
            flag1: true,
            flag2: false
        })
    }




    dianji(falg){
this.setState({
    falg:falg
})
    }

   changes(){
    if(this.state.falg==1){
        return <LoginInput1></LoginInput1>
    }  
    return <LoginInput2></LoginInput2>
   }


    // className={this.state.flag1 ? style.xian : style.yin}
    // className={this.state.flag2 ? style.xian : style.yin}
    render() {
        return (
            <div>
                <div className={style.lbox}>
                    <div className={this.state.flag1 ? [style.saoma,style.beijing,style.xian].join(' ') : style.yin}>
                        <img onClick={this.img1} className={this.state.flag1 ? [style.xian,style.mimg].join(' ') : style.yin} src="https://s10.mogucdn.com/p1/160418/upload_ifrdcojvgftdmmbqhazdambqmeyde_52x53.png" alt="" />
                        <div className={style.mneirong}>
                        <div className={style.mdiv1}>
                            <img src="https://s10.mogucdn.com/p1/160418/upload_ie4wiojrg43dombqhazdambqgqyde_190x37.png" alt=""/>
                        </div>
                        <img className={style.mma} src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564720862435&di=deccb057cdc41655a4a75d54b52bdf2c&imgtype=0&src=http%3A%2F%2Fimg3.cache.netease.com%2Fgame%2F2013%2F11%2F26%2F20131126143638f53f4.png" alt=""/>    
                        <a href="/" target="_blank">点击下载红蘑菇社区APP</a>
                        </div>
                    </div>
                    <div className={this.state.flag2 ? [style.denglu,style.beijing,style.xian].join(' ') : style.yin}>
                        <img onClick={this.img2} className={this.state.flag2 ? [style.xian,style.mimg].join(' ') : style.yin} src="https://s10.mogucdn.com/p1/160418/upload_ie4tmnzrmuydmmbqhazdambqgqyde_46x46.png" alt="" />
                        <div className={style.a}>
                            <div onClick={()=>{this.dianji(1)}} className={this.state.falg==1?style.mbottm:''}>普通登录</div>
                            <div onClick={()=>{this.dianji(2)}} className={this.state.falg==2?style.mbottm:''}>手机无密码登陆</div>
                        </div>
                        <div className={style.tianixie}>{this.changes()}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ULoginkuang;