import {NavLink, Routes, Route} from 'react-router-dom'
import KeepAlive from "react-activation";

import './App.css';
import A from './pages/A.jsx'
import B from './pages/B.jsx'

function App() {
    return (
        <div className="App">
            <NavLink to='/A'>A</NavLink>
            <NavLink to='/B'>B</NavLink>
                <Routes>
                    <Route path='/A' element={<KeepAlive cacheKey={11} id="A">
                        <A attr={{name :'yzl'}}></A>
                    </KeepAlive>}></Route>
                    <Route path='/B' element={<KeepAlive cacheKey={12}>
                        <B></B>
                    </KeepAlive>}></Route>
                </Routes>
        </div>
    );
}

export default App;
