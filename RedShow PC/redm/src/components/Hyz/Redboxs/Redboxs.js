import React, { Component } from "react";
import style from "./Redboxs.module.css";

class Redboxs extends Component {

  render() {
    return (
      <div className={style.wbox}>
        <div className={style.bgimg} />
           <div className={style.bgwords}>
              <h5>01</h5>
              <p>社区</p>
           </div>
       
          <div className={style.bgred}>
            <div className={style.bgredwords}>
              <h5>01</h5>
              <p>社区</p>
              <span className={style.bgredspan}>
              红蘑菇福利社是红蘑菇的自营电商平台，在蘑菇福利社，用户可以一键购买来自全世界的优质美妆、时尚、家电、零食商品
              </span>
            </div>
          </div>
      </div>
    );
  }
}

export default Redboxs;
