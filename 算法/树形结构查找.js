function fn(tree, name){
    //To Do
    let result = {};
    function get(tree) {
        for(let item of tree){
            if(item.name == name){
                result = item
                return ;
            }else if(item.children){
                get(item.children)
            }
        }
    }
    get(tree.children)
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