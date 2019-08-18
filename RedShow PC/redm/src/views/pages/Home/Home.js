import React, { Component } from 'react';
import TopNav from '../../../components/Zqx/TopNav/TopNav'
import Foot from '../../../components/Zqx/Foot/Foot'
import PageBox from '../../../components/Zqx/PageBox/PageBox'
import axios from '../../../model/Axios'
import style from './Home.module.css'     //引入局部css

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ind: 0,
            list1: ['推荐', '时尚', '美妆', '美食', '运动', '影音', '旅行', '居家', '萌宠', '汉服', '读书', '数码'],
            list2: [],
            kw:'',             //搜索框下面的导航栏
            searchkw:''        //搜索框
        }
        this.xiahuaxian = this.xiahuaxian.bind(this);
        this.fathsearch = this.fathsearch.bind(this);
    }

    xiahuaxian(ind,item) {
        console.log(ind,item)
        this.setState(
            { ind:ind,
              kw:item }
        )
        axios.post('/pages/showgoods',{kw:item})
        .then((res) => {
            console.log(this.state.kw)
            let newlist = [];
            for (var i = 0; i < res.data.length; i++) {
                var comment = res.data[i];
                comment.gimgs = JSON.parse(comment.gimgs)
                newlist.push(comment);
            }
            res.data = newlist;
            console.log(newlist)
            this.setState({         
                list2: res.data
            })
        })
        .catch(function (error) {
            console.log(error);
        })

    }


    componentDidMount() {
        axios.post('/pages/showgoods')
            .then((res) => {
                // console.log(res.data)
                let newlist = [];
                for (var i = 0; i < res.data.length; i++) {
                    var comment = res.data[i];
                    comment.gimgs = JSON.parse(comment.gimgs)
                    newlist.push(comment);
                }
                res.data = newlist;
                console.log(newlist)
                this.setState({
                    list2: res.data
                })
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    fathsearch(keywords){
     console.log(keywords)
     this.setState({
         searchkw:keywords     //将子组件的keywords给父组件
     })
     axios.post('/pages/kwsearch',{keyw1:keywords})
            .then((res) => {
                let newlist = [];
                for (var i = 0; i < res.data.length; i++) {
                    var comment = res.data[i];
                    comment.gimgs = JSON.parse(comment.gimgs)
                    newlist.push(comment);
                }
                res.data = newlist;
                console.log(newlist)
                this.setState({         
                    list2: res.data
                })
            })
            .catch(function (error) {
                console.log(error);
            })
   



    }

    render() {
        return (
            <div>
                <TopNav  opersearch={this.fathsearch} />
                <div className={style.myhr}></div>
                <ul className={style.headtwo}>
                    {this.state.list1.map((item, ind) => {
                        // console.log(ind);
                        return <li key={ind} onClick={() => { this.xiahuaxian(ind,item) }} className={ind === this.state.ind ? style.hengxia : ''}>{item}</li>
                    })}
                </ul>
                <div className={style.items}>
                    {this.state.list2.map((item, ind) => {
                        return    <div key={ind} className={style.myitem}><PageBox key={ind} myitem={item}  ind={ind} /></div>
                    })}
                   
       

                </div>
                <div className={style.hfoot}> <Foot/></div>
               

            </div>

        );
    }
}

export default Home;