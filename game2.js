// Snake , Water , GUN game 

let choice = ["snake", "water", "gun"];
let playagain = true;
let score = 0;


while (playagain){
let compchoice =  choice[Math.floor(Math.random()*choice.length)];
let userchoice = prompt("Select your element :");

if (userchoice === compchoice){
    alert("it's a tie");
    score = score;
}
else if ( userchoice === "snake" && compchoice === "water"){
    alert ("you win");
   score = score +1;
}
else if ( userchoice === "gun" && compchoice === "snake"){
    alert ("you win");
    score = score +1;
}

else if ( userchoice === "water" && compchoice === "gun"){
    alert ("you win");
    score = score +1;
}
else{
    alert("you lose");
    score = score - 1;
};

alert(`you choose ${userchoice} and computer choose ${compchoice}`);
alert (`Your score is ${score}`);
playagain = confirm("Do you wanna play again ?");
}

