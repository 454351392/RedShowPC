import React, { Component } from "react";
import onepage from "./Onepage.module.css";
import { Link } from 'react-router-dom';
class Onepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isshow: false
        }
    }
    render() {
        return (
            <div className={onepage.onep}>
                <div className={onepage.oneR}>
                    <ul>
                        <li className={onepage.mytitle}>
                            <h2>
                                <a href="##">
                                    美国最重大事件发生了!美元将有贬值压力
                            </a>
                            </h2>
                        </li>
                        <li className={onepage.myitems}>
                            <a>中美经贸团队工作层8月将密集磋商</a>
                            <span>|</span>
                            <a>为9月牵头人见面做准备</a>
                        </li>
                        <li className={onepage.myitems}>
                            <a>第十二轮中美经贸高级别磋商在上海结束</a>
                            <span>|</span>
                            <a>A股早间三大指数集体低开</a>
                        </li>
                        <li className={onepage.myitems}>
                            <a>创业板指数一度冲高，曾涨逾0.5%</a>
                            <span>|</span>
                            <a>目前在平盘线附近震荡</a>
                        </li>
                    </ul>
                </div>
                <div className={onepage.oneL}>
                    <ul className={onepage.mynewsfour}>
                        <li className={onepage.fstone}>
                            <a>
                                <img src={require("./img/one.png")} className={onepage.newspic} />
                            </a>
                        </li>
                        <li>
                            <a>牛弹琴：2019年美国最重大事件发生了！</a>
                        </li>
                        <li>
                            <a>降息如约而至美股全线收跌</a>
                        </li>
                        <li>
                            <a>美联储宣布降息25个基点 为10年来首次!</a>
                        </li>
                        <li>
                            <a>王毅应询谈最新一轮中美经贸高级别磋商</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }


}
export default Onepage;