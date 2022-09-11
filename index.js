var readlineSync = require("readline-sync");

var score = 0;

// data of high score


var highscore=[
  {name:"Bhavesh",
  score:3
  },
  {
  name:"Kosmica",
    score:2
  }
]
var quiz=[
  {
    question:"Who are the hosts of Think fast?",
    answer:"Varun and suchita"
  },
{
  question:"Who is the host of the seen and the unseen?",
  answer:"amit verma"
},
  {
    question:"Who is the founder of avalon scenes?",
    answer:"varun mayya"
  },
  {
     question:"Which is the only podcast network from india?",
    answer:"ivm"
  },
  {
   question:"Who is the host of the indian dream",
    answer:"Sid and Sahil"
  }
]
function Welcome() {
var usrname=readlineSync.question("Whats your name?")
 console.log("Welcome"+ usrname +" to How much you know Bhavesh ")
}
function playquiz(q,a)
  {
    usranswer=readlineSync.question(q)
    if (usranswer.toUpperCase === a.toUpperCase)
    {
      console.log("Right")
      score+=1
    }
    else
    {
      console.log("Wrong")
    }
    
    console.log("current score: ", score);
  console.log("-------------")
  }
function game() {
  for (let i = 0; i < quiz.length; i++) {
var currentq=quiz[i]
    playquiz(currentq.question,currentq.answer)
  }
}
function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highscore.map(score => console.log(score.name, " : ", score.score))
}

Welcome()
game()
showScores()