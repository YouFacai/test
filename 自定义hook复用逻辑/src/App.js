import logo from './logo.svg';
import './App.css';
import Myhook from './components/Myhook'

function App() {
    let [count, setCount] = Myhook()

    function add() {
        setCount({count: count.count + 1})
    }

    console.log(count)
    return (
        <div className="App">
            <div>{count.count}</div>
            <div onClick={add}>++</div>
        </div>
    )
        ;
}

export default App;
