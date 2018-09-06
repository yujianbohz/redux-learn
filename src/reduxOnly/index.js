import React from 'react';
import { createStore } from 'redux';

//Redux基础知识
//纯redux(与react无直接关系)

const pureRedux = () => {
  // 定义reducer
  function manageCompany(total = 1, action) {
    switch (action.type) {
      case 'hireEmployee':
        return total + 1;
      case 'fireEmployee':
        return total - 1;
      default:
        return 1;
    }
  }

  //通过reducer创建store
  const store = createStore(manageCompany)

  //订阅监听事件
  function listener() {
    console.log(`公司现在有${store.getState()}人`);
    document.write('<br />')
    document.write(`公司现在有${store.getState()}人`)
  }
  store.subscribe(listener)

  //初期先获取一次状态看看
  const opening = store.getState()
  console.log(`开业时公司现在有${opening}人`);
  document.write(`开业时公司现在有${opening}人`)

  //派发事件，传递action给reducer
  document.write('<br />')
  document.write('执行招人。。。。')
  store.dispatch({
    type:'hireEmployee'
  })


  //派发事件，传递action给reducer
  document.write('<br />')
  document.write('执行开除。。。。')

  store.dispatch({
    type:'fireEmployee'
  })
}

const ReduxOnly = () => {
  pureRedux();
  return(<div>纯redux示例: </div>)
}
export default ReduxOnly;
