import React from 'react';
import  {useActivate, useUnactivate} from 'react-activation'

const B = () => {
    // 对应激活与缓存两种状态
    useActivate(() => {
        console.log('TestFunction: didActivate')
    })

    useUnactivate(() => {
        console.log('TestFunction: willUnactivate')
    })
    return (
        <div>
            我是组件B
        </div>
    );
};

export default B;