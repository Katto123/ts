// async function test1() {
//     return 1;
// }
// async function test2() {
//     return Promise.resolve(2);
// }
// const result1 = test1()
// const result2 = test2();
// console.log('result1', result1);
// console.log('result2', result2);

// // promise.then 成功情况 对应 await
// async function test3() {
//     const p3 = Promise.resolve(3);
//     p3.then(data3 => {
//         console.log('data3', data3);
//     })

//     const data3 = await p3;
//     console.log('data3', data3);
// }
// test3()


// async function test4() {
//     const data4 = await 4; // 等于 await promise.resolve(4);
//     console.log('data4', data4);
// }
// test4()

// async function test5() {
//     const data5 = await test1();
//     console.log('data5', data5);
// }
// test5


// async function test6() {
//     const p6 = Promise.reject(6);
//     try {
//         const data6 = await p6;
//         console.log('data6', data6);
//     } catch (e) {
//         console.error('e', e);
//     }


// }
// test6()
// pending（进行中）
// const p1 = new Promise((resolve, reject) => {

// })
// console.log('p1', p1);


// // pending -> resolved fulfilled（已成功）
// const p2 = new Promise((resolve, reject) => {
//     console.log(111);
//     setTimeout(() => {
//         resolve()
//     }, 5000)

// })

// setTimeout(() => {
//     console.log('p2', p2);
// }, 5000)


// // pending -> rejected rejected（已失败）
// const p3 = new Promise((resolve, reject) => {
//     reject()
// })
// console.log('p3', p3);







// promise不同状态的表现

// const p1 = new Promise((resolve,reject)=>{  // 进行中不会触发函数

// })
// console.log('p1',p1);

// p1
// .then(() =>{
//     console.log('p1 then');
// })
// .catch(() =>{
//     console.log('p1 catach');
// })


// const p2 = Promise.resolve() //快捷的创建方法  状态可以触发then里面的函数
// console.log('p2',p2);
// p2
// .then(() =>{
//     console.log('p2 then');
// })
// .catch(() =>{
//     console.log('p2 catach');
// })


// const p3 = Promise.reject() //快捷的创建方法  状态可以触发catch里面的函数
// console.log('p3',p3);
// p2
// .then(() =>{
//     console.log('p3 then');
// })
// .catch(() =>{
//     console.log('p3 catach');
// })






// than, catch对于Promise状态的影响
// const p1 = Promise.resolve()   // than对于Promise状态的影响
// console.log('p1',p1);

// const res1 = p1.then(() =>{
//     console.log('p1 then');
// })

// setTimeout(() => {
//     console.log('p1 then');
// }, );

// const res2 = p1.then(()=>{
//     throw new Error('err')
// })

// setTimeout(() => {  
//     throw new Error('err')
// }, );


// setTimeout(() =>{
//     console.log('res2', res2);
// })



const p2 = Promise.reject()   // than对于Promise状态的影响
console.log('p2',p2);

const res3 = p2.catch(() =>{
    console.log('p2 catch');
     
})

setTimeout(() => {
    console.log('res3', res3);
}, );


const res4 = p2.catch(() =>{
    throw new Error('err')
})

setTimeout(() => {
    console.log('res4', res4);
}, );

//  then catch 没有抛出异常p.then p.catch 返回的都是一个 resolved状态的 Promise
// 抛出异常 返回的都是一个 rejected状态的  promise