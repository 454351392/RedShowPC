import React, { Component } from "react";
import style from "./RotaryMap.module.css";
import { Icon } from "antd";

class RotaryMap extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.data)
    // 放数据
    this.state = {
      ind: 0,
      data: this.props.data
    };
    this.everypicHandle = this.everypicHandle.bind(this);
  }

  everypicHandle(ind) {
    if (ind === "left") {
      ind = this.state.ind - 1;
      if (ind < 0) ind = this.state.data.gimgs.length - 1;
    }

    if (ind === "right") {
      ind = this.state.ind + 1;
      if (ind === this.state.data.gimgs.length) ind = 0;
    }
    this.setState({
      ind: ind
    });
  }

  render() {
    return (
      <div className={style.lbbox}>
        <div className={[style.ups, style.ii].join(" ")}>
          <img src={this.state.data.gimgs[this.state.ind]} />
        </div>
        <div
          onClick={() => {
            this.everypicHandle("left");
          }}
          className={style.leftde}
        >
          <Icon type="left-circle" />
        </div>
        <div
          onClick={() => {
            this.everypicHandle("right");
          }}
          className={style.rightde}
        >
          <Icon type="right-circle" />
        </div>
        <ul className={style.downs}>
          {this.state.data.gimgs.map((item, i) => {
              // console.log(item, i)
            return (
              <li key={i} onClick={() => {
                  this.everypicHandle(i);
                }}
                className={i === this.state.ind ? style.activeimg : ""}
              >
                <img src={item} alt=" " />
              </li>
            );
          })}
        </ul>
        <div className={style.titlebox}>
        {this.state.data.gtitle}
        </div>
        <div className={style.contentsbox}>
          <p>
           {this.state.data.ginfo}
          </p>
        </div>

        <ul className={style.likevd}>
          <li>
            <Icon type="heart" /> {this.props.data.gnums}
          </li>
          <li>
            <Icon type="message" /> 3
          </li>
          <li>
            <Icon type="star" /> 60
          </li>
        </ul>
        <div className={style.fbtime}>发布于 {this.props.data.addtime}</div>
      </div>
    );
  }
}

export default RotaryMap;
