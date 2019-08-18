import React, { Component } from 'react'
import style from  './Note.module.css'
import PageBox from '../../Zqx/PageBox/PageBox'
import Axios from '../../../model/Axios';

export default class Note extends Component {
  constructor(props){
    super(props);
    console.log(props)
    this.state={
      uid:this.props.data.uid,
      list2:[]
    }
  }

  componentDidMount(){
    console.log(this.state.uid)
    Axios.post("/pages/geren",{uid:this.state.uid}).then(res=>{
      console.log(res.data)
      this.setState({
        list2:res.data
      })
  }).catch(err=>{
      console.log(err)
  })
  }
  render() {
    return (
      <div className={style.notebox}  >
       <div className={style.items}>
                    {this.state.list2.map((item, ind) => {
                        return    <div key={ind} className={style.myitem}><PageBox key={ind} myitem={item}  ind={ind} /></div>
                    })}
                </div>

      </div>
    )
  }
}
