import React, { Component } from 'react';
import TopNavu from '../../../components/Zqx/TopNavu/TopNavu';
import Topic from '../../../components/Hyz/InfoDetail/Topic';
import style from './InfoDetail.module.css';
import Userinfodetail from '../../../components/Hyz/Userinfodetail/Userinfodetail';
import url from  'url'
import PageBox from '../../../components/Zqx/PageBox/PageBox'
import Axios from '../../../model/Axios';

class InfoDetail extends Component {
    constructor(props){
        super(props)
        this.state={
            ind:1,
            list2:[{
                username:'',
                utitle:''
            }],
            uid:0
        }
    
        // 绑定this
        this.changeNav=this.changeNav.bind(this)
    }

    changeNav(ind){
        this.setState({
            ind
        })
    }

componentDidMount(){
   console.log(this.props.location.search)  
   let q=url.parse(this.props.location.search,true).query;
   console.log(q.uid)

    Axios.post('/pages/geren',{uid:q.uid})
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
                    list2: res.data,
                    uid:res.data.uid
                })
            })
            .catch(function (error) {
                console.log(error);
            })
}

    showCom(){
        if(this.state.ind == 1){
            return (  <div className={style.items}>
               {
                   this.state.list2.map((item, ind) => {
                return    <div key={ind} className={style.myitem}><PageBox key={ind} myitem={item}  ind={ind} /></div>
            })
            }
        </div>
            )

        }
        return <Topic />;
    }

    render() {
        console.log(1)
        return (
            <div>
                <TopNavu />
               <div className={style.infobox}>
                   <div className={style.w}>
                       <div className={style.gengrxx}>
                       <Userinfodetail  list2={this.state.list2} uid={this.state.uid}/>
                       </div>
                       <ul className={style.infonav}>
                       <li onClick={()=>{this.changeNav(1)}}  className={this.state.ind == 1 ? style.actives:' '}>笔记</li>
                       <li onClick={()=>{this.changeNav(2)}}  className={this.state.ind == 2 ? style.actives:' '}>专辑</li>    
                       </ul>
                       {this.showCom()}
                   </div>
               </div>
            </div>
        );
    }
}

export default InfoDetail;