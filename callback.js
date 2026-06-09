// CAllBACKS
function step1(callback){
    setTimeout(()=> {
        console.log("first step done")
        callback()
    }, 2000);
}

function step2(callback){
    setTimeout(()=> {
        console.log("second step done")
        callback()
    }, 2000);
}

function step3(callback){
    setTimeout(()=> {
        console.log("Third step done")
        callback()
    }, 2000);
}

step1(()=>{
    step2(()=>{
        step3(()=>{
            console.log("All done")
        })
    })

})// Callback hell


//promises

function p1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("P1 completed successfully");
        resolve("done") ;
        } ,2000);
    });
}

function p2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("P2 completed successfully");
        resolve("done") ;
        } ,2000);
    });
}


function p3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("P3 completed successfully");
        resolve("done") ;
        } ,2000);
    });
}

p1()
 .then(p2)
 .then(p3)
 .then(()=>{
    console.log("ALL promises executed successfully")
 })

      
// async and await 

function steps(ms,name){
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
     console.log("completed",name)
     resolve();
    },ms);
    })
}
async function work(){
    await steps(2000,"step 1");
    await steps(4000,"step 2");
    await steps(6000,"step 3");
}
work();