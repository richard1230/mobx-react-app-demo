
import {makeObservable} from "mobx"


class ListStore {
  list = ['react','vue']
  constructor() {
    makeObservable(this)
  }
  addList = () =>{
    this.list.push('angular')
  }
}


export { ListStore }