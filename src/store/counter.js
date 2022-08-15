//编写第一个mobx store
import {makeAutoObservable} from 'mobx'
class CounterStore{
  //定义数据
  count = 0
  constructor() {
    //将数据弄成响应式
    makeAutoObservable(this)
  }
  //3.定义action函数(修改数据)
  addCount = ()=>{
    this.count++
  }
}

//4.实例化 然后导出给react使用
const counterStore = new CounterStore()

export {counterStore}