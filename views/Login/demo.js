// let arr = [1,2,3,4];

// console.log(Array.isArray(arr));
// console.log(arr instanceof Array)
// console.log(arr.constructor === Array);

// isArray(arr);

// console.log(Math.floor(Math.random()*(100-10+1)+10))

// function getRandomNumberBetween(min,max){
//     return Math.floor(Math.random()*(max-min+1)+min);
// }
//  console.log(getRandomNumberBetween(10,99)); 


// function fun(){
//     // 'use strict'
//     name = true
// }
// fun();
// // console.log(fun());

// (function(){
// var a=b=5;
// })
// ();
// console.log(b)

// var output = (function(x){
// delete x;
// return x;
// })
// (0);
// console.log(output)

// var Employee = {
//     company:"Lotus"
// }

// var emp1 = Object.create(Employee);
// delete emp1.company

// console.log(emp1.company)

// let obj = {
// num:4
// }
// // console.log(this.a);
// let arr = [5,6,7];
// function demo(x,y,z){
// return this.num+x+y+z;
// }
// let b = demo.bind(obj)
//  console.log(b(5,6,7));

// function isNumberPresent(n,arr){
   
//   if(arr.includes(n)){
//   var index = arr.indexOf(n)
// arr.splice(index,1)
// // console.log(arr);
// return arr
//   }
//   else{
//     console.log("element not exist in array");
//   }
  
  
// }

// console.log(isNumberPresent(4,[1,2,3]));


// function removeItemOnce(arr, value) {
//     var index = arr.indexOf(value);
//     if (index > -1) {
//       arr.splice(index, 1);
//     }
//     return arr;
//   }
  
//   function removeItemAll(arr, value) {
//     var i = 0;
//     while (i < arr.length) {
//       if (arr[i] === value) {
//         arr.splice(i, 1);
//       } else {
//         i++;
//       }
//     }
//     return arr;
//   }
//   // Usage
//   console.log(removeItemOnce([2,5,9,1,5,8,5], 5))
//   console.log(removeItemAll([2,5,9,1,5,8,5], 5))


// async function fun1(){

//     console.log('a');
    
//     console.log('b');
    
//     await new Promise(resolve=>setTimeout(resolve, console.log('c'), 1000))
    
//     await new Promise(resolve=>setTimeout(resolve,console.log('d'), 0))
    
//     console.log('e');
    
//     }
    
//     fun1()

// function * generatorFunction() { 
//     console.log('This will be executed first.');
//     yield 'Hello, ';  
//     console.log('I will be printed after the pause');  
//     yield 'World!';
//   }
//   const generatorObject = generatorFunction(); // Line 3
//   console.log(generatorObject.next().value); // Line 4
//   console.log(generatorObject.next().value); // Line 5
//   console.log(generatorObject.next().value);

// var array = [1, 4, 8, 2, 4, 1, 6, 2, 9, 7];
// function findDuplicates(arr) {
    
//    return arr.filter((currentValue, currentIndex) =>
//    arr.indexOf(currentValue) !== currentIndex);
// }

// console.log(findDuplicates([1,4,2,1,6,4]))
//  findDuplicates([1,4,2,1,6,4])

// let str = "\"Geeks\" for \"Geeks\" is 'the' best 'platform'"
// console.log(typeof(array));

// let obj = {
//     name:"Balaji"
// }
//  var o = new Object()

// console.log(Object.prototype.isPrototypeOf(obj));


// let text = "Mr Blue has a blue house and a blue car";   //replace multiple words in string
// console.log(text.replace(/blue/gi,"red"))






// class Stacks {
//     constructor(){
//       this.arr1=[100,200,300];
//       this.arr2=[]; 
     
// }

// push(data){

// while(this.arr1.length!=0){
// this.arr2.push(this.arr1.shift());
// }
// this.arr1.push(data);
// while(this.arr2.length!=0){
// this.arr1.push(this.arr2.shift());

// }

// }

// /**
// * @return {number}
// */
// pop(){
// this.arr1.shift()
// }


// peek(){
// console.log(this.arr1[this.arr1.length-1]) 
// }

// isEmpty(){

// console.log(this.arr1.length==0?'The stack is empty':'The stack is not empty');

// }

// printDetails(){
// console.log(this.arr1)

// }
// }

// let stack = new Stacks();
// stack.isEmpty();
// stack.push(400);
// stack.pop();
// stack.peek();
// stack.isEmpty();
// stack.printDetails()

// var arr1=[3, 'a', 'a',9, 'a', 2, 3,9, 'a', 3, 'a', 2, 4, 9,9,9,9,9, 3];
// var mf = 1;
// var m = 0;
// var item;
// for (var i=0; i<arr1.length; i++)
// {
//         for (var j=i; j<arr1.length; j++)
//         {
//                 if (arr1[i] == arr1[j])
//                  m++;
//                 if (mf<m)
//                 {
//                   mf=m; 
//                   item = arr1[i];
//                 }
//         }
//         m=0;
// }
// console.log(item+" ( " +mf +" times ) ") ;


// let num = 65

// let name = "Dattatray"
// console.log(typeof(+name))
// console.log(typeof(num + "+"))



// let obj = {
//     name:"Balaji",
//     age:25,
//     company:"Sharpener"
// }

// let arr = {
//     name:"Balaji",age:25
// }

// let arr2 = Object.entries(arr)


// let arr3 = arr2.flat(Infinity);

// console.log(arr3);


// let arr = [1,2,3,4,5,6,7];

// // let arr2 = [...arr,6,7,8,9]

// console.log(arr);

// let arr = [2,3,7,1,9,5,6]

// let mid = Math.floor(arr.length/2)

// let left = arr.slice(0,mid)

// let right = arr.slice(mid)



// let result = [];

// while(left.length  && right.length){
//     if(left[0]<right[0]){
//         result.push(left.shift());
//     }
//     else{
//         result.push(right.shift());
//     }
// }

// while(left.length){
//     result.push(left.shift())
// }

// while(right.length){
//     result.push(right.shift())
// }

// console.log(result);

// let arr = [1,2,[3],4];

// let arr2 = [...arr];

// arr2[2] = 5;

// console.log(arr);
// console.log(arr2);

