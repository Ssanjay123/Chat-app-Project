// function demo(a,b,callback){
//     return a+b;
//     callback();
// }

// function demo2(x,y){
//     return x-y;
// }

// console.log(demo(4,5,demo2(9,8)));


// function demo(){
//     return new Promise ((resolve,reject)=>{
//         reject("Its an error");
//     })
// }

// demo().then((data)=>{
//     console.log(data);
// }).catch(err=>console.log(err))

let obj = {
    name:"Balaji",
    age:25
}
// let obj2 = Object.freeze(obj)

obj.name = "xyz";

// delete obj["age"];

_.omit(obj,"age")

console.log(obj);


