### 声明一个变量a，同时指定它的类型为number
 let a :number;
 ***
### a 的类型为number，在以后的使用过程中a的值只能是数字
 a = 10;

 a = 33;

 a = true; // 会报错

 let b: string;

 b = 'hello';

***
### 声明完变量直接进行赋值
 let c:Boolean = true;
***
###  如果变量的声明和赋值是同时进行的。Ts可以自动对变量进行类型检测   类型都是小写
 let c = false;

 c = true;
***
### js中函数是不考虑参数类型和个数的
 function sum(a, b){

     return a+ b;

 }

 console.log(sum(123,456));

 console.log(sum(123,"456"));
 ***

### TS可以给参数做类别的声明   :number预想答案类型

function sum(a:number,b:number):number{

    return a+b;

}

console.log(sum(123,222));

let result = sum(123,222);
***
### 也可以直接使用字面量进行类型声明

let a: string;
***
###  let a : 10 //设置a的类型只能为10

 a = 11 //错误


***
###  let b: "male" | "female"  // b的值只能是male或者female  可以使用 | 来连接多个类型(联合类型)

b = "male"

b = "female"


***
###  let c: boolean | string  // 俩个类型
  
c = true

c = "wqeqw"


***
### any 表示的是任意类型， 一个变量设置类型为any相当于对该变量关闭了TS的类型检测

 let d:any;
***

### 声明变量如果不指定类型，则TS解析器会自动判断变量类型为any（隐式的any）

let d;

d = 10;

d = 'hello'

d = true

（各种类型都可以）

***
###  unknown  表示未知类型的值

let e: unknown

e = 10;

e = "fnwfnwe"

let s: string
***
## any和unknown区别
***
###    d的类型是any， 它可以赋值给任意变量

s = d

***
####   unknown  实际上就是一个类型安全的any
####   unknown  类型的变量，不能直接赋值给其他变量

#### 如果想赋值可以在外面加一个判断

if (typeof e === "string") {

    s = e
}




***
###  类型断言，可以用来告诉解析器变量的实际类型

/*
* 语法：
* 变量 as 类型
*   <类型>变量
**/
***
### 使用

s = e as string  //声明 e 一定是string类型

 s = <string>e; //效果一样


***
###  函数自动判断返回值类型


 function fn(num){

     if(num > 0){

        return true;

    }else{

         return 123;

     }
 }



***
###  void 用来表示空，以函数为例，就表示没有返回值的函数  空值
function fn() :void{

 return 1213

return

return undefined

return null

}




***
### never 表示永远不会返回结果  ,  适合写报错函数

function fn2(): never{

     throw new Error('报错了')   // 适合写报错函数

}





***
### object 表示一个js对象

let a :object;

a = {};

a = function(){}



***
###  用来指定对象中包含哪些属性
####  语法：{属性名：属性值，属性名：属性值}
#### 在属性名后面加上？，表示属性是可选的
let b: {name: string ,age ?:number}

b = {name:'dek v', }

b = {name:'cfefe', age:12}

***


###  [propName:string]: any 表示任意类型的属性

let c:{name :string,[propName:string]:any}

c = {name:"猪八戒", age:12, gender:'男'}


***

###  设置函数结构的类型声明：
#### 语法：（形参：类型，形参：类型...）=>返回值

let d : (a:number,b:number) =>number;

d = function(a,b){

return 10;

}




***
###  数组的类型声明
###  1.  类型[]
###  2.   Array<类型>
####  string[]  表示字符串数组

let e: string[];

e = ['a','b','c']

***
#### number[] 表示数值数组

let f: number[];

####  都是表示数值类型的数组

let g : Array<number>;



***

### 元组 ，元组就是固定长度的数组
#### 语法: [类型， 类型， 类型]

let h : [string, number]

h = ['hello', 123]

***

#### enum枚举
 enum Gender{

    Male = 0,

    Female =1

 }

 let i :{name:string, gender:Gender};

 i = {

    name:"孙悟空",

    gender:Gender.Female // 'male'

}

console.log(i.gender === Gender.Male);


***
###  &符号表示同时

let j:{name:string}&{age: number};

j = {name:'孙悟空', age:12}



***
### 类型的别名

type myType = 1 | 2 | 3 | 4 | 5 ;

let k :myType;

k = 1



### 自动编译文件 tsc  ***.ts -w


##  tsconfig.json  是ts编译器的配置文件， ts 编译器可以根据他的消息来对代码进行编译

"include"  用来指定哪些ts文件需要被编译
路径：** 任意目录
      *  任意文件
"exclude" 不需要被编译的文件目录


默认值：["node_modules","bower_components","jspm_packages"]






