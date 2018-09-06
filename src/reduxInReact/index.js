import React, { Component } from 'react';
// import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { manageCompany, hire ,fire} from './redux/index';

const store = createStore(manageCompany)

class ReduxInReact extends Component {
  handlerCompanyManagement (action) {
    store.dispatch(action);
    var para=document.createElement("p");
    var node=document.createTextNode(`公司现在有${store.getState()}人`);
    para.appendChild(node);
    document.body.appendChild(para)
    console.log(`公司现在有${store.getState()}人`);
  }
  render(){
    return(
      <div>
        <h1>公司成立，创始人{store.getState()}人</h1>
        <button onClick={this.handlerCompanyManagement.bind(this, hire())}>雇佣一人</button>
        <button onClick={this.handlerCompanyManagement.bind(this,fire())}>开除一人</button>
      </div>
    )
  }
}

export default ReduxInReact;

