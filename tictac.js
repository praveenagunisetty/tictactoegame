let boxes=document.querySelectorAll(".box");
let restbtn=document.querySelector("#reset");
let msgcontainer=document.querySelector(".msgcontainer");
let newgame =document.querySelector("#new");
let msgc=document.querySelector("#msg");
let turn0=true;
let showwinner=(winner)=>{
    msg.innerText=`congrats the winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}
let resetgame=()=>{
    turn0= true;
    enableboxes();
    msgcontainer.classList.add("hide");
}
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
let winnerpatterns=[[0,1,2],[0,3,6],
[0,4,8],[1,4,7],
[2,5,8],[2,4,6],
[3,4,5],[6,7,8]
]
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
if(turn0){
    box.innerText="O";
    turn0= false;
}
    else{
        box.innerText="X";
            turn0= true;
    }
box.disabled= true;
checkWinner();

})
})
const checkWinner=()=>{
    for( let pattern of winnerpatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
    
    if( pos1val !="" && pos2val !="" && pos3val !=""){
        if(pos1val===pos2val &&pos2val==pos3val){
            console.log("winner",pos1val);
            showwinner(pos1val);
    }
}
    }
}
newgame.addEventListener("click",resetgame);
restbtn.addEventListener("click",resetgame);