let joke = [`What is a pizza’s favourite type of jokes?
Cheesy ones!`,
`What is a little bear with no teeth is called?
A gummy bear!`,
`What did the Dalmatian say after she had a huge meal?
That hit the spot.`,
`What’s the most expensive fish called?
A goldfish.`,
`What’s an alligator in a vest called?
An investi-gator`,
`Why was six afraid of seven?
Because seven ate nine.`,
`Why do so many fish live in salt water?
Because pepper water would make them sneeze.`,
`What kind of dog does a magician have?
A Labracadabrador!`,
`Where do cows hang out?
The moooooovies.`,
`When a lemon is sick, what do you do?
Give it lemon-aid.`,
`*Knock Knock*
Who’s there? Theodore.
Theodore who? Theodore wasn’t open so I knocked.`,
`Why is Cinderella so bad at playing football?
She runs away from the ball.`,
`Why did the chocolate chip cookie go to see the doctor?
He felt crummy.`,
`What kind of cheese doesn’t belong to you?
Nacho cheese!`,
`Why does it take pirates a long time to learn the alphabet?
Because they can spend years at C!`,
`Why should you never give Elsa a balloon?
She’ll let it go.`,
`Why are elevator jokes so good?
They work on many levels!`,
`Why did the teacher wear sunglasses to class?
Because his students were so bright.`,
`Why did the toddler toss the butter out the window?
So she could see a butter-fly.`,
`Why can't you tell a joke to an egg?
It might crack up.`,
`What's worse than finding a worm in your apple?
Finding half a worm in your apple!`,
`Why are fish so smart?
They live in schools.`,
`What do you call a sad strawberry?
A blueberry.`,
`Why did the boy throw his alarm clock out the window?
To see time fly.`,
`*Knock Knock*
Who’s there? Tank.
Tank who? You’re welcome.`,
`Why did a scarecrow win a Nobel prize?
He was outstanding in his field!`,
`Why did the pony get sent to his room?
He wouldn’t stop horsing around!`,
`Why did the picture go to prison?
Because it was framed!`,
`What did one eye say to the other eye?
Between us, something smells!`,
`What do you call a bear with no ears?
A "B!"`
]

let random_joke = Math.floor(Math.random()*joke.length);
document.getElementById("joke").innerHTML = joke[random_joke];