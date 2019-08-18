import React, { Component } from "react";
import style from "./Acontent.module.css";



class Acontent extends Component {
   constructor(props){
       super(props);
    console.log(this.props);
   }
  render() {
    return (
      <div>
         首页
      </div>
    );
  }
}

export default Acontent;
