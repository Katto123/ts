
### resolve(value)— 如果作业成功完成，结果为value。

### reject(error)— 如果发生错误，error则为错误对象。
***

  pending -> resolved fulfilled（已成功）

  const p2 = new Promise((resolve, reject) => {
 
      console.log(111);
 
      setTimeout(() => {
 
         resolve() //成功
 
      }, 5000)

  })

***

 setTimeout(() => {

     console.log('p2', p2);

 }, 5000)

***

 pending -> rejected rejected（已失败）


 const p3 = new Promise((resolve, reject) => {

     reject() //失败

 })

 console.log('p3', p3);




###  promise不同状态的表现
***
 const p1 = new Promise((resolve,reject)=>{  // 进行中不会触发函数

 })

 console.log('p1',p1);

 p1

 .then(() =>{

     console.log('p1 then');
     

 })

 .catch(() =>{

     console.log('p1 catach');

 })

*** 
 const p2 = Promise.resolve() //快捷的创建方法  状态可以触发then里面的函数

 console.log('p2',p2);

 p2

 .then(() =>{

     console.log('p2 then');

 })

 .catch(() =>{

     console.log('p2 catach');

 })

***

 const p3 = Promise.reject() //快捷的创建方法  状态可以触发catch里面的函数

 console.log('p3',p3);

 p2

 .then(() =>{

     console.log('p3 then');

 })

 .catch(() =>{

     console.log('p3 catach');

 })



***


### than, catch对于Promise状态的影响
***
 const p1 = Promise.resolve()   // than对于Promise状态的影响

 console.log('p1',p1);

 const res1 = p1.then(() =>{

     console.log('p1 then');

 })

 setTimeout(() => {

    console.log('p1 then');

 }, );

***
 const res2 = p1.then(()=>{

     throw new Error('err')

 })
***
 setTimeout(() => {  

     throw new Error('err')

 }, );


 setTimeout(() =>{

     console.log('res2', res2);

 })


***
const p2 = Promise.reject()   // than对于Promise状态的影响

console.log('p2',p2);
***
const res3 = p2.catch(() =>{

    console.log('p2 catch');
     
})

setTimeout(() => {

    console.log('res3', res3);

}, );

***
const res4 = p2.catch(() =>{

    throw new Error('err')

})

setTimeout(() => {

    console.log('res4', res4);

}, );


 ###  then catch 没有抛出异常p.then p.catch 返回的都是一个 resolved状态的 Promise

 ### 抛出异常 返回的都是一个 rejected状态的  promise



 ### console.time()和console.timeEnd()一般用于测试程序执行的时长。

 ### console.time() 方法是作为计算器的起始方法。

 ### console.timeEnd() 方法为计算器的结束方法，并将执行时长显示在控制台。

 ### 如果一个页面有多个地方需要使用到计算器，可以添加标签参数来设置

***


## async&await用法

### async 表示函数里有异步操作，  await 表示紧跟在后面的表达式需要等待结果。

- async 函数返回一个 Promise 对象，可以使用 then 方法添加回调函数。当函数执行的时候，一旦遇到 await 就会先返回，等到触发的异步操作完成，再接着执行函数体内后面的语句。


- await 命令后面的 Promise 对象，运行结果可能是 rejected，所以最好把 await 命令放在 try...catch 代码块中。

async function myFunction() {

  try {

    await somethingThatReturnsAPromise();

  } catch (err) {

    console.log(err);

  }

}

- 另一种写法

async function myFunction() {

  await somethingThatReturnsAPromise().catch(function (err){

    console.log(err);

  });

}

-  await会阻塞代码的执行。而解决这个弊端的手段就是async声明。