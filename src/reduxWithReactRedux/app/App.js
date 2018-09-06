import React, { Component} from 'react';
import { connect } from 'react-redux';
import {hire, hireAsync, fire } from './redux/index';

class App extends Component {
  render(){
    console.log("APP-props",this.props);
    return(
      <div>
        <h3>使用react-redux自动连接react redux</h3>
        <h1>公司现在有{this.props.num}人</h1>
        <button onClick={this.props.hire}>雇佣一人</button>
        <button onClick={this.props.hireAsync}>雇佣一人,晚两天到</button>
        <button onClick={this.props.fire}>开除一人</button>
      </div>
    )
  }
}
const mapStatetoProps = (state) => {
  // 需要的state数据
  return { num: state}
}
// 需要执行的方法
const actionCreator = { hire, hireAsync, fire};

App = connect(mapStatetoProps, actionCreator)(App)

export default App;