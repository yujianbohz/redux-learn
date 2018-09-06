import React, { Component } from 'react';
// import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import  thunk  from 'redux-thunk'
import { manageCompany, hire ,fire, hireAsync} from './redux/index';

//　调试工具
// const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : ()=>{};

const store = createStore(manageCompany,applyMiddleware(thunk));
// 通过reducer创建store，通过compose把几个函数组合起来
// const store = createStore(manageCompany, compose(
//   applyMiddleware(thunk),
//   reduxDevtools()
// ))

const renderTotal = () => {
  var node = document.getElementById('total');
  node.innerHTML = store.getState();
}

class ReduxInReact extends Component {
  handlerCompanyManagement (action) {
    console.log("action",typeof(action));
    if(typeof(action) === 'object'){
      store.dispatch(action);
      var para=document.createElement("p");
      var node=document.createTextNode(`公司现在有${store.getState()}人`);
      para.appendChild(node);
      document.body.appendChild(para)
      console.log(`公司现在有${store.getState()}人`);
    } else {
      store.dispatch(action);
      setTimeout(()=>{
        var para=document.createElement("p");
        var node=document.createTextNode(`公司现在有${store.getState()}人`);
        para.appendChild(node);
        document.body.appendChild(para)
        console.log(`公司现在有${store.getState()}人`);

      },5000)
    }
  }
  render(){
    return(
      <div>
        <h1>公司成立，创始人{store.getState()}人</h1>
        <button onClick={renderTotal}>查看公司当前人数</button> <span id="total"></span>
        <button onClick={this.handlerCompanyManagement.bind(this, hire())}>雇佣一人</button>
        <button onClick={this.handlerCompanyManagement.bind(this,hireAsync())}>雇佣一人,5秒后入职</button>
        <button onClick={this.handlerCompanyManagement.bind(this,fire())}>开除一人</button>
      </div>
    )
  }
}

export default ReduxInReact;

