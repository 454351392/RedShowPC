import React, { Component } from 'react';
import style from './TopNav.module.css'     //引入局部css
import { Icon } from 'antd';
import 'antd/dist/antd.css'; 


class TopNav extends Component {
constructor(props){
super(props)
this.state={
  keywords:''
}
this.handleChange = this.handleChange.bind(this)
this.searrchs = this.searrchs.bind(this)
}

  //双向数据绑定
  handleChange(e) {
    let form_data = {};
    let v = e.target.value;
    let n = e.target.name;
    form_data[n] = v;
    this.setState(form_data);
}



  //按钮点击（添加学生）事件
  searrchs() {
    //调用父级的追加数据的方法   opersearch---父组件上绑定的属性（这个属性的值是一个方法，已在父组件中定义，使此子组件可以直接通过this.props.opersearch传值调用）
           this.props.opersearch(this.state.keywords)
       }

  render() {
    return (
      <div>
        <header className={style.myh}>
          <div className={style.center}>
            <div className={[style.a,style.a1].join(' ')}>
              <a href="/" className={style.himg1}><img src="https://s10.mogucdn.com/mlcdn/c45406/190102_088f4i166l4gkl08k297h5kk8690i_260x200.png" alt=""/></a>
              <a href="/">首页</a>
            </div>
            <div className={[style.a,style.a2].join(' ')}>
              
               <input type="text"   name='keywords' value={this.state.keywords} onChange={this.handleChange}  placeholder="请输入您感兴趣的内容"/>
               <button onClick={this.searrchs}><Icon type="search" /></button>
             
              </div>
            <div className={[style.a,style.a3].join(' ')}>
              <a href="/news">新闻中心</a>
              <a href="/about" className={style.about}>关于我们</a>
              <span>
              <a href="/ulogin"><img src="https://s10.mogucdn.com/mlcdn/c45406/181016_143l3ehl4ebad6c2326gjk6d4h41g_48x48.png" alt=""/> 登陆</a>
              <a href="/ureg">注册</a>
              </span>
            </div>
          </div>
        </header>
        <div className={style.mydiv}></div>
      </div>
    );
  }
}

export default TopNav;