import React from 'react';
import styled from 'styled-components'
const Wrapper = styled.div`
    width : 400px;
    height : 300px;
    //支持样式嵌套
    .content{ 
    	color: red;
	}
`

const CssinJs = () => {
    return <Wrapper>
        <div className='content'>
            CssinJs
        </div>
    </Wrapper>
};

export default CssinJs;