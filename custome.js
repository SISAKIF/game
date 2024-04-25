// let randome_genarat=Math.trunc(Math.random()*20)+1;
// console.log(randome_genarat)
// let guess_number=document.querySelector(".guess_number").value;
// console.log(guess_number)
// let message=document.querySelector(".message").textContent="You are the winner!"
// document.querySelector(".message").textContent="TOO HIGH"
// document.querySelector(".message").textContent="TOO LOW"
// document.querySelector(".randome_genarat").textContent=randome_genarat


let randome_genarat=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0

document.querySelector(".check").addEventListener("click", function(){
    let guess_number=Number(document.querySelector(".guess_number").value);
    if (score>0){
        if(guess_number===randome_genarat){
            console.log(`You are the Winner ! HURRAY`)
            document.querySelector(".message").textContent="You are the winner!";
            document.querySelector(".randome_genarat").textContent=randome_genarat
            document.querySelector("body").style.backgroundColor="green"
            if (score>highscore){
                highscore=score
                document.querySelector(".hightscore").textContent=highscore
            }
        }else if(guess_number>randome_genarat){
            score-=1;
            document.querySelector(".score").textContent=score
            document.querySelector(".message").textContent="Too High";
        }else if(guess_number<randome_genarat){
            score-=1;
            document.querySelector(".score").textContent=score
            document.querySelector(".message").textContent="Too Low";
        }else if(!guess_number){
            score-=1;
            document.querySelector(".score").textContent=score
            document.querySelector(".message").textContent="Please input valid value";
        }else{
            score-=1;
            document.querySelector(".score").textContent=score
            document.querySelector(".message").textContent="You are Mad"
        }
    }else{
        document.querySelector(".message").textContent="You are loose Try again"
    }

})

document.querySelector(".again").addEventListener("click",function(){
    let randome_genarat=Math.trunc(Math.random()*20)+1;
    let score=20;
    document.querySelector(".randome_genarat").textContent="?"
    document.querySelector(".message").textContent="Start Guessing Number......"
    document.querySelector(".score").textContent=score;
    document.querySelector(".guess_number").value='';
    document.querySelector("body").style.backgroundColor="#222";
})