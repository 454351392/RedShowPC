import React, { Component } from "react";
import newstwo from "./Newstwo.module.css";
import { Link } from 'react-router-dom';
class Newstwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <ul className="ul">
                    <li className={newstwo.mytitle}>
                        <h2>
                            <Link to={{
                                pathname: "/newsinfo",
                                state: { id: this.props.id },
                            }}>
                                {this.props.title}
                            </Link>
                        </h2>
                    </li>
                    <li className={newstwo.myitems}>
                        <Link to={{
                            pathname: "/newsinfo",
                            state: { id: this.props.id },
                        }}>{this.props.newsSumOne} </Link>
                        <span>|</span>
                        <Link to={{
                            pathname: "/newsinfo",
                            state: { id: this.props.id },
                        }}>{this.props.newsSumTwo}</Link>
                    </li>
                    <li className={newstwo.myitems}>
                        <Link to={{
                            pathname: "/newsinfo",
                            state: { id: this.props.id },
                        }}>{this.props.newsSumThree}</Link>
                        <span>|</span>
                        <Link to={{
                            pathname: "/newsinfo",
                            state: { id: this.props.id },
                        }}>{this.props.newsSumFour}</Link>
                    </li>
                    <li className={newstwo.myitems}>
                        <Link to={{
                            pathname: "/newsinfo",
                            state: { id: this.props.id },
                        }}>{this.props.newsSumTwo}</Link>
                        <span>|</span>
                        <Link to={{
                            pathname: "/newsinfo",
                            state: { id: this.props.id },
                        }}>{this.props.newsSumThree}</Link>
                    </li>

                </ul>
            </div>
        )
    }
}

export default Newstwo;