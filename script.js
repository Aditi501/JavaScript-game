//.........Show Rules.............
function rulesFunc() {
   const R= document.getElementsByClassName("rulesbox");   
    // R.style.display='block' does not working because getElementsByClassName returns the collection of elements 

  R[0].style.display = 'block';
//    for (const x of R) { ... working
//     x.style.display = 'block';
//   }
}
//..........Hide Rules...............
const hideRules= document.getElementsByClassName("cross");
hideRules[0].addEventListener("click", hideIt);
function hideIt()
{
   const X = document.getElementsByClassName("rulesbox");
   X[0].style.display='none';
}
//.........play game.........
let score1=JSON.parse(localStorage.getItem("sc1"));
let score2=JSON.parse(localStorage.getItem("sc2"));
let scoreElem1=document.querySelector(".User");
let scoreElem2=document.querySelector(".Comp");
let userScore=document.querySelectorAll(".User");
let compScore=document.querySelectorAll(".Comp");
let computer=document.querySelectorAll(".computer");
let random=Math.floor(Math.random()*3);
let lines=document.querySelectorAll(".line1,.line2,.line3");
let lines1=document.querySelectorAll(".one,.two,.three");
let circles=document.querySelectorAll(".icons");
let circles1=document.querySelectorAll(".icons1");
let triangle=document.querySelectorAll(".triangle")
let you=document.querySelector(".you");
let pc=document.querySelector(".machine");
let hand=document.querySelector(".paper");
let hand1=document.querySelector(".paper1");
let win=document.querySelector(".win-section");
let playAgain=document.querySelector(".play-again");
let result=document.querySelector(".result");
let result1=document.querySelector(".result1");
let replay=document.querySelector(".replay");
let btn1=document.querySelector(".buttonRule");
let btn2=document.querySelector(".buttonRule1");
if(score1){
   scoreElem1.innerText=score1;
}
if(score2){
   scoreElem2.innerText=score2;
}
let count1=0;
let count2=0;
circles.forEach((element,index)=>{
   element.addEventListener("click",()=>{
      for(const line of lines){
    line.style.display="none";}
    you.style.display="block"
    circles.forEach(item =>{
      item.style.display="none";
    });
    element.style.display="flex";
    element.classList.add("show")
    hand.classList.add("new");
   setTimeout(()=>{
      pc.style.display="block";
      hand1.classList.add("newhand");
      setTimeout(()=>{
      circles1[random].style.display="flex";
      console.log(circles1[random]);
      circles1[random].classList.add("right");
      })
   }, 500)
   setTimeout(()=>{

      if(index==0 && random==1 || index==1 && random==2 || index==2 && random==0){
         element.classList.add("box");
         result.innerText="YOU WIN";
         result1.innerText="AGAINST PC"
         playAgain.style.display="block";
         btn1.classList.add("btn");
         btn2.style.display="block";
         count1=score1;
         count1++;
         scoreElem1.innerText=count1;
         localStorage.setItem("sc1",JSON.stringify(count1));
      } 
      else if(index==0 && random==0 || index==1 && random==1 || index==2 && random==2){
         result.innerText=" TIE UP";
         replay.style.display="block";
      }
      else{
         circles1[random].classList.add("box")
         result.innerText="YOU LOST";
         result1.innerText="AGAINST PC"
         playAgain.style.display="block";
         count2=score2;
         count2++;
         scoreElem2.innerText=count2;
         localStorage.setItem("sc2",JSON.stringify(count2));
      }
      },1500);
playAgain.addEventListener("click",()=>{
   window.location.reload();
}) 
replay.addEventListener("click",()=>{
   window.location.reload();
})      
});

})

