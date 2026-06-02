let hiddenContainer2 = document.querySelector(".hidden-container2");
let boxes = document.querySelectorAll(".box button");
let resetBtn = document.querySelector(".reset-btn");
let startBtn = document.querySelector(".start-btn");
let msgContainer = document.querySelector(".hide");
let hiddenContainer = document.querySelector(".hidden-container");
let msg = document.querySelector(".msg");
let turnO = true;
let count = 0;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
const resetGame = ()=>{
    enableBoxes();
msgContainer.style.display = "none";
count = 0;
 turnO = true;
  hiddenContainer2.style.display = "block";
}

boxes.forEach((box) =>{
    box.addEventListener("click", () => {
        count++;
if(turnO){
box.innerText = "X";
box.style.color = "#3EADB0";
turnO = false;
}else{
box.innerText = "O";
turnO = true;
box.style.color = "#b0413e"

}

box.disabled = true;
let winner = checkWinner();
    if(count === 9 && !winner){
gameDraw();
    }

    })
})
const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner)=>{
    msg.innerText = `The Winner takes it all. ${winner} wins`;
    msgContainer.style.display = "block";
       hiddenContainer2.style.display = "none";

    disableBoxes();
}
const checkWinner = ()=>{

for(let pattern of winPatterns){

let pos1Val = boxes[pattern[0]].innerText;
let pos2Val = boxes[pattern[1]].innerText;
let pos3Val = boxes[pattern[2]].innerText;

if(pos1Val !== "" && pos2Val !== "" && pos3Val !== ""){
if(pos1Val === pos2Val && pos2Val === pos3Val){
showWinner(pos1Val);
return true;
}
}
}
return false;
}

startBtn.addEventListener("click", ()=>{
    resetGame();
    hiddenContainer2.style.display = "block";
});
resetBtn.addEventListener("click", resetGame);

const gameDraw = ()=>{
  msg.innerText = "Game Draw 🤝";
    msgContainer.style.display = "block";
    hiddenContainer2.style.display = "none";
    disableBoxes();
    
}