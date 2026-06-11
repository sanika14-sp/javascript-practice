// CAllBACKS
/*function step1(callback){
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

})// Callback hell*/


//promises
/*
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
*/
      
// async and await 
/*
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
*/

/*
//LOAD A WEBSITE USING PROMISES

let loadscript =(src)=>{
    let script= document.createElement("script");
    script.src = src;
    document.body.appendChild(script);
     return new Promise((resolve,reject)=>{
        script.onload=()=>{
            console.log("The website is loaded");
            resolve(src);
        };

        script.onerror=()=>{
            console.log("There is some error");
            reject();
        };
    });
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js")
.then((src)=>{
    console.log("loaded:",src);
})
.catch((err)=>{
    alert("There is a error");
})
*/

/*let loadscript =(src)=>{
    let script= document.createElement("script");
    script.src = src;
    document.body.appendChild(script);
     return new Promise((resolve,reject)=>{
        script.onload=()=>{
            //console.log("The website is loaded");
            resolve(src);
        };

        script.onerror=()=>{
            console.log("There is some error");
            reject();
        };
    });
}

async function main(){
    try{
    let l = await loadscript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js")
     console.log("Loaded",l);
     console.log("Loading next website")
    let m = await loadscript("https://code.jquery.com/jquery-3.7.1.min.js")
     console.log("loaded ")
     }
    catch(err){
        console.log(err);
        }
}
main();
*/

let p1= async() =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("P1 completed")
            resolve();
        },2000)
    })
}

let p2= async() =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("P2 completed")
            resolve();
        },4000)
    })
}

let p3= async() =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("P3 complete")
            resolve();
        },6000)
    })
}

/*let run= async ()=>{
    console.time("Run:")
    a1= await p1()
    a2= await p2()
    a3= await p3()
    console.timeEnd("Run:")
}*/
let run2= async ()=>{
    console.time("Run:")
    a1= p1()
    a2= p2()
    a3= p3()
    a1a2a3= await Promise.all([a1 ,a2,a3])
    console.timeEnd("Run:")
}
//run();
run2();