import React, { Component } from 'react';
import newsstyle from "./News.module.css";
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import TopNavx from "../../../components/NewsItem/TopNavx/TopNavx";
import NewsLone from "../../../components/NewsItem/NewsLone/NewsLone";
import Newstwo from "../../../components/NewsItem/Newstwo/Newstwo";
import Newsthree from "../../../components/NewsItem/Newsthree/Newsthree";
import Newsfours from "../../../components/NewsItem/Newsfours/Newsfours";
import { Menu, Icon } from 'antd';
import Axios from "../../../../src/model/Axios";

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isshow: false,
            current: 'news1',
            bgc: "",
            shownews:[]
        };
        
        this.myplay = this.myplay.bind(this);
        this.showVideo = this.showVideo.bind(this);
        this.closeVideo = this.closeVideo.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.changebgc = this.changebgc.bind(this);
    }
    // 是否播放视频
    showVideo() {
        this.setState({
            isshow: true
        });

    }

    // 关闭视频
    closeVideo() {
        this.setState({
            isshow: false,
        })
    }
    // 是否播放视频
    myplay() {
        if (this.state.isshow) {
            return (
                <div>
                    <div className={newsstyle.myvediobg} ref="playnow">
                        <video src={require("./video/two.mp4")} controls></video>
                    </div>
                    <div className={newsstyle.myclose}><button onClick={this.closeVideo}>Close</button></div>
                </div>
            );
        }
        return '';
    }
    handleClick = e => {
        console.log('click ', e.key);
        this.setState({
            current: e.key
        });
        this.getData(e.key);

    };
    getData(k) {
        console.log(k);
        let keywords = {};
        keywords.name = k
        console.log(keywords)


        Axios.post("/admin/allnews",keywords)
        .then(res=>{
            // console.log(res.data)
            this.setState({shownews:res.data})
            console.log(this.state.shownews);
        })
        .catch((err)=>{
            console.log(err); 
        }
        )
    }
    componentDidMount() {
        window.onscroll = this.changebgc;
        Axios.post("/admin/allnews",{name:this.state.current})
        .then(res=>{
            this.setState({shownews:res.data})
            // console.log(this.state.shownews);
        })
        .catch((err)=>{
            console.log(err); 
        }
        )
    }
    componentWillUnmount() {
        window.onscroll = null;
    }
    // 改变背景色
    changebgc() {
        var osTop = document.documentElement.scrollTop || document.body.srcollTop;
        if (osTop > 368) {
            // console.log(">368", this)
            if (this.refs.gaibian) {
                this.refs.gaibian.setcolor("grey");
            }
            return "";
        } else {
            if (this.refs.gaibian) {
                this.refs.gaibian.setcolor("white");
            }
            return "";
        }
                  
    }
    // 是否显示导航栏
    showNav = () => {
        return (
            <TopNavx ref="gaibian" />
        )
    }
    shownewsone = ()=>{
        let arraynews = this.state.shownews;
        // console.log(arraynews);
        if (arraynews instanceof Array){
            return this.state.shownews.map((item,ind)=>{
                return <NewsLone id={item.id} keywords={item.key} title={item.title} key={ind} pic={item.contentPic} newsSumOne={item.newsSumOne} newsSumTwo={item.newsSumTwo}/>
            })
        }
        return this.state.shownews.map((item,ind)=>{
            return <NewsLone id={item.id} keywords={item.key} title={item.title} key={ind}/>
        })
    }
    shownewstwo = ()=>{
        let arraynews = this.state.shownews;
        // console.log(arraynews);
        if (arraynews instanceof Array){
            return this.state.shownews.map((item,ind)=>{
                return <Newstwo id={item.id} keywords={item.key} title={item.title} key={ind} newsSumOne={item.newsSumOne} newsSumTwo={item.newsSumTwo} newsSumThree={item.newsSumThree} newsSumFour={item.NewsSumFour}/>
            })
        }
        return this.state.shownews.map((item,ind)=>{
            return <Newstwo id={item.id} keywords={item.key} title={item.title} key={ind} newsSumOne={item.newsSumOne} newsSumTwo={item.newsSumTwo} newsSumThree={item.newsSumThree} newsSumFour={item.NewsSumFour}/>
        })
    }

    shownewsthree = ()=>{
        let arraynews = this.state.shownews;
        // console.log(arraynews);
        if (arraynews instanceof Array){
            return this.state.shownews.map((item,ind)=>{
                return <Newsthree id={item.id} keywords={item.key} title={item.title} key={ind} pic={item.contentPic} keyOne={item.keyOne} keyTwo={item.keyTwo} keyThree={item.keyThree} keyFour={item.keyFour} keyFive={item.keyFive} hours={item.hours} clickNum={item.clickNum}/>
            })
        }
        return this.state.shownews.map((item,ind)=>{
            return <Newsthree id={item.id} keywords={item.key} title={item.title} key={ind} pic={item.contentPic} keyOne={item.keyOne} keyTwo={item.keyTwo} keyThree={item.keyThree} keyFour={item.keyFour} keyFive={item.keyFive} hours={item.hours} clickNum={item.clickNum}/>
        })
    }

    shownewsfour = ()=>{
        let arraynews = this.state.shownews;
        // console.log(arraynews);
        if (arraynews instanceof Array){
            return this.state.shownews.map((item,ind)=>{
                return <Newsfours id={item.id}  keywords={item.key} key={ind} pic={item.contentPic} newsSumOne={item.newsSumOne} newsSumTwo={item.newsSumTwo} newsSumThree={item.newsSumThree} newsSumFour={item.NewsSumFour}/>
            })
        }
        return this.state.shownews.map((item,ind)=>{
            return <Newsfours id={item.id} keywords={item.key} key={ind} pic={item.contentPic} newsSumOne={item.newsSumOne} newsSumTwo={item.newsSumTwo} newsSumThree={item.newsSumThree} newsSumFour={item.NewsSumFour}/>
        })
    }
    render() {
        return (
            <div>
                {this.showNav()}
                <div>
                    <Carousel autoplay={true}>
                        <div>
                            <h3>
                                <video loop="loop" className={newsstyle.myvedio} src='https://cdn.multilingualres.hr.tencent.com/careersmlr/video-bg1.mp4' autoPlay={true} muted="muted"></video>
                            </h3>
                        </div>
                        <div>
                            <h3>
                                <img alt="1" src={require("./imgs/th.jpg")} className={newsstyle.mypicone} />
                            </h3>
                        </div>
                        <div>
                            <h3>
                                <img alt="1" src={require("./imgs/five.jpg")} className={newsstyle.mypicone} />
                            </h3>
                        </div>
                    </Carousel>
                    <div className={newsstyle.News}>
                        <span>News 新闻中心</span>
                        <span></span>
                        <span>Info Center</span>
                    </div>
                    <div className={newsstyle.myplay}><button onClick={this.showVideo}>video</button></div>
                    {this.myplay()}
                </div>
                <div>
                    <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" className={newsstyle.midnav}>
                        <Menu.Item key="news1">
                            <Icon type="mail" />
                            近期动态
                        </Menu.Item>
                        <Menu.Item key="news2">
                            热门报道
                        </Menu.Item>
                        <Menu.Item key="news3">
                            美妆时尚
                        </Menu.Item>
                        <Menu.Item key="news4">
                            美食资讯
                        </Menu.Item>
                        <Menu.Item key="news5">
                            穿搭流行
                        </Menu.Item>
                        <Menu.Item key="news6">
                            影音快讯
                        </Menu.Item>
                        <Menu.Item key="news7">
                            旅行推荐
                        </Menu.Item>
                    </Menu>

                </div>
                <div className={newsstyle.Newsshow}>
                    <div className={newsstyle.left}>
                            {this.shownewsone()}
                    </div>
                    <div className={newsstyle.right}>
                        <div className={newsstyle.rightL}>
                        {this.shownewsthree()}
                            {this.shownewstwo()}
                        </div>
                        <div className={newsstyle.rightR}>
                        {this.shownewsfour()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;