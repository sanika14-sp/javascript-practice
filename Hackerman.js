async function message(text){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.getElementById("code").innerHTML+=text+"<br><br>"
            resolve();
        },3000)
    })
}

let main = async()=>{
    let a1= await message("Initialing...");
    let a2= await message("Connecting to android server...");
    let a3= await message("Accessing Instagram server...");
    let a4= await message("Hacking username xyz...");
    let a5= await message("Access Granted!");
    let a6= await message("Firewall Detected..!");
    let a7= await message(" Bypass Successful!");
}

main();