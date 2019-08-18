import React, { Component } from "react";
import style from "./Detail.module.css";
import TopNavu from "../../../components/Zqx/TopNavu/TopNavu";
import RotaryMap from "../../../components/Hyz/RotaryMap/RotaryMap";
import Userinfo from "../../../components/Hyz/Userinfo/Userinfo";
import Comment from "../../../components/Hyz/Comment/Comment";
import Havevideo from "../../../components/Hyz/Havevideo/Havevideo";
import Moredetail from  '../../../components/Hyz/Moredetail/Moredetail'
import url from  'url'
import axios from "../../../model/Axios";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      list2:[],
      gcx: "视频",
      uid:''
    };
  }


  componentDidMount() {
    let q=url.parse(this.props.location.search,true).query;
    axios
      .get("/pages/xiangqing",{
        params:{kw1:q.kw}
      })
      .then(res => {
        let newdata = res.data[0];
        newdata.addtime = new Date(+new Date(newdata.addtime) + 8 * 3600 * 1000).toISOString().replace(/T/g, " ").replace(/\.[\d]{3}Z/, "");
        newdata.gimgs= JSON.parse(newdata.gimgs);
        this.setState({
          data: newdata,
          gcx:newdata.gcx,
          uid:newdata.uid
        
        });
        console.log(this.state.data)
      })
      .catch(err => {
        console.log(err);
      });

      console.log(this.state.uid)
      axios.post('/pages/geren',{uid:q.xid})
      .then((res) => {
        console.log(this.state.uid)
          let newlist = [];
          for (var i = 0; i < res.data.length; i++) {
              var comment = res.data[i];
              comment.gimgs = JSON.parse(comment.gimgs)
              newlist.push(comment);
          }
          res.data = newlist;
          console.log(newlist)
          this.setState({
              list2: res.data,
          })
      })
      .catch(function (error) {
          console.log(error);
      })
  }

  showCom() {
    if (this.state.gcx === "视频") {
      return <Havevideo data={this.state.data} />;
    } else if (this.state.gcx === "图片") {
      return <RotaryMap data={this.state.data} />;
    }
  }
  render() {
    return (
      <div>
        <TopNavu />
        <div className={style.conbox}>
          <div className={style.w}>
            <div className={style.leftcont}>
              <div> {this.showCom()} </div>
              <div className={style.comments}>
                <h2> 评论区 </h2> <Comment />
              </div>
            </div>
            <div className={style.rightcont}>
              <div className={style.ups}>
                {console.log(this.state.data)}
                <Userinfo  data={this.state.data} />
              </div>
              <div className={style.downs}>
                {/* <Moredetailbox /> */}
                <div className={style.box}>
                <div className={style.shang}>相关笔记</div>
                <div className={style.zhong}>
                       <div> 
                       {this.state.list2.map((item,ind)=>{
                         console.log(item)
                            return  <Moredetail key={ind} data={item} />
                       })} 
                       </div> 
                </div>
                <div className={style.xia}>
                  <a>查看更多</a>  
                </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
