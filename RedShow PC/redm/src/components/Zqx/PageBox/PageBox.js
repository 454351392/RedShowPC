import React, { Component } from 'react';
import style from './PageBox.module.css'     //引入局部css
import { Icon } from 'antd';
import 'antd/dist/antd.css';

class PageBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flag: '图片'
        }
        this.showvplay = this.showvplay.bind(this)
        this.showimgvideo=this.showimgvideo.bind(this)
    }

    showvplay() {
        if (this.props.myitem.gcx === '视频') {
            return <Icon type="play-circle" />
        }
    }

    showimgvideo(){
        if(this.props.myitem.gcx=='图片'){
        return    <img src= {this.props.myitem.gimgs[0]} alt="" />  
        }
        else if(this.props.myitem.gcx=='视频'){
            return    <video muted loop>
         <source src= {this.props.myitem.gvideo} />
        </video>    
        }
    }
    render() {
        return (
            <div>
                <a href={'/detail?kw='+this.props.myitem.gid+'&xid='+this.props.myitem.uid}>
                <div className={style.mbox}>

                    {this.showimgvideo()}

                    <div className={style.mtitle}>
                       {this.props.myitem.gtitle}
                    </div>
                    <div className={style.mss}>
                        <img src={this.props.myitem.upic} alt="" />
                        <span className={style.myname}> { this.props.myitem.username}</span>
                        <div className={style.mright}><Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" /><span className={style.mnum}>{this.props.myitem.gnums}</span></div>
                    </div>
                    <span className={style.mplay}>{this.showvplay()}</span>
                    <div className={style.mzhe}></div>

                </div>
                </a>
            </div>
        );
    }
}

export default PageBox;