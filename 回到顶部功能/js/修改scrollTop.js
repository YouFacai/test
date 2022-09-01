let btn = document.getElementById("floot-box");
let timer = null;
// 点击触发滚动
btn.onclick = function (){
    let pre = Infinity
    const f = function (){
        timer = setTimeout((params) => {
            let target = document.documentElement.scrollTop;

            // 清除滚动
            if(pre < target) {
                clearTimeout(timer)
                return ;
            }
            if(target>0) {
                pre = target
                document.documentElement.scrollTop = target - (document.documentElement.scrollTop / 10)
                f()
            }else{
                clearTimeout(timer)
            }
        },10)
    }
    f();
}

