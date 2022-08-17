### 声明一个变量a，同时指定它的类型为number
 let a :number;
### a 的类型为number，在以后的使用过程中a的值只能是数字
 a = 10;

 a = 33;

 a = true; // 会报错

 let b: string;

 b = 'hello';

### 声明完变量直接进行赋值
 let c:Boolean = true;

###  如果变量的声明和赋值是同时进行的。Ts可以自动对变量进行类型检测   类型都是小写
 let c = false;

 c = true;

### js中函数是不考虑参数类型和个数的
 function sum(a, b){

     return a+ b;

 }

 console.log(sum(123,456));

 console.log(sum(123,"456"));

### TS可以给参数做类别的声明   :number预想答案类型

function sum(a:number,b:number):number{

    return a+b;

}

console.log(sum(123,222));

let result = sum(123,222);

### 也可以直接使用字面量进行类型声明

let a: string;

###  let a : 10 //设置a的类型只能为10

 a = 11 //错误



###  let b: "male" | "female"  // b的值只能是male或者female  可以使用 | 来连接多个类型(联合类型)

b = "male"

b = "female"



###  let c: boolean | string  // 俩个类型
  
c = true

c = "wqeqw"



### any 表示的是任意类型， 一个变量设置类型为any相当于对该变量关闭了TS的类型检测

 let d:any;


### 声明变量如果不指定类型，则TS解析器会自动判断变量类型为any（隐式的any）

let d;

d = 10;

d = 'hello'

d = true

（各种类型都可以）


###  unknown  表示未知类型的值

let e: unknown

e = 10;

e = "fnwfnwe"

let s: string

## any和unknown区别

###    d的类型是any， 它可以赋值给任意变量

s = d


####   unknown  实际上就是一个类型安全的any
####   unknown  类型的变量，不能直接赋值给其他变量

#### 如果想赋值可以在外面加一个判断

if (typeof e === "string") {

    s = e
}





###  类型断言，可以用来告诉解析器变量的实际类型

/*
* 语法：
* 变量 as 类型
*   <类型>变量
**/

### 使用

s = e as string  //声明 e 一定是string类型

 s = <string>e; //效果一样



###  函数自动判断返回值类型


 function fn(num){

     if(num > 0){

        return true;

    }else{

         return 123;

     }
 }




###  void 用来表示空，以函数为例，就表示没有返回值的函数  空值
function fn() :void{

 return 1213

return

return undefined

return null

}





### never 表示永远不会返回结果  ,  适合写报错函数

function fn2(): never{

     throw new Error('报错了')   // 适合写报错函数

}







