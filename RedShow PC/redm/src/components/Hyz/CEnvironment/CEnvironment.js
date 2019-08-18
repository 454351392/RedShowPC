import React, { Component } from 'react';
import  './CEnvironment.css'
import { Tabs } from 'antd';

const { TabPane } = Tabs;

class CEnvironment extends Component {
    render() {
        return (
            <div className="card-container">
            <Tabs type="card">
              <TabPane tab=" 上海总部" key="1">
              <img className="companyimg" src="http://ci.xiaohongshu.com/c5c29598-5164-47cb-92fe-4710811454ce@r_640w_640h.jpg"></img>
              <img className="companyimg" src="http://ci.xiaohongshu.com/c5c29598-5164-47cb-92fe-4710811454ce@r_640w_640h.jpg"></img>             
              <img className="companyimg" src="http://ci.xiaohongshu.com/c5c29598-5164-47cb-92fe-4710811454ce@r_640w_640h.jpg"></img>
              </TabPane>
              <TabPane tab=" 北京" key="2">
              <img className="companyimg" src="http://ci.xiaohongshu.com/20b7e519-313c-4eac-af6f-622060c7787f@r_640w_640h.jpg"></img>
              <img className="companyimg" src="http://ci.xiaohongshu.com/20b7e519-313c-4eac-af6f-622060c7787f@r_640w_640h.jpg"></img>             
              <img className="companyimg" src="http://ci.xiaohongshu.com/20b7e519-313c-4eac-af6f-622060c7787f@r_640w_640h.jpg"></img>
              </TabPane>
              <TabPane tab=" 武汉" key="3">
              <img className="companyimg" src="http://ci.xiaohongshu.com/b042ad9f-9d5d-4fdf-bbce-0253a8593e08"></img>
              <img className="companyimg" src="http://ci.xiaohongshu.com/b042ad9f-9d5d-4fdf-bbce-0253a8593e08"></img>             
              <img className="companyimg" src="http://ci.xiaohongshu.com/b042ad9f-9d5d-4fdf-bbce-0253a8593e08"></img>
              </TabPane>
            </Tabs>
          </div>
        );
    }
}

export default CEnvironment;
