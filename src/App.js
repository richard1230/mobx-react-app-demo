//导入 countStore
import {counterStore} from './store/counter'
//导入中间件mobx react
import {observer} from "mobx-react-lite";

function App() {
  return (
    <div className="App">
      {/*使用:  */}
      {counterStore.count}
      <button  onClick={counterStore.addCount}>+1</button>
    </div>
  );
}

export default observer(App);
