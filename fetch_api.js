let getUser= async()=>{
    try{
        let response= await fetch("https://randomuser.me/api/");
        let data= await response.json();
        let user= data.results[0];
        console.log(data.results[0]);
        document.getElementById("name").innerHTML=`The name of the user is ${user.name.first} ${user.name.last}`;
        document.getElementById("email").innerHTML=`The Email of the user is ${user.email}`;
        document.getElementById("photo").src=user.picture.large;
        document.getElementById("location").innerHTML=`The location of the user is ${user.location.country}`;
        document.getElementById("no").innerHTML=`The number of the user is ${user.phone}`;
    }  
    catch(error){
        console.log(error);
        console.log("There is a error");
    }

}
