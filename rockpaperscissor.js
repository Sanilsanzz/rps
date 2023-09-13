


function getComputerChoice(){
    let choices=["rock","paper","scissor"];
    let choice=choices[(Math.floor(Math.random()*choices.length))]
    return (choice)
}

function playRound(playersel,compsel){
 
    if (playersel==="rock" && compsel==="rock" || playersel==="paper" && compsel==="paper" || playersel==="scissor" && compsel==="scissor"){
        return("Tie, Play again")
    }
    else if (playersel==="rock" && compsel==="scissor"){
        return("Rock beats scissor, You Win!")
    }
    else if (playersel==="paper" && compsel==="rock"){
        return("paper beats rock You Win!")
    }
    else if (playersel==="scissor" && compsel==="paper"){
            return("scissor beats paper You Win!")}

    else if (playersel==="scissor" && compsel==="rock"){
        return("scissor beats rock You Lose!")}
    
    else if (playersel==="rock" && compsel==="paper"){
            return("rock beats paper You Lose!")
        }

     else if (playersel==="paper" && compsel==="scissor"){
                return("paper beats scissor You Lose!")
            }
     else {
        return "error"

 }}




 function game(){
    let play=prompt("rock.paper,scissor")
    let comp=getComputerChoice()
    for(let i=1;i<6;i++){
        console.log(playRound(play,comp))
    }

 }



