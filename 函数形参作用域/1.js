/**
 * 关键点：
 *  + ！！！函数形参必须要有默认值
 *  + ！！！函数中使用了 var / let / const
 *
 *  只要满足上面两个点，就会形成两个私有上下文
 * */

// var x = 1;
// function func(x, y = function () { x = 2 }) {
//     x = 3;
//     y();
//     console.log(x);
// }
// func(5);
// console.log(x);
/*-----------------------*/



// var x = 1;
// function func(x, y = function(){x = 2}){
//     var x = 3;
//     y();
//     console.log(x);
// }
// func(5);
// console.log(x);
/*----*/



// var x = 1;
// function func(x, y = function () { x = 2 }) {
//     var x;
//     var y = function () { x = 4 };
//     y();
//     console.log(x);
// }
// func(5);
// console.log(x);
/*---------*/



// var x = 1;
// function func(x, y = function(){x = 2}){
//     //原本是 undefined  但是同名了函数作用域中的5会同步一份给块级作用域
//     var x;
//     console.log(x); //5
// }
// func(5);
// console.log(x);

// var x = 1;
// function func(t, y = function(){x = 2}){
//     var x;
//     console.log(x); //undefined
// }
// func(5);
// console.log(x);