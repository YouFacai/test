import React, {useRef, useEffect} from 'react';

const A = () => {
    let a = useRef(null)
    useEffect(() => {
        a.current.addEventListener('click', (e) => {
            // 阻止冒泡
            console.log(111)
            e.stopPropagation()
        })
    }, [])
    return (
        <div onClick={() => console.log("我是父元素事件")}>
            原生事件阻止合成事件（冒泡）
            <div ref={a}>111</div>
        </div>
    );
};

export default A;