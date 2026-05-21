let num = [23, 542, 54, 35, 76, 377, 43, 261, 89]
console.log(num.length);
let largest = num[0];
for (i=0; i<num.length; i++){
    if(largest<num[i]){
        largest=num[i];
    }
}
console.log(largest)



// using filter method

let arr = [21, 24, 46, 657,23,95, 686, 94, 83,23]
let n=arr.filter((x)=>{
     return x%3==0
})
console.log(n)
