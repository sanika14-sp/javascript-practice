let num = [23, 542, 54, 35, 76, 377, 43, 261, 89]
console.log(num.length);
let largest = num[0];
for (i=0; i<num.length; i++){
    if(largest<num[i]){
        largest=num[i];
    }
}
console.log(largest)
