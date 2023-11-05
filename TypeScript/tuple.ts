// // 保存我的个人信息:lmp 18 1.99
// //1.使用数组
// //不合适：数组中最好存放相同的数据类型，获取值后不能明确知道对应的数据类型
// const info1 : any[] = ["why",18,1.99]
// const value = info1[2]
// console.log(value);
// //2.使用对象类型
// const info2 = {
//     name:"why",
//     age:18,
//     height:1.99
// }
// //3.使用元组类型
// //元组数据结构中可以存放不同的数据类型，取出来的item也有明确的类型
// const info3 : [string,number,number] = ["why",18,1.99]
// const value2 = info3[2]

// let lmp : (name : string , age : number)  => object = (name,age) => {
//     return {
//         name,
//         age
//     }
// }

// console.log(lmp("lmp",18));
function printId(id : string | number){
    if(typeof id === "number"){
        console.log(id);
    }else{
        console.log("String",id);
    }
}
printId(1)
printId("22")