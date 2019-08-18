import React, { Component } from 'react';
import style  from './Havevideo.module.css';
import { Icon } from 'antd';

class Havevideo extends Component {
    constructor(props){
        super(props)
        console.log(props.data)
    }
    render() {
        return (
            <div className={style.bigbox}>
                <div className={style.videobox}>
                    <video autoPlay controls src={this.props.data.gvideo}></video>
                </div>
                <div className={style.titlebox}>
                    <h2>{this.props.data.gtitle}</h2>
                </div>
                <div className={style.infobox}>
                    <a href="/">{this.props.data.gtitle}</a>
                    <p>{this.props.data.ginfo}</p>
                </div>
                <ul className={style.likevd}>
                    <li><Icon type="heart" /> {this.props.data.gnums}</li>
                    <li><Icon type="message" /> 3</li>
                    <li><Icon type="star" />60 </li>
                </ul>
                <div className={style.fbtime}>发布于{this.props.data.addtime} </div>
            </div>
        );
    }
}

export default Havevideo;