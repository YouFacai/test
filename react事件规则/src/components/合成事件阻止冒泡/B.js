import React, {Component} from 'react';

class B extends Component {
    a = React.createRef();

    componentDidMount() {
        this.a.current.addEventListener('click', (e) => {
            // 阻止冒泡
            console.log(111)
        })
    }

    render() {
        return (
            <div ref={this.a}>
                父元素原生事件1111
                <div onClick={(e) => {
                    console.log("子元素2222")
                }}>子元素事件2222
                    <div onClick={(e) => {
                        console.log("子元素事件222的子元素23333")
                        e.stopPropagation()
                    }}>子元素事件222的子元素23333
                    </div>
                </div>
                <div onClick={() => {
                    console.log("子元素3333")
                }}>子元素事件3333
                </div>
            </div>
        );
    }
}

export default B;