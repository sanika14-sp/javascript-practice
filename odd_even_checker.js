// Check the number using loop
console.log("Check whether number is even or odd");

console.log("The number is 7");
let a=7;
if(a%2==0){
    console.log("The number is even");
}
else{console.log("The number is odd");
}


// Using function

 let b= Number(prompt("Enter the number: "));
function check(num) {
    if(num%2==0){
        return "even";
    }
    else { return "odd";

    }
    }
    console.log(`The number ${b} is ${check(b)}`);