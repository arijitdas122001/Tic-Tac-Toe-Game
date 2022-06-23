// console.log("welcome to my game Tic Tac Toe");
let clickmusic=new Audio("ting.mp3");
let gameovermusic=new Audio("gameover.mp3");
let gamemusic=new Audio("ting2.mp3");
let turn="X";
let playwin=false;
// function for chekcking the turn
 const checkturn=()=>{
     return turn=="X"?"0":"X";
 }
//  function for chekcing who is wining
// gamemusic.play();
const checkwin=()=>{
    let boxes=document.getElementsByClassName('textbox');
    let inf=document.querySelectorAll('.turninfo');
    let win=[
        // these are all the winning number of textboxes number combination 
         [0,1,2],
         [3,4,5],
         [6,7,8],
         [0,3,6],     
         [1,4,7],
         [2,5,8],
         [2,4,6],
         [0,4,8],
    ]
   win.forEach(e=>{
    //    if first box second box and third mathces then it will show the winner 
        if((boxes[e[0]].innerText===boxes[e[1]].innerText) && (boxes[e[1]].innerText===boxes[e[2]].innerText) && (boxes[e[0]].innerText!=="")){
           inf[0].innerText=boxes[e[0]].innerText+" won The Game";
           playwin=true;
          gameovermusic.play();
        //   this is for gif
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.height="8rem";
        }
   })
}

//  main logic
// we are accessing the boxes of the tic tac toe
let ticboxes=document.getElementsByClassName("box");
Array.from(ticboxes).forEach(element =>{
    let boxtext=element.querySelector('.textbox');
    element.addEventListener('click',(element)=>{
        // console.log("clicked");
        if(boxtext.innerText ===''){
            boxtext.innerText=turn;
            // I have to change the turn so diclearing  with turn 
             turn=checkturn();
            clickmusic.play();
            checkwin();
          if(playwin===false)document.getElementsByClassName("turninfo")[0].innerText="Turn For "+turn;
        }
    })
})
// reset button
// let resebt=document.getElementsByClassName("reset");
reset.addEventListener('click',()=>{
let textbox=document.querySelectorAll('.textbox');
Array.from(textbox).forEach(element =>{
element.innerText=""
});
turn="X";
document.getElementsByClassName("turninfo")[0].innerText="Turn For "+turn;
document.querySelector('.imgbox').getElementsByTagName('img')[0].style.height="0";
playwin=true;
})


