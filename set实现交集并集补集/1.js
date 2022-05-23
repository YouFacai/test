let set1 = new Set([1,2,3,5])
let set2 = new Set([1,4,5])

// 并集
let intersection = new Set([...set1,...set2])
console.log(intersection)

// 交集
let union = new Set([...set1].filter(item=>set2.has(item)))
console.log(union)

// 差集
let difference = new Set([...set1].filter(item=> !set2.has(item)))
console.log(difference)