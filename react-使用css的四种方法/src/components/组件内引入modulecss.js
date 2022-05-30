import React from 'react';
import style from './index.module.css'

const C = () => {
    return (
        <div className={style.fontcolor}>
            组件内引入modulecss.js
        </div>
    );
};

export default C;