 let random_no = Math.floor(Math.random()*100)+1
 let guess_no ;
 let score = 100;
   do{
     guess_no = parseInt(prompt("Enter the number :"));

    if(guess_no < random_no){
        alert(`The random number is greater than ${guess_no}`);
        score--;
      }
    else if(guess_no > random_no){
        alert(`The random number is less than ${guess_no}`);
        score--;
       }
   }while(guess_no!=random_no)
alert(`congratulations! You have guessed the random number: ${random_no}`);
alert(`Your score is ${score}`);