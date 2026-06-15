let getData=async()=>{
    try{
     let user = document.getElementById("user").value;
     let response = await fetch("https://randomuser.me/api/");
     console.log("This is fetched");
     let data= await response.json();
     console.log(data);
    }
    catch(error){
        console.log(error);
    }

}