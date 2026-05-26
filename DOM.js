console.log("DOM Manipulation");
// Change the color of first element for navbar
let first = document.getElementById("first");
first.style.color="red";

let child1 = document.getElementsByTagName("nav")[0].firstElementChild;
let child3 = document.getElementsByTagName("nav")[0].lastElementChild;

child1.style.color="green";
child3.style.color="green";

array = Array.from(document.getElementsByTagName("tr"));
array.forEach((element)=>{
    element.style.backgroundColor="cyan";
})