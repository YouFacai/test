import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [a, setA] = useState(1)
  console.log('a', a)
 
  function handleClickWithPromise() {
   /*  Promise.resolve().then(() => {
      setA((a) => a + 1)
      setA((a) => a + 1)
    }) */
    setTimeout(() => {
      setA((a) => a + 1)
      setA((a) => a + 1)
    }, 0);
  }
 
  function handleClickWithoutPromise() {
    setA((a) => a + 1)
    setA((a) => a + 1)
  }
 
  return (
      <>
        <button onClick={handleClickWithPromise}>{a} 同步执行</button>
        <button onClick={handleClickWithoutPromise}>{a} 异步执行</button>
      </>
  )
}

export default App;
