import React , { Component }  from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';

import routers from "./routers"


class App extends Component {
  constructor(props) {
      super(props);

      // 放数据的地方
      this.state={

      }
    }
 
  render(){
     return (
       <Router>
             {/* {
                   routers.map((item,ind)=>{
                     if(item.exact){
                      return <Route key={ind} path={item.path} component={item.component} exact />
                     }
                      return <Route key={ind} path={item.path} component={item.component} />
                   })

             } */}

             {renderRoutes(routers)}
 
       </Router>
     )
  }
}

export default App;