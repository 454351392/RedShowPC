import React, { Component } from 'react';
import style from  './Acenter.module.css'
import ATopnav from  '../../../components/Hyz/admin/ATopnav/ATopnav'
import AAside from '../../../components/Hyz/admin/AAside/AAside'

import { renderRoutes } from 'react-router-config';
class Acenter extends Component {
    constructor(props){
        super(props);
        console.log(props.route);
    }
    render() {
        return (
            <div>
                <ATopnav /> 
                <div className={style.asidebox}>
                <AAside />
                </div>

                <div className={style.main}>
                {renderRoutes(this.props.route.children)}
                </div>
            </div>
        );
    }
}

export default Acenter;