import React, { Component } from 'react'
import style from './Topic.module.css'

export default class Topic extends Component {
  render() {
    return (
      <div className={style.topicbox}>
        <div className={style.com}>
          <img src="https://ci.xiaohongshu.com/75e51275-2747-45bb-a094-25cff06e39c7" />
          <p>啊欧，还没有专辑哦～</p>
          <p><a href="#">查看更多</a> </p>
        </div>
      </div>
    )
  }
}
