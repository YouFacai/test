import './App.css';
import A from './components/组件内直接使用.jsx'
import B from './components/组件内引入css'
import C from './components/组件内引入modulecss'
import D from './components/CssinJs'

function App() {
  return (
    <div>
      <A></A>
      <B></B>
      <C></C>
      <D></D>
    </div>
  );
}

export default App;
