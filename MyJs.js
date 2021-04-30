var PlayerScore = document.getElementById('player-score')
var ComputerScore = document.getElementById('Computer-score')
var WinOrLose = document.getElementById('win-lose')

function HeadOrTail(btn){

    let buttons = document.getElementsByTagName('button')

    let randNum = Math.round(Math.random()) ; // random num between 0 or 1
    let possibilities = ['Heade' , 'Tail']
    let randomSide = possibilities[randNum]

    if (btn.textContent == randomSide){
        PlayerScore.innerText++
        WinOrLose.innerText = 'You Win'
        WinOrLose.style.color = 'green'
    }else{
        ComputerScore.innerText++
        WinOrLose.innerText = 'You Lose'
        WinOrLose.style.color = 'red'

    }
}

function ResetGame(){
    PlayerScore.innerText = 0
    ComputerScore.innerText = 0
    WinOrLose.innerText = ''
}
