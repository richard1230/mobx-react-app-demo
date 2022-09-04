//组合子模块
import React from "react";
import {ListStore} from "./list.Store";
import {CounterStore} from './counter.Store'


class RootStore {
  constructor() {
    this.counterStore = new CounterStore();
    this.listStore = new ListStore()
  }
}



//实例化操作,下面这几行是固定搭配
const rootStore = new RootStore()
// Provider value = {传递的数据}
//查找的机制: useContext 优先从 Provider value 找，如果找不到就会找
// createContext方法传递过来的默认参数
const context = React.createContext(rootStore)
const useStore = ()=>React.useContext(context)

export {useStore}


