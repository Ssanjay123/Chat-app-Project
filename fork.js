const {fork} = require("child_process");
const express = require("express")
const app = express();


app.get("/one",(req,res)=>{
    const sum = longComputation();
    res.send({"sum":sum})
})

app.get("/two",async(req,res)=>{
    const sum = await longComputePromise();
    res.send({sum:sum})
})

app.get("/three",async(req,res)=>{
const child = fork("./child.js");
child.send("start")
child.on("message",(sum)=>{
    res.send({sum:sum})
});
})


app.listen(3000,()=>console.log("server is running...."))


function longComputation(){
    let sum = 0;
    for(let i=0;i<ie9;i++){
        sum += i;
}
return sum;
}


function longComputePromise(){
    return new Promise((resolve,reject)=>{
        let sum = 0;
        for(let i=0;i<ie9;i++){
            sum += i;
    }
    resolve (sum);
    })
}