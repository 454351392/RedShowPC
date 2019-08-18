import React, { Component } from "react";
import newsthree from "./Newsthree.module.css";
import { Menu, Dropdown, Button, Icon, message } from 'antd';
import { Link } from 'react-router-dom';
class Newsthree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: (
                <Menu onClick={this.handleMenuClick}>
                    <Menu.Item key="1">
                        <Icon type="user" />
                        微信
                  </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="user" />
                        微博
                  </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="user" />
                        易性
                  </Menu.Item>
                </Menu>
            )
        }


    }

    handleButtonClick = (e) => {
        message.info('Click on left button.');
        console.log('click left button', e);
    }

    handleMenuClick = (e) => {
        console.log(this.men);

        this.setState({
            men: this.menu
        })
        message.info('Click on menu item.');
        console.log('click', e);
    }



    render() {
        return (

            <div className={newsthree.showthree}>
                <h3 className={newsthree.left}>
                    <Link to={{
                        pathname: "/newsinfo",
                        state: { id: this.props.id },
                    }}>
                        <img alt="" src={this.props.pic} />
                    </Link>
                </h3>
                <div className={newsthree.right}>
                    <div className={newsthree.titlethree}>
                        <Link to={{
                            pathname: "/newsinfo",
                            state: { id: this.props.id },
                        }}>
                            {this.props.title}
                        </Link>
                    </div>
                    <ul className={newsthree.mybut}>
                        <li className={newsthree.mybuttop}>
                            <Link to={{
                                pathname: "/newsinfo",
                                state: { id: this.props.id },
                            }}>{this.props.keyOne}</Link>
                            <span className={newsthree.pluss}>+</span>
                        </li>
                        <li>
                            <Link to={{
                                pathname: "/newsinfo",
                                state: { id: this.props.id },
                            }}>{this.props.keyTwo}</Link>
                        </li>
                        <li>
                            <Link to={{
                                pathname: "/newsinfo",
                                state: { id: this.props.id },
                            }}>{this.props.keyThree}</Link>
                        </li>
                        <li>
                            <Link to={{
                                pathname: "/newsinfo",
                                state: { id: this.props.id },
                            }}>{this.props.keyFour}</Link>
                        </li>
                        <li>
                            <span>|</span>
                        </li>
                        <li>
                            <Link to={{
                                pathname: "/newsinfo",
                                state: { id: this.props.id },
                            }}>{this.props.hours}个小时</Link>
                        </li>
                    </ul>
                    <div className={newsthree.mybuttwo}>
                        <div className={newsthree.mybnt} style={{ width: '0px', height: '130px' }}>{<Dropdown overlay={this.state.menu} placement="bottomLeft">
                            <Button>详情</Button>
                        </Dropdown>}
                        </div>
                    </div>
                    <div className={newsthree.tiezi} style={{ width: '60px', height: '20px' }}>
                        <span className={newsthree.tiezione}>{this.props.clickNum}</span>
                        <span className={newsthree.tiezitwo}>
                            <i>跟帖</i>
                            0
                                </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsthree;