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
    new Promise((resolve,reject)=>{
        setTimeout(()=>
        console.log("P1 completed successfully"))
        resolve("done") 
        } ,2000);
}