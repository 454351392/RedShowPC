import React, { Component } from "react";
import TopNavu from "../../../components/Zqx/TopNavu/TopNavu";
import style from "./About.module.css";
import Redboxs from "../../../components/Hyz/Redboxs/Redboxs";
import CEnvironment from "../../../components/Hyz/CEnvironment/CEnvironment";

class About extends Component {
  render() {
    return (
      <div>
        <TopNavu />
        <div className={style.topbox}>
          <div className={style.bgctz} />
          <div className={style.topword}>
            <h2>关于我们</h2>
            <p>About Us</p>
          </div>
        </div>
        <div className={style.w}>
          {/* 关于红蘑菇 */}
          <div className={style.aboutredmg}>
            <div className={style.introduce}>
              <div className={style.intitle}>什么是红蘑菇</div>
              <p className={style.inconp}>
                红蘑菇是年轻人的生活方式平台和消费决策入口，由毛文超和瞿芳于2013年在上海创立，致力于让全世界的好生活触手可及。在红蘑菇，用户通过短视频、图文等形式标记生活点滴。截至2019年3月，红蘑菇用户数超过2.2亿，并持续快速增长，其中70%用户是90后。
              </p>
            </div>
            <div className={style.foursmallbox}>
              <Redboxs />
              <Redboxs />
              <Redboxs />
              <Redboxs />
            </div>
            <ul className={style.brand}>
              <li>
                <p className={style.bdimg}>
                  <img src="https://ci.xiaohongshu.com/2bc643c9-9b1e-4fe8-bb7a-772c373a2bc0" />
                </p>
                <p>愿景</p>
                <p>成为最受用户信任的社交网站</p>
              </li>
              <li>
                <p className={style.bdimg}>
                  <img src="https://ci.xiaohongshu.com/d21c3e88-57b5-4a7f-95e4-8b84944b9394" />
                </p>
                <p>使命</p>
                <p>让全世界的好生活触手可及</p>
              </li>
              <li>
                <p className={style.bdimg}>
                  <img src="https://ci.xiaohongshu.com/3c7877b9-032c-4509-8af1-48ae559dbab0" />
                </p>
                <p>网站文化</p>
                <p>有结果 有洞察 有信任 有格局</p>
              </li>
            </ul>
          </div>
        </div>

        {/* 公司环境 */}
        <div className={style.bgcomplay}>
          <div className={style.w}>
            <div className={style.environment}>
              <div className={style.entitle}>公司环境</div>
              <div className={style.cplace}>
                <CEnvironment />
              </div>
            </div>
          </div>
        </div>

        {/* 我们在这 */}
        <div className={style.bgcomplay}>
          <div className={style.w}>
            <div className={style.wehere}>
                <div className={style.div1}>
                  <div className={style.leftcon}>
                    <h1>我们在这里</h1>
                    <h3>上海总部</h3>
                    <p>上海市 黄浦区 马当路388号 SOHO复兴广场C座</p>
                    <h3>北京</h3>
                    <p>北京市 朝阳区 安定路 中海国际B座18楼</p>
                    <h3>武汉</h3>
                    <p>武汉市 光谷大道 现代光谷世贸中心B座10楼</p>
                    </div>
                </div>
                <div className={style.div2}></div>
            </div>
          </div>
        </div>

        {/* 底部 */}
        <div className={style.footer} />
      </div>
    );
  }
}

export default About;
