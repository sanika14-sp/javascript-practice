// Check whether the user can drive or not using prompt and alert 
runAgain= true;
while(runAgain){
let age = parseInt(prompt("Enter your age:"));
if(age<0){
    console.error("Please enter a valid age");
    break;
}
if(age>=18){
    alert("you can drive");
}else{
    alert("you can't drive");
}
runAgain= confirm("DO you want to check again ?");
}



