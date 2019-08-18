
import React, { Component } from 'react';
import style from './Moredetail.module.css'
import { Icon } from 'antd';
import {Link} from 'react-router-dom'


class Moredetail extends Component {
  constructor(props){
    super(props)
    // console.log(this.props)
  }
  render() {
    return (
      <div className={style.box}>    
        { console.log(this.props)}
             <a href={'/detail?kw='+this.props.data.gid+'&xid='+this.props.data.uid}>
                <div className={style.zhong}>
                  <img src={this.props.data.upic} alt="头像" />
                    <div>
                      <h3>{this.props.data.gtitle}</h3>
                      <span><Icon type="heart" /> {this.props.data.gnums} </span>
                    </div>       
                </div>
             </a>
            </div>
        );
    }
}

export default Moredetail;