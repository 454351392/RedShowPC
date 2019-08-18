import React, { Component } from 'react';
import style from './Userinfodetail.module.css'
import { Icon } from 'antd';
import {Link} from 'react-router-dom'
class Userinfodetail extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    render() {
        console.log(111)
        console.log(this.props.list2[0])
        
        return (
            <div className={style.box}>
                <Link to="/info">
                <div className={style.zhong}>
                  <img src={this.props.list2[0].upic}  alt="头像" />
                    <div>
                    
                      <h3>{this.props.list2[0].username}</h3>
                      <span>{this.props.list2[0].utitle}</span>
                      <p><Icon type="environment" /> 成都</p>
                    </div>       
                </div>
                </Link>
                <ul className={style.xia}>
                      <li>
                          <p>关注</p>
                          <p>54</p>
                      </li>
                      <li>
                          <p>粉丝</p>
                          <p>5414</p>
                      </li>
                      <li>
                          <p>获赞和收藏</p>
                          <p>514</p>
                      </li>
               
                </ul>
            </div>
        );
    }
}

export default Userinfodetail;