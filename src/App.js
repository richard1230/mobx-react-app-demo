//导入 countStore
import {counterStore} from './store/counter.Store'
//导入中间件mobx react
import {observer} from "mobx-react-lite";
import {useStore} from "./store/index";

function App() {
  const {counterStore} = useStore()
  return (
    <div className="App">
      {counterStore.count}
      <button onClick={counterStore.addCount}>+1</button>
    </div>
  );
}

export default observer(App);
