import React, { Component } from 'react';
import style from './AddGood.module.css'     //引入局部css
import AddGinput from '../../../components/Zqx/User/AddGinput/AddGinput'

class AddGood extends Component {
    render() {
        return (
            <div>
             <div className={style.mycenters}>
             <AddGinput></AddGinput>
             </div>
            </div>
        );
    }
}

export default AddGood;