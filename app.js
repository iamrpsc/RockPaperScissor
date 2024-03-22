 let userScore = 0;
 let compScore = 0;
 const choices = document.querySelectorAll(".choice");


 const msg = document.querySelector("#msg");

 const userScorePara = document.querySelector("#user-score");
 const compScorePara = document.querySelector("#comp-score");


 const genCompChoice = ()=> {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
 }

 const drawGame =()=>{
    console.log("Game was draw.");
    msg.innerText=("Game draw, Play again !!");
    msg.style.backgroundColor = "#081b31";
 }

//usewin is a variable
 const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win !!");
        msg.innerText=`You win !! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";



    }
    else{
        compScore++;
        compScorePara.innerText = compScore;

        console.log("You lose !!");
        msg.innerText=`You lose !! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

 }


 const playGame = (userChoice)=>{
    console.log("user choice is ", userChoice);
    //generate computer choice -> modular way of programme
    const compChoice = genCompChoice();
    console.log("Comp choice is ", compChoice);

    if( userChoice===compChoice){
        //draw game
        drawGame();
    }
    else{
        userWin= true;
        if (userChoice==="rock"){
            //computer has either scissor, paper as choice.
            userWin= compChoice === "paper" ? false: true;
        }
        else if(userWin === "paper"){
            //compuer has either scissor and rock as choice. 
            userWin = compChoice === "scissor"? false: true; 

        }
        else{
            userWin = compChoice=== "rock" ? false: true ;
        }
        showWinner(userWin, userChoice, compChoice);
    }
 };

 choices.forEach((choice)=>{

    choice.addEventListener("click", ()=>{
        
        const userChoice = choice.getAttribute("id")
        
        playGame(userChoice);
    })

 });
