let player1 = document.querySelector(".player1");
let player2 = document.querySelector(".player2");
let btns = document.querySelectorAll("button");

let utter = new SpeechSynthesisUtterance("WELCOME TO JOHNNITTECH TIC-TAC-TOE GAME");
const voices = speechSynthesis.getVoices()[0];
utter.voice = voices;
utter.rate = 0.9;
utter.pitch= 2;
speechSynthesis.speak(utter);
// document.querySelector(".container").style.display='none';
// setTimeout(()=>{
//     document.querySelector(".container").style.display='flex';
// }, 5000);

setTimeout(()=>{
    let utter = new SpeechSynthesisUtterance("Player X starts the game");
speechSynthesis.speak(utter);
}, 2000);

/*button onclick*/
function choose(e){
   
    e.disabled = "true";
    if(document.querySelector(".player1").classList.contains("active")){
        document.querySelector(".player1").classList.toggle("active");
        document.querySelector(".player2").classList.add("active");
        e.style.color = 'blue';
        e.innerHTML = "X";
        let utter = new SpeechSynthesisUtterance("Player O's turn");
        if(checkwinner == true){
            alert('cools');
            speechSynthesis.cancel();
        }
        else{
            setTimeout(()=>{
                speechSynthesis.speak(utter);
            },5);
            
        }
       }
       else{
        
        document.querySelector(".player2").classList.remove("active");
        document.querySelector(".player1").classList.toggle("active");
        e.style.color = 'maroon';
        e.innerHTML = "O";
        let utter = new SpeechSynthesisUtterance("Player X's turn");
        if(checkwinner()){
            alert('cool');
            speechSynthesis.cancel();
        }
        else{
            setTimeout(()=>{
                speechSynthesis.speak(utter);
            },5);
        }
       }
      
checkwinner();
   
}
function checkwinner(){
    let id1 = document.getElementById("1").innerHTML;
    let id2 = document.getElementById("2").innerHTML;
    let id3 = document.getElementById("3").innerHTML;
    let id4 = document.getElementById("4").innerHTML;
    let id5 = document.getElementById("5").innerHTML;
    let id6 = document.getElementById("6").innerHTML;
    let id7 = document.getElementById("7").innerHTML;
    let id8 = document.getElementById("8").innerHTML;
    let id9 = document.getElementById("9").innerHTML;
    if(id1 == "X" && id2 == "X" && id3 == "X" || id4 == "X" && id5 == "X" && id6 == "X" || id2 == "X" && id5 == "X" && id8 == "X" || id7 == "X" && id8 == "X" && id9 == "X" || id1 == "X" && id4 == "X" && id7 == "X" || id3 == "X" && id6 == "X" && id9 == "X" || id1 == "X" && id5 == "X" && id9 == "X" || id3 == "X" && id5 == "X" && id7 == "X"){
        document.querySelector(".pop").style.display='flex';
        document.querySelector(".win").innerHTML = 'Player X WINS!!';
    let utter = new SpeechSynthesisUtterance("Horay!! Player X wins");
   setTimeout(()=>{
    speechSynthesis.getVoices();
    speechSynthesis.speak(utter);
   }, 20); 


    }
    else if(id1 != "" && id2 != "" && id3 != "" && id4 != "" && id5 != "" && id6 != "" && id7 != "" && id8 != "" && id9 != ""){
        document.querySelector(".pop").style.display='flex';
        document.querySelector(".win").innerHTML = 'IT\'s A TIE!!';
        let utter = new SpeechSynthesisUtterance("Ooh NO!! It's a TIE!");
        setTimeout(()=>{
            speechSynthesis.getVoices();
            speechSynthesis.speak(utter);
           }, 20); 
    }
    else if(id1 == "O" && id2 == "O" && id3 == "O" || id4 == "O" && id5 == "O" && id6 == "O"  || id2 == "O" && id5 == "O" && id8 == "O"  || id7 == "O" && id8 == "O" && id9 == "O" || id1 == "O" && id4 == "O" && id7 == "O" || id3 == "O" && id6 == "O" && id9 == "O" || id1 == "O" && id5 == "O" && id9 == "O" || id3 == "O" && id5 == "O" && id7 == "O"){
        document.querySelector(".pop").style.display='flex';
        document.querySelector(".win").innerHTML = 'Player O WINS!!';
        let utter = new SpeechSynthesisUtterance("Horay!! Player O wins");
        setTimeout(()=>{
            speechSynthesis.getVoices();
            speechSynthesis.speak(utter);
           }, 20);
        }
}

//remach
function rematch(){
    document.querySelector(".pop").style.display='none';
    location.reload();
}

//quit
function quit(){
    document.querySelector(".pop").style.display='none';
    window.close();
}