
let playerscore=0
let computerscore=0
const buttons = document.querySelectorAll('input')


function getComputerChoice(){
    let choices=["rock","paper","scissors"];
    let choice=choices[(Math.floor(Math.random()*choices.length))]
    return (choice)
}

function playRound(playersel){

    let compsel=getComputerChoice()
    let result=""

    
 
    if (playersel==="rock" && compsel==="rock" || playersel==="paper" && compsel==="paper" || playersel==="scissors" && compsel==="scissors"){

        result=("Tie, Play again")
    }
    else if (playersel==="rock" && compsel==="scissors"){
        playerscore+=1
        result=("Rock beats scissors, You Win!")
    }
    else if (playersel==="paper" && compsel==="rock"){
        playerscore+=1
        result=("Paper beats rock You Win!")
    }
    else if (playersel==="scissors" && compsel==="paper"){
            playerscore+=1
            result=("Scissors beats paper You Win!")}

    else if (playersel==="scissors" && compsel==="rock"){
        computerscore+=1
        result=("Rock beats scissors You Lose!")}
    
    else if (playersel==="rock" && compsel==="paper"){
            computerscore+=1
            result=("Rock beats paper You Lose!")
        }

     else if (playersel==="paper" && compsel==="scissors"){
                computerscore+=1
                result=("Scissors beats paper You Lose!")
            }
     else {
        result="error"
           } 
    document.getElementById("result").innerHTML=result
    if(playerscore==5){
        document.getElementById("new").innerHTML="You win, Reload to Play Again"
    }
    if(computerscore==5){
        document.getElementById("new").innerHTML="You Lose, Reload to Play Again"
    }
    
 
    return
     
    
    
}



buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)

    })





})













   // let play=prompt("rock.paper,scissor")
 //let comp=getComputerChoice()
   // for(let i=1;i<6;i++){
      //  console.log(playRound(play,comp))
    //}



