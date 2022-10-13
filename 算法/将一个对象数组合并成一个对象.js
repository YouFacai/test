let channelTabList = [
    {1: '推荐'},
    {2: '最新'},
    {3: '快赚'},
    {4: '高额'}
]

let newList = channelTabList.reduce((pre,next)=>{
    return {...pre,...next}
})
console.log(newList)