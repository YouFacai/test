import React, {useState} from 'react';

const Myhook = () => {
    let [count, setCount] = useState({count: 1})
    return [count, setCount]
};

export default Myhook;