// 声明一个变量a，同时指定它的类型为number
// let a :Number;
// a 的类型为number，在以后的使用过程中a的值只能是数字
// a = 10;
// a = 33;
// a = true; // 会报错

// let b: string;
// b = 'hello';

// 声明完变量直接进行赋值
// let c:Boolean = true;

// 如果变量的声明和赋值是同时进行的。Ts可以自动对变量进行类型检测   类型都是小写
// let c = false;
// c = true;

// js中函数是不考虑参数类型和个数的
// function sum(a, b){
//     return a+ b;
// }
// console.log(sum(123,456));
// console.log(sum(123,"456"));

// 可以给参数做类别的声明   :number预想答案类型
function sum(a:number,b:number):number{
    return a+b;
}
console.log(sum(123,222));


let result = sum(123,222);