import React, { Component } from "react";
import newsLone from "./NewsLone.module.css";
import { Link } from 'react-router-dom';
class NewsLone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isshow: false
        }
    }
    showphoto = () => {
        this.setState({
            isshow: true
        })
    }
    hidephoto = () => {
        this.setState({
            isshow: false
        })
    }
    show = () => {
        if (this.state.isshow) {
            return (<li className={newsLone.myphoto}>
                <img alt="" src="https://cms-bucket.ws.126.net/2019/07/27/f7204a26f31446f4ac113b71e1d7fe90.jpeg?imageView&thumbnail=200y90"></img>
            </li>)
        }
        return "";
    }
    render() {
        return (
            <div onClick={this.handleClick} >
                <ul className={newsLone.mybox}>
                    <li className={newsLone.mytop}>
                        <a href="##" onClick={this.handleClick} keywords={this.props.keywords}> </a>
                    </li>
                    <li className={newsLone.mytitle}>
                        <h3><Link to={{
                            pathname: "/newsinfo",
                            state: { id: this.props.id },
                        }}>{this.props.title}</Link></h3>
                        <div> <Link to={{
                            pathname: "/newsinfo",
                            state: { id: this.props.id },
                        }}>
                            <img alt="" src={this.props.pic}></img>
                        </Link></div>
                    </li>
                    <li className={newsLone.detail}>
                        <Link to={{
                            pathname: "/newsinfo",
                            state: { id: this.props.id },
                        }}>
                            {this.props.newsSumOne}
                        </Link>
                    </li>
                    <li className={newsLone.detail}>
                        <Link to={{
                            pathname: "/newsinfo",
                            state: { id: this.props.id },
                        }}>
                            {this.props.newsSumTwo}
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NewsLone;

