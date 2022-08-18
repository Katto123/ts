// // object 表示一个js对象
// var a;
// a = {};
// a = function () { };
// //  用来指定对象中包含哪些属性
// // 语法：{属性名：属性值，属性名：属性值}
// // 在属性名后面加上？，表示属性是可选的
// var b;
// b = { name: 'dek v' };
// b = { name: 'cfefe', age: 12 };
// // [propName:string]: any 表示任意类型的属性
// var c;
// c = { name: "猪八戒", age: 12, gender: '男' };
// // 设置函数结构的类型声明：
// // 语法：（形参：类型，形参：类型...）=>返回值
// var d;
// d = function (a, b) {
//     return 10;
// };
// // 数组的类型声明
// // 1.  类型[]
// // 2.   Array<类型>
// // string[]  表示字符串数组
// var e;
// e = ['a', 'b', 'c'];
// //number[] 表示数值数组
// var f;
// // 都是表示数值类型的数组
// var g;
// // 元组 ，元组就是固定长度的数组
// // 语法: [类型， 类型， 类型]
// var h;
// h = ['hello', 123];
// // enum枚举
// var Gender;
// (function (Gender) {
//     Gender[Gender["Male"] = 0] = "Male";
//     Gender[Gender["Female"] = 1] = "Female";
// })(Gender || (Gender = {}));
// var i;
// i = {
//     name: "孙悟空",
//     gender: Gender.Female // 'male'
// };
// console.log(i.gender === Gender.Male);
