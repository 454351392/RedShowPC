import React, { Component } from "react";
import style from "./ATopnav.module.css";

class ATopnav extends Component {
  render() {
    return (
      <div className={style.topbox}>
        <ul className={style.topnavleft}>
          <li>首页</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
        <ul className={style.topnavright}>
          <li>欢迎登录</li>
          <li>退出登录</li>    
        </ul>
      </div>
    );
  }
}

export default ATopnav;


