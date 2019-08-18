
import TopNavx from "../../NewsItem/TopNavx/TopNavx";
import React, { Component } from "react";
import newsinfor from "./Newsinfor.module.css";
import Axios from "../../../model/Axios";
class Newsinfor extends Component {
    constructor(props){
        super(props);
        this.state={
            showinfor:{}
        }
    }
    componentDidMount() {
        window.onscroll = this.changebgc;
        let myid = this.props.location.state.id
        Axios.post("/admin/allnews",{id:myid})
        .then(res=>{
            this.setState({showinfor:res.data[0]})
            console.log(this.state.showinfor);
        })
        .catch((err)=>{
            console.log(err); 
        }
        )

    }
    // 导航改变背景色
    changebgc = () => {
        this.refs.gaibiant.setcolor("lightgrey");
    }
    componentWillUnmount() {
        window.onscroll = null;
    }
    render() {
        return (  
            <div>
                <TopNavx ref="gaibiant" />
                <div className={newsinfor.newsinfor}>
                    <h1>{this.state.showinfor.title}</h1>
                    <img alt="" src={this.state.showinfor.contentPic} />
                    <div className={newsinfor.txt}>{this.state.showinfor.detailNews}</div>
                </div>
            </div>

        )
    }
}
export default Newsinfor;
