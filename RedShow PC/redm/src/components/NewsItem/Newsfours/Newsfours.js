import React, { Component } from "react";
import newsfours from "./Newsfours.module.css";
import { Link } from 'react-router-dom';
class Newsfours extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isshow: false
        }
    }
    render() {
        return (
            <div>
                <div className={newsfours.mynewsfour}>
                    <ul>
                        <li className={newsfours.fstone}>
                            <Link to={{
                                pathname: "/newsinfo",
                                state: { id: this.props.id },
                            }}>
                                <img alt="" src={this.props.pic} className={newsfours.newspic} />
                            </Link>
                        </li>
                        <li>
                            <Link to={{
                                pathname: "/newsinfo",
                                state: { id: this.props.id },
                            }}>{this.props.newsSumOne}</Link>
                        </li>
                        <li>
                            <Link to={{
                                pathname: "/newsinfo",
                                state: { id: this.props.id },
                            }}>{this.props.newsSumTwo}</Link>
                        </li>
                        <li>
                            <Link to={{
                                pathname: "/newsinfo",
                                state: { id: this.props.id },
                            }}>{this.props.newsSumThree}</Link>
                        </li>
                        <li>
                            <Link to={{
                                pathname: "/newsinfo",
                                state: { id: this.props.id },
                            }}>{this.props.newsSumFour}</Link>
                        </li>
                    </ul>
                </div>
            </div>

        )
    }
}

export default Newsfours;