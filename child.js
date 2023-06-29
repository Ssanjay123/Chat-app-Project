function longComputation(){
    let sum = 0;
    for(let i=0;i<ie9;i++){
        sum += i;
}
return sum;
}


process.on("message",(message)=>{
    if(message === "start"){
    const sum = longComputation();
    process.send(sum)
    }
})

// let cache = {

// }

// function fib(n){
//     if(n==1 || n==2) return 1;

//     if(!cache[n]){
//         let value = fib(n-2) + fib(n-1);
//         cache[n] = value;
//     }
    
//     return cache[n];

// }

// let t1 = performance.now()
// const r = fib(33);
// console.log(r);
// let t2 = performance.now()
// console.log(t2-t1);


