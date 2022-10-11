function fn(tree, name){
    //To Do
    let result = {},isok = false;
    function fn(child) {
        if(child.length == 0) return null
        for(let i = 0;i < child.length;i++){
            let item = child[i];
            if(!isok && (item.name == name)){
                isok = true;
                result = item
            }else if(item.children){
                fn(item.children)
            }
        }
    }
    fn(tree.children)
    return result
}

var tree = {
    name : '中国',
    children : [
        {
            name : '北京',
            children : [
                {
                    name : '朝阳群众'
                },
                {
                    name : '海淀区'
                },
                {
                    name : '昌平区'
                }
            ]
        },
        {
            name : '浙江省',
            children : [
                {
                    name : '杭州市',
                    code : '0571',
                },
                {
                    name : '嘉兴市'
                },
                {
                    name : '绍兴市'
                },
                {
                    name : '宁波市'
                }
            ]
        }
    ]
};

var node = fn(tree, '杭州市');
console.log(node);    // { name: '杭州市', code: 0571 }