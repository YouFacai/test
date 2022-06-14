let xhr = new XMLHttpRequest();

btn.addEventListener('click',function () {
    xhr.abort()
    console.log("中断请求",xhr)
})

xhr.open('get','http://127.0.0.1:3000/test');

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4){
        // 判断是否请求成功
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 340){
            // 5.处理返回的结果
            console.log(xhr.responseText);
        } else{
            console.log("请求失败");
        }
    }
}

xhr.send();

