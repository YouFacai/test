let input = [
    {
        id: 1,
        val: "学校",
        parentId: null,
    },
    {
        id: 2,
        val: "班级1",
        parentId: 1,
    },
    {
        id: 3,
        val: "班级2",
        parentId: 1,
    },
    {
        id: 4,
        val: "学生1",
        parentId: 2,
    },
    {
        id: 5,
        val: "学生2",
        parentId: 3,
    },
    {
        id: 6,
        val: "学生3",
        parentId: 3,
    },
];

function build(arr,parentID,childs) {
    for(let item of arr){
        if(item.parentId == parentID){
            item.child = [];
            build(arr,item.id,item.child)
            childs.push(item)
        }
    }
}

function ArrtoTree(arr,parentID) {
    let result = [];
    build(arr,parentID,result);
    return result.length ? result : []
}

console.log(ArrtoTree(input,null))


