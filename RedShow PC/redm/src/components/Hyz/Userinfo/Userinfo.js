import React, { Component } from 'react';
import style from './Userinfo.module.css'
import {Link} from 'react-router-dom'
class Userinfo extends Component {
    constructor(props){
        super(props);
        console.log(props.data)
    }
    render() {
        return (
            <div className={style.box}>
                <div className={style.shang}>笔记作者</div>
                <Link to={"/info?uid="+this.props.data.uid}>
                <div className={style.zhong}>
                  <img src={this.props.data.upic} alt="头像" />
                    <div>
                      <h3>{this.props.data.username}</h3>
                      <span>{this.props.data.utitle}</span>
                    </div>       
                </div>
                </Link>
                <ul className={style.xia}>
                      <li>
                          <p>笔记</p>
                          <p>514</p>
                      </li>
                      <li>
                          <p>粉丝</p>
                          <p>5414</p>
                      </li>
                      <li>
                          <p>获赞和收藏</p>
                          <p>{this.props.data.gnums}</p>
                      </li>
                </ul>
            </div>
        );
    }
}

export default Userinfo;